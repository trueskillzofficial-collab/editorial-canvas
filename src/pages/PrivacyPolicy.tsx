import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import { getSiteSettings } from "@/lib/data";

const H3 = "text-display text-xl font-semibold text-foreground mb-4";
const P = "text-sm text-foreground/80 leading-relaxed";
const UL = "list-disc list-inside text-sm text-foreground/80 leading-relaxed mb-8 space-y-1";

const PrivacyPolicy = () => {
  const { contactEmail } = getSiteSettings();
  const email = (
    <a href={`mailto:${contactEmail}`} className="text-gold hover:underline">
      {contactEmail}
    </a>
  );

  return (
    <Layout>
      <SectionBlock title="Informativa Privacy" subtitle="Ai sensi degli artt. 13-14 del Regolamento (UE) 2016/679 (GDPR)">
        <div className="max-w-3xl mx-auto prose-editorial">
          <p className={`${P} mb-8 italic`}>Ultimo aggiornamento: 7 ottobre 2026</p>

          <h3 className={H3}>1. Titolare del Trattamento</h3>
          <p className={`${P} mb-8`}>
            Il Titolare del trattamento è Nicola Prebenna, Ariano Irpino (AV), Italia, contattabile all'indirizzo email {email}.
          </p>

          <h3 className={H3}>2. Dati Trattati</h3>
          <p className={`${P} mb-4`}><strong>Dati forniti volontariamente dall'utente</strong></p>
          <ul className={UL}>
            <li>Modulo di contatto: nome, indirizzo email, oggetto e contenuto del messaggio.</li>
            <li>Commenti al blog: nome, indirizzo email (non pubblicato) e testo del commento.</li>
            <li>Email inviate direttamente agli indirizzi indicati sul sito: i dati contenuti nel messaggio.</li>
          </ul>
          <p className={`${P} mb-4`}><strong>Dati di navigazione</strong></p>
          <p className={`${P} mb-8`}>
            I sistemi informatici che fanno funzionare il sito acquisiscono, nel normale esercizio, alcuni dati la cui trasmissione
            è implicita nell'uso dei protocolli Internet (indirizzo IP, data e ora della richiesta, pagina visitata, tipo di browser).
            Questi dati sono usati solo per garantire il corretto funzionamento e la sicurezza del sito. In caso di invio di un
            commento, WordPress registra anche l'indirizzo IP e il browser utilizzato, a fini antispam.
          </p>
          <p className={`${P} mb-8`}>Non vengono richiesti dati appartenenti a categorie particolari (art. 9 GDPR).</p>

          <h3 className={H3}>3. Finalità e Base Giuridica</h3>
          <ul className={UL}>
            <li>Rispondere alle richieste inviate tramite modulo o email — base giuridica: consenso dell'utente (art. 6.1.a) e riscontro a sue richieste (art. 6.1.b).</li>
            <li>Pubblicare i commenti al blog, previa moderazione — base giuridica: consenso dell'utente (art. 6.1.a).</li>
            <li>Garantire funzionamento e sicurezza del sito e prevenire abusi — base giuridica: legittimo interesse del Titolare (art. 6.1.f).</li>
          </ul>
          <p className={`${P} mb-8`}>I dati non sono utilizzati per finalità di marketing né di profilazione.</p>

          <h3 className={H3}>4. Natura del Conferimento</h3>
          <p className={`${P} mb-8`}>
            Il conferimento dei dati nei moduli è facoltativo, ma senza di essi non è possibile rispondere alla richiesta o pubblicare
            il commento. Il consenso può essere revocato in ogni momento, senza pregiudicare la liceità del trattamento già effettuato.
          </p>

          <h3 className={H3}>5. Modalità di Trattamento</h3>
          <p className={`${P} mb-8`}>
            Il trattamento avviene con strumenti informatici e telematici, adottando misure di sicurezza adeguate a prevenire accessi
            non autorizzati, divulgazione, modifica o distruzione dei dati. Non sono effettuati processi decisionali automatizzati.
          </p>

          <h3 className={H3}>6. Conservazione dei Dati</h3>
          <ul className={UL}>
            <li>Richieste di contatto: per il tempo necessario a gestire la richiesta e comunque non oltre 24 mesi dall'ultimo contatto.</li>
            <li>Commenti: finché restano pubblicati o fino a richiesta di cancellazione.</li>
            <li>Dati di navigazione: per il periodo previsto dal fornitore di hosting per i log tecnici, salvo necessità di accertare illeciti.</li>
          </ul>

          <h3 className={H3}>7. Destinatari e Servizi di Terze Parti</h3>
          <p className={`${P} mb-4`}>
            I dati non sono ceduti né diffusi. Possono essere trattati, in qualità di responsabili del trattamento, dai fornitori tecnici
            necessari alla gestione del sito (hosting, posta elettronica). Il sito utilizza inoltre i seguenti servizi esterni:
          </p>
          <ul className={UL}>
            <li>
              <strong>Google Fonts</strong> (Google Ireland Ltd.) per i caratteri tipografici: il browser contatta i server di Google,
              che ricevono l'indirizzo IP. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Privacy Policy di Google</a>.
            </li>
            <li>
              <strong>YouTube</strong> (Google Ireland Ltd.): le anteprime e i video sono caricati da YouTube in modalità privacy avanzata
              (youtube-nocookie.com); il player viene avviato solo su richiesta dell'utente.
            </li>
            <li>
              <strong>Facebook</strong> (Meta Platforms Ireland Ltd.): il player dei video Facebook viene caricato solo dopo il consenso
              ai cookie di terze parti. <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Privacy Policy di Meta</a>.
            </li>
            <li>
              <strong>WhatsApp, Facebook, YouTube (link esterni)</strong>: i pulsanti social e di condivisione sono semplici link e non
              trasmettono dati finché l'utente non li clicca.
            </li>
          </ul>

          <h3 className={H3}>8. Trasferimento Extra UE</h3>
          <p className={`${P} mb-8`}>
            Alcuni dei fornitori indicati appartengono a gruppi con sede negli Stati Uniti. Gli eventuali trasferimenti avvengono sulla
            base della decisione di adeguatezza UE-USA (EU-U.S. Data Privacy Framework) o delle Clausole Contrattuali Standard
            approvate dalla Commissione Europea.
          </p>

          <h3 className={H3}>9. Diritti dell'Interessato</h3>
          <p className={`${P} mb-4`}>Ai sensi degli artt. 15-22 del GDPR, l'utente può in ogni momento:</p>
          <ul className={`${UL} !mb-4`}>
            <li>accedere ai propri dati e ottenerne copia;</li>
            <li>chiederne la rettifica o la cancellazione;</li>
            <li>chiedere la limitazione del trattamento od opporsi ad esso;</li>
            <li>ricevere i dati in formato strutturato (portabilità);</li>
            <li>revocare il consenso prestato.</li>
          </ul>
          <p className={`${P} mb-4`}>Le richieste vanno inviate a {email}.</p>
          <p className={`${P} mb-8`}>
            L'utente ha inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
            (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.garanteprivacy.it</a>).
          </p>

          <h3 className={H3}>10. Cookie</h3>
          <p className={`${P} mb-8`}>
            Per le informazioni su cookie e tecnologie simili consulta la{" "}
            <Link to="/cookie-policy" className="text-gold hover:underline">Cookie Policy</Link>.
          </p>

          <h3 className={H3}>11. Modifiche alla Presente Informativa</h3>
          <p className={P}>
            La presente informativa può essere aggiornata nel tempo. La data dell'ultima revisione è indicata in cima alla pagina.
          </p>
        </div>
      </SectionBlock>
    </Layout>
  );
};

export default PrivacyPolicy;
