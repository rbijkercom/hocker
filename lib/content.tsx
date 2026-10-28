import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "./asset";

export const IMG = {
  hero: asset("img/home-hero.jpg"),
  avatar: asset("img/nieuws-auteur.jpg"),
  collage: asset("img/over.jpg"),
  contact: asset("img/contact.jpg"),
  jobs: [asset("img/jobs-groot.jpg"), asset("img/jobs-rechtsboven.jpg"), asset("img/jobs-rechtsonder.jpg")],
};

export const PHONE = "(020) 577 77 00";
export const PHONE_HREF = "tel:+31205777700";
export const EMAIL = "mail@hocker.nl";

export const INTRO =
  "De belangrijkste reden dat veel gezichtsbepalende ondernemingen en organisaties al vele jaren samenwerken met Höcker voor al hun uitdagingen op het gebied van ondernemingsrecht, arbeidsrecht, informatierecht, IE, collectieve acties en geschillenbeslechting, is het diepgaande vertrouwen dat zij in ons stellen. Daarnaast vermijdt Höcker gemiddelden, zowel in persoonlijkheden als in prestaties. Wij stellen enkel de hoogste eisen aan onze mensen en ons werk. Echter, waar dergelijke ambities zich in de advocatuur niet zelden vertalen in uren overwerk, eindeloos lange teksten en torenhoge facturen, ageren wij juist tegen deze tirannie van ongebreidelde stortvloed aan paragrafen en gedeclareerde uren.";
/** Words of INTRO that survive the strike-through, in order. */
export const KEEP = ["Höcker", "vermijdt", "lange", "teksten"];

export type Quote = { t: string; s: string; r?: string };
export const QUOTES: Quote[] = [
  {
    t: "I like the lawyers and the atmosphere at the office; it is not too big so we get close contact with them and I sense they have a real involvement in our practices and our concerns. I also think the firm is strong strategically.",
    s: "Chambers Europe",
  },
  { t: "Highly regarded for its expertise in the media and entertainment sectors.", s: "Legal 500" },
];

export type NewsItem = { slug: string; d: string; a: string; t: string; img: string; x?: string };
export const NEWS: NewsItem[] = [
  {
    slug: "ai-deals-muziekindustrie",
    d: "13 maart 2017",
    a: "Martyn Top",
    t: "AI-deals in de muziekindustrie: oplossing voor de nieuwe value gap?",
    img: asset("img/nieuws-ai-deals-muziekindustrie.jpg"),
    x: "De opkomst van AI betekent een nieuwe realiteit voor alle creatieve sectoren. Dat geldt ook voor de muziekindustrie: met generatieve AI-modellen zoals Suno en Udio kan iedereen opeens muziek schrijven en produceren. Dat heeft grote gevolgen voor de streamingdiensten die overspoeld worden met AI-gegenereerde content. Zijn AI-deals in de muziekindustrie de oplossing voor de value gap? Marijn Kingma schreef een editorial over deze ontwikkeling.",
  },
  { slug: "de-druk-om-het-goed-te-doen", d: "23 februari 2026", a: "Front", t: "De druk om het goed te doen", img: asset("img/nieuws-de-druk-om-het-goed-te-doen.jpg") },
  { slug: "ik-ga-op-reis", d: "17 februari 2026", a: "Front", t: "Ik ga op reis en ik krijg mee…", img: asset("img/nieuws-ik-ga-op-reis.jpg") },
  { slug: "wetgevingsoverzicht-2026", d: "3 februari 2026", a: "Juliëtte van Rij", t: "Wetgevingsoverzicht 2026", img: asset("img/nieuws-wetgevingsoverzicht-2026.jpg") },
];

/* ---------- specialismen ---------- */

export type Block = { p: ReactNode } | { lead: string } | { h: string } | { l: ReactNode[] };
export type Sub = { id: string; t: string; blocks: Block[] };
export type Spec = { t: string; short: string; legal500?: boolean; intro: ReactNode[]; subs: Sub[] };

