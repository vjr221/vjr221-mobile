import { Share } from 'react-native';

/**
 * Service de partage centralisé. Toute fiche (contenu, région, département,
 * commune, village, entrée annuaire) partage la même forme : titre, résumé
 * court, URL canonique VJR 221 — jamais une URL locale ou un lien cassé.
 */
export interface ShareableFiche {
  title: string;
  summary?: string | null;
  url: string;
}

export async function shareFiche(fiche: ShareableFiche): Promise<void> {
  const message = fiche.summary ? `${fiche.title} — ${fiche.summary}\n${fiche.url}` : `${fiche.title}\n${fiche.url}`;
  await Share.share({ message, title: fiche.title, url: fiche.url });
}
