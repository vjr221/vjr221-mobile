import {
  isValidNotificationPayload,
  resolveNotificationDestination,
  UnavailableNotificationProvider,
} from './notificationService';

describe('isValidNotificationPayload', () => {
  it('accepte un payload valide', () => {
    expect(isValidNotificationPayload({ id: 'n1', category: 'actualite', title: 'Titre', body: 'Corps' })).toBe(true);
  });
  it('rejette un payload sans titre', () => {
    expect(isValidNotificationPayload({ id: 'n1', category: 'actualite', title: '', body: 'Corps' })).toBe(false);
  });
  it('rejette une catégorie inconnue', () => {
    expect(isValidNotificationPayload({ id: 'n1', category: 'inexistante', title: 'Titre', body: 'Corps' })).toBe(false);
  });
  it('rejette une valeur non-objet', () => {
    expect(isValidNotificationPayload(null)).toBe(false);
    expect(isValidNotificationPayload('texte')).toBe(false);
  });
});

describe('resolveNotificationDestination', () => {
  it('résout un deep link VJR221 valide vers un contenu', () => {
    const destination = resolveNotificationDestination({ id: 'n1', category: 'actualite', title: 'T', body: 'B', deepLinkUrl: 'https://vjr221.sn/content/221' });
    expect(destination).toEqual({ kind: 'content', id: 221 });
  });
  it('renvoie null quand la notification n’a pas de deep link', () => {
    expect(resolveNotificationDestination({ id: 'n1', category: 'actualite', title: 'T', body: 'B' })).toBeNull();
  });
  it('renvoie null pour un lien non reconnu (notification "inconnue")', () => {
    const destination = resolveNotificationDestination({ id: 'n1', category: 'actualite', title: 'T', body: 'B', deepLinkUrl: 'https://autre-domaine.com/x' });
    expect(destination).toBeNull();
  });
});

describe('UnavailableNotificationProvider', () => {
  it('ne demande jamais la permission au démarrage et renvoie un état honnête', async () => {
    const provider = new UnavailableNotificationProvider();
    expect(await provider.getPermissionState()).toBe('undetermined');
    expect(await provider.requestPermission()).toBe('undetermined'); // "refusée" par absence de fournisseur, pas de faux "granted"
    expect(await provider.getDeviceToken()).toBeNull();
  });
});