const SUBS: Record<string, Sub> = Object.fromEntries(
  ([
    /* arbeidsrecht */
    {
      id: "reorganisatie-en-ontslag",
      t: "Reorganisatie en ontslag",
      blocks: [
        { p: "Of het nu een individueel of collectief ontslag betreft, een statutair bestuurder, een topper (Wet Normering Topinkomens) of een reguliere werknemer, we helpen u graag. Voor of achter de schermen staan wij u bij: met het inzetten van een procedure of juist met het vermijden ervan door middel van bijvoorbeeld een vaststellingsovereenkomst of een mediation. We denken graag mee over de insteek. Ook verzorgen we de begeleiding, zo nodig het overleg met de OR/vakbonden, het opstellen van een sociaal plan en de beëindigingsprocedure." },
        { lead: "Daarbij kunt u denken aan:" },
        { l: ["Begeleiding en uitzetten van een strategie aan de start van een ontslagdossier", "Begeleiden van een adviestraject met de OR", "Onderhandelingen over een sociaal plan met de vakbonden", "Coördinatie en uitvoering van de individuele ontslagzaken", "En mocht een onderhandeling niet slagen? Dan brengen we het voor de rechter."] },
      ],
    },
    {
      id: "onderhandelen-en-contracteren",
      t: "Onderhandelen en contracteren",
      blocks: [
        { p: "Waar wordt samengewerkt, moeten soms compromissen worden gesloten. Dat geldt ook binnen arbeidsrelaties. Wij adviseren dagelijks werkgevers bij het vinden van passende oplossingen voor hun organisatie. Daarbij zorgen wij er ook voor dat alle afspraken contractueel juridisch correct zijn vastgelegd zodat u zich daar geen zorgen over hoeft te maken." },
        { lead: "Denk hierbij aan zaken als:" },
        { l: ["Signaleren van zwakke plekken in een dossier", "Strategisch onderhandelen en procederen in ontslagzaken", "Opstellen en herzien van arbeidsovereenkomsten", "Advisering over non-concurrentiebedingen", "Advisering over flexibele arbeidsrelaties"] },
      ],
    },
    {
      id: "medezeggenschap",
      t: "Medezeggenschap",
      blocks: [
        { p: "Wij hebben diepgaande kennis van het medezeggenschapsrecht. Bij reorganisaties, een overgang van onderneming, maar ook bij (wijziging van) personeelsbeleid zoals bijvoorbeeld bij verlof, ziekte en bonussen, kan de OR een belangrijke rol spelen. Wij kunnen de WOR strategisch toepassen om voor u een optimaal resultaat te bereiken, en houden rekening met de (politieke) gevoeligheden rondom de verhouding tussen een bestuurder en ondernemingsraad. Wij adviseren en begeleiden, en doen dat zowel aan de zijde van ondernemingsraden als aan de zijde van de ondernemer." },
        { lead: "Het gaat daarbij om zaken als:" },
        { l: ["Inrichting structuur (OR, COR, GOR, etc.)", "Afbakening rollen/bevoegdheden", "Adviseren over advies- en instemmingsaanvragen", "Ondersteuning vaststellen sociale plannen", "Begeleiding bij fusies en overnames", "Ontslagbescherming OR-leden"] },
      ],
    },
    {
      id: "onderzoeken",
      t: "Onderzoeken",
      blocks: [
        { p: "Een relatief nieuw fenomeen in het arbeidsrecht is het interne en externe onderzoek. Het kan hierbij gaan om een onderzoek naar de cultuur op de werkvloer of een persoonsgebonden onderzoek, bijvoorbeeld naar aanleiding van een melding van grensoverschrijdend gedrag. Wij hebben ruime ervaring op dit gebied en staan zowel werkgevers als werknemers bij. Daarnaast onderhouden wij goede contacten met een aantal onderzoeksbureaus die wij desgewenst kunnen inschakelen. Dergelijke onderzoeken liggen vaak gevoelig en vragen om een zorgvuldige aanpak. Wij begrijpen dat als geen ander en bieden ondersteuning op maat, met oog voor zowel de juridische als de menselijke kant van de zaak." },
        { lead: "Zaken die kunnen spelen zijn:" },
        { l: ["De keuze om intern of extern onderzoek te (laten) doen", "Het formuleren van een goede onderzoeksvraag", "Het adviseren over een onderzoeksbureau", "Het begeleiden gedurende het onderzoekstraject", "Advies over sancties en eventuele andere gevolgen die uit het onderzoek voortvloeien"] },
      ],
    },

    /* ondernemingsrecht */
    {
      id: "m-a",
      t: "M&A",
      blocks: [
        { p: "Wij treden op voor (Nederlandse en buitenlandse) kopers en verkopers bij overnames, joint ventures, participaties en herstructureringen. Daarbij staan wij dicht naast onze cliënten en zorgen wij dat het hele traject van aanbieding, intentieovereenkomst, due diligence en transactiedocumentatie goed verloopt. Onze grote ervaring hierbij helpt u bij de onderhandeling en om te beoordelen of de voorwaarden marktconform zijn. Door ons uitgebreide netwerk beschikken wij over diverse adviseurs op het gebied van bedrijfswaarderingen, fiscale zaken, corporate finance en notariaat." },
        { lead: "Denk hierbij aan:" },
        { l: ["Strategische overnames (aandelen/activa-passiva)", "MBO’s / MBI’s", "Juridische splitsingen/fusies", "Joint ventures", "Participaties"] },
      ],
    },
    {
      id: "corporate-commercial-contracts",
      t: "Corporate & commercial contracts",
      blocks: [
        { p: "Wij adviseren u graag over de voor uw onderneming essentiële contracten, zoals overeenkomsten met belangrijke leveranciers en klanten. Wij kennen de bijzonderheden en de valkuilen van allerlei soorten bijzondere contracten en de toepasselijke (Nederlandse en ook vaak Europese) wetgeving. We helpen u graag bij overeenkomsten rondom koop/verkoop, opdracht, bemiddeling, distributie, agentuur, franchise en intellectueel eigendom. Ook hebben wij specifieke kennis over reisovereenkomsten in huis. Wanneer advies noodzakelijk is over contracten die door buitenlands recht worden beheerst, kunnen wij een beroep doen op ons uitgebreide internationale netwerk en u in verbinding brengen met een collega-advocaat ter plaatse." },
        { lead: "Het gaat daarbij om zaken als:" },
        { l: ["Koop/verkoopovereenkomsten", "Bemiddelingscontracten", "Distributieovereenkomsten", "Opdrachtovereenkomsten", "Agentuur- en franchiseovereenkomsten"] },
      ],
    },

    /* IE en media */
    {
      id: "auteursrecht",
      t: "Auteursrecht en naburig recht",
      blocks: [
        { p: "Auteursrecht staat aan het hart van wat onze cliënten doen. Omdat zij maken, produceren, uitgeven, uitvoeren, uitzenden, distribueren of collectief rechten exploiteren of handhaven. Het IE-team van Höcker Advocaten adviseert over alle aspecten van het maken en exploiteren van creatieve werken, van de vraag hoe een idee veilig te pitchen tot advies over contracten, samenwerkingen en licentiestrategieën. Wij werken veel voor organisaties in de entertainmentbranche, en kennen het muziekrecht en filmrecht van binnen en buiten." },
        { p: "Wij hebben ruime ervaring in handhaving, zowel in de aanpak van de handel in illegale producten als het voeren van complexe inbreukprocedures. Ook staan wij collectieve beheerorganisaties bij in alle aspecten van de uitoefening van auteurs- en naburige rechten en adviseren wij over governance en toezichtsvraagstukken." },
        { lead: "Wij specialiseren ons onder meer in:" },
        { l: ["Inbreukprocedures, onderzoek, bewijsbeslag, contact met douaneautoriteiten", "Collectief beheer van auteursrechten: licenties, tarieven, corporate governance, geschillen", "Nieuwe (online) distributiemodellen", "Contracten: licenties, (digitale) distributie, uitgeefovereenkomsten, artiestencontracten"] },
      ],
    },
    {
      id: "merkenrecht-modellenrecht",
      t: "Merkenrecht en modellenrecht",
      blocks: [
        { p: "Een sterk merk of onderscheidend productdesign is vaak van grote waarde voor een onderneming. Het merken- en modellenrecht biedt juridische bescherming tegen namaak, verwarring of misbruik, maar alleen als die rechten op de juiste manier worden vastgelegd én gehandhaafd." },
        { lead: "Het gaat daarbij om zaken als:" },
        { l: ["Inbreukprocedures, onderzoek, bewijsbeslag, contact met douaneautoriteiten", "Contracten: licenties, aktes van overdracht, vaststellingsovereenkomsten"] },
      ],
    },
    {
      id: "it",
      t: "IT",
      blocks: [
        { p: "Ieder bedrijf heeft een veelheid aan IT-contracten. Voor die contracten geldt eigenlijk hetzelfde als voor de gecontracteerde IT-diensten zelf. Je wilt een dienstverlener die de techniek ervan beheerst en die jou kan helpen om inzichtelijk te maken wat je nodig hebt en welke keuzes je kunt maken. En natuurlijk wil je een dienstverlener die er meteen (althans binnen de in de SLA overeengekomen termijnen) voor je is als er onverhoopt iets misgaat…" },
        { p: "Höcker Advocaten heeft een jarenlange ervaring opgebouwd op het gebied van IT-recht. Door erover te adviseren en procederen, en door er postdoctorale opleidingen over te volgen en te geven. Daardoor weten we wat je kunt vragen in een onderhandeling en kunnen we inzicht geven in wat je kunt verwachten in een geschil. Zowel aan de leverancierskant als aan de gebruikerskant zijn wij in staat te denken in oplossingen, juist omdat we beide kanten kennen. Het is belangrijk om te waken voor een te grote leveranciersafhankelijkheid, maar als leverancier investeren in een relatie kan alleen als die relatie robuust is en blijft. Goede procesafspraken kunnen veel doen om vertrouwen in elkaar en in de samenwerking te versterken. Kwesties die opkomen pakken we snel op, maar liever nog voorkomen we toekomstige problemen door deze al bij het aangaan van overeenkomsten bespreekbaar en handelbaar te maken. Bij dit alles houden we de privacywetgeving scherp in het vizier, en vinden we praktische oplossingen om daar mee om te gaan." },
        { lead: "Het gaat daarbij om zaken als:" },
        { l: ["Bescherming software, websites, businessmodellen", "Nieuwe distributiemodellen: internet, web 2.0, social media, cloud", "Contracten: distributie, outsourcing, hosting, SaaS, cloud", "Continuïteit in overnames", "Bewijs veiligstellen/vergaren in digitale omgeving; bewijsbeslag; e-discovery", "Gerechtelijke procedures, arbitrage, mediation, SGOA"] },
      ],
    },
    {
      id: "persoonsgegevens",
      t: "Bescherming van persoonsgegevens",
      blocks: [
        { p: "Gegevensbescherming speelt een steeds belangrijkere rol binnen de maatschappij. Iedere ondernemer verwerkt persoonsgegevens, maar lang niet iedere ondernemer weet hoe hij daarmee om moet gaan. Wij hebben uitgebreide ervaring met het adviseren over de Algemene Verordening Gegevensbescherming en aanverwante wetgeving, en helpen u graag de privacywetgeving na te leven. Wij denken daarbij ook mee over praktische oplossingen. Privacybeleid moet niet enkel kloppen op papier, maar ook in de praktijk uitvoerbaar zijn. Uiteraard assisteren wij cliënten ook bij het melden van datalekken en het reageren op (inzage)verzoeken van betrokkenen." },
        { p: "Mocht het mis gaan, kunnen wij snel schakelen in procedures over (inbreuken op) de AVG. Wij hebben daarbij bijzondere aandacht voor zaken op het snijvlak van auteursrecht en privacy, en staan cliënten bij in het op een rechtmatige manier handhaven van hun rechten bij online inbreuken." },
        { lead: "Wij adviseren onder meer over:" },
        { l: ["Voorkomen van en omgaan met datalekken", "Privacybeleid binnen en buiten de onderneming", "Verwerkersovereenkomsten", "Procedures over opgelegde boetes", "Internationaal gegevensverkeer"] },
      ],
    },
    {
      id: "media-telecom",
      t: "Media- en telecommunicatierecht",
      blocks: [
        {
          p: (
            <>
              Het mediarecht en het telecommunicatierecht raakt aan allerlei onderwerpen die met communicatie te maken hebben: bijvoorbeeld wat er wel en niet mag in televisie- en radio-uitzendingen, hoe radiofrequenties worden verdeeld, en wat de regels zijn op het gebied van <i>spam</i> en <i>cookies</i>. Wij staan mediabedrijven, omroepen, platforms en IT-aanbieders bij in dit snel veranderende speelveld. Of het nu gaat om een uitzending, een nieuwe mediadienst of een conflict met een toezichthouder: wij zorgen dat onze cliënten juridisch stevig staan.
            </>
          ),
        },
        { lead: "U kunt bij ons terecht voor:" },
        { l: ["Bestuursrechtelijke procedures over de toekenning of wijziging van frequentievergunningen", "Juridische bijstand bij vergunningaanvragen", "Advies over wat wel en niet mag op het gebied van spam en cookies", "Bijstand in bezwaar en beroep rondom bestuurlijke maatregelen opgelegd door het Commissariaat voor de Media of de Rijksinspectie Digitale Infrastructuur"] },
      ],
    },
    {
      id: "reclamerecht",
      t: "Reclamerecht",
      blocks: [
        {
          p: (
            <>
              Höcker Advocaten heeft een nieuwe formule! Wij mogen haast wel stellen dat we verbeterd werkzaam zijn. En zie onze huiskleur: Höcker is hartstikke groen! Misschien is het bij een kritische beschouwing eerder groen-grijs, maar in elk geval zijn we <i>onderweg naar groen</i>. Toch?
            </>
          ),
        },
        { p: "Reclamerecht is een breed vakgebied. Het gaat om toelaatbaarheid van claims zoals in de alinea hiervoor. Wat of wie groen is of CO2-neutraal, is immers voer voor juristen. Maar denk ook aan het gebruik van persoonsgegevens bij adverteren online. Welke producten mag je naar welke doelgroep marketen? En hoe bepaal je eigenlijk op welke doelgroep een podcast is gericht? Welke regels gelden er ook alweer voor winacties? En geeft u de influencers die u inzet eigenlijk wel de juiste huisregels mee?" },
        { p: "Bij Höcker Advocaten kennen we alle hoeken van het reclamerecht. Wij staan merkhouders bij die willen adverteren volgens de regels. En wie eerlijk speelt, wil ook de concurrentie aan de regels houden. Met een snelle sommatie, en waar nodig een procedure bij de rechtbank of de Reclame Code Commissie. Wie zelf aangesproken wordt, kan ook bij ons terecht: via een grondig verweer of een praktische schikking houden we u uit de wind." },
        { p: "Reclamebureaus weten al jaren de weg naar ons kantoor te vinden. Zij kunnen dankzij ons hun klanten comfort bieden door campagnes juridisch in orde af te leveren. Het zogenaamde ‘clearen’ vooraf is een belangrijk onderdeel van wat wij doen. Ook denken we met u mee als u afspraken maakt: of het nu gaat om een raamwerkovereenkomst voor multiterritoriale dienstverlening of om die adequate influencer guide, wij weten wat u niet mag vergeten." },
        { lead: "Het gaat daarbij om zaken als:" },
        { l: ["Clearen van campagnes", "Procedures bij de Reclame Code Commissie en rechter"] },
      ],
    },
    {
      id: "persrecht",
      t: "Persrecht en publicaties",
      blocks: [
        { p: "De vrijheid van meningsuiting is een fundamenteel recht, maar niet alles mag worden gezegd of geschreven. Publicaties kunnen onrechtmatig zijn, bijvoorbeeld omdat ze inbreuk maken op de eer of goede naam. Wij adviseren en procederen over de (on)rechtmatigheid van publicaties, in de volksmond ook wel smaad en laster genoemd." },
        { p: "Een belangrijk deel van ons werk bestaat uit het vooraf inschatten van de risico’s van publicaties. Welke uitspraken worden gedragen door de beschikbare feiten en hoe ver kun je in de praktijk gaan? Ook treden we op voor personen, bedrijven en instellingen die onderwerp zijn van (voorgenomen) publicaties en denken we strategisch mee. Is optreden verstandig? Wat is het risico van extra publiciteit? En wat levert een procedure uiteindelijk op? Mocht het tot een procedure komen, dan voeren wij die voor u. Dat doen we bij de rechtbank, maar ook bij de Raad voor de Journalistiek." },
        { lead: "U kunt bij ons terecht voor:" },
        { l: ["Advies over risico’s bij een publicatie", "(Kort geding) procedures over verbod op publicatie en schade"] },
      ],
    },

    /* algemeen belang */
    {
      id: "maatschappelijke-zorgplichten",
      t: "Maatschappelijke zorgplichten",
      blocks: [
        { p: "Eigenbelang, mits in gezonde mate, is de motor van ambitie en maatschappelijke vooruitgang. Maar er zijn grenzen. Gedrag mag niet maatschappelijk onaanvaardbaar zijn. Dat geldt voor iedereen, maar voor sommigen wel in het bijzonder. We vinden bijvoorbeeld van de overheid, de bank, de kredietgever, de zorginstelling, de bestuurder van een vennootschap, of de toezichthouder dat ze niet slechts aan hun eigen gewin mogen denken, maar ook een maatschappelijke verantwoordelijkheid en maatschappelijke zorgplicht hebben. Het verzaken van die maatschappelijke zorgplicht leidt tot aansprakelijkheid." },
        { lead: "Het gaat daarbij om zaken als:" },
        { l: ["Productaansprakelijkheid", "Milieuaansprakelijkheid", "Bancaire aansprakelijkheid"] },
      ],
    },
    {
      id: "massaschade",
      t: "Massaschade",
      blocks: [
        { p: "Ambachtelijke producten zijn er haast niet meer: alles is massaproductie. Ook onze activiteiten worden steeds grootschaliger. Als er ergens iets misgaat, zijn de gevolgen dus ook massaal en grootschalig, met veel benadeelden of slachtoffers. Er zijn tal van voorbeelden: lekkende borstimplantaten, lekkende waterkruiken, medicijnen met schadelijke bijwerkingen, werken met asbest, aardbevingsschade door gaswinning, Q-koorts, legionella-besmetting." },
        { p: "We spreken in dit soort gevallen van massaschade. Het Nederlands aansprakelijkheidsrecht reikt deze slachtoffers de hand: het is mogelijk collectief te procederen tegen de aansprakelijke partij, en als er een schikking wordt getroffen kan die desgewenst ‘algemeen verbindend’ worden verklaard zodat alle slachtoffers daarvan kunnen meeprofiteren." },
      ],
    },

    /* dispute resolution */
    {
      id: "corporate-litigation",
      t: "Corporate litigation",
      blocks: [
        { p: "Wij treden voor u op bij conflicten tussen de belanghebbenden van ondernemingen. Regelmatig zijn wij betrokken bij aandeelhoudersgeschillen, conflicten omtrent corporate governance, enquêteprocedures (wanbeleid), en bij de uitkoop van aandeelhouders en conflicten rondom commerciële contracten. Wij adviseren en onderhandelen met een scherp oog op de mogelijkheden van een minnelijke regeling. Als het nodig is voeren wij procedures, bijvoorbeeld bij de Ondernemingskamer van het gerechtshof Amsterdam. Wij treden ook geregeld op als Ondernemingskamer-functionaris, zoals: onderzoeker, bestuurder, commissaris of beheerder van aandelen." },
        { lead: "Het gaat daarbij om zaken als:" },
        { l: ["Aandeelhoudersgeschillen", "Uitkoopprocedures", "Corporate governance", "Enquêteprocedures"] },
      ],
    },
    {
      id: "commercial-litigation",
      t: "Commercial litigation",
      blocks: [
        { p: "Geschillen zijn vaak onvermijdelijk in een zakelijke omgeving. Denk aan conflicten over de uitvoering of uitleg van contracten, betalingsgeschillen, aansprakelijkheidskwesties of geschillen tussen handelspartijen." },
        { p: "Onze Commercial Litigation-praktijk richt zich op het beslechten van complexe zakelijke geschillen voor nationale en internationale ondernemingen. Wij beschikken over ruime ervaring met bodemprocedures, kort gedingen, hoger beroep en arbitrage, en werken waar nodig nauw samen met specialisten uit andere rechtsgebieden." },
        { lead: "U kunt bij ons terecht voor:" },
        { l: ["Contractuele geschillen en interpretatievraagstukken", "Handels- en betalingsgeschillen", "Aansprakelijkheids- en schadeclaims", "Geschillen in commerciële samenwerkingen, distributie- en agentuurrelaties", "Zekerheden en verhaal", "Nationale en internationale arbitrage en andere vormen van alternatieve geschillenbeslechting"] },
      ],
    },
    {
      id: "mediation",
      t: "Mediation",
      blocks: [
        { lead: "Conflicten komen vaak voor in een zakelijke setting. Denk hierbij aan:" },
        { l: ["Spanningen tussen bestuurders binnen een onderneming", "Onderlinge conflicten tussen aandeelhouders", "Conflicten met werknemers", "Verschillen in de uitleg van een contract", "Geschillen in de relatie tussen klanten en leveranciers", "Geschillen bij een bedrijfsovername"] },
        { p: "Dergelijke conflicten zetten niet zelden de prestaties en financiële resultaten onder druk. Het is dan belangrijk dat zij snel en efficiënt worden opgelost. Mediation kan in die gevallen uitkomst bieden." },
        { h: "Wat is mediation?" },
        { p: "Mediation is een professionele en gestructureerde methode waarbij een neutrale bemiddelingsdeskundige, de mediator, de communicatie en onderhandelingen tussen partijen begeleidt. Het doel is om in korte tijd tot een gezamenlijk gedragen besluit te komen. Zelfbeschikking van partijen, vrijwilligheid en vertrouwelijkheid staan voorop." },
        { h: "Voordelen van mediation" },
        { l: ["Mediation is tijdbesparend: deelnemers hebben zelf de snelheid in de hand.", "Mediation bespaart kosten: het is in de regel een stuk goedkoper dan een juridische procedure.", "Mediation biedt partijen de mogelijkheid een oplossing te bereiken die meer omvat dan een uitspraak van de rechter. Een rechterlijke uitspraak is beperkt tot de vraag die aan de rechter wordt voorgelegd. In een mediation kunnen allerlei onderwerpen aan bod komen.", "Omdat de partijen er samen uitgekomen zijn, is de kans groot dat de uitkomst ook in de toekomst door partijen gedragen wordt.", "Niemand lijdt gezichtsverlies.", "Mediation geschiedt op basis van geheimhouding; wat tijdens een mediation wordt besproken valt onder de geheimhoudingsplicht. De geheimhoudingsplicht geldt voor zowel de deelnemende partijen als ook voor de mediator. Dit betekent geen onnodige en schadelijke media-aandacht en geen reputatieschade."] },
        { h: "Höcker mediators" },
        { p: "Onze mediators zijn tevens advocaat. Hierdoor kennen zij het juridische speelveld, weten zij waar partijen rekening mee moeten houden en wat de valkuilen zijn." },
      ],
    },
  ] satisfies Sub[]).map((s) => [s.id, s]),
);

