import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import { openCookiePreferences } from "@/lib/cookieConsent";

const H3 = "text-display text-xl font-semibold text-foreground mb-4";
const P = "text-sm text-foreground/80 leading-relaxed";
const UL = "list-disc list-inside text-sm text-foreground/80 leading-relaxed mb-8 space-y-1";
const TH = "text-left font-medium text-foreground p-3 border-b border-border";
const TD = "align-top p-3 border-b border-border text-foreground/80";

const COOKIES = [
  {
    name: "cookie_consent",
    provider: "nicolaprebenna.it",
    type: "Tecnico (localStorage)",
    purpose: "Memorizza la scelta espressa nel banner cookie.",
    duration: "Fino alla cancellazione dei dati del browser",
  },
  {
    name: "Cookie WordPress dei commenti",
    provider: "nicolaprebenna.it",
    type: "Tecnico",
    purpose: "Eventuali cookie di sessione impostati dal sistema dei commenti, solo all'invio di un commento.",
    duration: "Sessione",
  },
  {
    name: "YouTube (youtube-nocookie.com)",
    provider: "Google Ireland Ltd.",
    type: "Terze parti",
    purpose: "Riproduzione video in modalità privacy avanzata: nessun cookie di profilazione finché non si avvia il video; durante la riproduzione YouTube può memorizzare dati tecnici nel browser.",
    duration: "Secondo la policy di Google",
  },
  {
    name: "Facebook (es. datr, fr, sb)",
    provider: "Meta Platforms Ireland Ltd.",
    type: "Terze parti — solo con consenso",
    purpose: "Riproduzione dei video ospitati su Facebook. Il player viene caricato solo dopo aver cliccato \"Accetta\".",
    duration: "Fino a 2 anni, secondo la policy di Meta",
  },
];

const CookiePolicy = () => (
  <Layout>
    <SectionBlock title="Cookie Policy" subtitle="Informativa sull'uso dei cookie e tecnologie simili">
      <div className="max-w-3xl mx-auto prose-editorial">
        <p className={`${P} mb-8 italic`}>Ultimo aggiornamento: 7 ottobre 2026</p>

        <h3 className={H3}>1. Cosa sono i cookie</h3>
        <p className={`${P} mb-8`}>
          I cookie sono piccoli file di testo che i siti visitati salvano nel browser dell'utente, per essere riletti alle visite
          successive. Tecnologie simili (come il localStorage) svolgono la stessa funzione. Questa pagina descrive quali sono usati
          su nicolaprebenna.it, ai sensi dell'art. 122 del Codice Privacy e delle Linee guida del Garante del 10 giugno 2021.
        </p>

        <h3 className={H3}>2. Cookie utilizzati da questo sito</h3>
        <p className={`${P} mb-4`}>Il sito utilizza esclusivamente:</p>
        <ul className={UL}>
          <li><strong>Cookie tecnici</strong>, necessari al funzionamento, che non richiedono consenso.</li>
          <li><strong>Cookie di terze parti</strong> legati ai video incorporati, attivati solo nei casi indicati sotto.</li>
        </ul>
        <p className={`${P} mb-8`}>
          Il sito <strong>non</strong> utilizza cookie analitici, di profilazione o pubblicitari.
        </p>

        <div className="overflow-x-auto mb-8 rounded-sm border border-border">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-secondary">
              <tr>
                <th className={TH}>Nome</th>
                <th className={TH}>Fornitore</th>
                <th className={TH}>Tipo</th>
                <th className={TH}>Finalità</th>
                <th className={TH}>Durata</th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.name}>
                  <td className={`${TD} font-medium text-foreground`}>{c.name}</td>
                  <td className={TD}>{c.provider}</td>
                  <td className={TD}>{c.type}</td>
                  <td className={TD}>{c.purpose}</td>
                  <td className={TD}>{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={H3}>3. Servizi esterni senza cookie</h3>
        <p className={`${P} mb-8`}>
          I caratteri tipografici sono forniti da Google Fonts: il browser contatta i server di Google, che ricevono l'indirizzo IP
          ma non installano cookie. I pulsanti social, WhatsApp e di condivisione sono semplici link: nessun dato viene inviato
          a terzi finché l'utente non li clicca.
        </p>

        <h3 className={H3}>4. Gestione del consenso</h3>
        <p className={`${P} mb-4`}>
          Alla prima visita un banner permette di accettare o rifiutare i cookie di terze parti. Chiudere il banner o continuare la
          navigazione non equivale a dare il consenso. La scelta può essere modificata in qualsiasi momento:
        </p>
        <button
          onClick={openCookiePreferences}
          className="mb-8 px-5 py-2 bg-gold text-[#0F172A] text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-gold/90 transition-colors"
        >
          Modifica preferenze cookie
        </button>
        <p className={`${P} mb-4`}>È possibile inoltre bloccare o cancellare i cookie dalle impostazioni del browser:</p>
        <ul className={UL}>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Microsoft Edge</a></li>
        </ul>

        <h3 className={H3}>5. Titolare e diritti</h3>
        <p className={P}>
          Titolare del trattamento è Nicola Prebenna. Per i dati trattati e i diritti dell'utente consulta la{" "}
          <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </SectionBlock>
  </Layout>
);

export default CookiePolicy;
