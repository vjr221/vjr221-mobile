import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { Icon } from '../../components/icons/Icon';
import { GeoDetailCard } from './GeoDetailCard';
import { GeoListRow } from './GeoListRow';
import { useI18n } from '../../i18n/I18nProvider';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import {
  getCommune,
  getCommunes,
  getDepartment,
  getDepartments,
  getRegion,
  getRegions,
  getVillage,
  getVillages,
} from '../../services/geoRepository';
import { getContentDetail, getLieuContent } from '../../services/contentRepository';
import type { Commune, Department, Region, Village } from '../../types/geo';
import type { ContentItem } from '../../types/content';

export type GeoView =
  | { kind: 'regions' }
  | { kind: 'region'; id: number }
  | { kind: 'department'; id: number }
  | { kind: 'commune'; id: number }
  | { kind: 'village'; id: number };

type LoadState = 'loading' | 'ready' | 'error';

/**
 * Explorateur géographique : Sénégal → Région → Département → Commune → Village.
 *
 * Navigation locale par pile (l'application n'utilise pas de librairie de routing) ;
 * recherche/filtre par nom à chaque niveau ; états loading/error/empty/offline explicites ;
 * aucune donnée n'est jamais fabriquée si l'API ne la fournit pas.
 */
export function GeoExplorer({ onExit, onOpenContent, initialView }: { onExit: () => void; onOpenContent: (item: ContentItem) => void; initialView?: GeoView }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [stack, setStack] = useState<GeoView[]>(initialView ? [{ kind: 'regions' }, initialView] : [{ kind: 'regions' }]);
  const top = stack[stack.length - 1];

  const push = (view: GeoView) => setStack((current) => [...current, view]);
  const back = () => (stack.length > 1 ? setStack((current) => current.slice(0, -1)) : onExit());

  const Screen = {
    regions: <RegionsListScreen onOpen={(id) => push({ kind: 'region', id })} />,
    region: top.kind === 'region' ? <RegionScreen id={top.id} onOpenDepartment={(id) => push({ kind: 'department', id })} onOpenContent={onOpenContent} /> : null,
    department: top.kind === 'department' ? <DepartmentScreen id={top.id} onOpenCommune={(id) => push({ kind: 'commune', id })} onOpenContent={onOpenContent} /> : null,
    commune: top.kind === 'commune' ? <CommuneScreen id={top.id} onOpenVillage={(id) => push({ kind: 'village', id })} onOpenContent={onOpenContent} /> : null,
    village: top.kind === 'village' ? <VillageScreen id={top.id} /> : null,
  }[top.kind];

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Pressable accessibilityRole="button" onPress={back} style={styles.backRow}>
        <Icon name="chevronLeft" size={16} color={colors.terreStrong} />
        <Text style={styles.backText}>Retour</Text>
      </Pressable>
      {Screen}
    </ScrollView>
  );
}

// ---------------------------------------------------------------------------
// Régions
// ---------------------------------------------------------------------------