const subs = (...ids: string[]) => ids.map((id) => SUBS[id]);

const IE_INTRO = [
  "Van oudsher is Höcker een toonaangevend kantoor op het gebied van intellectuele eigendom en media. Wij staan makers en hun belangenbehartigers bij die hun rechten willen beschermen, net als ondernemingen die het gebruik van producten en diensten goed willen regelen, of die willen weten of zij voldoen aan de privacywetgeving. Ook adviseren wij media die te maken krijgen met de grenzen van de vrijheid van meningsuiting, of met mediaregulering, IT-aanbieders die vragen hebben over wat wel en niet mag in het informatietijdperk, en merkhouders die willen adverteren volgens de regels. Wij adviseren over de beste manieren om ideeën, plannen en werken te beschermen, en helpen bij het opstellen en uitonderhandelen van maatwerkovereenkomsten. Door u zorgen uit handen te nemen, besparen wij u tijd, geld en energie.",
  "Als procederen nodig is, staan wij ook voor u klaar. Wij deinzen niet terug voor complexe zaken over principiële vraagstukken. Wij beschikken over jarenlang opgebouwde kennis over het opzetten en uitvoeren van kostenefficiënte handhavingsstrategieën.",
  "Vanwege onze deelname aan internationale netwerken zoals Adlaw International en de International Association of Entertainment Lawyers kunnen wij u ook snel en kostenefficiënt bijstaan bij grensoverschrijdende vraagstukken en geschillen.",
];

