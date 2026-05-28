// Static data layer - will be replaced by WordPress REST API calls
import type { Work, Event, MediaItem, BiographySection, SiteSettings, Poem, Review } from './types';

// Book cover images
import coverColpoDala from '@/assets/covers/colpo_d_ala.png';
import coverDacruma from '@/assets/covers/dacruma.png';
import coverFiaccolaVive from '@/assets/covers/e_la_fiaccola_vive.png';
import coverComePerAcquaCupa from '@/assets/covers/come_per_acqua_cupa.png';
import coverEraIlMaggio from '@/assets/covers/era_il_maggio_odoroso.png';
import coverBarbeVirgulti from '@/assets/covers/barbe_e_virgulti.png';
import coverDitticoArcobaleno from '@/assets/covers/dittico_arcobaleno.png';
import coverFioriDiCampo from '@/assets/covers/fiori_di_campo.png';
import coverGrisagliaSpiragli from '@/assets/covers/grisaglia_e_spiragli.png';
import coverInGurgiteVasto from '@/assets/covers/in_gurgite_vasto.png';
import coverInUnaParte from '@/assets/covers/in_una_parte_piu_e_meno_altrove.png';
import coverInRimeSparse from '@/assets/covers/in_rime_sparse.png';
import coverIncontroConDante from '@/assets/covers/incontro_con_dante.png';
import coverAltraFacciaLuna from '@/assets/covers/l_altra_faccia_della_luna.png';
import coverApprodo from '@/assets/covers/l_approdo.png';
import coverSettecento from '@/assets/covers/il_settecento_e_l_autobiografia.png';
import coverMateraCanto from '@/assets/covers/matera_del_mio_canto.png';
import coverMiPrendoGola from '@/assets/covers/mi_prendo_per_la_gola_e_dimagrisco.png';
import coverGrecia from '@/assets/covers/nicola_prebenna_e_la_grecia.png';
import coverParzanese from '@/assets/covers/parzanese.png';
import coverVulneraTemporis from '@/assets/covers/vulnera_temporis.jpg';
import coverFragmina from '@/assets/covers/fragmina.jpg';
import coverNonSoloDiPane from '@/assets/covers/non_solo_di_pane.png';
import coverPerCieliNuovi from '@/assets/covers/per_cieli_nuovi.png';
import coverPerCorrerMigliori from '@/assets/covers/per_correr_migliori.png';
import coverRariNantes from '@/assets/covers/rari_nantes.png';
import coverScuolaOggi from '@/assets/covers/scuola_oggi.png';
import coverSistemiEducativi from '@/assets/covers/sistemi_educativi_a_confronto.jpeg';
import coverTempoCheVa from '@/assets/covers/tempo_che_va.png';
import coverViveAmore from '@/assets/covers/vive_l_amore.png';

import thumbFacebookVideo from '@/assets/bio/nello_studio.jpg';

export const getSiteSettings = (): SiteSettings => ({
  siteName: "Nicola Prebenna",
  tagline: "Poeta · Scrittore · Critico Letterario",
  heroQuote: "Ho dispensato parole al vento, semi lanciati per aria, ho radicato parole nel cuore mio e su fogli di carta bianca, disseminando barlumi di speranza e propositi di nuova umanità.",
  heroQuoteAuthor: 'Da "Il Dono del Poeta"',
  authorName: "Nicola Prebenna",
  authorBio: "Nicola Prebenna nasce nel 1947 ad Ariano Irpino (AV), dove frequenta le scuole elementari e la prima media. Parte per raggiungere Alatri (FR), dove completa la scuola media presso il locale seminario, quale speranzino delle Scuole Pie. Diviene novizio a Roma, presso lo studentato degli Scolopi a Monte Mario. Ritornato ad Ariano, consegue la maturità classica e si laurea all'Università Federico II di Napoli in Lettere Classiche con 110/110. È stato docente e dirigente scolastico in Italia e all'estero. Poeta, scrittore, critico letterario, saggista, giornalista pubblicista.",
  contactEmail: "nicolapreb@gmail.com",
  contactEmail2: "nicpreb@libero.it",
  contactPhone: "349-0581538",
});

export const getBiographySections = (): BiographySection[] => [
  {
    id: 1,
    title: "Infanzia e Formazione",
    period: "1947 – 1964",
    content: "Da famiglia di modeste condizioni, trascorre l'infanzia nel quartiere in cui è nato e cresciuto ad Ariano Irpino, la Via Guardia. Frequenta la scuola elementare del Calvario con buoni voti. Il maestro di quinta elementare ebbe l'intuizione che in lui ci fossero delle qualità e si offrì di prepararlo gratis per gli esami di ammissione alla scuola media. Il desiderio di farsi prete lo porta a studiare presso la casa per speranzini ad Alatri (FR), dove compie tre anni di progressi negli studi e nella pietà, per poi passare allo Studentato degli Scolopi, a Roma. Nella primavera del 1964 la vocazione si affievolisce e fa ritorno al mondo, in famiglia.",
  },
  {
    id: 2,
    title: "Studi Liceali e Universitari",
    period: "1964 – 1970",
    content: "Completa in scioltezza il percorso liceale conseguendo la maturità classica nell'a.s. 1965/66. Si iscrive all'Università Federico II di Napoli alla facoltà di Lettere e Filosofia, dove si laurea nel 1970 in Lettere Classiche con la votazione di 110/110, discutendo la tesi \"L'autobiografia e il Settecento: Goldoni, Gozzi, Alfieri\", relatore il prof. Salvatore Battaglia. Durante gli studi, pur lavorando e dando lezioni private, partecipa attivamente alla vita culturale della città: teatro, giornale studentesco, impegno politico.",
  },
  {
    id: 3,
    title: "Insegnamento in Italia",
    period: "1970 – 1981",
    content: "Inizia la carriera di docente di materie letterarie nella sua città, Ariano Irpino, presso la scuola media \"A. Covotta\" (1970/71) e presso la scuola media \"P.S. Mancini\" (1971/72). Insegna poi presso l'Istituto Magistrale \"Guido Dorso\" (1972-1976) e successivamente al Liceo Scientifico annesso al Liceo Classico \"P.P. Parzanese\" fino al 1981. Consegue l'immissione in ruolo per l'insegnamento di materie letterarie e latino nei licei e istituto magistrale. Partecipa a corsi di aggiornamento sulla Letteratura del Novecento a Messina, con relatori di primissimo ordine.",
  },
  {
    id: 4,
    title: "L'Esperienza Internazionale",
    period: "1981 – 2003",
    content: "Dopo aver vinto due concorsi presso il Ministero degli Affari Esteri, viene nominato presso il Liceo Italiano di Istanbul, dove insegna materie letterarie e latino per cinque anni. Si trasferisce poi in Francia, dove insegna per nove anni presso il Liceo Internazionale di Ferney-Voltaire, nella zona franco-ginevrina. Rivince il concorso per l'estero e viene destinato alla Scuola Italiana di Atene, dove insegna per sette anni, svolgendo anche la funzione di dirigente scolastico negli ultimi due anni. È con l'esperienza ateniese che si accentua e si irrobustisce l'impegno per la poesia e la scrittura in generale.",
  },
  {
    id: 5,
    title: "Formazione Letteraria",
    period: "Dall'adolescenza",
    content: "La vocazione alla scrittura matura e si sviluppa tra l'adolescenza e la prima giovinezza. Per quanto riguarda la poesia, modelli quasi inconsapevoli furono Ungaretti e Quasimodo, prima maniera, quando l'attenzione era centrata sulla brevità dell'intuizione. Per la prosa, l'attenzione era centrata su tematiche legate alla specificità territoriale. Con l'esperienza dell'insegnamento all'estero si consolida l'impegno per la scrittura. Appartengono al periodo ateniese le sillogi Dacruma e In gurgite vasto, pubblicate con Genesi Editrice di Torino, che consentirono di stabilire un rapporto diretto con il prof. Giorgio Barberi Squarotti e con Sandro Gros-Pietro.",
  },
  {
    id: 6,
    title: "Rientro e Attività Attuale",
    period: "2003 – Presente",
    content: "Rientrato in Italia, dopo pochi anni da dirigente scolastico va in pensione, ma rimane nel mondo della scuola come preside della scuola paritaria \"Carlo Cattaneo\" di Avellino e come presidente dell'IRASE provinciale di Avellino, ente di formazione della UIL Scuola. Consolida rapporti umani e culturali con personalità di valore: Giorgio Barberi Squarotti, Sandro Gros-Pietro, Paolo Saggese, Giuseppe Iuliano, Ugo Piscopo, Pasquale Maffeo, Emerico Giachery, Giovanni Chiellino, Davide Puccini, Aniello Montano, Carlo Di Lieto, Giuseppe d'Errico, Virgilio Iandiorio, Armando Saveriano, Paveu Krupka, Giuseppe Manitta, Antonio Filippetti, Domenico Defelice e altri. Giornalista pubblicista, editorialista e responsabile della Redazione culturale della testata giornalistica Web Tgnewstv. È socio onorario di prestigiose Associazioni Culturali Nazionali e Internazionali.",
  },
];

