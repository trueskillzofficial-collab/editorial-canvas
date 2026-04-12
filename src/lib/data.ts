// Static data layer - will be replaced by WordPress REST API calls
import type { Work, Event, MediaItem, BiographySection, SiteSettings, Poem, Review } from './types';

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
    content: "Da famiglia di modeste condizioni, trascorre l'infanzia nel quartiere in cui è nato e cresciuto ad Ariano Irpino. Frequenta la scuola elementare del Calvario con buoni voti. Il maestro di quinta elementare ebbe l'intuizione che in lui ci fossero delle qualità e si offrì di prepararlo gratis per gli esami di ammissione alla scuola media. Il desiderio di farsi prete lo porta a studiare presso la casa per speranzini ad Alatri (FR), dove compie quasi cinque anni di progressi negli studi e nella pietà. Nella primavera del 1964 la vocazione si affievolisce e fa ritorno al mondo, in famiglia.",
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
    content: "Inizia la carriera di docente di materie letterarie nella scuola media della sua città, Ariano Irpino, presso la scuola media \"A. Covotta\" (1970/71) e \"P.S. Mancini\" (1971/72). Insegna poi presso l'Istituto Magistrale \"Guido Dorso\" (1972-1976) e successivamente al Liceo Scientifico annesso al Liceo Classico \"P.P. Parzanese\" fino al 1981. Consegue l'immissione in ruolo per l'insegnamento di materie letterarie e latino nei licei e istituto magistrale. Partecipa a corsi di aggiornamento sulla Letteratura del Novecento a Messina, con relatori di primissimo ordine.",
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
    content: "Rientrato in Italia, dopo pochi anni da dirigente scolastico va in pensione, ma rimane nel mondo della scuola come preside della scuola paritaria \"Carlo Cattaneo\" di Avellino e come presidente dell'IRASE provinciale di Avellino, ente di formazione della UIL Scuola. Consolida rapporti umani e culturali con personalità di valore: Paolo Saggese, Giuseppe Iuliano, Ugo Piscopo, Pasquale Maffeo, Aniello Montano, Carlo Di Lieto, Giuseppe d'Errico, Virgilio Iandiorio, Armando Saveriano, Paveu Krupka, Giuseppe Manitta, Domenico Defelice. Giornalista pubblicista, editorialista e responsabile della Redazione culturale della testata giornalistica Web Tgnewstv.",
  },
];