export const SPEC_ORDER = [
  "ondernemingsrecht",
  "algemeen-belang",
  "ie-ict",
  "arbeidsrecht",
  "geschillenbeslechting",
  "media-marketing",
] as const;
export type SpecKey = (typeof SPEC_ORDER)[number];

export const SPEC: Record<SpecKey, Spec> = {
  ondernemingsrecht: {
    t: "Ondernemingsrecht",
    short: "Overnames, joint ventures, contracten en geschillen tussen aandeelhouders.",
    intro: [
      "Als u gaat samenwerken met een andere partij, is het verstandig om goede juridische afspraken te maken. Wij adviseren daarin en kunnen u ook bijstaan bij onderhandelingen of een procedure in geval van een conflict.",
      "Wij adviseren bij (internationale) overnames, joint ventures, participaties en herstructureringen. Wij begeleiden zowel kopers als verkopers desgewenst vanaf de eerste onderhandelingen, verrichten (vendor) due diligence en maken en beoordelen de transactiedocumentatie tot signing en closing.",
      "Daarnaast kunnen wij allerlei handelscontracten voor u opstellen, bijvoorbeeld voor inkoop- of verkoopovereenkomsten met leveranciers. Ook voor franchiseovereenkomsten en sale-and-lease-back overeenkomsten, samenwerkingsovereenkomsten of Service Level Agreements (SLA’s) bent u bij ons aan het goede adres.",
      "Bij conflicten tussen de belanghebbenden van ondernemingen treden wij ook graag voor u op. Zoals bij aandeelhoudersgeschillen, conflicten omtrent corporate governance, enquêteprocedures (wanbeleid) en conflicten rondom commerciële contracten.",
      "Wij treden op voor Nederlandse en internationale partijen variërend van (groot) mkb tot multinationals, maar ook voor non-profitorganisaties.",
    ],
    subs: subs("m-a", "corporate-commercial-contracts", "corporate-litigation"),
  },
  "algemeen-belang": {
    t: "Algemeen belang",
    short: "Collectieve acties en algemeen belang-acties, van massaschade tot de Urgenda klimaatzaak.",
    intro: [
      "Soms is een juridische berg zo hoog, dat die voor een individuele klimmer nauwelijks te bedwingen valt. Gelukkig kan onrecht ook gezamenlijk worden aangepakt, via collectieve of algemeen belang-acties. Höcker helpt daarbij.",
      "Bijvoorbeeld door via een collectieve actie erkenning voor en vergoeding van berokkende schade te krijgen. Höcker hielp in dit soort procedures gedupeerden van overkreditering om op te komen tegen banken die hun zorgplicht verzaakten en daaraan verdienden. Voor minderheidsaandeelhouders van een beursgenoteerde vennootschap konden we voorkomen dat de meerderheidsaandeelhouder voor een fractie van de waarde hun aandelen dreigde over te nemen. Dit soort zaken kan ook gaan over productaansprakelijkheid vanwege een productiefout, over de aardbevingsschade in Groningen of over de schade als gevolg van een groot datalek.",
      "Algemeen belang-acties maken het mogelijk om in rechte op te komen voor maatschappelijke belangen die iedereen raken. Denk aan milieu en klimaat, privacy, voedselveiligheid en consumentenrechten. Dit soort procedures zijn vaak gericht tegen de overheid, maar ook bedrijven kunnen worden aangesproken. Wij hebben in dit soort zaken, veelal gebaseerd op artikel 3:305a BW, een jarenlange ervaring opgebouwd.",
      "Namens omwonenden van akkers eisen wij van lelietelers dat ze hun gifgebruik beteugelen. Stadsbewoners helpen we om hun gemeente aan te spreken op diens zelfopgelegde plicht het aantal toeristen binnen perken te houden. En voor de creatieve industrie vorderden we dat sites met illegale films, games en muziek werden afgesloten. Maar het bekendste voorbeeld is ongetwijfeld de Urgenda klimaatzaak. In die zaak vroegen we de rechter om de Staat der Nederlanden te herinneren aan zijn zorgplicht door in elk geval aan de minimale internationale afspraken over uitstootreductie te voldoen. De rechtbank, het hof en de Hoge Raad gaven Urgenda gelijk en bevolen de Staat de uitstoot van CO2 verder te reduceren.",
      "Deze zaken doen ertoe. We zijn dan ook trots op de vele jaren dat we op dit vlak actief zijn.",
    ],
    subs: subs("maatschappelijke-zorgplichten", "massaschade"),
  },
  "ie-ict": {
    t: "IE/ICT",
    short: "Auteursrecht, merken en modellen, IT en de bescherming van persoonsgegevens.",
    intro: IE_INTRO,
    subs: subs("auteursrecht", "merkenrecht-modellenrecht", "it", "persoonsgegevens"),
  },
  arbeidsrecht: {
    t: "Arbeidsrecht",
    short: "Reorganisatie, ontslag, medezeggenschap en onderzoeken: helderheid, regie en juridische zekerheid.",
    intro: [
      "Arbeidsrechtelijke vraagstukken kunnen grote impact hebben op uw organisatie. Of het nu gaat om een arbeidsgeschil, arbeidsongeschiktheid of ontslag: wij bieden helderheid, regie en juridische zekerheid. Wij staan cliënten bij met hoogwaardig, doeltreffend advies en een duidelijke strategie, gericht op het beste resultaat.",
      "Ons kantoor adviseert en procedeert over arbeidsrecht in de volle breedte. Wij adviseren onder meer over arbeidsovereenkomsten, flexibele arbeidsrelaties, schijnzelfstandigheid (DBA en zzp), cao’s, arbeidsvoorwaarden en reorganisaties.",
      "Daarnaast beschikken wij over bijzondere expertise op het gebied van medezeggenschap, onderzoeken intern en extern, ontslagtrajecten, grensoverschrijdend arbeidsrecht en strategische onderhandelingen. Wij adviseren over de juiste aanpak en begeleiden onze cliënten bij alle juridische vervolgstappen, met aandacht voor zorgvuldigheid, reputatie en resultaat.",
      "Wij combineren diepgaande vakkennis met een pragmatische aanpak en hebben oog voor zowel juridische als commerciële belangen. Van strategisch advies op de achtergrond tot stevige onderhandelingen en procedures: wij schakelen snel en doortastend wanneer dat nodig is. Wij beheersen het arbeidsrecht tot in detail en vertalen complexe vraagstukken naar oplossingen die in de praktijk werken. Daarbij bouwen wij aan langdurige relaties met onze cliënten, gebaseerd op vertrouwen, betrokkenheid en kwaliteit.",
      "Juist waar belangen groot zijn, maken onze expertise, discretie en strategische benadering het verschil.",
    ],
    subs: subs("reorganisatie-en-ontslag", "onderhandelen-en-contracteren", "medezeggenschap", "onderzoeken"),
  },
  geschillenbeslechting: {
    t: "Geschillenbeslechting",
    short: "Procederen, arbitrage en mediation: liever een oplossing dan een procedure.",
    intro: [
      <>
        Ook voor het voorkomen en oplossen van geschillen bent u bij ons aan het juiste adres. Waar mogelijk proberen wij geschillen op te lossen voordat het tot een procedure komt, maar indien nodig vertegenwoordigen wij u in juridische procedures bij rechtbanken, gerechtshoven en in arbitrageprocedures. Wij zijn gespecialiseerd in{" "}
        <Link href="/specialismen/ondernemingsrecht/corporate-litigation">corporate litigation</Link>,{" "}
        <Link href="/specialismen/geschillenbeslechting/commercial-litigation">commercial litigation</Link> en{" "}
        <Link href="/specialismen/geschillenbeslechting/mediation">mediation</Link>.
      </>,
      "Soms hebben partijen behoefte aan een onafhankelijke en onpartijdige gespreksleider, zonder zich er op voorhand aan te binden. Wij laten dan als procesbegeleider weten wat volgens ons de redelijke oplossing is van een geschil.",
    ],
    subs: subs("commercial-litigation", "mediation"),
  },
  "media-marketing": {
    t: "Media & Marketing",
    legal500: true,
    short: "Reclame, pers en publicaties, media en telecom.",
    intro: [
      "Höcker adviseert media die te maken krijgen met de grenzen van de vrijheid van meningsuiting of met mediaregulering, en merkhouders die willen adverteren volgens de regels.",
      IE_INTRO[1],
      IE_INTRO[2],
    ],
    subs: subs("reclamerecht", "persrecht", "media-telecom"),
  },
};

