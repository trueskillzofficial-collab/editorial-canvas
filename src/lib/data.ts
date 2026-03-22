// Static data layer - will be replaced by WordPress REST API calls
// Each function simulates a WP API endpoint

import type { Work, Event, MediaItem, BiographySection, SiteSettings } from './types';

export const getSiteSettings = (): SiteSettings => ({
  siteName: "Nicola Prebenna",
  tagline: "Poeta · Scrittore · Critico Letterario",
  heroQuote: "Ho dispensato parole al vento, semi lanciati per aria, ho radicato parole nel cuore mio e su fogli di carta bianca.",
  heroQuoteAuthor: "Da \"Il Dono del Poeta\"",
  authorName: "Nicola Prebenna",
  authorBio: "Nicola Prebenna nasce nel 1947 ad Ariano Irpino (AV). Poeta, scrittore, critico letterario, saggista, giornalista pubblicista. È stato docente e dirigente scolastico in Italia e all'estero — Istanbul, Ferney-Voltaire, Atene. La sua opera spazia dalla poesia alla narrativa, dalla saggistica alla critica letteraria.",
  contactEmail: "info@nicolaprebenna.it",
});

export const getBiographySections = (): BiographySection[] => [
  {
    id: 1,
    title: "Infanzia e Formazione",
    period: "1947 – 1966",
    content: "Da famiglia di modeste condizioni, trascorre l'infanzia nel quartiere in cui è nato e cresciuto ad Ariano Irpino. Il maestro di quinta elementare intuisce in lui delle qualità e si offre di prepararlo per gli esami di ammissione alla scuola media. Il desiderio di farsi prete lo porta a studiare presso la casa per speranzini ad Alatri, dove compie quasi cinque anni di progressi negli studi e nella pietà. Nella primavera del 1964 la vocazione si affievolisce e ritorna al mondo. Completa il percorso liceale conseguendo la maturità classica nell'a.s. 1965/66.",
  },
  {
    id: 2,
    title: "Studi Universitari",
    period: "1966 – 1970",
    content: "Si iscrive all'Università Federico II di Napoli alla facoltà di Lettere e Filosofia, dove si laurea nel 1970 in Lettere Classiche con votazione 110/110, discutendo la tesi \"L'autobiografia e il Settecento: Goldoni, Gozzi, Alfieri\", relatore il prof. Salvatore Battaglia. Durante gli studi universitari partecipa attivamente alla vita culturale della città: teatro, giornale studentesco, impegno politico.",
  },
  {
    id: 3,
    title: "Insegnamento in Italia",
    period: "1970 – 1981",
    content: "Inizia la carriera di docente di materie letterarie nella scuola media della sua città, Ariano Irpino, presso la scuola media \"A. Covotta\" e poi \"P.S. Mancini\". Insegna presso l'Istituto Magistrale \"Guido Dorso\" e successivamente al Liceo \"P.P. Parzanese\" fino all'a.s. 1980/81.",
  },
  {
    id: 4,
    title: "L'Esperienza Internazionale",
    period: "1981 – 2003",
    content: "Vince due concorsi presso il Ministero degli Affari Esteri. Viene nominato presso il Liceo Italiano di Istanbul, dove insegna materie letterarie e latino per cinque anni. Si trasferisce in Francia, insegnando per nove anni presso il Liceo Internazionale di Ferney-Voltaire, nella zona franco-ginevrina. Rivince il concorso per l'estero ed è destinato alla Scuola Italiana di Atene, dove insegna per sette anni, svolgendo anche la funzione di dirigente scolastico negli ultimi due anni.",
  },
  {
    id: 5,
    title: "Rientro in Italia e Attività Letteraria",
    period: "2003 – Presente",
    content: "Rientrato in Italia, dopo pochi anni da dirigente scolastico, va in pensione. Rimane nel mondo della scuola come preside della scuola paritaria \"Carlo Cattaneo\" di Avellino e come presidente dell'IRASE provinciale di Avellino. Continua la sua attività di poeta, scrittore, critico letterario, saggista e giornalista pubblicista, con numerose pubblicazioni e partecipazioni a eventi culturali.",
  },
];

