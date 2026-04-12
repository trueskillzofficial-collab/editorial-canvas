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
    content: "Rientrato in Italia, dopo pochi anni da dirigente scolastico va in pensione, ma rimane nel mondo della scuola come preside della scuola paritaria \"Carlo Cattaneo\" di Avellino e come presidente dell'IRASE provinciale di Avellino, ente di formazione della UIL Scuola. Consolida rapporti umani e culturali con personalità di valore: Giorgio Barberi Squarotti, Sandro Gros-Pietro, Paolo Saggese, Giuseppe Iuliano, Ugo Piscopo, Pasquale Maffeo, Emerico Giachery, Giovanni Chiellino, Davide Puccini, Aniello Montano, Carlo Di Lieto, Giuseppe d'Errico, Virgilio Iandiorio, Armando Saveriano, Paveu Krupka, Giuseppe Manitta, Antonio Filippetti, Domenico Defelice e altri. Giornalista pubblicista, editorialista e responsabile della Redazione culturale della testata giornalistica Web Tgnewstv.",
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
    title: "Rouen",
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
dei portali che sanno e trasudano eternità;`,
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
];

export const getReviews = (): Review[] => [
  // Colpo d'ala
  {
    id: 1,
    author: "Paolo Saggese",
    work: "Colpo d'ala",
    text: "Già nel lontano 1978, per Prebenna la poesia è qualcosa di irripetibile, che nasce dalla parte più genuina e fresca dell'io, e che coinvolge l'uomo nei suoi problemi più scottanti e urgenti.",
  },
  // Barbe e Virgulti
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
  // Dacruma
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
  // In gurgite vasto
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
  // E la fiaccola … vive!
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
  // Fragmina
  {
    id: 18,
    author: "Virgilio Iandiorio",
    work: "Fragmina",
    text: "Non è solamente un omaggio all'arte dei vasai così prospera in passato nella sua città di Ariano Irpino, quanto una metafora della vita in tutte le sue manifestazioni, nobili e volgari, povere e ricche, accomunate tutte dallo stesso destino.",
  },
  // Come per acqua cupa
  {
    id: 19,
    author: "Ugo Piscopo",
    work: "Come per acqua cupa",
    text: "Le parole che Prebenna adopera per la poesia, cioè per la sua missione morale e per le sue battaglie di verità, sono deliberatamente assunte da un ambito di solidità e di efficacia storicamente collaudate.",
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
  // Era il maggio odoroso
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
  // Il Settecento e l'Autobiografia
  {
    id: 27,
    author: "Giuseppe Panella",
    role: "Docente di Estetica, Scuola Normale Superiore di Pisa",
    work: "Il Settecento e l'Autobiografia",
    text: "Le autobiografie di cui Prebenna si occupa valicano di gran lunga il rigido regime dell'impatto storicistico con il presente per diventare rievocazione, spesso lirica e feconda, di un secolo e di una cultura ancora capace di influenzare e lavorare sul presente.",
  },
  // Vulnera Temporis
  {
    id: 28,
    author: "Angelo Carlino",
    work: "Vulnera Temporis",
    text: "Il poeta cosmopolita, ma legatissimo alla sua amata terra, fa tesoro della sua esperienza e riesce a mettere a fuoco tanti problemi che affliggono la società. Da intellettuale impegnato avverte il dovere morale di denunciare le atrocità delle guerre, le azioni terroristiche che insanguinano tanti paesi.",
  },
  {
    id: 29,
    author: "Armando Saveriano",
    work: "Vulnera Temporis",
    text: "La poesia di Prebenna può contare su un verso originalissimo, conio di felice sperimentazione; è fiotto di testimonianza, pratica di funzione divinatrice; è chiarore in cerca di luce, per altri svelamenti.",
  },
  // Vive l'amore e canto
  {
    id: 30,
    author: "Virgilio Iandiorio",
    role: "dalla Postfazione",
    work: "Vive l'amore e canto",
    text: "Non bisogna aspettare la fine dei giorni per contemplare la bellezza. Nicola Prebenna ha avuto modo in questi anni di scoprire l'eterno che è in noi e che si concretizza nella nostra vita quotidiana. Bisogna solamente saperlo riconoscere, accettarlo e goderne la bellezza e la beatitudine.",
  },
  {
    id: 31,
    author: "Carlo Di Lieto",
    role: "dalla Prefazione",
    work: "Vive l'amore e canto",
    text: "Questo tenero 'canzoniere d'amore' di Nicola Prebenna è un dettato poetico di inimitabile purezza, scandito da un'elegante sobrietà di un \"inquieto sentire\". Il discorso amoroso si dipana lungo il versante di tre direttrici: \"Le gioie pure del focolare\", \"Il sentimento del tempo\", \"L'elegia della memoria\".",
  },
  {
    id: 32,
    author: "Domenico Defelice",
    work: "Vive l'amore e canto",
    text: "La silloge Vive l'amore e canto viene pubblicata in occasione del cinquantesimo di matrimonio del poeta e si compone di cinquanta brani, uno per ciascun anno. Va considerata come un poemetto, legando brano a brano a partire dalla polvere di stelle dalla quale ciascun di noi è nato.",
  },
  {
    id: 33,
    author: "Pasquale Maffeo",
    work: "Vive l'amore e canto",
    text: "Prebenna tocca altezze di genialità, lasciandosi guidare dalla sintassi semantica, dalla sintassi inventiva, dalla sintassi melica; l'ispirazione del nostro poeta è sempre sua, non raccoglie frammenti di lontane letture.",
  },
  // Per cieli nuovi e terra nuova
  {
    id: 34,
    author: "Giuseppe Iuliano",
    work: "Per cieli nuovi e terra nuova",
    text: "La poesia di Prebenna può contare su un verso originalissimo, conio di felice sperimentazione; è fiotto di testimonianza, pratica di funzione divinatrice; è chiarore in cerca di luce, per altri svelamenti. La voce onesta ed accorata è seme e concime, un lascito dello spirito.",
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
    text: "Come in un sogno ad occhi aperti, il furore creativo di Nicola Prebenna disvela un'emotività pulsionale incontenibile, in un perpetuo status nascendi. Le immagini adombrano un variegato percorso inconscio, che porta alla luce una segreta rivelazione di una fascinosa bellezza.",
  },
  {
    id: 37,
    author: "Domenico Defelice",
    work: "Per cieli nuovi e terra nuova",
    text: "Prebenna è uomo che ama l'umanità e vive ben radicato, non astrattamente, su questa Terra e perciò i due infinitesimi sono sempre rapportati alle sue visioni e sensazioni, alle sue personali vicende.",
  },
  // Fiori di campo
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
  // L'altra faccia della luna
  {
    id: 40,
    author: "Carlo Di Lieto",
    role: "dalla Prefazione",
    work: "L'altra faccia della luna",
    text: "Senza ombra di dubbio, siamo giunti al punto più mirabile della poesia di Nicola Prebenna, dopo un encomiabile percorso umano e letterario. La tenerezza elegiaca del verso di Prebenna rende visibile lo sconfinamento dell'io, visto nella prospettiva psicoanalitica della sua attività onirica.",
  },
  {
    id: 41,
    author: "Floriana Guerriero",
    work: "L'altra faccia della luna",
    text: "Ci troviamo di fronte a versi che consegnano un io lacerato e inquieto, che trova nella condivisione, nella relazione con gli altri l'unico balsamo alla propria sofferenza.",
  },
  // Dittico arcobaleno
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
  // Per correr migliori acque
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
  // In una parte più e meno altrove
  {
    id: 47,
    author: "Ugo Piscopo",
    work: "In una parte più e meno altrove",
    text: "In quest'ultima stagione si accentua notevolmente la tendenza a guardare sempre frontalmente la vita, ma attraverso un filtro memoriale più vigile e più agonico attentissimo alle metamorfosi degli eventi. La testimonianza trapassa in visione, la composizione in elegia, che rinvia ai nobili modelli dell'elegia della poesia italiana da Petrarca a Leopardi.",
  },
  // In rime sparse
  {
    id: 48,
    author: "Antonio D'Antuono",
    work: "In rime sparse",
    text: "In una società globalizzata come la nostra, espressione della \"modernità liquida\", in cui l'effimero e il fugace la fanno da padrone, la poesia di Prebenna si fa maieutica, autentica lezione dialogante, musica dell'anima.",
  },
  // Non di solo pane
  {
    id: 49,
    author: "Antonio Pizzo",
    work: "Non di solo pane",
    text: "Un romanzo che ci consegna un ritratto amorevole della tua famiglia d'origine e un servizio ancora amorevole per chi viene dopo e prosegue in continuità. Ho apprezzato molto il capitolo Del Lavoro, agile, puntuale, partecipato, coinvolgente.",
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