/** Old slugs that still resolve to a current specialism. */
export const SPEC_ALIAS: Record<string, SpecKey> = { "ie-media": "ie-ict", "dispute-resolution": "geschillenbeslechting" };

export const resolveSpec = (slug: string): SpecKey | null =>
  slug in SPEC ? (slug as SpecKey) : SPEC_ALIAS[slug] ?? null;

/* ---------- over ---------- */

export type Network = { h: string; b: string | null; u: string };
export const NETWORKS: Network[] = [
  {
    h: "Interlex Group",
    b: "The Interlex Group is een wereldwijd netwerk van toonaangevende, onafhankelijke en internationaal georiënteerde advocatenkantoren. Interlex heeft leden in meer dan 60 landen wereldwijd, die samen meer dan 9.000 advocaten tellen. De selectie van nieuwe leden vindt plaats aan de hand van strenge criteria waarmee de kwaliteit en snelheid van dienstverlening is gewaarborgd. Chambers Global heeft Interlex voor het vijfde achtereenvolgende jaar de hoogste ranking voor internationale advocatennetwerken gegeven: Band 1: Elite. Door het lidmaatschap van Interlex kunnen wij overal ter wereld een beroep doen op eerste klas advocatenkantoren waarmee wij een persoonlijke band hebben, waardoor onze cliënten overal ter wereld optimaal kunnen worden ondersteund. Höcker Advocaten is sinds 2004 lid van The Interlex Group.",
    u: "https://www.interlexgroup.com/",
  },
  {
    h: "Transatlantic Law International",
    b: "Transatlantic Law International is een dynamisch en innovatief internationaal netwerk dat de expertise van meer dan 100 onafhankelijke partners in alle belangrijke regio’s en zakelijke centra bundelt. Hierdoor is het mogelijk om wereldwijde en lokale juridische oplossingen te bieden via één enkel serviceplatform. Ons kantoor is reeds decennia de lokale partner van Transatlantic Law International.",
    u: "http://transatlanticlaw.com/",
  },
  { h: "Adlaw International", b: null, u: "http://adlawinternational.com/" },
  {
    h: "International Association of Entertainment Lawyers",
    b: "De International Association of Entertainment Lawyers (IAEL) is het toonaangevende internationale netwerk voor advocaten actief in de entertainment-, media- en technologiesector. De vereniging werd in 1977 officieel opgericht tijdens de MIDEM in Cannes en heeft zich sindsdien ontwikkeld tot een wereldwijde gemeenschap van advocaten die kennis en ervaring delen over juridische en commerciële vraagstukken in de entertainmentwereld. Marijn Kingma is onderdeel van de Executive Committee van de IAEL, waardoor ons kantoor nauw verbonden is met de top van de internationale entertainmentrechtpraktijk.",
    u: "http://iael.org/",
  },
  {
    h: "Avrio Advocati",
    b: "Höcker is trots lid van Avrio Advocati: een vooraanstaand internationaal netwerk van onafhankelijke advocatenkantoren, toegewijd aan juridische dienstverlening van topniveau over de hele wereld. Avrio Advocati is gebouwd op samenwerking, excellentie en integriteit, en verbindt juristen uit uiteenlopende rechtsstelsels om cliënten complete en naadloze juridische oplossingen te bieden.",
    u: "https://www.avrioadvocati.com/about-us/",
  },
];