function RegionsListScreen({ onOpen }: { onOpen: (id: number) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const online = useOnlineStatus();
  const [term, setTerm] = useState('');
  const [items, setItems] = useState<Region[]>([]);
  const [state, setState] = useState<LoadState>('loading');
  const [cached, setCached] = useState(false);

  const load = useCallback((q: string) => {
    setState('loading');
    getRegions({ q: q || undefined })
      .then((result) => { setItems(result.items); setCached(result.fromCache); setState('ready'); })
      .catch(() => setState('error'));
  }, []);

  useEffect(() => { const timer = setTimeout(() => load(term), term ? 350 : 0); return () => clearTimeout(timer); }, [term, load]);

  return (
    <View>
      <Text style={styles.title}>{t('regions')}</Text>
      <Text style={styles.intro}>{t('exploreRegionsIntro')}</Text>
      {(!online || cached) ? <OfflineBanner /> : null}
      <SearchField value={term} onChangeText={setTerm} placeholder={t('geoSearchPlaceholder')} />
      {state === 'loading' ? <LoadingState /> : null}
      {state === 'error' ? <ErrorState onRetry={() => load(term)} /> : null}
      {state === 'ready' && !items.length ? <EmptyState message={term ? t('noGeoResults') : t('noChildren')} /> : null}
      {items.map((region) => (
        <GeoListRow key={region.id} title={region.title} subtitle={region.infos.chefLieu} onPress={() => onOpen(region.id)} />
      ))}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Détail région → liste départements
// ---------------------------------------------------------------------------

function RegionScreen({ id, onOpenDepartment, onOpenContent }: { id: number; onOpenDepartment: (id: number) => void; onOpenContent: (item: ContentItem) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [region, setRegion] = useState<Region | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [detailState, setDetailState] = useState<LoadState>('loading');

  const loadRegion = useCallback(() => {
    setDetailState('loading');
    getRegion(id).then((detail) => { setRegion(detail.entity); setContent(detail.content); setDetailState('ready'); }).catch(() => setDetailState('error'));
  }, [id]);
  useEffect(() => { const timer = setTimeout(loadRegion, 0); return () => clearTimeout(timer); }, [loadRegion]);

  const [term, setTerm] = useState('');
  const [items, setItems] = useState<Department[]>([]);
  const [listState, setListState] = useState<LoadState>('loading');

  const loadDepartments = useCallback((q: string) => {
    setListState('loading');
    getDepartments({ regionId: id, q: q || undefined }).then((result) => { setItems(result.items); setListState('ready'); }).catch(() => setListState('error'));
  }, [id]);

  useEffect(() => { const timer = setTimeout(() => loadDepartments(term), term ? 350 : 0); return () => clearTimeout(timer); }, [term, loadDepartments]);

  if (detailState === 'loading') return <LoadingState />;
  if (detailState === 'error' || !region) return <ErrorState onRetry={loadRegion} />;

  return (
    <View>
      <GeoDetailCard title={region.title} excerpt={region.excerpt} content={content} image={region.image} infos={region.infos} breadcrumb={t('region')} />
      <Text style={styles.sectionTitle}>{t('departments')}</Text>
      <SearchField value={term} onChangeText={setTerm} placeholder={t('geoSearchPlaceholder')} />
      {listState === 'loading' ? <LoadingState /> : null}
      {listState === 'error' ? <ErrorState onRetry={() => loadDepartments(term)} /> : null}
      {listState === 'ready' && !items.length ? <EmptyState message={term ? t('noGeoResults') : t('noChildren')} /> : null}
      {items.map((department) => (
        <GeoListRow key={department.id} title={department.title} subtitle={refLabel(department.arrondissement)} onPress={() => onOpenDepartment(department.id)} />
      ))}
      <RelatedContent lieuId={id} onOpenContent={onOpenContent} />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Détail département → liste communes
// ---------------------------------------------------------------------------

function DepartmentScreen({ id, onOpenCommune, onOpenContent }: { id: number; onOpenCommune: (id: number) => void; onOpenContent: (item: ContentItem) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [department, setDepartment] = useState<Department | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [detailState, setDetailState] = useState<LoadState>('loading');

  const loadDepartment = useCallback(() => {
    setDetailState('loading');
    getDepartment(id).then((detail) => { setDepartment(detail.entity); setContent(detail.content); setDetailState('ready'); }).catch(() => setDetailState('error'));
  }, [id]);
  useEffect(() => { const timer = setTimeout(loadDepartment, 0); return () => clearTimeout(timer); }, [loadDepartment]);

  const [term, setTerm] = useState('');
  const [items, setItems] = useState<Commune[]>([]);
  const [listState, setListState] = useState<LoadState>('loading');

  const loadCommunes = useCallback((q: string) => {
    setListState('loading');
    getCommunes({ departmentId: id, q: q || undefined }).then((result) => { setItems(result.items); setListState('ready'); }).catch(() => setListState('error'));
  }, [id]);

  useEffect(() => { const timer = setTimeout(() => loadCommunes(term), term ? 350 : 0); return () => clearTimeout(timer); }, [term, loadCommunes]);

  if (detailState === 'loading') return <LoadingState />;
  if (detailState === 'error' || !department) return <ErrorState onRetry={loadDepartment} />;

  return (
    <View>
      <GeoDetailCard title={department.title} excerpt={department.excerpt} content={content} image={department.image} infos={department.infos} breadcrumb={refLabel(department.region?.name) ?? t('department')} />
      <Text style={styles.sectionTitle}>{t('communes')}</Text>
      <SearchField value={term} onChangeText={setTerm} placeholder={t('geoSearchPlaceholder')} />
      {listState === 'loading' ? <LoadingState /> : null}
      {listState === 'error' ? <ErrorState onRetry={() => loadCommunes(term)} /> : null}
      {listState === 'ready' && !items.length ? <EmptyState message={term ? t('noGeoResults') : t('noChildren')} /> : null}
      {items.map((commune) => (
        <GeoListRow key={commune.id} title={commune.title} subtitle={refLabel(commune.arrondissement)} onPress={() => onOpenCommune(commune.id)} />
      ))}
      <RelatedContent lieuId={id} onOpenContent={onOpenContent} />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Détail commune → liste villages/quartiers
// ---------------------------------------------------------------------------

function CommuneScreen({ id, onOpenVillage, onOpenContent }: { id: number; onOpenVillage: (id: number) => void; onOpenContent: (item: ContentItem) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [commune, setCommune] = useState<Commune | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [detailState, setDetailState] = useState<LoadState>('loading');

  const loadCommune = useCallback(() => {
    setDetailState('loading');
    getCommune(id).then((detail) => { setCommune(detail.entity); setContent(detail.content); setDetailState('ready'); }).catch(() => setDetailState('error'));
  }, [id]);
  useEffect(() => { const timer = setTimeout(loadCommune, 0); return () => clearTimeout(timer); }, [loadCommune]);

  const [term, setTerm] = useState('');
  const [items, setItems] = useState<Village[]>([]);
  const [listState, setListState] = useState<LoadState>('loading');

  const loadVillages = useCallback((q: string) => {
    setListState('loading');
    getVillages({ communeId: id, q: q || undefined }).then((result) => { setItems(result.items); setListState('ready'); }).catch(() => setListState('error'));
  }, [id]);

  useEffect(() => { const timer = setTimeout(() => loadVillages(term), term ? 350 : 0); return () => clearTimeout(timer); }, [term, loadVillages]);

  if (detailState === 'loading') return <LoadingState />;
  if (detailState === 'error' || !commune) return <ErrorState onRetry={loadCommune} />;

  return (
    <View>
      <GeoDetailCard title={commune.title} excerpt={commune.excerpt} content={content} image={commune.image} infos={commune.infos} breadcrumb={refLabel(commune.departement?.name) ?? t('commune')} />
      <Text style={styles.sectionTitle}>{t('villages')}</Text>
      <SearchField value={term} onChangeText={setTerm} placeholder={t('geoSearchPlaceholder')} />
      {listState === 'loading' ? <LoadingState /> : null}
      {listState === 'error' ? <ErrorState onRetry={() => loadVillages(term)} /> : null}
      {listState === 'ready' && !items.length ? <EmptyState message={term ? t('noGeoResults') : t('noChildren')} /> : null}
      {items.map((village) => (
        <GeoListRow key={village.id} title={village.title} subtitle={village.excerpt} onPress={() => onOpenVillage(village.id)} />
      ))}
      <RelatedContent lieuId={id} onOpenContent={onOpenContent} />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Détail village (feuille de l'arbre)
// ---------------------------------------------------------------------------

function VillageScreen({ id }: { id: number }) {
  const { t } = useI18n();
  const [village, setVillage] = useState<Village | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [state, setState] = useState<LoadState>('loading');

  const loadVillage = useCallback(() => {
    setState('loading');
    getVillage(id).then((detail) => { setVillage(detail.entity); setContent(detail.content); setState('ready'); }).catch(() => setState('error'));
  }, [id]);
  useEffect(() => { const timer = setTimeout(loadVillage, 0); return () => clearTimeout(timer); }, [loadVillage]);

  if (state === 'loading') return <LoadingState />;
  if (state === 'error' || !village) return <ErrorState onRetry={loadVillage} />;

  // Pas de RelatedContent ici : le champ ACF "lieu associé" des contenus
  // encyclopédiques ne peut cibler que région/département/commune, jamais un
  // village -- cette section serait donc systématiquement (et durablement)
  // vide. On évite l'appel réseau plutôt que d'afficher une section fantôme.
  return <GeoDetailCard title={village.title} excerpt={village.excerpt} content={content} image={village.image} infos={village.infos} breadcrumb={refLabel(village.commune?.name) ?? t('village')} />;
}

// ---------------------------------------------------------------------------
// Aides
// ---------------------------------------------------------------------------

function refLabel(value: string | null | undefined): string | null {
  return value && value.trim() ? value : null;
}

function RelatedContent({ lieuId, onOpenContent }: { lieuId: number; onOpenContent: (item: ContentItem) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [items, setItems] = useState<ContentItem[]>([]);
  const [state, setState] = useState<'loading' | 'ready'>('loading');

  useEffect(() => {
    let active = true;
    getLieuContent(lieuId).then((result) => { if (active) { setItems(result.items); setState('ready'); } }).catch(() => { if (active) setState('ready'); });
    return () => { active = false; };
  }, [lieuId]);

  // La liste "/lieu/{id}/contenus" ne renvoie qu'un extrait (payload léger) ;
  // on récupère la fiche complète (contenu, embed) avant de l'ouvrir plutôt
  // que d'afficher un article tronqué. Si ça échoue, on ouvre quand même
  // la version légère plutôt que de bloquer l'utilisateur.
  const openFull = (item: ContentItem) => {
    getContentDetail(item.id).then(onOpenContent).catch(() => onOpenContent(item));
  };

  if (state === 'loading') return null; // discret : pas de spinner bloquant pour une section secondaire
  if (!items.length) return null; // aucun contenu associé -> section simplement absente, rien d'inventé

  return (
    <View style={styles.relatedSection}>
      <Text style={styles.sectionTitle}>{t('relatedContent')}</Text>
      {items.map((item) => (
        <ContentCard key={`${item.type}-${item.id}`} item={item} onPress={openFull} />
      ))}
    </View>
  );
}

function SearchField({ value, onChangeText, placeholder }: { value: string; onChangeText: (value: string) => void; placeholder: string }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.inputWrap}>
      <Icon name="search" size={16} color={colors.inkSoft} />
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={colors.inkSoft} style={styles.input} autoCapitalize="none" />
    </View>
  );
}

function OfflineBanner() {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.offline}>
      <Text style={styles.offlineText}>{t('offline')}</Text>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    content: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg },
    backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: spacing.sm, alignSelf: 'flex-start' },
    backText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    title: { color: colors.ink, fontSize: type.display - 8, fontFamily: fonts.displayBold },
    intro: { color: colors.inkSoft, marginTop: 4, marginBottom: spacing.md, fontFamily: fonts.body, fontSize: type.body, lineHeight: 20 },
    sectionTitle: { color: colors.ink, fontFamily: fonts.displaySemiBold, fontSize: type.h2, marginTop: spacing.sm, marginBottom: spacing.sm },
    inputWrap: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.surface, borderRadius: radii.pill, height: 46, paddingHorizontal: spacing.md, marginBottom: spacing.md },
    input: { flex: 1, color: colors.ink, fontFamily: fonts.body, fontSize: 14 },
    offline: { backgroundColor: colors.surfaceSoft, borderRadius: radii.sm, padding: spacing.sm, marginBottom: spacing.sm },
    relatedSection: { marginTop: spacing.lg },
    offlineText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 12 },
  });
}