export const getWorks = (): Work[] => [
  // POESIA
  { id: 1, title: "Colpo d'ala", year: "1978", genre: "Poesia", publisher: "C.F.D. Avellino", description: "Prima silloge poetica, in cui la poesia è qualcosa di irripetibile, che nasce dalla parte più genuina e fresca dell'io.", price: "€ 10,00" },
  { id: 2, title: "Rari Nantes", year: "1988", genre: "Poesia", publisher: "Bastogi Edizioni, FG", description: "Raccolta poetica pubblicata con l'editore Bastogi.", price: "€ 8,00" },
  { id: 3, title: "Dacruma", year: "2001", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Silloge riflessiva e profonda, fra ricordo e religiosità. Presentata ad Atene, alla sala stampa estera, per iniziativa dell'Istituto Italiano di Cultura.", price: "€ 7,75" },
  { id: 4, title: "In gurgite vasto", year: "2004", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Raccolta in sei sezioni che prendono nome dall'onda e dal flutto. Una poesia che fa sentire e che si pone il compito meritorio di far pensare.", price: "€ 12,00" },
  { id: 5, title: "E la fiaccola … vive!", year: "2005", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Ode ispirata alle Olimpiadi di Atene 2004, un'operazione straordinaria che intreccia passato e presente, il mito e le figure di oggi.", price: "€ 5,00" },
  { id: 6, title: "Come per acqua cupa", year: "2008", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Le parole che Prebenna adopera per la poesia sono deliberatamente assunte da un ambito di solidità e di efficacia storicamente collaudate.", price: "€ 10,00" },
  { id: 7, title: "Era il maggio odoroso", year: "2010", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Raccolta poetica ispirata alla natura, alla memoria e al sentimento del tempo.", price: "€ 12,00" },
  { id: 8, title: "Fragmina", year: "2013", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Quarantatré componimenti poetici organizzati in sezioni ispirate all'arte dei vasai: Terracotta, Maiolica, Limoges, Boemia, Murano. Una metafora della vita in tutte le sue manifestazioni.", price: "€ 10,00" },
  { id: 9, title: "Vulnera Temporis", year: "2018", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Opera in 2 volumi con traduzione in neogreco di Maria Luigia Di Stefano e in polacco di Pawel Krupka.", price: "€ 15,00 x vol." },
  { id: 10, title: "In una parte più e meno altrove", year: "2017", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Raccolta poetica che esplora il senso dell'appartenenza e dello sradicamento.", price: "€ 11,00" },
  { id: 11, title: "In rime sparse", year: "2020", genre: "Poesia", publisher: "Il Convivio Edizioni, Castiglione di Sicilia", description: "Raccolta poetica pubblicata con Il Convivio Editore.", price: "€ 10,00" },
  { id: 12, title: "Per correr migliori acque", year: "2020", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Opera analitica originale dall'andamento poematico. III Premio Poesia Edita al Premio Internazionale ACSI \"Firenze Capitale d'Europa\" XXIII edizione.", price: "€ 8,00" },
  { id: 13, title: "Vive l'amore e canto", year: "2022", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "Raccolta poetica dedicata all'amore e al canto come forza vitale.", price: "€ 10,00" },
  { id: 14, title: "Per cieli nuovi e terra nuova", year: "2024", genre: "Poesia", publisher: "Terebinto Edizioni, Avellino", description: "Raccolta poetica che guarda al futuro con speranza e rinnovamento.", price: "€ 15,00" },
  { id: 15, title: "Dittico arcobaleno", year: "2024", genre: "Poesia", publisher: "Delta3 Edizioni, Grottaminarda", description: "I versi di Prebenna ci conducono in un percorso che incrocia la passione per la propria terra e lo sguardo allungato su un mondo devastato, senza mai perdere la fiducia in un domani migliore.", price: "€ 12,00" },
  { id: 16, title: "Fiori di campo", year: "2025", genre: "Poesia", publisher: "Il Convivio Editore, Castiglione di Sicilia", description: "Ultima raccolta poetica pubblicata con Il Convivio Editore.", price: "€ 8,00" },
  { id: 17, title: "L'altra faccia della luna", year: "2025", genre: "Poesia", publisher: "Genesi Editrice, Torino", description: "Raccolta poetica edita con Genesi Editrice.", price: "€ 16,00" },
  // NARRATIVA
  { id: 18, title: "L'approdo", year: "1976", genre: "Narrativa", publisher: "C.F.D. Avellino", description: "Prima opera narrativa, legata alla specificità territoriale e all'avventura scolastica e di lavoro del protagonista.", price: "€ 10,00" },
  { id: 19, title: "Tempo che va", year: "1995", genre: "Narrativa", publisher: "L'Autore Libri, Firenze", description: "Raccolta di racconti che seguono le tracce del sentimento.", price: "€ 8,00" },
  { id: 20, title: "Barbe e Virgulti", year: "2009", genre: "Narrativa", publisher: "Delta3 Edizioni, Grottaminarda", description: "Silloge di quattordici racconti dal tono colloquiale, cortese e familiare. Ogni racconto inquadra un mondo e lo ripropone nei personaggi e nell'atmosfera che li circonda.", price: "€ 10,00" },
  { id: 21, title: "Non di solo pane", year: "2020", genre: "Narrativa (Romanzo)", publisher: "Delta3 Edizioni, Grottaminarda", description: "Romanzo che affronta tematiche legate all'esistenza e ai bisogni profondi dell'uomo.", price: "€ 15,00" },
  { id: 22, title: "Grisaglia e spiragli", year: "2024", genre: "Narrativa", publisher: "Delta3 Edizioni, Grottaminarda", description: "Silloge di racconti ispirati a fatti e personaggi realmente accaduti ed esistiti, che affonda la narrazione nelle diverse debolezze dell'uomo, ma con spiragli aperti alla speranza.", price: "€ 15,00" },
  // CRITICA LETTERARIA
  { id: 23, title: "Nicola Prebenna e la Grecia", year: "2004", genre: "Critica Letteraria", publisher: "Istituto Italiano di Cultura di Atene", description: "Opera che intreccia l'esperienza greca con la riflessione poetica e saggistica.", price: "€ 8,00" },
  { id: 24, title: "Pietro Paolo Parzanese: l'intellettuale che si volle poeta popolare", year: "2006", genre: "Critica Letteraria", publisher: "Delta3 Edizioni, Grottaminarda", description: "Studio critico sulla figura del poeta arianese P.P. Parzanese, dalla cui lettura emerge la natura didascalica, educativa della sua produzione letteraria.", price: "€ 10,00" },
  { id: 25, title: "Il Settecento e l'Autobiografia", year: "2010", genre: "Critica Letteraria", publisher: "Delta3 Edizioni, Grottaminarda", description: "Studio su Goldoni, Gozzi, Alfieri. Le autobiografie valicano il rigido regime dell'impatto storicistico per diventare rievocazione lirica e feconda di un secolo.", price: "€ 10,00" },
  { id: 26, title: "Matera del mio canto", year: "2021", genre: "Critica Letteraria", publisher: "Delta3 Edizioni, Grottaminarda", description: "Note critiche su autori vicini per consonanza e condivisione di radici, e autori presenti nel panorama culturale italiano dei tempi moderni.", price: "€ 20,00" },
  { id: 27, title: "Incontro con Dante / Libertà va cercando", year: "2021", genre: "Critica Letteraria", publisher: "Prometheus Edizioni, Milano", description: "Opera di critica letteraria dedicata all'incontro con Dante e il tema della libertà nella Divina Commedia.", price: "€ 25,00" },
  // SAGGISTICA
  { id: 28, title: "Scuola oggi", year: "1986", genre: "Saggistica", publisher: "Edizioni Bastogi, FG", description: "Saggio sul mondo della scuola e le sfide dell'educazione.", price: "€ 8,00" },
  { id: 29, title: "Sistemi educativi a confronto", year: "1997", genre: "Saggistica", publisher: "", description: "Studio comparativo con particolare riferimento al sistema educativo francese.", price: "" },
  { id: 30, title: "Mi prendo per la gola e … dimagrisco", year: "2016", genre: "Saggistica", publisher: "Delta3 Edizioni, Grottaminarda", description: "Saggio scritto insieme al dr. Vittorio Roberti su come dimagrire in salute e preservare la bellezza. Seconda edizione.", price: "€ 15,00" },
];

export const getEvents = (): Event[] => [
  { id: 1, title: "Presentazione \"Era il maggio odoroso\"", date: "2013", description: "Presentazione della raccolta poetica con interventi critici.", type: "presentation" },
  { id: 2, title: "Serata Letteraria a Zungoli", date: "2015", description: "Evento culturale con reading poetico e dibattito sulla poesia contemporanea.", type: "event" },
  { id: 3, title: "Presentazione \"Vulnera Temporis\" – Grotta di Pertosa", date: "2016", description: "Presentazione della raccolta presso la suggestiva Grotta di Pertosa.", type: "presentation" },
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
  { id: 9, title: "Vulnera Temporis – Grotta di Pertosa", description: "Presentazione di Vulnera Temporis presso la Grotta.", url: "https://youtu.be/D0F0bHlCFXU", type: "youtube" },
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
  // Amore / Dono
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
    theme: "La Terra",
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
riecheggiano stimati
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
anche femori
bensì ritrovata
la tua anima bella.`,
  },
  {
    id: 9,
    title: "Ti Rivedo, Madre!",
    theme: "Amore per la Madre",
    text: `Più forte e integra della debolezza della carne
e del male che ha prevaricato.

Che tu sia mia madre poco conta,
è che la mente tua e il cuore
fanno ancora oggi volare alto
e la miseria mia congiungono alle altezze.

Sei tanto grande, madre,
e mi riconosco indegno;
ma tu perdoni e mi riscatti.`,
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
    text: `Vorrei riaverti qui accanto,
e a ritroso ritrovare il bandolo
da cui si dipanò l'avventura
che mi ha sbalzato nelle diverse età
che ho percorso in solitudine,
allietato dalle voci vicine degli affetti unici e veri,
che conforto sono alla strada lunga e di campagna
che si perde e si confonde con il cielo vario
alle ore diverse del giorno.

Impossibile il desiderio che per breve momento mi scuote;
l'amaro mi resta dell'assenza,
del ventre tuo, madre,
in cui sposai la vita
ed in cui, non più tra i vivi,
avrei voluto tornare idea d'amore fattasi creatura.`,
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
    title: "Bataclan e dintorni",
    theme: "Attualità",
    text: `Note cupe intermittenti irrompono
di scatto nel santuario della festa
nel cuore moderno di Parigi;
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
sul cuore della Senna
si dissolve l'assurda pretesa di vendetta
e, in brutta evidenza,
scatta la fine, trista, dell'umanità.

Nell'illuso possesso di paradiso sognato
sghignazza compiaciuto il re degli inferi
e alto innalza il vessillo
della sua provvisoria e insensata vittoria.

Lontano fioco tremola il lume
della auspicata fraternità.`,
  },
  // Spiritualità
  {
    id: 14,
    title: "Preghiera",
    theme: "Spiritualità",
    text: `Mi disperdo e distraggo
ostinato a non vederti;
il mio silenzio, la mia assenza dal tuo cuore
impastano la preghiera che, invisibile, sussurrata,
a Te vola.`,
  },
  {
    id: 15,
    title: "Te Deum",
    theme: "Spiritualità",
    text: `Dall'anima tua tutto si diparte
in rapidi attimi e convulsi,
e la mano incauta ti affida ignara all'Eterno;

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
    id: 16,
    title: "Comandamenti",
    theme: "Spiritualità",
    text: `Distratti come siamo spesso ignoriamo
che grandi verità s'annidano in poche semplici parole;
il cuore dell'esistere affonda le radici
nel primo e massimo comandamento,
amare il Signore con tutta l'anima, con tutte le forze
e il Signore è dentro di noi,
nelle pieghe dell'animo e della mente,
nella quiete cercata e posseduta,
nell'armonia con il creato
e nella serenità del pensiero
che tutto indaga, di tutto diffida, e di tutto si bea.

E il secondo è molto simile al primo
e proclama ama il prossimo tuo come te stesso.`,
  },
  // Storia e Religiosità
  {
    id: 17,
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
];

export const getReviews = (): Review[] => [
  {
    id: 1,
    author: "Paolo Saggese",
    work: "Colpo d'ala",
    text: "Già nel lontano 1978, per Prebenna la poesia è qualcosa di irripetibile, che nasce dalla parte più genuina e fresca dell'io, e che coinvolge l'uomo nei suoi problemi più scottanti e urgenti.",
  },
  {
    id: 2,
    author: "Giorgio Barberi Squarotti",
    work: "Barbe e Virgulti",
    text: "La lettura dei Suoi racconti, così limpidi, acuti, arguti e sapienti, è stata una bella presentazione della primavera, ancora tuttavia contraddittoria. Ella sa scrivere bene, in prosa come in versi.",
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
    author: "Giorgio Barberi Squarotti",
    work: "Dacruma",
    text: "Dacruma riflessivo e profondo, fra ricordo e religiosità.",
  },
  {
    id: 6,
    author: "Paolo Saggese",
    work: "Dacruma",
    text: "Il motivo del carpe diem, del sentimento del tempo, della fugacità dell'esistenza, della vita come fatica, come sfida, come tensione, speranza e sconfitta, dominano il volume. E con essi l'immagine e il modello di Orfeo e Laocoonte, che sono il poeta.",
  },
  {
    id: 7,
    author: "Sandro Gros-Pietro",
    role: "dalla quarta di copertina",
    work: "Dacruma",
    text: "Nicola Prebenna ci propone una poesia della sublimazione della realtà, che è rappresentazione straordinaria di armonia e di dolcezza, ma che è anche impegno civile quasi eroico teso a smascherare ogni camuffamento del vero.",
  },
  {
    id: 8,
    author: "Davide Puccini",
    role: "dalla postfazione",
    work: "In gurgite vasto",
    text: "Quella di Prebenna è senza dubbio una poesia che fa sentire, ma anche una poesia che, in un'epoca di interrogativi tormentosi che troppi dimenticano o fingono di dimenticare dietro un eterno carnevale senza quaresima, si pone il compito meritorio di far pensare.",
  },
  {
    id: 9,
    author: "Emerico Giachery",
    role: "dalla Prefazione",
    work: "In gurgite vasto",
    text: "I toni alti e incisivi si connettono spesso alle meditazioni sulla storia presente e passata, alla vena etica, civile, a una certa tensione profetica.",
  },
  {
    id: 10,
    author: "Giorgio Barberi Squarotti",
    work: "In gurgite vasto",
    text: "Ho subito letto la Sua nuova raccolta di versi, così ricca, mutevole, suasiva, fra memoria, riflessione, descrizioni di paesaggi ed esperienze serene di vita, consapevolezza del tempo che trascorre e dei rischi dell'esistere. Il ritmo è sempre tanto rigoroso e sicuro.",
  },
  {
    id: 11,
    author: "Aniello Montano",
    role: "dalla Prefazione",
    work: "E la fiaccola … vive!",
    text: "In tutto il poema circolano, frammisti, entusiasmo e malinconia. Entrambi composti e contenuti, in un equilibrio misurato, aureo, quasi a creare un'atmosfera di tipo latamente parnassiana.",
  },
  {
    id: 12,
    author: "Giuseppe Panella",
    role: "Docente di Estetica, Scuola Normale Superiore di Pisa",
    work: "Il Settecento e l'Autobiografia",
    text: "Le autobiografie di cui Prebenna si occupa valicano di gran lunga il rigido regime dell'impatto storicistico con il presente per diventare rievocazione, spesso lirica e feconda, di un secolo e di una cultura ancora capace di influenzare e lavorare sul presente.",
  },
  {
    id: 13,
    author: "Ugo Piscopo",
    work: "Come per acqua cupa",
    text: "Le parole che Prebenna adopera per la poesia, cioè per la sua missione morale e per le sue battaglie di verità, sono deliberatamente assunte da un ambito di solidità e di efficacia storicamente collaudate.",
  },
  {
    id: 14,
    author: "Virgilio Iandiorio",
    work: "Fragmina",
    text: "Non è solamente un omaggio all'arte dei vasai così prospera in passato nella sua città di Ariano Irpino, quanto una metafora della vita in tutte le sue manifestazioni, nobili e volgari, povere e ricche, accomunate tutte dallo stesso destino.",
  },
  {
    id: 15,
    author: "Andrea Covotta",
    role: "Direttore Rai Quirinale, dalla Prefazione",
    work: "Dittico arcobaleno",
    text: "I versi di Prebenna ci conducono in un percorso che incrocia la passione per la propria terra e lo sguardo allungato su un mondo devastato, senza mai perdere la fiducia in un domani migliore.",
  },
  {
    id: 16,
    author: "Francesca Liuzzo",
    work: "Come per acqua cupa",
    text: "Pathos e logos non sono le uniche motrici della poesia prebenniana, infatti esse si vestono di ethos e quest'ultimo consente ai versi, costruiti sempre in uno stile sobrio ed equilibrato, di proporre verità e valori che hanno un'essenza universale.",
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