export const PARTNERS: { h: string; b: string }[] = [
  {
    h: "Business Lounge NO&B",
    b: "Höcker Advocaten is sinds jaar en dag vaste partner van de NO&B Business Lounge, het zakelijke netwerk van Nationale Opera & Ballet. Als partner van dit netwerk draagt Höcker bij aan de ondersteuning van een van de meest toonaangevende cultuurinstellingen van Nederland. Deelname aan de Business Lounge biedt bovendien de kans om regelmatig in contact te komen met gelijkgestemden uit de top van het Nederlandse bedrijfsleven, de politiek en de culturele sector.",
  },
  {
    h: "Culture Club International Theater Amsterdam",
    b: "Daarnaast is Höcker Advocaten al jaren lid van de Culture Club van International Theater Amsterdam. Dankzij de steun van dit netwerk kan ITA investeren in bijzondere programmering, nieuw talent, ITA Academy, ITA Live en de instandhouding, ontwikkeling en verduurzaming van haar historisch pand.",
  },
  {
    h: "Stichting Urgenda",
    b: "Höcker is al jaren trotse partner van Stichting Urgenda; dé organisatie voor innovatie en duurzaamheid in Nederland. Höcker stond Urgenda bij in de inmiddels wereldberoemde klimaatzaak, en verleent ook op andere vlakken juridische bijstand aan Urgenda tegen sterk gereduceerde tarieven. Op die manier hoopt Höcker haar steentje bij te dragen aan een schonere en duurzamere wereld.",
  },
  {
    h: "JINC",
    b: "Höcker Advocaten is trouw partner van JINC, een Nederlandse organisatie die jongeren uit kansarme gezinnen helpt met onderwijs en loopbaanvoorbereiding om daardoor hun kansen op de arbeidsmarkt te vergroten. Sinds vele jaren steunt ons kantoor JINC in financiële zin en doen onze collega’s mee aan de vele projecten die JINC organiseert voor leerlingen. Zo zijn er meerdere keren per schooljaar leerlingen bij ons op kantoor voor een Bliksemstage, waarbij het absolute hoogtepunt is dat de leerlingen in toga hun zaak mogen bepleiten bij een rechter. We dragen JINC een zeer warm hart toe.",
  },
];