export const getWorks = (): Work[] => [
  // POESIA
  { id: 1, title: "Colpo d'ala", year: "1978", genre: "Poesia", publisher: "C.F.D. Avellino", description: "Prima silloge poetica, in cui la poesia è avvertita come un volo che si lascia dietro la quotidianità per attingere atmosfere superiori di bellezza e consapevolezza di un'umanità migliore.", price: "€ 10,00", image: coverColpoDala },
  { id: 2, title: "Rari Nantes", year: "1988", genre: "Poesia", publisher: "Bastogi Edizioni, FG", description: "Silloge poetica che si concentra sul bisogno di superare la dispersione e ritrovare il piacere della condivisione di impegno civico e comunitario.", price: "€ 8,00", image: coverRariNantes },
  { id: 3, title: "Dacruma", year: "2001", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Silloge riflessiva e profonda, fra ricordo e religiosità. Presentata ad Atene, alla sala stampa estera, per iniziativa dell'Istituto Italiano di Cultura.", price: "€ 7,75", image: coverDacruma },
  { id: 4, title: "In gurgite vasto", year: "2004", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Il titolo virgiliano si collega strettamente a Rari nantes e lo completa, riaffermando l'unità e la continuità di un arduo tragitto umano e poetico. (Emerico Giachery). Una poesia che fa sentire e che si pone il compito meritorio di far pensare. (Davide Puccini)", price: "€ 12,00", image: coverInGurgiteVasto },
  { id: 5, title: "E la fiaccola … vive!", year: "2005", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Ode ispirata alle Olimpiadi di Atene 2004, un'operazione straordinaria che intreccia passato e presente, il mito e la realtà dello sport di oggi.", price: "€ 5,00", image: coverFiaccolaVive },
  { id: 6, title: "Come per acqua cupa", year: "2008", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Le parole che Prebenna adopera per la poesia sono deliberatamente assunte da un ambito di solidità e di efficacia storicamente collaudate, per la sua missione morale e per le sue battaglie di verità. (Ugo Piscopo).\n\nLo stile di Prebenna non ha compiacimenti e concessioni alle mode, all'effimero, si costruisce piuttosto come un ordito di procedimenti assoggettati alla sobrietà e alle misure di rigore e di prudenza, con cui devono fare i conti sia le occasioni e gli episodi soggettivi, sia le vicende che vanno oltre la cronaca. (Ugo Piscopo)", price: "€ 10,00", image: coverComePerAcquaCupa },
  { id: 7, title: "Era il maggio odoroso", year: "2010", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "La forma e il contenuto della poesia di Nicola Prebenna sono un grande omaggio di ripresa e di rinnovamento della tradizione classica della letteratura occidentale, che pone al centro del discorso poetico la visione lirica che il poeta ricostruisce dentro di sé del mondo. (Sandro Gros-Pietro)", price: "€ 12,00", image: coverEraIlMaggio },
  { id: 8, title: "Fragmina", year: "2013", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Quarantatré componimenti poetici organizzati in sezioni ispirate all'arte dei vasai: Terracotta, Maiolica, Limoges, Boemia, Murano. Una metafora della vita in tutte le sue manifestazioni.", price: "€ 10,00", image: coverFragmina },
  { id: 9, title: "Vulnera Temporis", year: "2018", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "La sua è poesia intrisa di spiriti etico-civili e religiosi, che mette sotto accusa lo stato iniquo delle cose attuali e si serve di un dire essenziale, ma dalle punte aguzze, che dice quello che dice, chiamando pane il pane. (Ugo Piscopo)\n\n[...] la straordinaria energia della parola, pur nella inevitabile diversità di situazioni storiche, conferma la sua caratteristica essenziale: quella tendenza alla universalità, che attinge al particolare per librarsi verso dimensioni umanamente valide per ogni tempo. (Francesco D'Episcopo)", price: "€ 15,00 x vol.", image: coverVulneraTemporis },
  { id: 10, title: "In una parte più e meno altrove", year: "2017", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Nicola Prebenna è un uomo di lettere che mette insieme letteratura e storia e non va dimentico che l'unica ricchezza che sopravvive alla storia effimera degli esseri umani è la parola che essi hanno pronunciata e scolpito nella pietra. (Sandro Gros-Pietro)", price: "€ 11,00", image: coverInUnaParte },
  { id: 11, title: "In rime sparse", year: "2020", genre: "Poesia", publisher: "Il Convivio Edizioni, Castiglione di Sicilia", description: "Le poesie sparse di Nicola Prebenna, in verità, sono relativamente tali, perché se da un lato confermano la \"plurivocità\" di occasioni dell'ispirazione, dall'altro però hanno una loro organizzazione interna che mira a sondare la totalità dell'esistenza, sin dal nominare le quattro sezioni del libro come i quattro elementi: terra, acqua, aria, fuoco. (Giuseppe Manitta)", price: "€ 10,00", image: coverInRimeSparse },
  { id: 12, title: "Per correr migliori acque", year: "2020", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Opera analitica originale dall'andamento poematico sul Coronavirus, un'autentica ode civile ed etica di stampo classico. III Premio Poesia Edita al Premio Internazionale ACSI \"Firenze Capitale d'Europa\" XXIII edizione.", price: "€ 8,00", image: coverPerCorrerMigliori },
  { id: 13, title: "Vive l'amore e canto", year: "2022", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Questo tenero \"canzoniere d'amore\" è un dettato poetico di inimitabile purezza, scandito da un'elegante sobrietà di un \"inquieto sentire\". (Carlo Di Lieto)", price: "€ 10,00", image: coverViveAmore },
  { id: 14, title: "Per cieli nuovi e terra nuova", year: "2024", genre: "Poesia", publisher: "Terebinto Edizioni, Avellino", description: "Questa suadente silloge di poesie apre un varco luminoso al grigiore dell'esistenza e un bagliore di luce tenue sull'oscuro Male della Storia umana. (Carlo Di Lieto)\n\nNicola Prebenna è convinto di aver \"seminato\" nelle parole e nei versi delle sue poesie la sua anima e li ha affidati alla memoria di quelli che verranno dopo di lui. (Virgilio Iandiorio)", price: "€ 15,00", image: coverPerCieliNuovi },
  { id: 15, title: "Dittico arcobaleno", year: "2024", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "I versi di Prebenna ci conducono in un percorso che incrocia la passione per la propria terra e lo sguardo allungato su un mondo devastato, senza mai perdere la fiducia in un domani migliore. (Andrea Covotta, Direttore RAI Quirinale)", price: "€ 12,00", image: coverDitticoArcobaleno },
  { id: 16, title: "Fiori di campo", year: "2025", genre: "Poesia", publisher: "Il Convivio Editore, Castiglione di Sicilia", description: "Non esistono fiori più belli di quelli che crescono spontanei nei campi... A loro si richiamano i versi che N.P. inanella in questa raccolta, ridotta per formato e numero di componimenti, ma densa e ricca per temi e contenuti. (Domenico Defelice)", price: "€ 8,00", image: coverFioriDiCampo },
  { id: 17, title: "L'altra faccia della luna", year: "2025", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Senza ombra di dubbio, siamo giunti al punto più mirabile della poesia di Nicola Prebenna, dopo un encomiabile percorso umano e letterario. (Carlo Di Lieto)\n\nVi è nella Poesia di Nicola Prebenna un luminoso contenuto di eticità che illustra il più alto dono di sé stessi che l'umanità compia nel proiettare le aspettative verso un futuro indefinito e continuo, capace di collimare con una definizione di eternità e, quindi, di Assoluto. (Sandro Gros-Pietro)", price: "€ 16,00", image: coverAltraFacciaLuna },
  // NARRATIVA
  { id: 18, title: "L'approdo", year: "1976", genre: "Narrativa", publisher: "C.F.D. Avellino", description: "Prima opera narrativa, legata alla specificità territoriale e all'avventura dalla scuola al lavoro, all'emigrazione, del protagonista.", price: "€ 10,00", image: coverApprodo },
  { id: 19, title: "Tempo che va", year: "1995", genre: "Narrativa", publisher: "L'Autore Libri, Firenze", description: "Silloge di racconti ispirati alla vita della comunità, nel passaggio dalla vita tradizionale ai primi passi verso la modernità.", price: "€ 8,00", image: coverTempoCheVa },
  { id: 20, title: "Barbe e Virgulti", year: "2009", genre: "Narrativa", publisher: "Delta3 Edizioni, Grottaminarda", description: "Silloge di quattordici racconti dal tono colloquiale, cortese e familiare. \"La lettura dei Suoi racconti, così limpidi, acuti, arguti e sapienti, è stata una bella presentazione della primavera.\" (Giorgio Barberi Squarotti)", price: "€ 10,00", image: coverBarbeVirgulti },
  { id: 21, title: "Non di solo pane", year: "2020", genre: "Narrativa (Romanzo)", publisher: "Delta3 Edizioni, Grottaminarda", description: "Il romanzo è un intreccio di autobiografia, di recupero memoriale personale e di contesto, con uno sguardo aperto sui principali valori da salvaguardare e promuovere. Una sorta di testamento valoriale da affidare ai propri cari, ai lettori.", price: "€ 10,00", image: coverNonSoloDiPane },
  { id: 22, title: "Grisaglia e spiragli", year: "2024", genre: "Narrativa", publisher: "Delta3 Edizioni, Grottaminarda", description: "Silloge di racconti ispirati a fatti e personaggi realmente accaduti ed esistiti, che affonda la narrazione nelle diverse debolezze dell'uomo, ma con spiragli aperti alla speranza.", price: "€ 15,00", image: coverGrisagliaSpiragli },
  // CRITICA LETTERARIA
  { id: 23, title: "Nicola Prebenna e la Grecia", year: "2004", genre: "Critica Letteraria", publisher: "Istituto Italiano di Cultura di Atene", description: "Opera che intreccia l'esperienza greca con la riflessione poetica e saggistica.", price: "€ 8,00", image: coverGrecia },
  { id: 24, title: "Pietro Paolo Parzanese: l'intellettuale che si volle poeta popolare", year: "2006", genre: "Critica Letteraria", publisher: "Delta3 Edizioni, Grottaminarda", description: "Carattere perspicuo della ricerca portata a termine da Prebenna nel suo testo critico è, quindi, la valutazione dell'impatto della poesia colta del prete di Ariano Irpino su quella sua produzione che si può definire più propriamente come popolare. (Giuseppe Panella)", price: "€ 10,00", image: coverParzanese },
  { id: 25, title: "Il Settecento e l'Autobiografia", year: "2010", genre: "Critica Letteraria", publisher: "Delta3 Edizioni, Grottaminarda", description: "\"Un picciolo libro tutto fatto di cose proprie\" (G.B. Vico). Le autobiografie valicano il rigido regime dell'impatto storicistico per diventare rievocazione lirica e feconda di un secolo. (Giuseppe Panella)", price: "€ 10,00", image: coverSettecento },
  { id: 26, title: "Matera del mio canto", year: "2021", genre: "Critica Letteraria", publisher: "Delta3 Edizioni, Grottaminarda", description: "Note critiche su autori vicini per consonanza e condivisione di radici, e autori presenti nel panorama culturale italiano dei tempi moderni.", price: "€ 20,00", image: coverMateraCanto },
  { id: 27, title: "Incontro con Dante / Libertà va cercando", year: "2021", genre: "Critica Letteraria", publisher: "Prometheus Edizioni, Milano", description: "Il testo soddisfa due attese fondamentali del lettore: cogliere il messaggio dell'opera con immediatezza, e avvertire il piacere del contatto diretto con il testo. La novità è il desiderio forte di ancorare il ricordo e la celebrazione del Sommo Poeta agli snodi essenziali del viaggio oltremondano.", price: "€ 25,00", image: coverIncontroConDante },
  // SAGGISTICA
  { id: 28, title: "Scuola oggi", year: "1986", genre: "Saggistica", publisher: "Edizioni Bastogi, FG", description: "Saggio sul mondo della scuola e le sfide dell'educazione di alcuni anni fa.", price: "€ 8,00", image: coverScuolaOggi },
  { id: 29, title: "Sistemi educativi a confronto", year: "1997", genre: "Saggistica", publisher: "", description: "Studio comparativo con particolare riferimento al sistema educativo francese.", price: "", image: coverSistemiEducativi },
  { id: 30, title: "Mi prendo per la gola e … dimagrisco", year: "2016", genre: "Saggistica", publisher: "Delta3 Edizioni, Grottaminarda", description: "Saggio scritto insieme al dr. Vittorio Roberti su come dimagrire in salute e preservare la bellezza. Seconda edizione.", price: "€ 15,00", image: coverMiPrendoGola },
];

export const getEvents = (): Event[] => [
  { id: 1, title: "Presentazione \"Era il maggio odoroso\"", date: "2013", description: "Presentazione della raccolta poetica con interventi critici.", type: "presentation" },
  { id: 2, title: "Serata Letteraria a Zungoli", date: "2015", description: "Evento culturale con reading poetico e dibattito sulla poesia contemporanea.", type: "event" },
  { id: 3, title: "Presentazione \"Vulnera Temporis\" – Grottaminarda", date: "2016", description: "Presentazione della raccolta poetica presso Grottaminarda.", type: "presentation" },
  { id: 4, title: "Intervista su Parzanese – TG News", date: "2018", description: "Intervista televisiva sulla figura di Pietro Paolo Parzanese.", type: "event" },
  { id: 5, title: "Intervista Ottochannel", date: "2019", description: "Intervista televisiva sulle opere e il percorso letterario.", type: "event" },
  { id: 6, title: "Intervista su Umberto Eco – Canale 58", date: "2020", description: "Riflessioni sull'opera e il pensiero di Umberto Eco.", type: "event" },
  { id: 7, title: "Premio Internazionale ACSI – Firenze", date: "2020", description: "III Premio Poesia Edita al Premio Internazionale di Poesia e Narrativa ACSI \"Firenze Capitale d'Europa\" XXIII edizione per \"Per correr migliori acque\".", type: "award" },
  { id: 8, title: "Premio Poeti residenti all'estero – Quarrata", date: "2003", description: "Premio per Poeti residenti all'estero, occasione per consolidare il rapporto con la poesia.", type: "award" },
  { id: 9, title: "Presentazione \"Dacruma\" – Atene", date: "2001", description: "Presentazione della silloge ad Atene, presso la sala stampa estera, per iniziativa dell'Istituto Italiano di Cultura, con la partecipazione dell'editore.", type: "presentation" },
  { id: 10, title: "Rappresentazione opere teatrali parzanesiane", date: "", description: "Rappresentazione di due opere teatrali: Le spiagge della luce, e Giulietta e Romeo del poeta arianese Pietro Paolo Parzanese, rappresentata per la prima volta.", type: "event" },
];

export const getMediaItems = (): MediaItem[] => [
  { id: 1, title: "Intervista su Umberto Eco – Canale 58", description: "Riflessioni sull'opera e il pensiero di Umberto Eco.", url: "https://www.youtube.com/watch?v=Lxcu32rkk0o", type: "youtube" },
  { id: 2, title: "Serata Letteraria a Zungoli", description: "Evento culturale con reading e dibattito. Dal min. 8:00 alla fine.", url: "https://www.youtube.com/watch?v=3B1KTEwYgyE", type: "youtube" },
  { id: 3, title: "Intervista su Parzanese – TG News", description: "Intervista sulla figura del poeta P.P. Parzanese.", url: "https://youtu.be/C7a4FVR6-BE", type: "youtube" },
  { id: 4, title: "Intervista Enzo Fasoli – AssaPaPress", description: "Conversazione sull'attività letteraria e culturale.", url: "https://youtu.be/ZaNGo4osBLA", type: "youtube" },
  { id: 5, title: "Intervista Sandro Gros-Pietro – Starbook", description: "Dialogo sulla poesia e la critica letteraria.", url: "https://www.youtube.com/watch?v=VwYMUiPkHk8", type: "youtube" },
  { id: 6, title: "Intervista Terebinto", description: "Conversazione sulla produzione poetica.", url: "https://www.youtube.com/watch?v=Zb5Xt75XGt4", type: "youtube" },
  { id: 7, title: "Ritorna la Rondine – Musica di Daniela Salvo", description: "Composizione musicale ispirata alla poesia di Prebenna.", url: "https://www.youtube.com/watch?v=WKkfO0Y4sHY", type: "youtube" },
  { id: 8, title: "Presentazione \"Era il maggio odoroso\"", description: "Presentazione della raccolta poetica.", url: "https://youtu.be/4SXEmg9OkPk", type: "youtube" },
  { id: 9, title: "Vulnera Temporis – Grottaminarda", description: "Presentazione di Vulnera Temporis.", url: "https://youtu.be/D0F0bHlCFXU", type: "youtube" },
  { id: 10, title: "Da Manzoni al nostro tempo", description: "Una riflessione letteraria dalla prospettiva di Manzoni all'epoca contemporanea.", url: "https://www.youtube.com/watch?v=E1nsk5XvZy8", type: "youtube" },
  { id: 11, title: "Nicola Prebenna - Per correr migliori acque", description: "Il video è una rappresentazione in versi e immagini della diffusione dell'epidemia da Corona virus: una rappresentazione a 360 gradi della fase più critica fino all'auspicio di interventi risolutivi, anche se solo accennati.", url: "https://www.youtube.com/watch?v=YIq_F4i_q80", type: "youtube" },
  { 
    id: 12, 
    title: "Uniti si vive!", 
    description: "DEDICATO AL COMPONIMENTO \"UNITI SI VIVE\", CON CUI SI CHIUDE LA SILLOGE \"IN RIME SPARSE\"", 
    url: "https://www.facebook.com/watch/?v=462938188019452", 
    type: "facebook",
    thumbnail: thumbFacebookVideo
  },
  { 
    id: 13, 
    title: "Mi prendo per la gola e .... dimagrisco. -  Canale 58", 
    description: "Presentazione e approfondimento dell'opera ai microfoni di Canale 58.", 
    url: "https://www.youtube.com/watch?v=ToZmIXx-_oc", 
    type: "youtube" 
  },
  { id: 14, title: "Intervista con Amatucci su Per cieli nuovi e terra nuova", description: "Intervista dedicata alla silloge Per cieli nuovi e terra nuova.", url: "https://www.youtube.com/watch?v=-xUu9-jxhD4", type: "youtube" },
  { id: 15, title: "Lezione che dura", description: "Lezione registrata, disponibile su YouTube.", url: "https://www.youtube.com/watch?v=8B066KzPjhc", type: "youtube" },
  { id: 17, title: "Dante Nicola Prebenna Lignite", description: "Un omaggio poetico a Dante: voce, immagini e suggestioni nella lettura di Nicola Prebenna.", url: "https://youtu.be/lEydVfZl_Pk", type: "youtube" },
  { id: 18, title: "Iniziaz Poesia", description: "Il video è stato concepito come un invito a coltivare la poesia, patrimonio che consente di conoscere meglio se stessi e di affrontare la vita con maggiore serenità e consapevolezza.", url: "https://youtu.be/nugm28nr0yM", type: "youtube" },
];

export const getPoems = (): Poem[] => [
  // La Poesia
  {
    id: 1,
    title: "Il Dono del Poeta",
    theme: "La Poesia",
    text: `Utensili dispensa l'artigiano,
il medico largisce, si spera, salute,
l'ingegnere ti dona a pagamento la casa,
il contadino ti procura pane e companatico.

E tu, poeta, cos'hai da offrire?

Ho dispensato parole al vento,
semi lanciati per aria,
ho radicato parole nel cuore mio
e su fogli di carta bianca.

Ascolto il volo del vento
o forse il seme s'incunea tra crepe di muro
disseminando barlumi di speranza
e propositi di nuova umanità.`,
  },
  {
    id: 101,
    title: "Somiglia alla tua",
    theme: "La Poesia",
    text: `Somiglia alla tua la vita del poeta,
ape che voli di fiore in fiore
carpendo nettare e delizia che poi
trasformi, sorretta dalla solidale
frenesia delle compagne, in prezioso
alimento per chi si prende di te cura
e ti protegge. E il frutto del tuo volare,
dell’andare e venire, della tua lieta
fatica è la gioia del palato e la bellezza
della salute. Somiglia alla tua la vita
del poeta; sfoglia di qua e di là,
ora la mente s’immerge profonda,
ora brilla per un attimo la luce
che s’accende senza fissa dimora
e tante sono le voci che ascolta
e custodisce; alcune le ripete,
altre le sogna, altre ancora riaffiorano
libere senza costrizione ed ancora
altre giungono improvvise a fornire
materia per nuova creazione;
ed il prodotto sgorga dalla mano
che fedele ancella si fa della mente
che intuisce, dell’affetto che nutre,
della forza che scuote e vitale nutrimento
fornisce alle sue forze, ai suoi compagni
d’avventura vicini e lontani, a quanti,
nel lungo si spera, faticoso cammino,
bisogno avvertono di viatico che soddisfi
 
la fame e predisponga al piacere
della conquista della pace beata
e della serena tranquillità d’animo;
ed insieme ape e poeta
perpetuano l’amore per l’utile fatica,
il piacere della generosità senza confini.`,
  },
  {
    id: 102,
    title: "Balsamo",
    theme: "La Poesia",
    text: `Parole imbevute di balsamo consolatore
accarezzano il cuore dell'animo in pena
e schiudono le porte alla pace che timida
bussa; parole che cadono ai piedi di quanti
s'abbandonano al canto di grazie
per il bene che la vita dispensa;
parole in cerca di risposte alle domande
che da millenni si ripetono e che sfuggono
ad ogni presa appena la mano sicura
pretende avere compiuto l'impresa.
E scorre senza pause il gorgogliare
dell'incontro con l'intimo proprio,
con le gioie e le pene degli altri, e le gocce
della vita che si rincorre si tingono
d'inchiostro e, fatte poesia, sprone si fanno
a tessere trame di pace duratura
e seme fruttifero di rinata umanità.`,
  },
  {
    id: 103,
    title: "La tela del rifugio",
    theme: "La Poesia",
    text: `Rivolgo lo sguardo intorno a me,
sulla natura, sulle persone che osservo
da vicino e da lontano, nelle profondità
del mio animo, e me le ritrovo tutte rifatte.
Merito è della parola
che, non contenta dello spazio abituale,
nuovi anfratti esplora e altri mondi,
vita altra spalanca e costruisce.
Non ha recinto la parola,
vola sul tempo passato, su fatti e idee antichi,
su sentimenti e pensieri dell'oggi,
e tesse la tela del rifugio, del conforto,
impasta la pietra angolare alla quale ancorare
attese e propositi di vita nuova e rinnovata,
nel segno dell'amore e della fraternità.`,
  },
  // Amore
  {
    id: 2,
    title: "Dono",
    theme: "Amore",
    text: `La terra
che nessuno
ha mai inventato
i cieli
mai esplorati
sono gemme
di corona
che dolce
adagio
sul tuo cuore.`,
  },
  {
    id: 3,
    title: "Cascata",
    theme: "Amore",
    text: `Come mille
rivoli
di spuma
i
miei
pensieri
in te confluiscono.`,
  },
  {
    id: 4,
    title: "Giorno",
    theme: "Amore",
    text: `Si dischiude sul tuo volto
al tremore dell'aurora
la carezza del mio cuore
e l'avventura riparte
del dono da perpetuare

e scaglie di luce,
facendosi lago,

copriranno la terra opaca e avida

e gli animi beati si schiuderanno
alle ore in corsa
fino alla carezza prossima
dopo il velo tremebondo

del crepuscolo: e tenero,

l'amore dura.`,
  },
  {
    id: 5,
    title: "Mattino",
    theme: "Amore",
    text: `Svaporano
le caligini dell'Erebo
e si dissolve il torpore della carne…

lenta sul tuo volto scivola
la carezza,

ed inebria di luce
il sole
noi due.`,
  },
  {
    id: 6,
    title: "Tornando",
    theme: "Amore",
    text: `Sulle tue lente verdi colline,
trapunte di ciuffi solidali di ginestra,
terra mia,
ingemmo un diadema per colei
che da uno squarcio aperto di cielo
s'attende trepida il ritorno dell'amato

e mi conforta sapere
che l'atteso sono io.`,
  },
  // Amore per la Madre
  {
    id: 7,
    title: "I Tuoi Occhi",
    theme: "Amore per la Madre",
    text: `Due conchiglie venate
di marmo, scolpite
sulla neve
che a stenti si scioglie,
i tuoi occhi
di vita
che lottano con il silenzio
che azzardano segreti
e s'incarnano di morte.

Altri remoti momenti
rapprendono,
intrisi di vigili attese,
di rombi di aerei sognati;
riecheggiano srimati
palpiti assenti,
un rantolo strozzato,
una stella che cade.

I tuoi occhi
un sogno interrotto.

Di te, madre.`,
  },
  {
    id: 8,
    title: "La Sbilenca",
    theme: "Amore per la Madre",
    text: `Un'onda avanza
franta, scomposta
e a fatica la donna
recupera spazio.

Rapido il moto s'allinea
e la tua presenza
forte e viva si ricompone
stabile e compatta.

Non colgo rifatti
anche e femori
bensì ritrovata
la tua anima bella,

più forte e integra
della debolezza della carne
e del male
che ha prevaricato.

Che tu sia mia madre
poco conta, è che
la mente tua e il cuore
fanno ancora oggi
volare alto

e la miseria mia
congiungono alle altezze.

Sei tanto grande, madre,
e mi riconosco indegno;
ma tu perdoni
e mi riscatti.`,
  },
  {
    id: 9,
    title: "Ti Rivedo, Madre!",
    theme: "Amore per la Madre",
    text: `Ti rivedo intenta all'ago
ed alla macchina veloce che con destrezza
usavi a completare l'opera che in tanti
da te reclamavano; ed il lavoro tuo
su camicie, abiti e corredi, pane forniva
e companatico alla tua non piccola famiglia:

e c'ero anch'io!

Ed ora a distanza di tempo, rivedendoti
curva allo scatto del pedale a te leggero,
scopro che altro vestito mi hai cucito
addosso alla pelle e dentro l'anima,
l'abito dell'onestà e dell'affetto.

Ora per allora ed usque in saecula saeculorum
grazie, Madre! e che il Signore semper

ti abbia accanto.`,
  },
  {
    id: 10,
    title: "Alto era il sole",
    theme: "Amore per la Madre",
    text: `Alto era il sole e il giorno splendeva
luminoso quando mi affacciai per via.
Più splendente e radiosa si fece
la seconda metà del giorno
e fu proprio un doppio giorno
perché un altro sole cominciò
a risplendere nel cielo della vita:
ed eri tu, mamma!

E sei tu, oggi come allora, madre,
pur invisibile, il sole che conforta e guida!`,
  },
  {
    id: 11,
    title: "Riaverti Accanto",
    theme: "Amore per la Madre",
    text: `Vorrei riaverti qui accanto, e a ritroso
ritrovare il bandolo da cui si dipanò
l'avventura che mi ha sbalzato nelle diverse
età che ho percorso in solitudine,
allietato dalle voci vicine degli affetti
unici e veri, che conforto sono alla strada
lunga e di campagna che si perde
e si confonde con il cielo vario
alle ore diverse del giorno.

Impossibile il desiderio che per breve
momento mi scuote; l'amaro mi resta
dell'assenza, del ventre tuo, madre,
in cui sposai la vita ed in cui,
non più tra i vivi, avrei voluto
tornare idea d'amore fattasi creatura.

Lontano da te, ogni dove è sepoltura
e ogni forma è ombra che svanisce.
Un po' fatto ventre tuo, la terra nuda
m'accoglierà proteggendomi dall'oblio

e mi proietterà verso la vita altra che,
sotto mutate spoglie, nell'universo
si disperde e si rinnova.`,
  },
  // Attualità
  {
    id: 12,
    title: "Alba a L'Aquila",
    theme: "Attualità",
    text: `Volti pietrosi
disseminati lungo il Calvario
che s'apre silente
tra cumuli di macerie e presenza di morte

nei cui pressi sarà alzata
la Croce del figlio dell'uomo

e a lui corona
le tante croci
del vuoto cittadino e della pietà.

Si rintana timida tra le cime vicine
la luna e sul volto suo di sale
all'approssimarsi della luce
piove l'ombra dell'addio.

Intanto che si contano le croci
s'aspetta che arrivi
e non importa se non sarà fra tre giorni
che arrivi
per tutti
l'invocata resurrezione.`,
  },
  {
    id: 13,
    title: "Naufragio",
    theme: "Attualità",
    text: `Affiora sull'orizzonte verde sognato
carcassa dilaniata dal pesce
sorpreso al pasto inusitato
e leccandosi i baffi stende
pietoso il guizzo dell'addio
su chi, senza vele e triremi,
sfidando il destino confidava
nel dio della buona occasione...

non buoni invece, rapaci
e senza cuore, avventurieri dalla mente
insana e immersi senza freno
nel limo viscido del denaro
che ghermisce e acceca, ti hanno
venduto, ingenuo piccolo Ulisse,
l'illusione di patria
nuova, di terra madre e t'hanno

invece abbandonato tra la schiuma
che lenta s'è richiusa e in pasto
t'hanno dato all'affamato di turno.

I tuoi resti scomposti, e a pezzi,
invocano una mano pietosa
che ti colga con cura e t'affidi
al buon dio della triste occasione,

ancora sognando verdi litorali
e irraggiungibili paradisi terreni;

quello celeste è, forse, per te
la patria intravista.`,
  },
  {
    id: 14,
    title: "Mesopotamia ... dimezzata!",
    theme: "Attualità",
    text: `Brandelli di carri disseminano
la piana infumata ed annerita
e pulviscolo di anime svapora
nella tetra e solitaria cornice
di abbandono e desolazione.

Piombano disperate le autoambulanze
e si spera di guadagnare alla speranza
corpi mutilati e ancora presenti,
e spesso l'attesa vana si rivela.

Ed ogni giorno la mattanza
si ripete ed alla causa oscura
son sempre pronti, ignari, corsari
avventurieri, impazienti
di gridare nell'apocalisse scatenato
"è la morte che vogliamo!";

di loro neppure un filamento
degli altri solo qualche ruvida
carcassa, e tanto spettrale
silenzio chiude la spirale
dell'odio insensato....

E la mezzaluna precipita nel fiume!`,
  },
  {
    id: 15,
    title: "Nel folto del bosco",
    theme: "Attualità",
    text: `Tra il folto nero del bosco s'apre
il varco che mena al lago sempre
più grande fatto e alimentato
da piogge di dolore e di rabbia.

E sono in tanti a versare lacrime
d'inutile attesa nelle case vuote
e senza vita per un ritorno impossibile
della giovane figlia decisa a resistere
alla furia del maligno che s'avventa,
sbava, ed ella non cede pur se prevale
la forza sull'innocenza indifesa
del bene e dell'onore.

Il suo corpo sacro scompare
tra le pieghe del monumento un tempo
benedetto e mentre il mostro lontano
si gode la gioia beffarda del successo,
per caso riaffiora il corpo restante
dell'anima forte; ed il lago si dilata
per lacrime di segreto infine svelato.

Tra altre pareti e sono tante schizzano
spruzzi di sangue e l'assassino
è un fantasma che corpo non ha;
s'aggira silente nelle pieghe serrate
dell'animo che morte ha dato
e che nessuno osa disvelare e certo
rimane il dolore che umore si fa
e nutre il lago nel nero del bosco
il dolore dei cari che pace non ha.

E sempre di più sono i cari sottratti
all'affetto di madre, di padre e di figli
ora per colpa di follia che esplode
senza preavviso, ora per calcolo minuto
eseguito con freddezza e, pur confessi,
dopo lucida prova tutto si rimescola
e l'acqua torbida confonde vittima
ed assassino e spesso l'assassino beato
e spavaldo irride non visto
alla giustizia ingannata.

Alla follia argine non è dato frapporre,
scrupoli a difesa ne sgorgano a iosa
e pure l'evidenza si tinge di dubbio
e anime innocenti talvolta si mutano
in nugolo di cenere per il fiore deposto
dalla pietà e dall'affetto;

ma spesso il corpo è ancora nascosto
e non si sa dove. Resta, sempre più largo
e salato, nel buio più fitto del bosco,

il lago del dolore e della disperazione.`,
  },
  {
    id: 16,
    title: "Bataclan e dintorni",
    theme: "Attualità",
    text: `Note cupe intermittenti irrompono
di scatto nel santuario della festa
nel cuore moderno di Parigi:
frastuono, grida e rantoli nella condanna
eseguita con diabolica calma.
Agnelli sgozzati nella sera buia
del teatro in lutto; anche altrove,
sul suolo immacolato di Parigi, giacciono
fredde altre vittime dell'insano
proposito di morte e grani si fanno
di rosario triste e doloroso.

Nel sangue schizzato dei condannati
alla morte, nel silenzio assordante
delle voci tremanti, nel proposito
di morte fattosi nuvola nera
e nel mare di dolore straripato
sul cuore della Senna si dissolve
l'assurda pretesa di vendetta
e, in brutta evidenza, scatta
la fine, trista, dell'umanità.

Nell'illuso possesso di paradiso
sognato sghignazza compiaciuto
il re degli inferi e alto innalza
il vessillo della sua provvisoria
e insensata vittoria.

Lontano fioco tremola il lume
della auspicata fraternità.`,
  },
  {
    id: 17,
    title: "Schegge di sogni",
    theme: "Attualità",
    text: `Squarci ampi di fuoco nella notte
sui campi e sulle campagne trafiggono
senza sosta cuori e menti, mentre dai muri
fumanti larve sconvolte di vittime
a caso mietute irrompono a fatica
verso sale sguarnite di ospedali di fortuna.
E tutto parte dall'insensata goliardia
di seminare morte per scommessa
e dalla vendetta rapida e spietata
che acuisce l'ira rabbiosa e sconvolge
la quiete della terra comune.
E sono in tanti a piangere per le colpe
di pochi, e palestinesi umiliati e intimoriti,
israeliani indeboliti dalla propria sicurezza,
incolpevoli cristiani minacciati di morte
e di fame, nei pressi dei luoghi di culto,
lamentano ad oltranza la scomparsa della palma
e dell'ulivo, ed in luogo di mani che si stringono
si impugnano armi senza pietà, e sulla città
santa, votata a Jahvè, Cristo, Allah,
troneggia spavaldo l'odio
e sventola lo stendardo di morte.
Dai cunicoli del sottosuolo,
dai rifugi per tempo predisposti,
dalle cripte profumate d'incenso
s'eleva tremante la preghiera
a singhiozzi delle anime tristi,
decise a voltare pagina per scrivere
inno nuovo all'amore che barbaglia.
Alla sommità della sinagoga
si congiunge il pinnacolo del minareto
e aderisce alla nuova creatura
la croce che, faro per molti che mena
al porto, tutti affratella; si disseminano
chicchi di futuro più sereno per una terra,
ancora santa, ma piagata dalla legge
della violenza e delle vendette.
Pace ... gridano in coro i superstiti!
E l'eco ripete: pace, paaace, paaaaace!`,
  },
  // Spiritualità
  {
    id: 18,
    title: "Preghiera",
    theme: "Spiritualità",
    text: `Mi disperdo e distraggo
ostinato a non vederti;

il mio silenzio, la mia
assenza dal tuo cuore

impastano la preghiera
che, invisibile, sussurrata,

a Te vola.`,
  },
  {
    id: 19,
    title: "Te Deum",
    theme: "Spiritualità",
    text: `Dall'anima tua
tutto si diparte
in rapidi attimi
e convulsi, e la mano
incauta ti affida
ignara all'Eterno;

baleno, soffio di fuoco
ti sbarra il cammino
e ti ridona la vita
che più non avevi;

e che tua più non è
e dono s'è fatto
al mondo.

Torcono guglie
di metallo, s'avviluppano
lamiere e schegge,
in fiore si sciolgono
che salendo a Te,
preghiera grata si fa.`,
  },
  {
    id: 20,
    title: "Peregrinus Dei",
    theme: "Spiritualità",
    text: `Spoglio d'armi e offese,
ripete l'onda e il mare
sulle vie d'Oriente,
e rifulge la luce
che ivi prima esplose.

Dall'ansia d'infinito
nutrito, s'adopra a ricucire
lacerazioni, morti e saccheggi:
forza è la speranza,
il perdono non dato
ma umilmente richiesto.

Si staglia tra ombre brevi
un'anima sola con tante colpe,
non sue, e tanto desiderio
di affogare nell'amore
l'ansia della ripartenza;

e la tiara ha riverito la kippa,
e l'uomo nuovo macchiato
di bianco lungo il muro
del pianto ha deposto
il seme dell'abbraccio.

Con forza ha contato le note
stonate di condanne
di fuoco e minacce,
e l'occhio è tornato a distendere
sereno sul sole e sui mondi lontani,

e nella comunione dei giusti
si placano torti e offese.

Sull'ara del dio ignoto
gorgoglia la fede comune
e nel Cristo ritrovato fratello
la riconciliazione riparte.

I sandali non impuri ha deposto,
ed all'Onnipotente ha affidato
il coraggio di amare
il diverso, il nemico di ieri,
il fratello di domani.

Con la forza del perdono
e la tenacia della concordia
ha acceso un lume
ad illuminare secoli di odii,
rancori, ferite ed offese,
ad orbitare congiunti
sul filo dell'Assoluto
Yahvè, Cristo, Allah.

E il pellegrino riparte.`,
  },
  {
    id: 21,
    title: "Comandamenti",
    theme: "Spiritualità",
    text: `Distratti come siamo spesso ignoriamo
che grandi verità s'annidano in poche
semplici parole; il cuore dell'esistere
affonda le radici nel primo e massimo
comandamento, amare il Signore con tutta
l'anima, con tutte le forze e il Signore
è dentro di noi, nelle pieghe dell'animo
e della mente, nella quiete cercata
e posseduta, nell'armonia con il creato
e nella serenità del pensiero che tutto
indaga, di tutto diffida, e di tutto si bea.
E il secondo è molto simile al primo
e proclama: ama il prossimo tuo come te stesso.
Ed il peccato è sottrarsi allo sguardo
benedicente di Dio e tutte le volte
che nei confronti degli altri non ci comportiamo
come con noi stessi; e qui la china si fa
vorticosa e dall'alto della cima
fino a valle è tutto un fluire di cattive
intenzioni e di azioni maldestre, originate
dalla cura eccessiva del sé e poco curante
dell'altro dalle molteplici fattezze.
E l'altro è la natura che abbiamo avvelenato,
il mare che continuiamo ad inquinare,
i fratelli che eliminiamo, che derubiamo
in mille modi, che asserviamo ai nostri
capricci, ai nostri voleri. Sempre più spesso
ricordare dovremmo a noi stessi
i comandamenti supremi, i remi
per fronteggiare il mare aperto e puntare
diritto, con calma necessaria,
al porto che quieto attende.`,
  },
  {
    id: 22,
    title: "Rivelazione",
    theme: "Spiritualità",
    text: `Ho scoperto come per incanto
che tra la lezione che il divino cantor
a larghe mani ci consegna e gli sforzi
che tento di fare in tutta umiltà
un sottile filo rosso scorre; spesso
la guida dell'umano cammino addita
con convinta certezza la strada
della virtù che nemica terribile
incontra ed è l'irrefrenabile brama
di tutto ottenere, ricchezze, gloria,
beni degli altri ad ogni costo, e antidoto
giusto e doveroso il rispetto della legge
e l'amore per gli altri. Scorro i versi
a cui ho messo mano e tante somiglianze
balzano ora evidenti con maggiore
chiarezza e mi ritrovo anch'io a lamentare
l'ingorda bramosia di danaro e potere
e per un attimo sogno di essere
a ragione discepolo accorto della guida
dell'uomo proiettato verso terra nuova
e nuovi cieli. Sogno il cielo sgombro
di nuvole e annoto che sensibili ai colpi
di vento oscillano di qua e di là,
vorrei che la legge stendesse il panno
della propria protezione, ma vana
è l'attesa ché nuvole e antiche maldestre
passioni dominano il campo e, unica
consolazione, a me rimane il conforto
di non essere solo e di perpetuare
alla sequela del maestro, da cui un poco
ho tratto lo bello stile che m'ha fatto onore,
il grido accorato di inversione di tendenza,
l'auspicio di metànoia, il bisogno
di riscoprire il volto bello di madonna Povertà.`,
  },
  // Storia e Religiosità
  {
    id: 23,
    title: "Bologna ferita",
    theme: "Storia e Religiosità",
    text: `Muta e immensa la folla nella piazza
grande all'ombra dell'orologio fermo
sulle note di morte per mano assassina
sfuggita alla condanna dell'umana giustizia,
e che gronda castigo nell'intimo del cuore;

mesti i parenti ed amici invocano
pietà e ricordo, invano reclamano sicure
verità che nessuno sa o non osa svelare;

e mentre oratori convinti e d'occasione
s'alternano al rito triste del memoriale
invisibili aleggiano torme d'innocenti,
e non sulla piazza che rumore
e arroganza si fa, bensì verso l'alto
spiccano il volo, sdegnando nel silenzio
la loro morte seconda, decretata da orde
estranee alla pietà, che odio e rancore
brandiscono, cieche al vero e stordite
dalla mania del colpevole ad ogni costo,
lupo che azzanna con falsi pretesti
l'agnello innocente.

Alle incolpevoli vittime non giova
lo schiamazzo gratuito di strilloni di professione,
silenzioso rispetto e preghiera s'addice
a chi custode si erge alla cara e devota
memoria di vittime sacrificali sul rogo
della barbarie e dell'odio.

E pace reclamano le ombre degli eroi.`,
  },
  {
    id: 24,
    title: "Rouen: Place Vieux Marché … Campo dei Fiori",
    theme: "Storia e Religiosità",
    text: `E' tripudio di festa e canti
nella piazza grande del vieux marché,

ed altre grida s'elevarono a coprire
silente l'abbandono doloroso alle fiamme
ed alla visione di mondi nuovi;

l'impietosa condanna fu poi corretta
ed almeno sulla carta fu sancita
l'ammenda e giustizia fu fatta;

e tardivo il bene ha corretto il male
la luce ha sviato l'ombra e acqua
copiosa e vitale ha sedato il fuoco

ed oggi la Francia riconoscente inneggia
all'eroica ingenua follia
della pulzella d'Orléans,
saldato il conto dell'ingiusta condanna.

Anche in altra piazza fumarono
per oscura sentenza l'abito sacro
del fervido Bruno e lo slancio
audace della mente veloce che sull'ali
del pensiero ardito dischiuse le porte

al regno sterminato ove tutto vive
e senza legacci muove senza sosta
all'interminato ignoto.

Due sante cause agitarono
le loro vivide menti
e a due dure sconfitte approdarono:

dell'una si fece rapida ammenda,
dell'altra ancora s'avverte il triste
bisogno di tardivo pentimento

e lo sguardo tuo, torvo fatto a snidare
sprazzi di vera passione, a fatica
ricerca menti pronte al coraggio
del libero pensiero e della ragione;

ancora il tuo rogo fuma
e i rami secchi ancora lampeggiano
guizzi su tanta diffusa ignoranza
e sprezzo deciso della luminosa verità;
il fuoco alimenta il tuo sdegno
e ancora ti tormenta,

sotto la cappa fredda della tua solitudine.`,
  },
  {
    id: 25,
    title: "Dinanzi a Notre Dame",
    theme: "Storia e Religiosità",
    text: `Sosto ammirato dinanzi al portale
del gioiello d'Amiens e simile scena
mi balza alla mente sulla riva
sonnolenta della Senna.

In trono assiso Cristo giudice
ed ai suoi piedi di qua e di là anime
oranti e felici e volti truci
e trafitti dalle pene che seguono
gli angeli buoni e cattivi
per il premio ed il castigo eterni.

Altro volo si concede la mente
e altro momento d'universale giudizio
riprende corpo sulla parete ampia
 della Cappella Sistina e s'animano scene
di tormenti e punizioni senza fine;
campeggia l'atto deciso del Cristo
nel dare a ciascuno il suo.

Lezioni un tempo di vita presente
quando l'oggi era caparra e scommessa
di eternità e seme fecondo di beatitudine
infinita o premessa di eterni, fitti dolori.

Non si smarrisce oggi l'animo
tra le nebbie sfocate dell'aldilà negato
e totale s'immerge nel piacere cercato
per una notte, per una stagione,
per una vita condita d'inganni ed astuzie,
piccoli o grandi
se siamo potenti o morti di fame,
ed il premio agognato è la pancia
piena dell'oggi, al di qua della muraglia
dai cocci aguzzi di bottiglia
ed altro non s'attende.

E' per altri il richiamo alto alla resa
dei conti, al giudizio severo di un dio
attento o di una coscienza spoglia
d'egoismo ed intenta al vero;

ed anche per altri vale il messaggio
scandito dallo sfondo azzurro della Sistina
e dalle stinte ma non consunte immagini
dei portali che sanno e trasudano eternità.`,
  },
  // La Terra
  {
    id: 26,
    title: "Vico III Guardia: il vuoto che resta",
    theme: "La Terra",
    text: `Gronda lacrime il cielo
sul silenzio sovrastato un tempo
da voci di bimbi in crescita,
da sogni accarezzati
con delicatezza di futuro felice,
da attese di conquiste dignitose
per giovani costruttori di domani sereni.

Piccolo mondo il vicolo dei sogni
e della fatica, allietato dal sole
alle diverse ore del giorno, in cui pulsava
il mondo in miniatura; e l'operaio
di buona lena tornava al travaglio usato,
le sarte al lavoro nel laboratorio
a buon mercato, a misura di vicolo,
le giovani donne e giovani studenti
immersi nello studio, i pensionati
sull'uscio a rimirar la corsa senza
freni dei bimbi. Il mondo in un vicolo,
silenzio e assenza spettrali s'ergono
a intonare smarriti il De Profundis
per una vita che non c'è più.`,
  },
  {
    id: 104,
    title: "Amara terra amata",
    theme: "La Terra",
    text: `Son cent’anni e più!
 
Terra amata, hanno agitato
i tuoi figli disperati
tremanti fazzoletti inumiditi
sul loggione assiepato del bastimento
avvezzo a solcare le onde
dell’addio e della fortuna,
 
ed hai pianto la loro partenza.
 
Braccia bruciate dal sole e dal gelo
sciamano sulle banchine della sognata New York
e sulle distese sterminate della pampa;
va continuo il pensiero alla famiglia lontana
e molti lamentano, lividi di rabbia,
l’inganno patito dal millantatore di turno
che carpendo sostanze e buonafede
intere famiglie ha appiedato,
lontano dal porto, nella città immensa,
 
ed il tuo cuore, terra amata,
s’è fatto a pezzi.
 
Tanti città e città han percorso
nel nuovo mondo e da un cantiere all’altro,
da un giaciglio di fortuna
ad un letto più acconcio rimediato in extremis
hanno conquistato l’obolo
generoso per i cari lasciati nella casa avita;
 
e meno triste apparivi, terra amata.
 
Tra lacrime lontane e lettere rare,
tra un viaggio e l’altro, si dipanava
la tela della famiglia che cresceva
e sempre più s’affidava al sogno
di volare unita al di là dell’oceano,
 
ma non era destino di tutti,
ché spesso il figlio ferito indietro
tornava e sul campo ormai proprio
si abbandonava all’abbraccio
di te, terra avita e amata.
 
Son passati cinquant’anni e più!
 
Fiumane umane lasciando la foce
e procedendo a ritroso si sono riversate
in terre nuove e strane, ed ancora una volta, 
 
terra amara, hai pianto.
 
Sulle tue lacrime in libera caduta
scorreva il treno coi tuoi figli,
in pena per quanti restavano,
ed erano tutti armati di viatico arrangiato,
cartoni, cordicelle e valigie sgangherate.
 
Si lacerava ancora, terra amara,
il tuo cuore di madre.
 
Nella babele delle fabbriche sterminate
e nelle desolate baracche del nord
negate al sole s’è spento spesso
il quotidiano lamento per i cari lontani,
reso speranza che le durezze del presente
vita più degna dischiudessero
e che si potesse ricomporre la tela
degli affetti ritrovati e riuniti;
 
e tu, terra amata, continuavi
a nutrire lacrime d’attesa.
 
Si sono ricomposte altrove le famiglie
d’un tempo e la vita nuova si colorava
di ricordi vivi e decise speranze
e più lenta s’è fatta la tua pena,
 
amata terra,
 
pur se in tanti è attecchito
e cresciuto il seme acre
dell’addio lento e della distanza.
 
Saresti oggi diversa se potessi
con larghe braccia stringere al petto
i tuoi figli, tutti,
e rimani invece, a dispetto del tempo
e del progresso, terra ingrata,
prodiga di premure per i soli figli
di primo letto, mentre muta ti fai
e madre arcigna persisti con i poveri dell’altro ieri,
con i contadini di ieri,
con le moderne e vive intelligenze,
orfane di padrini e potere;
 
ed ancora una volta,  oggi come ieri,
se esalti e premi i figli devoti,
punisci ed espelli,
 
amara terra,
 
i figli indesiderati, pur se belli e forti;
 
e nuovi stuoli di esuli, ammantati
dei fasci della vivida luce della mente
e sospinti dal bisogno che urge,
partono a far ricche genti diverse.
 
Tu, amata amara terra nostra,
impoverisci e non muti aspetto:
si stampano ombre dai contorni umani
ed infine ti riveli non solo indistinto
ordito dell’avara natura,
 
ma fattezze di uomini ti fai che,
sferza alla mano, dominano il campo.
 
E su queste ombre lunghe s’assopisce
l’addio al tuo cuore di madre,
 
amata terra amara, e triste:
 
s’è raggelato il pianto sugli occhi e sul cuore.`,
  },
  {
    id: 105,
    title: "Rivedendoti, casa, un tempo mia",
    theme: "La Terra",
    text: `Rivedendoti cadente e senza speranza
una fitta al cuore mi preme e indietro
torno alla mente mia fanciulla
che il piccolo trasformava in gigante,
e però più audaci erano le attese
perché nelle tue stanze modeste
si coltivava l’attesa di cucire panni
e pani per il futuro di famiglia, e corpo
si pretendeva dare allo sforzo comune
per fare più lieta l’attesa del domani
e solidale la fatica a riuscirci.
Brillò per breve tempo la cometa
e poi senza rimorsi scivolò verso il tempo
buio dei propositi dissolti e il futuro
intravisto si dileguò, si perpetuò
la povertà e la fatica, ed anche tu,
casa allora dignitosa, precipitasti
lungo la china dell’abbandono
e della dissoluzione.
Rimani in piedi, testimone delle incaute
previsioni del futuro e della legge
eterna delle cose del mondo che fioriscono,
frutti veri e belli danno, e poi declinano;
per ora ancora sei in piedi
e, chissà!, per quanto tempo ancora.`,
  },
  {
    id: 106,
    title: "Via Guardia, le mie case",
    theme: "La Terra",
    text: `La sfioro ad ogni tornata
per la strada antica
e so che è la mia casa, e resiste,
quella in cui venni al mondo
e che lasciai presto con i miei
per scendere in breve volger
di tempo al fondo
quasi della via.
 
Nitido a tratti si slaccia
e si stampa guizzo
della mente e del cuore
- ed è sogno o audacia? –
e piccolissimo sono pronto
per il bagno in un mattino di sole
nella secchia grande
d’alluminio al centro
della strada sicura e illuminata.
 
Fui portato nella casa nuova
in cui sono cresciuto
e che ho visto divenire
dalle mani paterne
sempre più acconcia, da buco
pur grande che era, così mi sembrava;
 
e prima il pavimento in cemento,
poi l’acqua in casa, il vaso
per i bisogni correnti ed una cucina
riattata degna prova diedero di sé.
 
L’ho amata e l’ho lasciata
all’eco della voce che mi voleva altrove
sulle ali della santa passione
e della curiosità del mondo,
e sulle rotaie cigolanti svanivano
gli squittii notturni e i miagolii
decisi nel cuore del sonno;
 
ad ogni tardo ritorno,
grande con sorpresa mi rivelavo
ed essa s’incartapecoriva;
 
ma l’anima sua dilatava
sulle fughe in avanti
del tempo all’orizzonte.
 
Ne ritrovai un’altra,
poi che la natura ribelle
la scosse e poi che s’affievolì
la voce che mi voleva a Roma,
più vicina al nido
dove bozzolo mi dischiusi
 
e dove più maturo e deciso
si fece l’affondo nel futuro.
 
Mia non era; era, però, allora
di famiglia, come più mai
poi sarebbe stata.
 
Poco da essa discosta
ci ospitò, divenuto famiglia,
un’altra piccola nostra casa,
stamberga un tempo
stalla e giaciglio:
 
ci adagiammo in attesa di meglio
che infine venne e ci sbalzò
in periferia, alla luce, allo spazio,
all’oggi.
 
Ed altre case ho abitato per il mondo
e sono poi tornato alla casa
disposta all’abbraccio
del figlio errante.
 
Di rado ritorno alla via
delle mie antiche case,
ed oggi solo mi appartiene
l’eco di un sogno che fu
 
e lento si discioglie.`,
  },
];

export const getReviews = (): Review[] => [
  // POESIA
  // 1. Colpo d'ala
  {
    id: 1,
    author: "Paolo Saggese",
    work: "Colpo d'ala",
    text: "Già nel lontano 1978, per Prebenna la poesia è qualcosa di irripetibile, che nasce dalla parte più genuina e fresca dell'io, e che coinvolge l'uomo nei suoi problemi più scottanti e urgenti.",
  },
  // 2. Dacruma
  {
    id: 8,
    author: "Giorgio Barberi Squarotti",
    work: "Dacruma",
    text: "Dacruma riflessivo e profondo, fra ricordo e religiosità.",
  },
  {
    id: 9,
    author: "Paolo Saggese",
    work: "Dacruma",
    text: "Il motivo del carpe diem, del sentimento del tempo, della fugacità dell'esistenza, della vita come fatica, come sfida, come tensione, speranza e sconfitta, dominano il volume. E con essi l'immagine e il modello di Orfeo e Laocoonte, che sono il poeta.",
  },
  {
    id: 10,
    author: "Sandro Gros-Pietro",
    role: "dalla quarta di copertina",
    work: "Dacruma",
    text: "Nicola Prebenna ci propone una poesia della sublimazione della realtà, che è rappresentazione straordinaria di armonia e di dolcezza, ma che è anche impegno civile quasi eroico teso a smascherare ogni camuffamento del vero.",
  },
  // 3. In gurgite vasto
  {
    id: 11,
    author: "Davide Puccini",
    role: "dalla postfazione",
    work: "In gurgite vasto",
    text: "Quella di Prebenna è senza dubbio una poesia che fa sentire, ma anche una poesia che, in un'epoca di interrogativi tormentosi che troppi dimenticano o fingono di dimenticare dietro un eterno carnevale senza quaresima, si pone il compito meritorio di far pensare.",
  },
  {
    id: 12,
    author: "Emerico Giachery",
    role: "dalla Prefazione",
    work: "In gurgite vasto",
    text: "I toni alti e incisivi si connettono spesso alle meditazioni sulla storia presente e passata, alla vena etica, civile, a una certa tensione profetica.",
  },
  {
    id: 13,
    author: "Giorgio Barberi Squarotti",
    work: "In gurgite vasto",
    text: "Ho subito letto la Sua nuova raccolta di versi, così ricca, mutevole, suasiva, fra memoria, riflessione, descrizioni di paesaggi ed esperienze serene di vita, consapevolezza del tempo che trascorre e dei rischi dell'esistere. Il ritmo è sempre tanto rigoroso e sicuro.",
  },
  {
    id: 14,
    author: "Giovanni Chiellino",
    work: "In gurgite vasto",
    text: "Nicola Prebenna guarda indietro ma ha ben presente \"La terra desolata\" di Eliot; i \"cocci aguzzi\", i \"roventi muri\" e i \"calvi picchi\" di Montale; la visione di una umanità dominata dalla solitudine, dall'aridità dei sentimenti e dalla fugacità del tempo.",
  },
  {
    id: 201,
    author: "Gianmario Lucini",
    work: "In gurgite vasto",
    text: "E Prebenna è reattivo, la sua denuncia parte da un sentire, da una esigenza di ristabilire un equilibrio interiore spezzato dall'esperienza delle contraddizioni che si incontra nella storia, attraverso la parola, la comunicazione. A tutto campo, \"in gurgite vasto\", senza timore di perdersi se si ha al centro di sé una, pur aperta, convinzione morale.",
  },
  // 4. E la fiaccola … vive!
  {
    id: 15,
    author: "Aniello Montano",
    role: "dalla Prefazione",
    work: "E la fiaccola … vive!",
    text: "In tutto il poema circolano, frammisti, entusiasmo e malinconia. Entrambi composti e contenuti, in un equilibrio misurato, aureo, quasi a creare un'atmosfera di tipo latamente parnassiana.",
  },
  {
    id: 16,
    author: "Giorgio Barberi Squarotti",
    work: "E la fiaccola … vive!",
    text: "Leggo con molto piacere e plauso il Suo poemetto greco, che mirabilmente congiunge le Olimpiadi antiche e quelle moderne per forza di poesia. È un'opera suasiva e originalissima per ritmo e figure e immagini.",
  },
  {
    id: 17,
    author: "Paolo Saggese",
    work: "E la fiaccola … vive!",
    text: "Un gusto nuovo si afferma, anche sotto lo stimolo di Quasimodo e Kavafis, un gusto neoclassico che anticipa l'ode \"E la fiaccola vive\", che si segnala per originalità e altezza d'arte.",
  },
  {
    id: 401,
    author: "Arturo Donati",
    work: "E la fiaccola … vive!",
    text: "Gentile Poeta\nho letto il testo tratto da Parnassos che ho apprezzato. Ho anche letto sia le sue poesie che il canto che ho trovato in alcuni passi molto coinvolgente. I versi più belli sono quelli in cui il poeta esprime il senso del transito e dell'attesa per qualcosa che quando sarà compiuta lo avrà suo malgrado trasformato in estraneo testimone di un evento che emula ed emblemizza la precarietà della vita. Lei interpreta ed esprime a suo modo il limite del fare umano di fronte alla finitudine universale fortemente percepita ma non in grado di smarrire il poeta grazie all'ausilio della bellezza che affascina come un canto antico.",
  },
  // 5. Come per acqua cupa
  {
    id: 19,
    author: "Ugo Piscopo",
    work: "Come per acqua cupa",
    text: "Le parole che Prebenna adopera per la poesia, cioè per la sua missione morale e per le sue battaglie di verità, sono deliberatamente assunte da un ambito di solidità e di efficacia storicamente collaudate. Lo stile di Prebenna non ha compiacimenti e concessioni alle mode, all'effimero, si costruisce piuttosto come un ordito di procedimenti assoggettati alla sobrietà e alle misure di rigore e di prudenza, con cui devono fare i conti sia le occasioni e gli episodi soggettivi, sia le vicende che vanno oltre la cronaca.",
  },
  {
    id: 20,
    author: "Francesca Liuzzo",
    work: "Come per acqua cupa",
    text: "Pathos e logos non sono le uniche motrici della poesia prebenniana, infatti esse si vestono di ethos e quest'ultimo consente ai versi, costruiti sempre in uno stile sobrio ed equilibrato, di proporre verità e valori che hanno un'essenza universale.",
  },
  {
    id: 21,
    author: "Giorgio Barberi Squarotti",
    work: "Come per acqua cupa",
    text: "Ho subito letto la Sua nuova raccolta di versi, che alternano efficacemente la riflessione e l'attualità, il discorso morale e politico e la memoria. Amo di più i testi di pensiero e lezione d'anima.",
  },
  {
    id: 22,
    author: "Giuseppe Panella",
    work: "Come per acqua cupa",
    text: "La poesia di Prebenna è, proprio per questa sua oscillazione tematica, tutta intrecciata e simile a un tappeto prezioso orientale, di motivi legati alla dimensione del presente del \"mondo offeso\" e di risarcimenti personali e lirici connessi con la verità del ricordo.",
  },
  // 6. Era il maggio odoroso
  {
    id: 23,
    author: "Sandro Gros-Pietro",
    work: "Era il maggio odoroso",
    text: "La forma e il contenuto della poesia di Nicola Prebenna sono un grande omaggio di ripresa e di rinnovamento della tradizione classica della letteratura occidentale, che pone al centro del discorso poetico la visione lirica che il poeta ricostruisce dentro di sé del mondo.",
  },
  {
    id: 24,
    author: "Giorgio Barberi Squarotti",
    work: "Era il maggio odoroso",
    text: "Il Suo discorso poetico si è fatto altissimo e sicuro, fra memoria, rievocazioni, contemplazioni, sentenze. Lo nutre una saggezza antica. La sezione Toccata è, su tutte, bellissima.",
  },
  {
    id: 25,
    author: "Antonio La Penna",
    work: "Era il maggio odoroso",
    text: "Leggendo la Sua poesia, mi dicevo: sapit vitam: una vita operosa, limpida, ricca di affetti profondi, da quelli familiari a quelli religiosi. In un tempo in cui i valori si sono indeboliti o sono morti, Lei resta radicato in grandi tradizioni sempre vive.",
  },
  {
    id: 26,
    author: "Giuseppe d'Errico",
    work: "Era il maggio odoroso",
    text: "Il pensiero e il sentimento si compenetrano ed integrano: il pensiero, suggerito dalla ragione e dalla riflessione, è intimamente penetrato ed arricchito dal sogno, il sentimento non si abbandona mai ad arcadici vagheggiamenti, ma si avvale della riflessione che non inaridisce le immagini ma le sostanzia di significato e di valori.",
  },
  // 7. Fragmina
  {
    id: 18,
    author: "Virgilio Iandiorio",
    work: "Fragmina",
    text: "Non è solamente un omaggio all'arte dei vasai così prospera in passato nella sua città di Ariano Irpino, quanto una metafora della vita in tutte le sue manifestazioni, nobili e volgari, povere e ricche, accomunate tutte dallo stesso destino.",
  },
  {
    id: 216,
    author: "Maria Teresa Liuzzo",
    work: "Fragmina",
    text: "Notevoli sono i versi dedicati al potere, soverchiante ed oppressivo, cui sono e sono stati soggetti popoli e generazioni, nel corso dei secoli. Il poeta evidenzia come nulla sia mutato dall’antichità ai nostri giorni: il potere non è cessato, ha semplicemente mutato l’abito, in una sorta di subdolo e arrogante trasformismo.",
  },
  {
    id: 217,
    author: "Armando Saveriano",
    work: "Fragmina",
    text: "Arricchita dalla dotta e autorevole prefazione del critico/poeta Ugo Piscopo, che citando Husserl, ipostatizza l’intenzionalità di Brentano, la filosofia della mente, scienze cognitive e neuroscienze, la silloge attesta che la poesia non è ‘evaporitica’ quando a simboleggiarla tra tono lirico discorsivo e tono epico-narrativo è l’aedo rapsodo dei giorni nostri della levatura di Nicola Prebenna, con il tratto originale di arte e ‘artigianato’ della parola creatrice/attrice, l’ethos che non pecca di hybris su un versante che lascia filtrare l’essenza fenomenica, resiste al tempo e vale a riassumerne il valore …",
  },
  // 8. Vulnera Temporis
  {
    id: 28,
    author: "Angelo Carlino",
    work: "Vulnera Temporis",
    text: "Il poeta cosmopolita, ma legatissimo alla sua amata terra, fa tesoro della sua experience e riesce a mettere a fuoco tanti problemi che affliggono la società. Da intellettuale impegnato avverte il dovere morale di denunciare le atrocità delle guerre, le azioni terroristiche che insanguinano tanti paesi.",
  },
  {
    id: 29,
    author: "Armando Saveriano",
    work: "Vulnera Temporis",
    text: "La poesia di Prebenna può contare su un verso originalissimo, conio di felice sperimentazione; è fiotto di testimonianza, pratica di funzione divinatrice; è chiarore in cerca di luce, per altri svelamenti.",
  },
  {
    id: 202,
    author: "Ugo Piscopo",
    work: "Vulnera Temporis",
    text: "Prebenna non concede né a sé né a chi legge di procedere per sottili distinguo o intrattenimenti ludico-cerebrali, e procede rigorosamente per tale via, non d’impulso dell’emotività e dell’impazienza, ma su insegnamento avuto dal biblismo e dall’eloquenza sacra (Savonarola, San Bernardino, Sant’Alfonso) e, insieme, dagli studi classici, che lo hanno messo a contatto col pessimismo della Weltanschauung del mondo greco e con la poesia gnomica e sentenziosa greco-latina, oltre che con i nostri grandi autori da Dante e Petrarca a Manzoni e Leopardi. Di qua, il suo scansire sillabe e idee, la sua pronunzia distillata, il suo uso di parole come munizioni in trincea o vibrazioni elettriche.",
  },
  {
    id: 203,
    author: "Paweł Krupka",
    work: "Vulnera Temporis",
    text: "… In questo contesto bisogna considerare i meriti di Nicola Prebenna che nel suo libro Vulnera temporis si riferisce a questo, appunto, mondo di oggi che non ispira ottimismo. Eppure, essendo onesto e realista nelle sue visioni letterarie, non si limita, come la maggior parte dei suoi contemporanei, a rispecchiare la realtà che nel complesso bella non è. Reagisce al mondo che descrive con l’interna armonia scaturita dalla sua formazione spirituale. Una formazione classica fondata sui valori tradizionali della fede religiosa e la coscienza civile ereditata dalla storia della civiltà mediterranea.",
  },
  {
    id: 204,
    author: "Francesco D’Episcopo",
    work: "Vulnera Temporis",
    text: "Attenzione: i vulnera, le ferite personali (come quella per la morte del proprio padre) e universali (legate a vicende sempre più violente e incontrollabili) restano, ma resta anche la fiducia in un ricongiungimento finale, in una resurrezione dell’umanità, che la poesia di Prebenna invoca con costanza ed energia, confermate anche dalle sue precedenti e numerose esperienze poetiche",
  },
  // 9. In una parte più e meno altrove
  {
    id: 47,
    author: "Ugo Piscopo",
    work: "In una parte più e meno altrove",
    text: "In quest'ultima stagione si accentua notevolmente la tendenza a guardare sempre frontalmente la vita, ma attraverso un filtro memoriale più vigile e più agonico attentissimo alle metamorfosi degli eventi. La testimonianza trapassa in visione, la composizione in elegia, che rinvia ai nobili modelli dell'elegia della poesia italiana da Petrarca a Leopardi.",
  },
  {
    id: 301,
    author: "Premio I Murazzi per l’inedito 2016 (Dignità di stampa)",
    role: "Motivazione di Giuria",
    work: "In una parte più e meno altrove",
    text: "In una concatenazione sia gioiosa sia drammatica di turbamenti, sensazioni, agnizioni, allusioni e altri fantasmi si sviluppa lungo i versi, intonati alla tradizione metrica e all’armonia interna del linguaggio, una vicenda di spaesamenti e di recuperi della coscienza del mondo e delle logiche di interpretazioni, fino a giungere alla incertezza di una verità assoluta e a proporre l’incertezza del dubbio come una condizione inalienabile della mente.",
  },
  {
    id: 402,
    author: "Ugo Piscopo",
    work: "In una parte più e meno altrove",
    text: "Nicola Prebenna è un irpino di forte temperamento. Nato e formatosi ad Ariano, di qua è partito per svolgere all’estero un’intensa attività di uomo di cultura e di scuola, ed è tornato infine nella sua Irpinia, dove da anni sta portando avanti un programma impegnato sul piano etico-civile di lievitazione e di crescita dei livelli intellettuali e morali.\nSimultaneamente a questa funzione, in Prebenna è coltivata e fatta crescere la passione per la letteratura, saggistica e, particolarmente, poesia. Come poeta, egli ha pubblicato molte sillogi, che gli hanno procurato stima e riconoscimenti in tutta l’Italia, come provano i numerosi premi raccolti dalla Sicilia al Piemonte. Nel 2016, a Torino gli è stato conferito il Premio “I Murazzi” per l’inedito, con una silloge che nella primavera del 2017 è stata pubblicata dalla medesima casa editrice, che bandisce e gestisce il premio, Genesi Editrice, sotto il titolo dantesco “In una parte più e meno altrove” (prefazione di Sandro Gros-Pietro, pp. 78, euro 11.00, nella collana “I frombolieri”, vol. 101)",
  },
  // 10. In rime sparse
  {
    id: 48,
    author: "Antonio D'Antuono",
    work: "In rime sparse",
    text: "In una società globalizzata come la nostra, espressione della \"modernità liquida\", in cui l'effimero e il fugace la fanno da padrone, la poesia di Prebenna si fa maieutica, autentica lezione dialogante, musica dell'anima.",
  },
  {
    id: 218,
    author: "Giuseppe Manitta",
    work: "In rime sparse",
    text: "La poesia che costituisce l’apriporta del libro è certamente indicativa del valore simbolico e intertestuale, sin dal titolo Al canto del gallo. Ciò perché il riferimento non è tanto al gallo silvestre di memoria leopardiana, ma a quello evangelico del rinnegamento da parte di Pietro. A quella negazione, però, il poeta idealmente contrappone l’alba e il nuovo giorno",
  },
  {
    id: 219,
    author: "Antonio D’Antuono",
    work: "In rime sparse",
    text: "La poesia di Prebenna, attraverso una versificazione agile e corposa al tempo stesso, si fa voce che grida con tutta la forza che ha in gola, nell’invitarci a riflettere non soltanto su quanto avviene intorno a noi (vedi Lamento del circo), ma anche e soprattutto su quanto accade e v’è dentro di noi. Essa si presenta come scandaglio che sonda i fondali della nostra esistenza e del nostro rapporto col mondo",
  },
  // 11. Per correr migliori acque
  {
    id: 45,
    author: "Corrado Calabrò",
    work: "Per correr migliori acque",
    text: "Una plaquette davvero pensosa e di tutta attualità, con l'importante prefazione di Carlo Di Lieto.",
  },
  {
    id: 46,
    author: "Pasquale Maffeo",
    work: "Per correr migliori acque",
    text: "Volevo ringraziarti per questo nuovo lavoro; l'ho letto e scorso molto bene. Mi voglio complimentare con te che hai fatto veramente un'opera molto bella, un'opera di poesia.",
  },
  {
    id: 207,
    author: "Antonio Pizzo",
    work: "Per correr migliori acque",
    text: "Caro Nicola, ho letto la tua \"ode civile\". È davvero coinvolgente. Bravo. Condivido in larga parte la presentazione di Carlo Di Lieto, soprattutto nella scelta dei tuoi versi. Ma non trovo adeguata la sua sintesi nel titolo \"dallo sgomento al disincanto\"; al contrario la mia lettura ha trovato nella tua ode tanta tensione/speranza di un impegno da parte di tutti ormai improrogabile nel \"correr migliori acque\", originata proprio da quel nuovo sgomento. Ma, si sa, ognuno a suo modo",
  },
  {
    id: 208,
    author: "Carlo Di Lieto",
    work: "Per correr migliori acque",
    text: "Nella religiosità “dialettica” di Prebenna c’è un Dio che, nella sua azione provvidenziale, attiva un’identità nobile nell’uomo, correlata al sentimento di responsabilità e di austerità interiore. La componente religiosa riveste un ruolo significativo nei versi alati di Nicola Prebenna, i quali non prescindono mai dalla sua solida formazione letteraria: Dante, Leopardi, Manzoni, Foscolo, i calchi e i rinvii sono evidenti e sono riassorbiti felicemente dall’empito fascinoso dell’ispirazione di quest’ode.\nLa speranza, in quest’ode, rinasce dalle ceneri della disperazione; c’è un’estenuante attesa, con pochi barlumi di speranza; la coazione a ripetere è in funzione del dispiacere e della pulsione di morte: la liberazione dal morbo, che uccide, è in un tempo sospeso e in uno spazio metastorico, in quell’aura misteriosa dell’atomo opaco del male",
  },
  // 12. Vive l'amore e canto
  {
    id: 30,
    author: "Virgilio Iandiorio",
    role: "dalla Postfazione",
    work: "Vive l'amore e canto",
    text: "Non bisogna aspettare la fine dei giorni per contemplare la bellezza. Nicola Prebenna ha avuto modo in questi anni di scoprire l'eterno che è in noi e che si concretizza nella nostra vita quotidiana. Bisogna solamente saperlo riconoscere, accettarlo e goderne la bellezza e la beatitudine. Come tutte le cose del mondo nascono e muoiono anche la nostra vita è destinata a finire. Eppure la metafora della vita che nasce e che finisce, non si può adattare al nostro essere. Perché in noi c’è qualcosa che non muore con l’ultimo nostro respiro. Nicola Prebenna indica nell’aspirazione alla santità qualcosa di divino che è in noi e che ci consente di vivere anche oltre la morte corporale. E questa scoperta diventa tanto più importante se viene fatta in comunione con qualcuno, con il coniuge, con cui si sono condivisi i giorni, i mesi e gli anni: “Se un sole per tutti muore, / un altro per me più vivo si appresta / alla vita e luce si fa a diradare / le tenebre dell’età che avanza / e al sole al tramonto assomiglia.”.",
  },
  {
    id: 31,
    author: "Carlo Di Lieto",
    role: "dalla Prefazione",
    work: "Vive l'amore e canto",
    text: "Questo tenero 'canzoniere d'amore' di Nicola Prebenna è un dettato poetico di inimitabile purezza, scandito da un'elegante sobrietà di un \"inquieto sentire\". Il discorso amoroso si dipana lungo il versante di tre direttrici: \"Le gioie pure del focolare\", \"Il sentimento del tempo\", \"L'elegia della memoria\". L’io poetante domina dal primo all’ultimo verso, partendo da una trama assai tenue e delicata, a fronte di un afflato di nitida ispirazione. L’autoanalisi diventa un muto colloquio con se stesso, in un intreccio incalzante di vicende tra nostalgie e rimpianti. La costellazione policroma dell’io non cambia mai registro nell’ebbrezza della vita e della felicità di esistere. Le pulsioni, intraviste lungo il discrimine di una muta risonanza crepuscolare, si trasformano in impulso vitale, dal forte vigore mnestico.",
  },
  {
    id: 32,
    author: "Domenico Defelice",
    work: "Vive l'amore e canto",
    text: "La silloge Vive l'amore e canto viene pubblicata in occasione del cinquantesimo di matrimonio del poeta e si compone di cinquanta brani, uno per ciascun anno. Va considerata come un poemetto, legando brano a brano a partire dalla polvere di stelle dalla quale ciascun di noi è nato. Nella poesia di Nicola Prebenna si trovano moltissimi echi dei nostri classici, a volte interi lor versi (Dante, Petrarca, Leopardi, Foscolo, Pascoli), ma anche moderni (Saba) e attuali, non volutamente segnati, appositamente cercati, ma spontaneamente da mente e cuore richiamati e inseriti in contesti diversi e quotidiani, perché divenuti in lui, col tempo, parte della sua energia, sangue del suo sangue, retaggio di intenso studio e di amore per tutti loro. Questi poeti sono ormai la sua stessa vita e lui non lo nega, s’è vero che, spesso, ricorre a loro per intitolare le proprie opere: “Era il maggio odoroso” (Leopardi), “In una parte più e meno altrove” (Dante); e ciò avviene anche per la fede, col richiamo a testi sacri (“Non di solo pane” romanzo) e la più volte citata Stella cometa o Stella promessa, col riferimento a quella che ha guidato i Magi alla grotta di Betlemme.",
  },
  {
    id: 33,
    author: "Pasquale Maffeo",
    work: "Vive l'amore e canto",
    text: "Prebenna tocca altezze di genialità, lasciandosi guidare dalla sintassi semantica, dalla sintassi inventiva, dalla sintassi melica; l'ispirazione del nostro poeta è sempre sua, non raccoglie frammenti di lontane letture. Voglio ringraziarti per il dono prezioso che mi hai mandato Vive l’amore e canto e soprattutto per la dedica che hai scritto. Io ho già letto tutto il volume; rispecchia la vita intera, la natura, la casa, gli amori. Sei un poeta idoneo, vero, non devi niente a nessuno, hai la facoltà di suscitare problemi, parli dei tuoi cari, morti, vivi, della natura. Ti ringrazio molto e ti abbraccio. Seguirà breve nota critica per posta.",
  },
  // 13. Per cieli nuovi e terra nuova
  {
    id: 34,
    author: "Giuseppe Iuliano",
    work: "Per cieli nuovi e terra nuova",
    text: "La poesia di Prebenna può contare su un verso originalissimo, conio di felice sperimentazione; è fiotto di testimonianza, pratica di funzione divinatrice; è chiarore in cerca di luce, per altri svelamenti. La voce onesta ed accorata è seme e concime, un lascito dello spirito. La sua poesia/cantico esalta il dono della vita e pone nuovi comandamenti per \"la natura che abbiamo avvelenato, / il mare che continuiamo ad inquinare, / i fratelli che eliminiamo, / che derubiamo / in mille modi, che asserviamo ai nostri capricci, ai nostri voleri\". Insomma ci consegna un pregnante manifesto di natura/umanità/umanesimo",
  },
  {
    id: 35,
    author: "Sandro Gros-Pietro",
    work: "Per cieli nuovi e terra nuova",
    text: "Hai scritto un libro che è una straordinaria testimonianza di fede, anche di patimento e di gioioso dolore ovvero di dolorosa gioia, nella continua testimonianza dell'esempio mostrato dal Dio che si è fatto uomo.",
  },
  {
    id: 36,
    author: "Carlo Di Lieto",
    role: "dalla Prefazione",
    work: "Per cieli nuovi e terra nuova",
    text: "Come in un sogno ad occhi aperti, il furore creativo di Nicola Prebenna disvela un'emotività pulsionale incontenibile, in un perpetuo status nascendi. Le immagini adombrano un variegato percorso inconscio, che porta alla luce una segreta rivelazione di una fascinosa bellezza. La pulsione di vita prevale comunque su quella di morte nella poesia di Prebenna; l’aura archetipica dello stato di grazia dell’ispirazione si con-fonde con l’empito dell’astrazione. Il varco è proprio qui: il dettato lirico diventa un viaggio liberatorio per proiettarsi in una rapita visione dell’oltre, dando la dovuta trasfigurazione al “Tempo ritrovato” della memoria proustiana …",
  },
  {
    id: 37,
    author: "Domenico Defelice",
    work: "Per cieli nuovi e terra nuova",
    text: "Prebenna è uomo che ama l'umanità e vive ben radicato, non astrattamente, su questa Terra e perciò i due infinitesimi sono sempre rapportati alle sue visioni e sensazioni, alle sue personali vicende.",
  },
  {
    id: 209,
    author: "Virgilio Iandiorio",
    work: "Per cieli nuovi e terra nuova",
    text: "La silloge di Nicola Prebenna si apre con la poesia “CIELI NUOVI E TERRA NUOVA”, che ripropone quasi per intero il titolo del libro. L’aggettivo “nuovo” è riferito sia al Cielo sia alla Terra. Il nostro poeta ha voluto evidenziare il suo coinvolgimento totale, nella prospettiva della vita futura, quella che ci attende dopo la morte, ma anche nell’immediato, nei momenti che viviamo istante per istante. Nell’una e nell’altra dimensione, vuole dirci, la vita va rispettata e vissuta insieme a coloro che abbiamo intorno a noi o incontriamo fugacemente: pronti tutti ad intonare il canto di grazie / per la vita che ovunque respira.",
  },
  {
    id: 210,
    author: "Emanuele Occhipinti",
    work: "Per cieli nuovi e terra nuova",
    text: "Caro Nicola, circa dieci giorni fa ho ricevuto il tuo CIELI NUOVI E TERRA NUOVA, ma non ti ho risposto subito perché volevo prima leggere tutte le composizioni. Certamente dall'insieme emerge un profondo e continuo afflato di fede, che corre e si articola attraverso il confronto tra il vivere terreno pieno di tentazioni devianti e la speranza o certezza della condizione salvifica e felice dell'esistenza che ci attende dopo la morte",
  },
  {
    id: 211,
    author: "Angelo Michele Imbriani",
    work: "Per cieli nuovi e terra nuova",
    text: "Il linguaggio che mette insieme poesia e pensiero, il \"pensiero poetante\": \"ogni meditante pensare è poetare, ogni poetare è pensare\", scrive il filosofo (Heidegger). Naturalmente come non ogni pensiero è poesia, così non ogni poesia è gravida di pensiero. Ma lo è la poesia di Nicola Prebenna, perché sobriamente e discretamente intessuta di una trama di riferimenti letterari, biblici, filosofici",
  },
  {
    id: 212,
    author: "Ortensio Zecchino",
    work: "Per cieli nuovi e terra nuova",
    text: "Caro Nicola,\nnel viaggio Roma-Ariano sono in compagnia delle tue poesie: tutte molto belle alcuni versi sublimi. Sono immersioni delicatissime in abissi spirituali senza fondo per una incessante ricerca che offre come premio una melanconica serenità. Complimenti e affettuosi auguri natalizi. Ortensio",
  },
  {
    id: 215,
    author: "Gianluca Amatucci",
    work: "Per cieli nuovi e terra nuova",
    text: "Con Per cieli nuovi e terra nuova, Nicola Prebenna offre un’opera di grande rilevanza nell’ambito della poesia contemporanea, capace di coniugare tensione speculativa e lirismo, visione escatologica e indagine interiore. Il poeta conferma la sua capacità di esplorare con profondità le dinamiche dell’essere, restituendo al lettore una poesia che si fa strumento di conoscenza e di trasformazione dell’esperienza umana",
  },
  // 14. Dittico arcobaleno
  {
    id: 42,
    author: "Andrea Covotta",
    role: "Direttore Rai Quirinale, dalla Prefazione",
    work: "Dittico arcobaleno",
    text: "I versi di Prebenna ci conducono in un percorso che incrocia la passione per la propria terra e lo sguardo allungato su un mondo devastato, senza mai perdere la fiducia in un domani migliore.",
  },
  {
    id: 43,
    author: "Domenico Defelice",
    work: "Dittico arcobaleno",
    text: "Nicola Prebenna è talmente inzuppato di poesia e classicità da ornare sempre con termini e versi di autori immortali, naturalmente e senza sfoggio, lo scrivere e il parlare. La poesia è per lui sangue che circola nelle vene e sorgente alla quale l'umanità intera dovrebbe abbeverarsi.",
  },
  {
    id: 44,
    author: "Carlo Di Lieto",
    work: "Dittico arcobaleno",
    text: "La levigatezza del dettato poetico di Nicola Prebenna offre al lettore un rinnovato piacere. Gli affondi esistenziali propongono momenti di acuta riflessione. Nel solco del sentimento del Nulla, il poeta affida il suo disincanto al turbinio molesto dei ricordi.",
  },
  // 15. Fiori di campo
  {
    id: 38,
    author: "Antonio Pizzo",
    work: "Fiori di campo",
    text: "Altro che Fiori di campo! Leggendo, non ho trovato i colori più vari, né le distese di verde punteggiate da anemoni, né profumi ad solacium, ma solo un \"io\" alla ricerca di sé nel mare senza fine del male e del bene della vita. Eppure, nonostante tanta amarezza, il tuo mondo prevede sempre l'agire degli uomini di buona volontà.",
  },
  {
    id: 39,
    author: "Domenico Defelice",
    role: "dalla rivista Il Convivio",
    work: "Fiori di campo",
    text: "Non esistono fiori più belli di quelli che crescono spontanei nei campi, vere e proprie creature innocenti rivestite da Dio. A loro si richiamano i versi che Nicola Prebenna inanella in questa raccolta, ridotta per formato e numero di componimenti, ma densa e ricca per temi e contenuto.",
  },
  // 16. L'altra faccia della luna
  {
    id: 40,
    author: "Carlo Di Lieto",
    role: "dalla Prefazione",
    work: "L'altra faccia della luna",
    text: "Senza ombra di dubbio, siamo giunti al punto più mirabile della poesia di Nicola Prebenna, dopo un encomiabile percorso umano e letterario. La tenerezza elegiaca del verso di Prebenna rende visibile lo sconfinamento dell'io, visto nella prospettiva psicoanalitica della sua attività onirica. Questa nuova e intensa silloge di poesie di Nicola Prebenna, L’altra faccia della luna, è un altro importante tassello, che si aggiunge alla sua straordinaria opera poetica. È un tracciato emozionale che radialmente attraversa le lunazioni, nel loro periodico avvicendarsi, quale puntuale riflesso delle vicende umane. Il Poeta, con un’immedesimazione proiettiva, rende visibili gli sconfinamenti dell’io, visti nella prospettiva psicoanalitica dell’attività onirica come “via regia della conoscenza dell’inconscio del Poeta […] Il “pensiero poetante” di Nicola Prebenna va inteso come capacità di sapersi distanziare dal “principio di realtà” e di sapere elaborare, in modo egregio, una forma espressiva che gli consenta di dare un senso all’Essere e alla sua ragione profonda.",
  },
  {
    id: 41,
    author: "Floriana Guerriero",
    work: "L'altra faccia della luna",
    text: "Ci troviamo di fronte a versi che consegnano un io lacerato e inquieto, che trova nella condivisione, nella relazione con gli altri l'unico balsamo alla propria sofferenza.",
  },
  {
    id: 205,
    author: "Sandro Gros-Pietro",
    work: "L'altra faccia della luna",
    text: "Per collocazione stilistica egli rientra negli autori che hanno seguito solo per curiosità le vicende della avanguardie, ma che si sono formati e radicati nello studio e nella valorizzazione della ricchissima tradizione di Poesia sviluppata dalla letteratura italiana, al punto che, nel caso di Prebenna, si può accostare la sua esperienza poetica all’alto esempio lasciato da Vincenzo Cardarelli, Guido Gozzano, Umberto Saba, Dino Campana, fino ad arrivare ad autori più recenti come Giovanni Giudici e Mario Luzi: …",
  },
  {
    id: 302,
    author: "Virgilio Iandiorio",
    work: "L'altra faccia della luna",
    text: "Con le sue poesie Nicola Prebenna ci invita a meditare sulla nostra esistenza che non è eterna e che è destinata a finire, in tempo però per dare a noi la possibilità di lasciare un segno della nostra presenza sulla terra. E quando la parola si fa poesia, lascia un segno indelebile che neppure i secoli potranno cancellare",
  },
  {
    id: 303,
    author: "Virgilio Iandiorio",
    work: "L'altra faccia della luna",
    text: "La silloge L’altra faccia della luna richiama subito un’analogia. Perché Prebenna nel suo libro ha raccolto cento poesie? Era forse davanti ai suoi occhi il poema di Dante che è composto di cento canti) Il riferimento al poeta della Divina Commedia è costante nelle opere di Prebenna. La riflessione sulla nostra esistenza, o fatta “nel mezzo del cammin di nostra vita” o alla conclusione di questo nostro cammino, ci mette nei panni del viaggiatore che cammina verso una meta che nessuno di noi ha avuto e avrà la possibilità di raffigurarsi in anticipo come sarà",
  },

  // CRITICA LETTERARIA
  // 17. Il Settecento e l'Autobiografia
  {
    id: 27,
    author: "Giuseppe Panella",
    role: "Docente di Estetica, Scuola Normale Superiore di Pisa",
    work: "Il Settecento e l'Autobiografia",
    text: "Le autobiografie di cui Prebenna si occupa valicano di gran lunga il rigido regime dell'impatto storicistico con il presente per diventare rievocazione, spesso lirica e feconda, di un secolo e di una cultura ancora capace di influenzare e lavorare sul presente.",
  },
  // 18. Pietro Paolo Parzanese
  {
    id: 403,
    author: "Paola Villani",
    role: "Sandro Gros-Pietro",
    work: "Pietro Paolo Parzanese: l'intellettuale che si volle poeta popolare",
    text: "Un contributo a questo affresco è offerto dal recente volume collettaneo dedicato a Parzanese, Risorgimento e Mezzogiorno romantico. La scrittura cristiana e civile di Pietro Paolo Parzanese, che segna una tappa non certo conclusiva all’interno della storia degli studi parzanesiani, di concerto con un altro recentissimo testo, edito da Nicola Prebenna, teso a confutare l’immagine di Parzanese poeta popolare",
  },
  // 19. Incontro con Dante / Libertà va cercando
  {
    id: 404,
    author: "L’Autore",
    work: "Incontro con Dante / Libertà va cercando",
    text: "Ciò che intendo sviluppare è la tesi che Dante non rappresenta solo la sintesi della teologia cristiana, l’esplicitazione poetica dell’approccio filosofico di S. Tommaso, ma l’esercizio critico nella rivendicazione del proprio spazio di libertà interpretativa, riuscendo a proporre due mondi paralleli, quello dettato e suggerito dalla dottrina ufficiale e quello affidato alla rivisitazione libera, creativa delle problematiche, e sono tante, che costellano l’universo del mondo della Commedia.\nDante scrive la Commedia spinto dall’ansia di felicità da conquistare per sé e per gli altri, e la felicità è il bene, che si identifica con Dio, inizio e fine dell’avventura della vita.\nLa conquista del bene non è agevole, è irta di pericoli, interni ed esterni. Ci sono comunque tre guide: la Divinità nelle sue articolazioni, Dio, Trinità, Vergine, santi e la loro epifania, la Chiesa, la Parola, il Potere inteso come servizio alla comunità, la voce dei Padri (cultura – tradizioni), la Mente dell’uomo che, libera, si porta talvolta oltre ciò che la lettera prescrive, che opera per unire e non per dividere, in un’ottica di salvezza che è aperta a tutti.\nDi qui l’impresa titanica di contemperare il rispetto delle diverse guide e far valere anche le ragioni della mente che indaga, che propone, che si fa a sua volta strumento di proposta nuova e diversa, nell’ottica di salvezza che privilegia la cultura, la politica, la dedizione agli altri",
  },
  {
    id: 405,
    author: "Carlo Di Lieto",
    work: "Incontro con Dante / Libertà va cercando",
    text: "Nicola Prebenna, raffinato poeta, scrittore di notevole spessore, in “Incontro con Dante” Libertà va cercando, Milano, Prometheus, 2021, avverte la necessità di uno scandaglio trasversale della poesia di Dante, percorrendo l'itinerario dantesco nelle sue complesse e variegate sfaccettature, saggiando moduli di investigazione, che vanno al di là della “contattazione monotematica”, con rinvii e percorsi che investono le interazioni dei saperi. Scrive sapientemente nell'Introduzione Ugo Piscopo: <<Ha fatto, quindi, bene Nicola Prebenna a scrivere il presente lavoro ... Le sue, sono contattazioni e indicazioni critiche estremamente distillate, immuni da saccenteria e da abbandoni a esultanze dionisiache>>.",
  },
  {
    id: 406,
    author: "Ugo Piscopo",
    role: "Dalla prefazione",
    work: "Incontro con Dante / Libertà va cercando",
    text: "Con raffinata compostezza, egli si affaccia su tutti gli interstizi e su tutti gli anfratti della mente, prendendo nota accurata ed essenziale delle intriganti e raffinate suggestioni che di là, grazie a una scrittura michelangiolescamente scultorea e vibrante, pervengono limpidamente all’animo e alla fantasia del lettore. In particolare, egli apprezza e aiuta il lettore ad apprezzare la vigorosa ed elastica tenuta dell’intelaiatura scientifica e filosofica dell’autore, le formidabili interrogazioni della cultura e delle aspettative di riscatto dell’uomo del Medioevo, il fascino e la delicatezza innervati nei personaggi femminili che salvaguardano la storia da rischi di riduttivismo e scontatezza della società, l’effetto positivo delle accensioni di altre luci, di altre musiche, di eloquenti e fascinosi silenzi, che dicono quello che le parole non riescono a dire.",
  },

  // NARRATIVA
  // 20. Barbe e Virgulti
  {
    id: 2,
    author: "Giorgio Barberi Squarotti",
    work: "Barbe e Virgulti",
    text: "La lettura dei Suoi racconti, così limpidi, acuti, arguti e sapienti, è stata una bella presentazione della primavera, ancora tuttavia contraddittoria. Ella sa scrivere bene, in prosa come in versi.",
    role: "da corrispondenza privata",
  },
  {
    id: 3,
    author: "Giuseppe d'Errico",
    role: "dalla Prefazione",
    work: "Barbe e Virgulti",
    text: "Un tono colloquiale, cortese e familiare, connota questi quattordici racconti. Le vicende narrate acquistano una loro grazia espositiva che coinvolge il lettore, rendendolo partecipe dei fatti richiamati, spettatore sorridente e divertito.",
  },
  {
    id: 4,
    author: "Sandro Gros-Pietro",
    role: "Recensione su Vernice n. 41, Genesi Editrice",
    work: "Barbe e Virgulti",
    text: "L'eleganza corsiva e schietta dello scrivere è il grande punto di forza di Prebenna, che è un maestro impareggiabile di concisione ed efficacia. Non si tratta di una rappresentazione dell'età dell'oro, ma certamente di un mondo guareschiano, contadinesco e vitalissimo.",
  },
  {
    id: 5,
    author: "Vincenzo Saponiero",
    role: "Corriere dell'Irpinia",
    work: "Barbe e Virgulti",
    text: "Ogni racconto è lo specchio di un mondo, di un ambiente, di una realtà quotidiana nella quale tutti ci muoviamo con vizi e debolezze, con frustrazioni e sofferenze, con sentimenti di umanità e solidarietà. Il pregevole volume vuole essere un inno alla vita, un invito al sorriso, alla gioia e alla serenità.",
  },
  {
    id: 6,
    author: "Faustino De Palma",
    role: "rivista Vicum",
    work: "Barbe e Virgulti",
    text: "Il merito e la capacità di Prebenna stanno nel tentativo, certamente riuscito, di rivelare gli aspetti \"straordinari\" di piccoli fatti ed eventi quotidiani, di sentimenti semplici e filosofie spicciole. La raccolta di racconti conserva una propria omogeneità di fondo, che si riflette nel dipanarsi di un unico filo conduttore: l'elogio della quotidianità.",
  },
  {
    id: 7,
    author: "Pasquale Maffeo",
    role: "da corrispondenza privata",
    work: "Barbe e Virgulti",
    text: "Mi pare che il tuo terreno più consono e fertile (di umori, invenzioni ed esiti) sia quello narrativo. Barbe e Virgulti è un libro che scorre, lo leggi, ti ci trovi dentro, ne godi i passaggi, le sottigliezze, le ambiguità, gli espedienti di un'umanità che si misura con le istanze della vita.",
  },
  // 21. Non di solo pane
  {
    id: 49,
    author: "Antonio Pizzo",
    work: "Non di solo pane",
    text: "Un romanzo che ci consegna un ritratto amorevole della tua famiglia d'origine e un servizio ancora amorevole per chi viene dopo e prosegue in continuità. Ho apprezzato molto il capitolo Del Lavoro, agile, puntuale, partecipato, coinvolgente.",
  },
  {
    id: 220,
    author: "Antonio Pizzo",
    work: "Non di solo pane",
    text: "Ho molto gradito, da ogni punto di vista, il capitolo Del Lavoro, agile, puntuale, partecipato, coinvolgente. E non credere perché c'è anche Tonino (grazie dell'amichevole tuo ricordo, anch'io ho ricordi vivi, dolci e, come dire, quasi dei grimaldelli per giovanili riflessioni, della tua amicizia), no, non è per Tonino, è perché ti lasci prendere per mano dalla scrittura e scivoli via piano, nostalgico, gioioso, prudente, pungente contro le ingiustizie e finalmente vittorioso nei tuoi traguardi. Ma il tuo ricordare Augusto, la storia del fratello, forse la sua stessa storia, ha aperto anche in me una profonda tristezza e dai reconditi meandri della memoria sono uscite immagini completamente sepolte, che, a leggerti, sono tornate a fluire",
  },
  {
    id: 221,
    author: "Giovanni Ciano",
    work: "Non di solo pane",
    text: "Carissimo Nicola, non mi è facile descrivere in breve il tumultuoso intreccio di sensazioni, ricordi, riflessioni e orgoglio che ho provato durante la lettura di “Non di solo pane”. Molte corde del mio animo hanno vibrato, lungo lo scorrere delle pagine. Anche di orgoglio, sì, perché quando uno di noi, del popolo come dici tu, sa scrivere in maniera intelligente e, allo stesso tempo, semplice quanto di più difficile si nasconde dentro il proprio “io” significa che è arrivato. E molto più perché lasci a noi tutti non soltanto ai tuoi figlioli – quanto e quale garbo usi verso di loro questo bellissimo vezzeggiativo – un patrimonio di cultura e di saggezza schietta e onesta, per capirci “contadina” che va oltre e supera di gran lunga i moderni trattati di sociologia e di psicologia… Grazie veramente, Nicola, per questo bel libro, per questa testimonianza di amore e di affetto non solo per i tuoi cari ma anche per noi che leggiamo e, soprattutto, per l’amore per la vita.",
  },
  {
    id: 222,
    author: "Francesco Caloia",
    work: "Non di solo pane",
    text: "Caro Nicola, ho comprato e letto il tuo libro: “Non di solo pane”. In questi giorni bui e angoscianti, tra un virus feroce e una società ipocrita e sempre di più contraddittoria, in un mondo diviso da lotte e tensioni è stato un balsamo, una piacevolissima lettura, è stato come staccare la spina e trascorrere momenti sereni insieme a te, padre saggio ...che con competenza e coraggio, racconti i fatti salienti del tuo percorso di vita e ti metti a nudo. Il tuo essere e le tue riflessioni sono quelle che hanno caratterizzato anche la mia esistenza, ed avere conferma da una persona equilibrata come te che abbiamo un vissuto e pensieri comuni, mi ha dato conforto (ci accomunano, la mamma sarta, le scuole in seminario, la formazione umanistica, l’amore per la cultura mediterranea, per l’arte ed il bello, l’infanzia e l’adolescenza vissute in Irpinia - anche se con un poco di anni di differenza - usanze, abitudini, valori sociali e politici, l’esperienza di lavoro fuori dalla propria terra di origine, la dirigenza scolastica).",
  },
  {
    id: 223,
    author: "Virgilio Iandiorio",
    work: "Non di solo pane",
    text: "Con questo suo romanzo Nicola Prebenna ha voluto come scrivere un testamento ai suoi familiari, non indicando i beni materiali in lascito, ma i beni che né la tignola né la ruggine possono corrompere, perché sono le cose belle che un uomo ha potuto realizzare nella sua vita",
  },

  // SAGGISTICA
  // 22. Mi prendo per la gola e … dimagrisco
  {
    id: 407,
    author: "Virgilio Iandiorio",
    role: "Quotidiano del Sud, 23 maggio 2015",
    work: "Mi prendo per la gola e … dimagrisco",
    text: "Oggi a Pollica fraz. Pioppi –Piano Superiore, nel Cilento, viene presentato il libro di Vittorio Roberti e Nicola Prebenna Mi prendo per la gola… e dimagrisco, edito da Delta 3. Il dott. Roberti è biologo nutrizionista e specialista in scienza dell’alimentazione; il prof. Prebenna è anche scrittore, poeta e critico letterario.\nUn libro scritto a quattro mani, ma con un altro protagonista, il lettore. Perché è proprio chi ha bisogno di dieta l’artefice principale, senza il suo coinvolgimento le prescrizioni del nutrizionista servono a poco. Ecco perché più che di dieta sarebbe preferibile dire “proposta nutrizionale”. “Se tu lettore – affermano gli autori- … senti che la tua mente e la tua volontà sono sintonizzate con il proposito di affidarti alla tua libera disponibilità a costruire con le tue forze un rapporto nuovo con il cibo, ciò vuol dire che sei diventato il protagonista della conquista del tuo benessere, e attore principale di questo libro, di cui oltre che lettore divieni coautore”.",
  },
  {
    id: 408,
    author: "Andrea Fantucchio",
    work: "Mi prendo per la gola e … dimagrisco",
    text: "Dimagrire mangiando pasta o cioccolata, divertirsi e modellare il proprio fisico prendendosi per la gola, parafrasando il titolo del libro che contiene l’innovativa strategia nutrizionale messa appunto da Vittorio Roberti, biologo nutrizionista, docente di Nutrizione Preventiva LUETEC e Humaniter di Napoli, e Nicola Prebenna, studioso delle scienze socio-psico-pedagogiche.\nIl 2.0 della Dieta Mediterranea tradizionale nasce in Campania e, dopo la presentazione a Salerno durante \"Bio e Dintorni, le notti Bio\" il 25,26 e 27 settembre,sarà anche da noi in Irpinia. Non si tratta dell’ultimo ritrovato astruso che promette mirabolanti dimagrimenti, costringendo il paziente a rinunce terribili che lo rendono nervoso e irritabile, magari pregiudicandone il rapporto con gli altri. La dieta drenante mediterranea sequenziata, la strategia di Roberti è, infatti, un modello alimentare che si oppone alle privazioni caloriche drastiche: bandite le strategie 0 carboidrati, e ogni genere di tortura iper-restrittiva che, a detta dello scrittore, frustrano inutilmente i pazienti minando il loro rapporto col cibo",
  },
  {
    id: 409,
    author: "Rassegna Libri in Comune",
    work: "Mi prendo per la gola e … dimagrisco",
    text: "Continua il successo, presso la sala consiliare del comune di Mercogliano, della Rassegna “Libri in Comune”, promossa dall’assessore alla cultura Lucia Sbrescia insieme al sindaco della Città Massimiliano Carullo, nell’ambito del progetto “Mercogliano Lab”. E’ la volta, giovedì 7 aprile, alle ore 18:00, del libro di Nicola Prebenna e di Vittorio Roberti. […] A moderare gli interventi della serata ci sarà il giornalista de “Il Mattino”, nonché riconosciuto esperto di enogastronomia dr. Annibale Discepolo. Il testo di Prebenna e Roberti si propone di favorire un migliore rapporto con il cibo, senza proibizioni di sorta, ispirato alla tutela della salute ed alla ricerca del benessere; un benessere ricercato senza privazioni particolari, in un clima di serena coabitazione e cooperazione tra corpo e mente, tra soma e psiche. Uno degli aspetti di novità del testo è costituito dalla riproposizione degli alimenti della dieta mediterranea, sia pure rimodulata e adattata; ed è questo ciò che rende particolarmente intrigante il lavoro che si presenta",
  },
  {
    id: 410,
    author: "Vittorio Roberti",
    role: "Intervista al coautore",
    work: "Mi prendo per la gola e … dimagrisco",
    text: "Stiamo smarrendo la dieta mediterranea? “Si sta perdendo perché il mondo è liquido e veloce - afferma il professore -, perché si dedica poca attenzione alla cucina. Ho scritto, in collaborazione con Nicola Prebenna, esperto di scienze sociopsicopedagogiche, un libro, ‘Mi prendo per la gola … e dimagrisco’ (Delta 3 Edizioni), che fa capire che anche in pochissimo tempo si possono preparare ottimi menu e che è possibile dimagrire, pure mangiando pasta e cioccolata. Oggi non sempre si conoscono gli alimenti, le associazioni e le sequenze degli alimenti: dobbiamo imparare a nutrirci. Perché le francesi sono le più magre d’Europa e hanno il minor rischio di incorrere in malattie cardiovascolari? Iniziano il pasto sempre con una verdura - fa sapere il nutrizionista - e se mangiano gnocchi e pasta dopo aver mangiato una verdura, riescono ad assicurare il giusto drenaggio: a trasformare carboidrati per l’utilizzo immediato per il corpo e non per costituire una riserva di grassi”.",
  },
];

export const getLatestPublications = () => [
  "In rime sparse, (poesia), Il Convivio Editore, Castiglione di Sicilia, 2020",
  "Incontro con Dante / Libertà va cercando (critica letteraria), Prometheus, MI, 2021",
  "Vive l'amore e canto, (poesia), Delta3 Edizioni, Grottaminarda, 2021",
  "Matera del mio canto, (critica letteraria), Delta3 Edizioni, Grottaminarda, 2021",
  "Per cieli nuovi e terra nuova (poesia), Terebinto Ed., AV, 2024",
  "Fiori di campo, (poesia), Il Convivio Editore, Castiglione di Sicilia, 2025",
  "Grisaglia e spiragli, (narrativa), Delta3 Ed. Grottaminarda, 2024",
  "Dittico arcobaleno, (poesia), Delta3 Ed. Grottaminarda, 2024",
  "L'altra faccia della luna, (poesia), Genesi Ed., TO, 2025",
];

// WordPress API integration helpers (for future use)
/*
const WP_API_BASE = 'https://your-wordpress-site.com/wp-json/wp/v2';

export async function fetchPosts(type: string = 'posts'): Promise<WPPost[]> {
  const response = await fetch(`${WP_API_BASE}/${type}`);
  return response.json();
}
*/