export const getWorks = (): Work[] => [
  { id: 1, title: "Colpo d'ala", year: "1978", genre: "Poesia", publisher: "C.F.D. Avellino", description: "Prima silloge poetica, in cui la poesia è qualcosa di irripetibile, che nasce dalla parte più genuina e fresca dell'io." },
  { id: 2, title: "Rari Nantes", year: "1988", genre: "Poesia", publisher: "Bastogi Edizioni", description: "Raccolta poetica pubblicata con l'editore Bastogi di Foggia." },
  { id: 3, title: "Compagni di strada", year: "2002", genre: "Poesia", publisher: "Edizioni Kulturjam, Roma", description: "Raccolta poetica edita a Roma durante il periodo di insegnamento all'estero." },
  { id: 4, title: "Nicola Prebenna e la Grecia", year: "2005", genre: "Poesia / Saggistica", publisher: "Delta3 Edizioni", description: "Opera che intreccia l'esperienza greca con la riflessione poetica e saggistica." },
  { id: 5, title: "Barbe e Virgulti", year: "2009", genre: "Narrativa", publisher: "Delta3 Edizioni, Grottaminarda", description: "Silloge di quattordici racconti dal tono colloquiale, cortese e familiare, che inquadrano un mondo e lo ripropongono nei personaggi e nell'atmosfera." },
  { id: 6, title: "Era il maggio odoroso", year: "2013", genre: "Poesia", publisher: "Delta3 Edizioni", description: "Raccolta poetica ispirata alla natura e alla memoria." },
  { id: 7, title: "Vulnera Temporis", year: "2016", genre: "Poesia", publisher: "Delta3 Edizioni", description: "Riflessione poetica sulle ferite del tempo e la memoria." },
  { id: 8, title: "Sul filo della memoria", year: "2020", genre: "Narrativa / Memorialistica", publisher: "", description: "Opera memorialistica che percorre il filo dei ricordi personali e collettivi." },
];

export const getEvents = (): Event[] => [
  { id: 1, title: "Presentazione \"Era il maggio odoroso\"", date: "2013", description: "Presentazione della raccolta poetica con interventi critici.", type: "presentation" },
  { id: 2, title: "Serata Letteraria a Zungoli", date: "2015", description: "Evento culturale con reading poetico e dibattito sulla poesia contemporanea.", type: "event" },
  { id: 3, title: "Presentazione \"Vulnera Temporis\"", date: "2016", description: "Presentazione della raccolta presso la Grotta di Pertosa.", type: "presentation" },
  { id: 4, title: "Intervista su Parzanese", date: "2018", description: "Intervista per il TG News sulla figura di P.P. Parzanese.", type: "event" },
  { id: 5, title: "Intervista Ottochannel", date: "2019", description: "Intervista televisiva sulle opere e il percorso letterario.", type: "event" },
  { id: 6, title: "Intervista su Umberto Eco", date: "2020", description: "Intervista su Canale 58 sul pensiero e l'opera di Umberto Eco.", type: "event" },
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
  { id: 9, title: "Vulnera Temporis – Grotta", description: "Presentazione di Vulnera Temporis presso la Grotta.", url: "https://youtu.be/D0F0bHlCFXU", type: "youtube" },
];

export const getPoems = () => [
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
un sogno interrotto.`,
  },
  {
    id: 4,
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
    id: 5,
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
  {
    id: 6,
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
];

export const getReviews = () => [
  {
    id: 1,
    author: "Paolo Saggese",
    work: "Colpo d'ala",
    text: "Già nel lontano 1978, per Prebenna la poesia è qualcosa di irripetibile, che nasce dalla parte più genuina e fresca dell'io, e che coinvolge l'uomo nei suoi problemi più scottanti e urgenti.",
  },
  {
    id: 2,
    author: "Giuseppe d'Errico",
    work: "Barbe e Virgulti",
    text: "Un tono colloquiale, cortese e familiare, connota questi quattordici racconti. Le vicende narrate acquistano una loro grazia espositiva che coinvolge il lettore, rendendolo partecipe dei fatti richiamati.",
  },
  {
    id: 3,
    author: "Giorgio Barberi Squarotti",
    work: "Barbe e Virgulti",
    text: "La lettura dei Suoi racconti, così limpidi, acuti, arguti e sapienti, è stata una bella presentazione della primavera. Ella sa scrivere bene, in prosa come in versi.",
  },
];

// WordPress API integration helpers (for future use)
// Replace these with actual fetch calls when connecting to WordPress

/*
const WP_API_BASE = 'https://your-wordpress-site.com/wp-json/wp/v2';

export async function fetchPosts(type: string = 'posts'): Promise<WPPost[]> {
  const response = await fetch(`${WP_API_BASE}/${type}`);
  return response.json();
}

export async function fetchSinglePost(slug: string): Promise<WPPost> {
  const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}`);
  const posts = await response.json();
  return posts[0];
}

export async function fetchCustomPostType(type: string): Promise<any[]> {
  const response = await fetch(`${WP_API_BASE}/${type}`);
  return response.json();
}
*/