export const CLIENTS = [
  "Klinkende Taal", "ECNP", "Hydratec Industries", "MOJO", "Broodfonds", "Ravo Fayat Group",
  "Nationale Opera & Ballet", "Sony Interactive Entertainment", "Geldmaat", "Mediahuis Radio", "Urgenda",
  "Abonnementenland", "Stichting Brein", "European Space Agency", "Buma Stemra", "Stichting De Thuiskopie",
];

/* ---------- mensen ---------- */

export const TEAM_INTRO =
  "Ons team bestaat uit enthousiaste en bevlogen mensen die met plezier hun werk doen. Onze advocaten kennen het klappen van de zweep en weten wat er speelt bij hun cliënten waardoor zij advies op maat geven. Onmisbaar bij hun werk is een sterk team van ondersteuners, die zorgen dat alle processen op rolletjes lopen.";

/** Roles as on hocker.nl/ons-team, in filter order. Practice areas use the specialism id. */
export const TEAM_ROLES = [
  { id: "kantoordirecteur", t: "Kantoordirecteur" },
  { id: "ondernemingsrecht", t: "Ondernemingsrecht" },
  { id: "arbeidsrecht", t: "Arbeidsrecht" },
  { id: "ie-ict", t: "IE/ICT" },
  { id: "media-marketing", t: "Media & Marketing" },
  { id: "algemeen-belang", t: "Algemeen belang en collectieve acties" },
  { id: "geschillenbeslechting", t: "Geschillenbeslechting" },
  { id: "ondersteuning", t: "Ondersteuning" },
] as const;

