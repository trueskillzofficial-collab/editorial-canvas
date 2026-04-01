import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";

const PrivacyPolicy = () => (
  <Layout>
    <SectionBlock title="Informativa Privacy" subtitle="Ai sensi del Regolamento (UE) 2016/679 (GDPR)">
      <div className="max-w-3xl mx-auto prose-editorial">
        <h3 className="text-display text-xl font-semibold text-foreground mb-4">1. Titolare del Trattamento</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">
          Il Titolare del trattamento è Nicola Prebenna, contattabile tramite l'indirizzo email presente sul sito.
        </p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">2. Tipologia di Dati Raccolti</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">Il sito raccoglie esclusivamente:</p>
        <ul className="list-disc list-inside text-sm text-foreground/80 leading-relaxed mb-8 space-y-1">
          <li>Nome</li>
          <li>Indirizzo email</li>
          <li>Contenuto del messaggio inviato tramite il form di contatto</li>
        </ul>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">Non vengono raccolti dati sensibili o particolari.</p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">3. Finalità del Trattamento</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">I dati forniti dall'utente vengono utilizzati per:</p>
        <ul className="list-disc list-inside text-sm text-foreground/80 leading-relaxed mb-4 space-y-1">
          <li>Rispondere alle richieste di contatto o informazioni</li>
          <li>Fornire eventuali chiarimenti richiesti dall'utente</li>
        </ul>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">I dati NON saranno utilizzati per finalità di marketing o profilazione.</p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">4. Base Giuridica del Trattamento</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">
          Il trattamento si basa sul consenso esplicito dell'utente, espresso tramite la selezione della checkbox nel form di contatto.
        </p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">5. Modalità di Trattamento</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">
          Il trattamento dei dati avviene mediante strumenti informatici e telematici, con misure di sicurezza adeguate a prevenire accessi non autorizzati, divulgazione, modifica o distruzione non autorizzata dei dati.
        </p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">6. Conservazione dei Dati</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">
          I dati personali saranno conservati esclusivamente per il tempo necessario a gestire e rispondere alla richiesta dell'utente, salvo eventuali obblighi di legge.
        </p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">7. Comunicazione dei Dati</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">I dati non saranno ceduti a terzi né diffusi.</p>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">
          Potranno essere trattati da eventuali fornitori tecnici coinvolti nella gestione del sito (hosting, email), esclusivamente per finalità tecniche.
        </p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">8. Diritti dell'Interessato</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          L'utente può esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 del GDPR, tra cui:
        </p>
        <ul className="list-disc list-inside text-sm text-foreground/80 leading-relaxed mb-4 space-y-1">
          <li>Accesso ai dati</li>
          <li>Rettifica</li>
          <li>Cancellazione</li>
          <li>Limitazione del trattamento</li>
          <li>Opposizione al trattamento</li>
        </ul>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">
          Le richieste possono essere inviate all'indirizzo email indicato sul sito.
        </p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">9. Cookie</h3>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">Il sito utilizza:</p>
        <ul className="list-disc list-inside text-sm text-foreground/80 leading-relaxed mb-4 space-y-1">
          <li>Cookie tecnici necessari al funzionamento</li>
          <li>Cookie analitici anonimizzati</li>
        </ul>
        <p className="text-sm text-foreground/80 leading-relaxed mb-8">Non vengono utilizzati cookie di profilazione o pubblicitari.</p>

        <h3 className="text-display text-xl font-semibold text-foreground mb-4">10. Modifiche alla Presente Informativa</h3>
        <p className="text-sm text-foreground/80 leading-relaxed">
          La presente informativa può essere aggiornata in qualsiasi momento. Si consiglia di consultarla periodicamente.
        </p>
      </div>
    </SectionBlock>
  </Layout>
);

export default PrivacyPolicy;
