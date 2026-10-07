export type CookieConsent = "accepted" | "rejected";

const COOKIE_CONSENT_KEY = "cookie_consent";
export const OPEN_COOKIE_PREFERENCES_EVENT = "open-cookie-preferences";
export const COOKIE_CONSENT_CHANGED_EVENT = "cookie-consent-changed";

export const getCookieConsent = (): CookieConsent | null => {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
};

export const setCookieConsent = (value: CookieConsent) => {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    // storage non disponibile: la scelta vale solo per la sessione corrente
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT, { detail: value }));
};

export const openCookiePreferences = () => {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
};