export type TeamRole = (typeof TEAM_ROLES)[number]["id"];

export const teamRoleLabel = (id: TeamRole) => TEAM_ROLES.find((r) => r.id === id)!.t;

export const isSpecRole = (role: TeamRole): role is SpecKey => role in SPEC;

export type Person = {
  id: string;
  n: string | null;
  img: string;
  /** First practice area, used where a single specialism is needed. */
  spec?: SpecKey;
  roles: TeamRole[];
  bio?: string[];
  tags?: string[];
  news?: string[];
};

const person = (id: string, n: string, roles: TeamRole[], extra?: Pick<Person, "bio" | "tags" | "news">): Person => ({
  id,
  n,
  img: asset(`img/team/${id}.jpg`),
  roles,
  spec: roles.find(isSpecRole),
  ...extra,
});

export const PEOPLE: Person[] = [
  person("ilse-van-aert", "Ilse van Aert", ["arbeidsrecht"]),
  person("marnix-van-den-bergh", "Marnix van den Bergh", ["ondernemingsrecht"]),
  person("laurine-van-den-bos", "Laurine van den Bos", ["ondernemingsrecht", "geschillenbeslechting"]),
  person("joran-buijck", "Joran Buijck", ["ondernemingsrecht", "geschillenbeslechting", "algemeen-belang"]),
  person("herman-doeleman", "Herman Doeleman", ["geschillenbeslechting", "ondernemingsrecht"]),
  person("jytte-elfferich", "Jytte Elfferich", ["ie-ict", "media-marketing"]),
  person("rick-geerars", "Rick Geerars", ["ondernemingsrecht", "geschillenbeslechting", "algemeen-belang"]),
  person("hannah-vera-hess", "Hannah Vera Hess", ["arbeidsrecht"]),
  person("jasper-van-hulst", "Jasper van Hulst", ["arbeidsrecht"]),
  person("mick-hurks", "Mick Hurks", ["arbeidsrecht"]),
  person("paul-jongen", "Paul Jongen", ["ondernemingsrecht"]),
  person("suzanne-van-ketel", "Suzanne van Ketel", ["arbeidsrecht", "geschillenbeslechting"]),
  person("marijn-kingma", "Marijn Kingma", ["ie-ict", "media-marketing", "algemeen-belang"], {
    bio: [
      "Volgens Legal 500 een expert in het auteursrecht in de literaire, muziek- en audiovisuele sector.",
      "Schreef onder meer de editorial over AI-deals in de muziekindustrie.",
    ],
    tags: ["Auteursrecht", "Muziek en entertainment", "Literair en audiovisueel"],
    news: ["ai-deals-muziekindustrie"],
  }),
  person("anna-kranenburg", "Anna Kranenburg", ["arbeidsrecht"]),
  person("joep-meddens", "Joep Meddens", ["ie-ict", "media-marketing"], {
    bio: ["Volgens Legal 500 bedreven in reclamezaken: van het clearen van campagnes tot procedures bij de Reclamecodecommissie."],
    tags: ["Reclamerecht", "Clearen van campagnes", "Reclamecodecommissie"],
  }),
  person("jordy-mesman", "Jordy Mesman", ["arbeidsrecht"]),
  person("sterre-nijkamp", "Sterre Nijkamp", ["ondernemingsrecht"]),
  person("muriel-nolet", "Muriël Nolet", ["arbeidsrecht"]),
  person("janneke-popma", "Janneke Popma", ["ie-ict", "media-marketing"]),
  person("juliette-van-rij", "Juliëtte van Rij", ["arbeidsrecht"]),
  person("evert-sarolea", "Evert Sarolea", ["ondernemingsrecht", "algemeen-belang"]),
  person("laura-schalk", "Laura Schalk", ["ondernemingsrecht"]),
  person("barbara-scheurwater", "Barbara Scheurwater", ["ie-ict", "media-marketing"]),
  person("debby-steur", "Debby Steur", ["arbeidsrecht"]),
  person("diederik-tuyll-serooskerken", "Diederik van Tuyll van Serooskerken", ["ondernemingsrecht"]),
  person("marc-wolters", "Marc Wolters", ["ondernemingsrecht", "algemeen-belang"]),
  person("jolien-van-woudenberg", "Jolien van Woudenberg", ["ondernemingsrecht", "media-marketing", "algemeen-belang", "geschillenbeslechting"]),
  person("edwin-knoth", "Edwin Knoth", ["kantoordirecteur"]),
  person("martine-beekers-weij", "Martine Beekers-Weij", ["ondersteuning"]),
  person("jiska-van-den-berg", "Jiska van den Berg", ["ondersteuning"]),
  person("cindy-danielson-roubos", "Cindy Danielson-Roubos", ["ondersteuning"]),
  person("jolanda-jozen-van-der-niet", "Jolanda Jozen-van der Niet", ["ondersteuning"]),
  person("joan-moes-schoemaker", "Joan Moes-Schoenmaker", ["ondersteuning"]),
  person("chantal-oudt", "Chantal Oudt", ["ondersteuning"]),
];

export const personById = (id: string) => PEOPLE.find((p) => p.id === id);
export const personSpecs = (p: Person) => p.roles.filter(isSpecRole);
export const peopleIn = (spec: SpecKey) => PEOPLE.filter((p) => p.roles.includes(spec));

/* ---------- infopagina's ---------- */

export const INFO: Record<string, string> = {
  klachtenregeling: "Klachtenregeling",
  privacy: "Privacyverklaring",
  "algemene-voorwaarden": "Algemene voorwaarden",
  "rechtsgebieden-registratie": "Rechtsgebieden registratie",
};

export const CONTACT_TOPICS = [...SPEC_ORDER.map((k) => SPEC[k].t), "Werken bij Höcker", "Anders"];
