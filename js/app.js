(function(){
const IMG={
  hero:"assets/img/home-hero.jpg", avatar:"assets/img/nieuws-auteur.jpg", collage:"assets/img/over.jpg",
  p:["assets/img/team-collega-1.jpg","assets/img/team-collega-2.jpg","assets/img/team-collega-3.jpg","assets/img/team-collega-4.jpg","assets/img/team-collega-5.jpg","assets/img/team-collega-6.jpg","assets/img/team-collega-7.jpg"],
  x:{jytte:"assets/img/expert-jytte-elfferich.jpg",jolien:"assets/img/expert-jolien-van-woudenberg.jpg",janneke:"assets/img/expert-janneke-popma.jpg",joep:"assets/img/expert-joep-meddens.jpg",marijn:"assets/img/expert-marijn-kingma.jpg"},
  m:{a:"assets/img/nieuws-de-druk-om-het-goed-te-doen.jpg",b:"assets/img/jobs-groot.jpg",c:"assets/img/jobs-rechtsboven.jpg",d:"assets/img/contact.jpg",e:"assets/img/jobs-rechtsonder.jpg",g:"assets/img/nieuws-ai-deals-muziekindustrie.jpg",h:"assets/img/nieuws-wetgevingsoverzicht-2026.jpg",j:"assets/img/nieuws-ik-ga-op-reis.jpg"}
};
const ICON={
  arr:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 8h13M9 3l5 5-5 5"/></svg>',
  l:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 3 5 8l5 5"/></svg>',
  r:'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 3 5 5-5 5"/></svg>',
  chev:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 6 5 5 5-5"/></svg>',
  q:'<svg viewBox="0 0 80 60" fill="currentColor"><path d="M14 0c9 0 16 7 16 17 0 19-13 34-28 41l-2-4c9-5 15-13 16-21C7 33 0 27 0 17 0 7 6 0 14 0Zm44 0c9 0 16 7 16 17 0 19-13 34-28 41l-2-4c9-5 15-13 16-21-9 0-16-6-16-16C44 7 50 0 58 0Z"/></svg>',
  replay:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2.5 8a5.5 5.5 0 1 0 1.8-4.1M2.5 2v3.2h3.2"/></svg>'
};

/* ---------- content ---------- */
const INTRO="De belangrijkste reden dat veel gezichtsbepalende ondernemingen en organisaties al vele jaren samenwerken met Höcker voor al hun uitdagingen op het gebied van ondernemingsrecht, arbeidsrecht, informatierecht, IE, collectieve acties en geschillenbeslechting, is het diepgaande vertrouwen dat zij in ons stellen. Daarnaast vermijdt Höcker gemiddelden, zowel in persoonlijkheden als in prestaties. Wij stellen enkel de hoogste eisen aan onze mensen en ons werk. Echter, waar dergelijke ambities zich in de advocatuur niet zelden vertalen in uren overwerk, eindeloos lange teksten en torenhoge facturen, ageren wij juist tegen deze tirannie van ongebreidelde stortvloed aan paragrafen en gedeclareerde uren.";
const KEEP=["Höcker","vermijdt","lange","teksten"];

const QUOTES=[
  {t:"I like the lawyers and the atmosphere at the office; it is not too big so we get close contact with them and I sense they have a real involvement in our practices and our concerns. I also think the firm is strong strategically.",s:"Chambers Europe"},
  {t:"Highly regarded for its expertise in the media and entertainment sectors.",s:"Legal 500"}
];
const NEWS=[
  {slug:"ai-deals-muziekindustrie",d:"13 maart 2017",a:"Martyn Top",t:"AI-deals in de muziekindustrie: oplossing voor de nieuwe value gap?",img:"g",
   x:"De opkomst van AI betekent een nieuwe realiteit voor alle creatieve sectoren. Dat geldt ook voor de muziekindustrie: met generatieve AI-modellen zoals Suno en Udio kan iedereen opeens muziek schrijven en produceren. Dat heeft grote gevolgen voor de streamingdiensten die overspoeld worden met AI-gegenereerde content. Zijn AI-deals in de muziekindustrie de oplossing voor de value gap? Marijn Kingma schreef een editorial over deze ontwikkeling."},
  {slug:"de-druk-om-het-goed-te-doen",d:"23 februari 2026",a:"Front",t:"De druk om het goed te doen",img:"a"},
  {slug:"ik-ga-op-reis",d:"17 februari 2026",a:"Front",t:"Ik ga op reis en ik krijg mee…",img:"j"},
  {slug:"wetgevingsoverzicht-2026",d:"3 februari 2026",a:"Juliëtte van Rij",t:"Wetgevingsoverzicht 2026",img:"h"}
];
const EXPERTS=[["jytte","Jytte Elfferich"],["jolien","Jolien van Woudenberg"],["janneke","Janneke Popma"],["joep","Joep Meddens"],["marijn","Marijn Kingma"]];
const SPEC5={
  "arbeidsrecht":{t:"Arbeidsrecht",
    short:"Reorganisatie, ontslag, medezeggenschap en onderzoeken: helderheid, regie en juridische zekerheid.",
    intro:[
      "Arbeidsrechtelijke vraagstukken kunnen grote impact hebben op uw organisatie. Of het nu gaat om een arbeidsgeschil, arbeidsongeschiktheid of ontslag: wij bieden helderheid, regie en juridische zekerheid. Wij staan cliënten bij met hoogwaardig, doeltreffend advies en een duidelijke strategie, gericht op het beste resultaat.",
      "Ons kantoor adviseert en procedeert over arbeidsrecht in de volle breedte. Wij adviseren onder meer over arbeidsovereenkomsten, flexibele arbeidsrelaties, schijnzelfstandigheid (DBA en zzp), cao’s, arbeidsvoorwaarden en reorganisaties.",
      "Daarnaast beschikken wij over bijzondere expertise op het gebied van medezeggenschap, onderzoeken intern en extern, ontslagtrajecten, grensoverschrijdend arbeidsrecht en strategische onderhandelingen. Wij adviseren over de juiste aanpak en begeleiden onze cliënten bij alle juridische vervolgstappen, met aandacht voor zorgvuldigheid, reputatie en resultaat.",
      "Wij combineren diepgaande vakkennis met een pragmatische aanpak en hebben oog voor zowel juridische als commerciële belangen. Van strategisch advies op de achtergrond tot stevige onderhandelingen en procedures: wij schakelen snel en doortastend wanneer dat nodig is. Wij beheersen het arbeidsrecht tot in detail en vertalen complexe vraagstukken naar oplossingen die in de praktijk werken. Daarbij bouwen wij aan langdurige relaties met onze cliënten, gebaseerd op vertrouwen, betrokkenheid en kwaliteit.",
      "Juist waar belangen groot zijn, maken onze expertise, discretie en strategische benadering het verschil."],
    subs:[
      {id:"reorganisatie-en-ontslag",t:"Reorganisatie en ontslag",blocks:[
        {p:"Of het nu een individueel of collectief ontslag betreft, een statutair bestuurder, een topper (Wet Normering Topinkomens) of een reguliere werknemer, we helpen u graag. Voor of achter de schermen staan wij u bij: met het inzetten van een procedure of juist met het vermijden ervan door middel van bijvoorbeeld een vaststellingsovereenkomst of een mediation. We denken graag mee over de insteek. Ook verzorgen we de begeleiding, zo nodig het overleg met de OR/vakbonden, het opstellen van een sociaal plan en de beëindigingsprocedure."},
        {lead:"Daarbij kunt u denken aan:"},
        {l:["Begeleiding en uitzetten van een strategie aan de start van een ontslagdossier","Begeleiden van een adviestraject met de OR","Onderhandelingen over een sociaal plan met de vakbonden","Coördinatie en uitvoering van de individuele ontslagzaken","En mocht een onderhandeling niet slagen? Dan brengen we het voor de rechter."]}]},
      {id:"onderhandelen-en-contracteren",t:"Onderhandelen en contracteren",blocks:[
        {p:"Waar wordt samengewerkt, moeten soms compromissen worden gesloten. Dat geldt ook binnen arbeidsrelaties. Wij adviseren dagelijks werkgevers bij het vinden van passende oplossingen voor hun organisatie. Daarbij zorgen wij er ook voor dat alle afspraken contractueel juridisch correct zijn vastgelegd zodat u zich daar geen zorgen over hoeft te maken."},
        {lead:"Denk hierbij aan zaken als:"},
        {l:["Signaleren van zwakke plekken in een dossier","Strategisch onderhandelen en procederen in ontslagzaken","Opstellen en herzien van arbeidsovereenkomsten","Advisering over non-concurrentiebedingen","Advisering over flexibele arbeidsrelaties"]}]},
      {id:"medezeggenschap",t:"Medezeggenschap",blocks:[
        {p:"Wij hebben diepgaande kennis van het medezeggenschapsrecht. Bij reorganisaties, een overgang van onderneming, maar ook bij (wijziging van) personeelsbeleid zoals bijvoorbeeld bij verlof, ziekte en bonussen, kan de OR een belangrijke rol spelen. Wij kunnen de WOR strategisch toepassen om voor u een optimaal resultaat te bereiken, en houden rekening met de (politieke) gevoeligheden rondom de verhouding tussen een bestuurder en ondernemingsraad. Wij adviseren en begeleiden, en doen dat zowel aan de zijde van ondernemingsraden als aan de zijde van de ondernemer."},
        {lead:"Het gaat daarbij om zaken als:"},
        {l:["Inrichting structuur (OR, COR, GOR, etc.)","Afbakening rollen/bevoegdheden","Adviseren over advies- en instemmingsaanvragen","Ondersteuning vaststellen sociale plannen","Begeleiding bij fusies en overnames","Ontslagbescherming OR-leden"]}]},
      {id:"onderzoeken",t:"Onderzoeken",blocks:[
        {p:"Een relatief nieuw fenomeen in het arbeidsrecht is het interne en externe onderzoek. Het kan hierbij gaan om een onderzoek naar de cultuur op de werkvloer of een persoonsgebonden onderzoek, bijvoorbeeld naar aanleiding van een melding van grensoverschrijdend gedrag. Wij hebben ruime ervaring op dit gebied en staan zowel werkgevers als werknemers bij. Daarnaast onderhouden wij goede contacten met een aantal onderzoeksbureaus die wij desgewenst kunnen inschakelen. Dergelijke onderzoeken liggen vaak gevoelig en vragen om een zorgvuldige aanpak. Wij begrijpen dat als geen ander en bieden ondersteuning op maat, met oog voor zowel de juridische als de menselijke kant van de zaak."},
        {lead:"Zaken die kunnen spelen zijn:"},
        {l:["De keuze om intern of extern onderzoek te (laten) doen","Het formuleren van een goede onderzoeksvraag","Het adviseren over een onderzoeksbureau","Het begeleiden gedurende het onderzoekstraject","Advies over sancties en eventuele andere gevolgen die uit het onderzoek voortvloeien"]}]}
    ]},
  "ondernemingsrecht":{t:"Ondernemingsrecht",
    short:"Overnames, joint ventures en de contracten waar uw onderneming op draait.",
    intro:[
      "Als u gaat samenwerken met een andere partij, is het verstandig om goede juridische afspraken te maken. Wij adviseren daarin en kunnen u ook bijstaan bij onderhandelingen of een procedure in geval van een conflict.",
      "Wij adviseren bij (internationale) overnames, joint ventures, participaties en herstructureringen. Wij begeleiden zowel kopers als verkopers desgewenst vanaf de eerste onderhandelingen, verrichten (vendor) due diligence en maken en beoordelen de transactiedocumentatie tot signing en closing.",
      "Daarnaast kunnen wij allerlei handelscontracten voor u opstellen, bijvoorbeeld voor inkoop- of verkoopovereenkomsten met leveranciers. Ook voor franchiseovereenkomsten en sale-and-lease-back overeenkomsten, samenwerkingsovereenkomsten of Service Level Agreements (SLA’s) bent u bij ons aan het goede adres.",
      "Bij conflicten tussen de belanghebbenden van ondernemingen treden wij ook graag voor u op. Zoals bij aandeelhoudersgeschillen, conflicten omtrent corporate governance, enquêteprocedures (wanbeleid) en conflicten rondom commerciële contracten.",
      "Wij treden op voor Nederlandse en internationale partijen variërend van (groot) mkb tot multinationals, maar ook voor non-profitorganisaties."],
    subs:[
      {id:"m-a",t:"M&amp;A",blocks:[
        {p:"Wij treden op voor (Nederlandse en buitenlandse) kopers en verkopers bij overnames, joint ventures, participaties en herstructureringen. Daarbij staan wij dicht naast onze cliënten en zorgen wij dat het hele traject van aanbieding, intentieovereenkomst, due diligence en transactiedocumentatie goed verloopt. Onze grote ervaring hierbij helpt u bij de onderhandeling en om te beoordelen of de voorwaarden marktconform zijn. Door ons uitgebreide netwerk beschikken wij over diverse adviseurs op het gebied van bedrijfswaarderingen, fiscale zaken, corporate finance en notariaat."},
        {lead:"Denk hierbij aan:"},
        {l:["Strategische overnames (aandelen/activa-passiva)","MBO’s / MBI’s","Juridische splitsingen/fusies","Joint ventures","Participaties"]}]},
      {id:"corporate-commercial-contracts",t:"Corporate &amp; commercial contracts",blocks:[
        {p:"Wij adviseren u graag over de voor uw onderneming essentiële contracten, zoals overeenkomsten met belangrijke leveranciers en klanten. Wij kennen de bijzonderheden en de valkuilen van allerlei soorten bijzondere contracten en de toepasselijke (Nederlandse en ook vaak Europese) wetgeving. We helpen u graag bij overeenkomsten rondom koop/verkoop, opdracht, bemiddeling, distributie, agentuur, franchise en intellectueel eigendom. Ook hebben wij specifieke kennis over reisovereenkomsten in huis. Wanneer advies noodzakelijk is over contracten die door buitenlands recht worden beheerst, kunnen wij een beroep doen op ons uitgebreide internationale netwerk en u in verbinding brengen met een collega-advocaat ter plaatse."},
        {lead:"Het gaat daarbij om zaken als:"},
        {l:["Koop/verkoopovereenkomsten","Bemiddelingscontracten","Distributieovereenkomsten","Opdrachtovereenkomsten","Agentuur- en franchiseovereenkomsten"]}]}
    ]},
  "ie-media":{t:"IE en Media",legal500:true,
    short:"Auteursrecht, merken, IT, privacy, media, reclame en pers.",
    intro:[
      "Van oudsher is Höcker een toonaangevend kantoor op het gebied van intellectuele eigendom en media. Wij staan makers en hun belangenbehartigers bij die hun rechten willen beschermen, net als ondernemingen die het gebruik van producten en diensten goed willen regelen, of die willen weten of zij voldoen aan de privacywetgeving. Ook adviseren wij media die te maken krijgen met de grenzen van de vrijheid van meningsuiting, of met mediaregulering, IT-aanbieders die vragen hebben over wat wel en niet mag in het informatietijdperk, en merkhouders die willen adverteren volgens de regels. Wij adviseren over de beste manieren om ideeën, plannen en werken te beschermen, en helpen bij het opstellen en uitonderhandelen van maatwerkovereenkomsten. Door u zorgen uit handen te nemen, besparen wij u tijd, geld en energie.",
      "Als procederen nodig is, staan wij ook voor u klaar. Wij deinzen niet terug voor complexe zaken over principiële vraagstukken. Wij beschikken over jarenlang opgebouwde kennis over het opzetten en uitvoeren van kostenefficiënte handhavingsstrategieën.",
      "Vanwege onze deelname aan internationale netwerken zoals Adlaw International en de International Association of Entertainment Lawyers kunnen wij u ook snel en kostenefficiënt bijstaan bij grensoverschrijdende vraagstukken en geschillen."],
    subs:[
      {id:"auteursrecht",t:"Auteursrecht en naburig recht",blocks:[
        {p:"Auteursrecht staat aan het hart van wat onze cliënten doen. Omdat zij maken, produceren, uitgeven, uitvoeren, uitzenden, distribueren of collectief rechten exploiteren of handhaven. Het IE-team van Höcker Advocaten adviseert over alle aspecten van het maken en exploiteren van creatieve werken, van de vraag hoe een idee veilig te pitchen tot advies over contracten, samenwerkingen en licentiestrategieën. Wij werken veel voor organisaties in de entertainmentbranche, en kennen het muziekrecht en filmrecht van binnen en buiten."},
        {p:"Wij hebben ruime ervaring in handhaving, zowel in de aanpak van de handel in illegale producten als het voeren van complexe inbreukprocedures. Ook staan wij collectieve beheerorganisaties bij in alle aspecten van de uitoefening van auteurs- en naburige rechten en adviseren wij over governance en toezichtsvraagstukken."},
        {lead:"Wij specialiseren ons onder meer in:"},
        {l:["Inbreukprocedures, onderzoek, bewijsbeslag, contact met douaneautoriteiten","Collectief beheer van auteursrechten: licenties, tarieven, corporate governance, geschillen","Nieuwe (online) distributiemodellen","Contracten: licenties, (digitale) distributie, uitgeefovereenkomsten, artiestencontracten"]}]},
      {id:"merkenrecht-modellenrecht",t:"Merkenrecht en modellenrecht",blocks:[
        {p:"Een sterk merk of onderscheidend productdesign is vaak van grote waarde voor een onderneming. Het merken- en modellenrecht biedt juridische bescherming tegen namaak, verwarring of misbruik, maar alleen als die rechten op de juiste manier worden vastgelegd én gehandhaafd."},
        {lead:"Het gaat daarbij om zaken als:"},
        {l:["Inbreukprocedures, onderzoek, bewijsbeslag, contact met douaneautoriteiten","Contracten: licenties, aktes van overdracht, vaststellingsovereenkomsten"]}]},
      {id:"it",t:"IT",blocks:[
        {p:"Ieder bedrijf heeft een veelheid aan IT-contracten. Voor die contracten geldt eigenlijk hetzelfde als voor de gecontracteerde IT-diensten zelf. Je wilt een dienstverlener die de techniek ervan beheerst en die jou kan helpen om inzichtelijk te maken wat je nodig hebt en welke keuzes je kunt maken. En natuurlijk wil je een dienstverlener die er meteen (althans binnen de in de SLA overeengekomen termijnen) voor je is als er onverhoopt iets misgaat…"},
        {p:"Höcker Advocaten heeft een jarenlange ervaring opgebouwd op het gebied van IT-recht. Door erover te adviseren en procederen, en door er postdoctorale opleidingen over te volgen en te geven. Daardoor weten we wat je kunt vragen in een onderhandeling en kunnen we inzicht geven in wat je kunt verwachten in een geschil. Zowel aan de leverancierskant als aan de gebruikerskant zijn wij in staat te denken in oplossingen, juist omdat we beide kanten kennen. Het is belangrijk om te waken voor een te grote leveranciersafhankelijkheid, maar als leverancier investeren in een relatie kan alleen als die relatie robuust is en blijft. Goede procesafspraken kunnen veel doen om vertrouwen in elkaar en in de samenwerking te versterken. Kwesties die opkomen pakken we snel op, maar liever nog voorkomen we toekomstige problemen door deze al bij het aangaan van overeenkomsten bespreekbaar en handelbaar te maken. Bij dit alles houden we de privacywetgeving scherp in het vizier, en vinden we praktische oplossingen om daar mee om te gaan."},
        {lead:"Het gaat daarbij om zaken als:"},
        {l:["Bescherming software, websites, businessmodellen","Nieuwe distributiemodellen: internet, web 2.0, social media, cloud","Contracten: distributie, outsourcing, hosting, SaaS, cloud","Continuïteit in overnames","Bewijs veiligstellen/vergaren in digitale omgeving; bewijsbeslag; e-discovery","Gerechtelijke procedures, arbitrage, mediation, SGOA"]}]},
      {id:"persoonsgegevens",t:"Bescherming van persoonsgegevens",blocks:[
        {p:"Gegevensbescherming speelt een steeds belangrijkere rol binnen de maatschappij. Iedere ondernemer verwerkt persoonsgegevens, maar lang niet iedere ondernemer weet hoe hij daarmee om moet gaan. Wij hebben uitgebreide ervaring met het adviseren over de Algemene Verordening Gegevensbescherming en aanverwante wetgeving, en helpen u graag de privacywetgeving na te leven. Wij denken daarbij ook mee over praktische oplossingen. Privacybeleid moet niet enkel kloppen op papier, maar ook in de praktijk uitvoerbaar zijn. Uiteraard assisteren wij cliënten ook bij het melden van datalekken en het reageren op (inzage)verzoeken van betrokkenen."},
        {p:"Mocht het mis gaan, kunnen wij snel schakelen in procedures over (inbreuken op) de AVG. Wij hebben daarbij bijzondere aandacht voor zaken op het snijvlak van auteursrecht en privacy, en staan cliënten bij in het op een rechtmatige manier handhaven van hun rechten bij online inbreuken."},
        {lead:"Wij adviseren onder meer over:"},
        {l:["Voorkomen van en omgaan met datalekken","Privacybeleid binnen en buiten de onderneming","Verwerkersovereenkomsten","Procedures over opgelegde boetes","Internationaal gegevensverkeer"]}]},
      {id:"media-telecom",t:"Media- en telecommunicatierecht",blocks:[
        {p:"Het mediarecht en het telecommunicatierecht raakt aan allerlei onderwerpen die met communicatie te maken hebben: bijvoorbeeld wat er wel en niet mag in televisie- en radio-uitzendingen, hoe radiofrequenties worden verdeeld, en wat de regels zijn op het gebied van <i>spam</i> en <i>cookies</i>. Wij staan mediabedrijven, omroepen, platforms en IT-aanbieders bij in dit snel veranderende speelveld. Of het nu gaat om een uitzending, een nieuwe mediadienst of een conflict met een toezichthouder: wij zorgen dat onze cliënten juridisch stevig staan."},
        {lead:"U kunt bij ons terecht voor:"},
        {l:["Bestuursrechtelijke procedures over de toekenning of wijziging van frequentievergunningen","Juridische bijstand bij vergunningaanvragen","Advies over wat wel en niet mag op het gebied van spam en cookies","Bijstand in bezwaar en beroep rondom bestuurlijke maatregelen opgelegd door het Commissariaat voor de Media of de Rijksinspectie Digitale Infrastructuur"]}]},
      {id:"reclamerecht",t:"Reclamerecht",blocks:[
        {p:"Höcker Advocaten heeft een nieuwe formule! Wij mogen haast wel stellen dat we verbeterd werkzaam zijn. En zie onze huiskleur: Höcker is hartstikke groen! Misschien is het bij een kritische beschouwing eerder groen-grijs, maar in elk geval zijn we <i>onderweg naar groen</i>. Toch?"},
        {p:"Reclamerecht is een breed vakgebied. Het gaat om toelaatbaarheid van claims zoals in de alinea hiervoor. Wat of wie groen is of CO2-neutraal, is immers voer voor juristen. Maar denk ook aan het gebruik van persoonsgegevens bij adverteren online. Welke producten mag je naar welke doelgroep marketen? En hoe bepaal je eigenlijk op welke doelgroep een podcast is gericht? Welke regels gelden er ook alweer voor winacties? En geeft u de influencers die u inzet eigenlijk wel de juiste huisregels mee?"},
        {p:"Bij Höcker Advocaten kennen we alle hoeken van het reclamerecht. Wij staan merkhouders bij die willen adverteren volgens de regels. En wie eerlijk speelt, wil ook de concurrentie aan de regels houden. Met een snelle sommatie, en waar nodig een procedure bij de rechtbank of de Reclame Code Commissie. Wie zelf aangesproken wordt, kan ook bij ons terecht: via een grondig verweer of een praktische schikking houden we u uit de wind."},
        {p:"Reclamebureaus weten al jaren de weg naar ons kantoor te vinden. Zij kunnen dankzij ons hun klanten comfort bieden door campagnes juridisch in orde af te leveren. Het zogenaamde ‘clearen’ vooraf is een belangrijk onderdeel van wat wij doen. Ook denken we met u mee als u afspraken maakt: of het nu gaat om een raamwerkovereenkomst voor multiterritoriale dienstverlening of om die adequate influencer guide, wij weten wat u niet mag vergeten."},
        {lead:"Het gaat daarbij om zaken als:"},
        {l:["Clearen van campagnes","Procedures bij de Reclame Code Commissie en rechter"]}]},
      {id:"persrecht",t:"Persrecht en publicaties",blocks:[
        {p:"De vrijheid van meningsuiting is een fundamenteel recht, maar niet alles mag worden gezegd of geschreven. Publicaties kunnen onrechtmatig zijn, bijvoorbeeld omdat ze inbreuk maken op de eer of goede naam. Wij adviseren en procederen over de (on)rechtmatigheid van publicaties, in de volksmond ook wel smaad en laster genoemd."},
        {p:"Een belangrijk deel van ons werk bestaat uit het vooraf inschatten van de risico’s van publicaties. Welke uitspraken worden gedragen door de beschikbare feiten en hoe ver kun je in de praktijk gaan? Ook treden we op voor personen, bedrijven en instellingen die onderwerp zijn van (voorgenomen) publicaties en denken we strategisch mee. Is optreden verstandig? Wat is het risico van extra publiciteit? En wat levert een procedure uiteindelijk op? Mocht het tot een procedure komen, dan voeren wij die voor u. Dat doen we bij de rechtbank, maar ook bij de Raad voor de Journalistiek."},
        {lead:"U kunt bij ons terecht voor:"},
        {l:["Advies over risico’s bij een publicatie","(Kort geding) procedures over verbod op publicatie en schade"]}]}
    ]},
  "algemeen-belang":{t:"Algemeen belang en collectieve acties",
    short:"Collectieve acties en algemeen belang-acties, van massaschade tot de Urgenda klimaatzaak.",
    intro:[
      "Soms is een juridische berg zo hoog, dat die voor een individuele klimmer nauwelijks te bedwingen valt. Gelukkig kan onrecht ook gezamenlijk worden aangepakt, via collectieve of algemeen belang-acties. Höcker helpt daarbij.",
      "Bijvoorbeeld door via een collectieve actie erkenning voor en vergoeding van berokkende schade te krijgen. Höcker hielp in dit soort procedures gedupeerden van overkreditering om op te komen tegen banken die hun zorgplicht verzaakten en daaraan verdienden. Voor minderheidsaandeelhouders van een beursgenoteerde vennootschap konden we voorkomen dat de meerderheidsaandeelhouder voor een fractie van de waarde hun aandelen dreigde over te nemen. Dit soort zaken kan ook gaan over productaansprakelijkheid vanwege een productiefout, over de aardbevingsschade in Groningen of over de schade als gevolg van een groot datalek.",
      "Algemeen belang-acties maken het mogelijk om in rechte op te komen voor maatschappelijke belangen die iedereen raken. Denk aan milieu en klimaat, privacy, voedselveiligheid en consumentenrechten. Dit soort procedures zijn vaak gericht tegen de overheid, maar ook bedrijven kunnen worden aangesproken. Wij hebben in dit soort zaken, veelal gebaseerd op artikel 3:305a BW, een jarenlange ervaring opgebouwd.",
      "Namens omwonenden van akkers eisen wij van lelietelers dat ze hun gifgebruik beteugelen. Stadsbewoners helpen we om hun gemeente aan te spreken op diens zelfopgelegde plicht het aantal toeristen binnen perken te houden. En voor de creatieve industrie vorderden we dat sites met illegale films, games en muziek werden afgesloten. Maar het bekendste voorbeeld is ongetwijfeld de Urgenda klimaatzaak. In die zaak vroegen we de rechter om de Staat der Nederlanden te herinneren aan zijn zorgplicht door in elk geval aan de minimale internationale afspraken over uitstootreductie te voldoen. De rechtbank, het hof en de Hoge Raad gaven Urgenda gelijk en bevolen de Staat de uitstoot van CO2 verder te reduceren.",
      "Deze zaken doen ertoe. We zijn dan ook trots op de vele jaren dat we op dit vlak actief zijn."],
    subs:[
      {id:"maatschappelijke-zorgplichten",t:"Maatschappelijke zorgplichten",blocks:[
        {p:"Eigenbelang, mits in gezonde mate, is de motor van ambitie en maatschappelijke vooruitgang. Maar er zijn grenzen. Gedrag mag niet maatschappelijk onaanvaardbaar zijn. Dat geldt voor iedereen, maar voor sommigen wel in het bijzonder. We vinden bijvoorbeeld van de overheid, de bank, de kredietgever, de zorginstelling, de bestuurder van een vennootschap, of de toezichthouder dat ze niet slechts aan hun eigen gewin mogen denken, maar ook een maatschappelijke verantwoordelijkheid en maatschappelijke zorgplicht hebben. Het verzaken van die maatschappelijke zorgplicht leidt tot aansprakelijkheid."},
        {lead:"Het gaat daarbij om zaken als:"},
        {l:["Productaansprakelijkheid","Milieuaansprakelijkheid","Bancaire aansprakelijkheid"]}]},
      {id:"massaschade",t:"Massaschade",blocks:[
        {p:"Ambachtelijke producten zijn er haast niet meer: alles is massaproductie. Ook onze activiteiten worden steeds grootschaliger. Als er ergens iets misgaat, zijn de gevolgen dus ook massaal en grootschalig, met veel benadeelden of slachtoffers. Er zijn tal van voorbeelden: lekkende borstimplantaten, lekkende waterkruiken, medicijnen met schadelijke bijwerkingen, werken met asbest, aardbevingsschade door gaswinning, Q-koorts, legionella-besmetting."},
        {p:"We spreken in dit soort gevallen van massaschade. Het Nederlands aansprakelijkheidsrecht reikt deze slachtoffers de hand: het is mogelijk collectief te procederen tegen de aansprakelijke partij, en als er een schikking wordt getroffen kan die desgewenst ‘algemeen verbindend’ worden verklaard zodat alle slachtoffers daarvan kunnen meeprofiteren."}]}
    ]},
  "dispute-resolution":{t:"Dispute Resolution",
    short:"Corporate en commercial litigation, arbitrage en mediation.",
    intro:[
      "Ook voor het voorkomen en oplossen van geschillen bent u bij ons aan het juiste adres. Waar mogelijk proberen wij geschillen op te lossen voordat het tot een procedure komt, maar indien nodig vertegenwoordigen wij u in juridische procedures bij rechtbanken, gerechtshoven en in arbitrageprocedures. Wij zijn gespecialiseerd in <a href=\"#/specialismen/dispute-resolution/corporate-litigation\">corporate litigation</a>, <a href=\"#/specialismen/dispute-resolution/commercial-litigation\">commercial litigation</a> en <a href=\"#/specialismen/dispute-resolution/mediation\">mediation</a>.",
      "Soms hebben partijen behoefte aan een onafhankelijke en onpartijdige gespreksleider, zonder zich er op voorhand aan te binden. Wij laten dan als procesbegeleider weten wat volgens ons de redelijke oplossing is van een geschil."],
    subs:[
      {id:"corporate-litigation",t:"Corporate litigation",blocks:[
        {p:"Wij treden voor u op bij conflicten tussen de belanghebbenden van ondernemingen. Regelmatig zijn wij betrokken bij aandeelhoudersgeschillen, conflicten omtrent corporate governance, enquêteprocedures (wanbeleid), en bij de uitkoop van aandeelhouders en conflicten rondom commerciële contracten. Wij adviseren en onderhandelen met een scherp oog op de mogelijkheden van een minnelijke regeling. Als het nodig is voeren wij procedures, bijvoorbeeld bij de Ondernemingskamer van het gerechtshof Amsterdam. Wij treden ook geregeld op als Ondernemingskamer-functionaris, zoals: onderzoeker, bestuurder, commissaris of beheerder van aandelen."},
        {lead:"Het gaat daarbij om zaken als:"},
        {l:["Aandeelhoudersgeschillen","Uitkoopprocedures","Corporate governance","Enquêteprocedures"]}]},
      {id:"commercial-litigation",t:"Commercial litigation",blocks:[
        {p:"Geschillen zijn vaak onvermijdelijk in een zakelijke omgeving. Denk aan conflicten over de uitvoering of uitleg van contracten, betalingsgeschillen, aansprakelijkheidskwesties of geschillen tussen handelspartijen."},
        {p:"Onze Commercial Litigation-praktijk richt zich op het beslechten van complexe zakelijke geschillen voor nationale en internationale ondernemingen. Wij beschikken over ruime ervaring met bodemprocedures, kort gedingen, hoger beroep en arbitrage, en werken waar nodig nauw samen met specialisten uit andere rechtsgebieden."},
        {lead:"U kunt bij ons terecht voor:"},
        {l:["Contractuele geschillen en interpretatievraagstukken","Handels- en betalingsgeschillen","Aansprakelijkheids- en schadeclaims","Geschillen in commerciële samenwerkingen, distributie- en agentuurrelaties","Zekerheden en verhaal","Nationale en internationale arbitrage en andere vormen van alternatieve geschillenbeslechting"]}]},
      {id:"mediation",t:"Mediation",blocks:[
        {lead:"Conflicten komen vaak voor in een zakelijke setting. Denk hierbij aan:"},
        {l:["Spanningen tussen bestuurders binnen een onderneming","Onderlinge conflicten tussen aandeelhouders","Conflicten met werknemers","Verschillen in de uitleg van een contract","Geschillen in de relatie tussen klanten en leveranciers","Geschillen bij een bedrijfsovername"]},
        {p:"Dergelijke conflicten zetten niet zelden de prestaties en financiële resultaten onder druk. Het is dan belangrijk dat zij snel en efficiënt worden opgelost. Mediation kan in die gevallen uitkomst bieden."},
        {h:"Wat is mediation?"},
        {p:"Mediation is een professionele en gestructureerde methode waarbij een neutrale bemiddelingsdeskundige, de mediator, de communicatie en onderhandelingen tussen partijen begeleidt. Het doel is om in korte tijd tot een gezamenlijk gedragen besluit te komen. Zelfbeschikking van partijen, vrijwilligheid en vertrouwelijkheid staan voorop."},
        {h:"Voordelen van mediation"},
        {l:["Mediation is tijdbesparend: deelnemers hebben zelf de snelheid in de hand.","Mediation bespaart kosten: het is in de regel een stuk goedkoper dan een juridische procedure.","Mediation biedt partijen de mogelijkheid een oplossing te bereiken die meer omvat dan een uitspraak van de rechter. Een rechterlijke uitspraak is beperkt tot de vraag die aan de rechter wordt voorgelegd. In een mediation kunnen allerlei onderwerpen aan bod komen.","Omdat de partijen er samen uitgekomen zijn, is de kans groot dat de uitkomst ook in de toekomst door partijen gedragen wordt.","Niemand lijdt gezichtsverlies.","Mediation geschiedt op basis van geheimhouding; wat tijdens een mediation wordt besproken valt onder de geheimhoudingsplicht. De geheimhoudingsplicht geldt voor zowel de deelnemende partijen als ook voor de mediator. Dit betekent geen onnodige en schadelijke media-aandacht en geen reputatieschade."]},
        {h:"Höcker mediators"},
        {p:"Onze mediators zijn tevens advocaat. Hierdoor kennen zij het juridische speelveld, weten zij waar partijen rekening mee moeten houden en wat de valkuilen zijn."}]}
    ]}
};
const _sub=(k,id)=>SPEC5[k].subs.find(x=>x.id===id);
const _ie=SPEC5["ie-media"].intro;
const SPEC={
  "ondernemingsrecht":{t:"Ondernemingsrecht",short:"Overnames, joint ventures, contracten en geschillen tussen aandeelhouders.",
    intro:SPEC5.ondernemingsrecht.intro,subs:[...SPEC5.ondernemingsrecht.subs,_sub("dispute-resolution","corporate-litigation")]},
  "algemeen-belang":{t:"Algemeen belang",short:"Collectieve acties en algemeen belang-acties, van massaschade tot de Urgenda klimaatzaak.",
    intro:SPEC5["algemeen-belang"].intro,subs:SPEC5["algemeen-belang"].subs},
  "ie-ict":{t:"IE/ICT",short:"Auteursrecht, merken en modellen, IT en de bescherming van persoonsgegevens.",
    intro:[_ie[0],_ie[1],_ie[2]],subs:["auteursrecht","merkenrecht-modellenrecht","it","persoonsgegevens"].map(id=>_sub("ie-media",id))},
  "arbeidsrecht":{t:"Arbeidsrecht",short:SPEC5.arbeidsrecht.short,intro:SPEC5.arbeidsrecht.intro,subs:SPEC5.arbeidsrecht.subs},
  "geschillenbeslechting":{t:"Geschillenbeslechting",short:"Procederen, arbitrage en mediation: liever een oplossing dan een procedure.",
    intro:SPEC5["dispute-resolution"].intro.map(p=>p.replace("#/specialismen/dispute-resolution/corporate-litigation","#/specialismen/ondernemingsrecht/corporate-litigation").replace(/#\/specialismen\/dispute-resolution\//g,"#/specialismen/geschillenbeslechting/")),
    subs:[_sub("dispute-resolution","commercial-litigation"),_sub("dispute-resolution","mediation")]},
  "media-marketing":{t:"Media & Marketing",legal500:true,short:"Reclame, pers en publicaties, media en telecom.",
    intro:["Höcker adviseert media die te maken krijgen met de grenzen van de vrijheid van meningsuiting of met mediaregulering, en merkhouders die willen adverteren volgens de regels.",_ie[1],_ie[2]],
    subs:["reclamerecht","persrecht","media-telecom"].map(id=>_sub("ie-media",id))}
};
const SPEC_ORDER=["ondernemingsrecht","algemeen-belang","ie-ict","arbeidsrecht","geschillenbeslechting","media-marketing"];
const SPEC_ALIAS={"ie-media":"ie-ict","dispute-resolution":"geschillenbeslechting"};
const NETWORKS=[
  ["Interlex Group","The Interlex Group is een wereldwijd netwerk van toonaangevende, onafhankelijke en internationaal georiënteerde advocatenkantoren. Interlex heeft leden in meer dan 60 landen wereldwijd, die samen meer dan 9.000 advocaten tellen. De selectie van nieuwe leden vindt plaats aan de hand van strenge criteria waarmee de kwaliteit en snelheid van dienstverlening is gewaarborgd. Chambers Global heeft Interlex voor het vijfde achtereenvolgende jaar de hoogste ranking voor internationale advocatennetwerken gegeven: Band 1: Elite. Door het lidmaatschap van Interlex kunnen wij overal ter wereld een beroep doen op eerste klas advocatenkantoren waarmee wij een persoonlijke band hebben, waardoor onze cliënten overal ter wereld optimaal kunnen worden ondersteund. Höcker Advocaten is sinds 2004 lid van The Interlex Group.","https://www.interlexgroup.com/"],
  ["Transatlantic Law International","Transatlantic Law International is een dynamisch en innovatief internationaal netwerk dat de expertise van meer dan 100 onafhankelijke partners in alle belangrijke regio’s en zakelijke centra bundelt. Hierdoor is het mogelijk om wereldwijde en lokale juridische oplossingen te bieden via één enkel serviceplatform. Ons kantoor is reeds decennia de lokale partner van Transatlantic Law International.","http://transatlanticlaw.com/"],
  ["Adlaw International",null,"http://adlawinternational.com/"],
  ["International Association of Entertainment Lawyers","De International Association of Entertainment Lawyers (IAEL) is het toonaangevende internationale netwerk voor advocaten actief in de entertainment-, media- en technologiesector. De vereniging werd in 1977 officieel opgericht tijdens de MIDEM in Cannes en heeft zich sindsdien ontwikkeld tot een wereldwijde gemeenschap van advocaten die kennis en ervaring delen over juridische en commerciële vraagstukken in de entertainmentwereld. Marijn Kingma is onderdeel van de Executive Committee van de IAEL, waardoor ons kantoor nauw verbonden is met de top van de internationale entertainmentrechtpraktijk.","http://iael.org/"],
  ["Avrio Advocati","Höcker is trots lid van Avrio Advocati: een vooraanstaand internationaal netwerk van onafhankelijke advocatenkantoren, toegewijd aan juridische dienstverlening van topniveau over de hele wereld. Avrio Advocati is gebouwd op samenwerking, excellentie en integriteit, en verbindt juristen uit uiteenlopende rechtsstelsels om cliënten complete en naadloze juridische oplossingen te bieden.","https://www.avrioadvocati.com/about-us/"]
];
const PARTNERS=[
  ["Business Lounge NO&amp;B","Höcker Advocaten is sinds jaar en dag vaste partner van de NO&amp;B Business Lounge, het zakelijke netwerk van Nationale Opera &amp; Ballet. Als partner van dit netwerk draagt Höcker bij aan de ondersteuning van een van de meest toonaangevende cultuurinstellingen van Nederland. Deelname aan de Business Lounge biedt bovendien de kans om regelmatig in contact te komen met gelijkgestemden uit de top van het Nederlandse bedrijfsleven, de politiek en de culturele sector."],
  ["Culture Club International Theater Amsterdam","Daarnaast is Höcker Advocaten al jaren lid van de Culture Club van International Theater Amsterdam. Dankzij de steun van dit netwerk kan ITA investeren in bijzondere programmering, nieuw talent, ITA Academy, ITA Live en de instandhouding, ontwikkeling en verduurzaming van haar historisch pand."],
  ["Stichting Urgenda","Höcker is al jaren trotse partner van Stichting Urgenda; dé organisatie voor innovatie en duurzaamheid in Nederland. Höcker stond Urgenda bij in de inmiddels wereldberoemde klimaatzaak, en verleent ook op andere vlakken juridische bijstand aan Urgenda tegen sterk gereduceerde tarieven. Op die manier hoopt Höcker haar steentje bij te dragen aan een schonere en duurzamere wereld."],
  ["JINC","Höcker Advocaten is trouw partner van JINC, een Nederlandse organisatie die jongeren uit kansarme gezinnen helpt met onderwijs en loopbaanvoorbereiding om daardoor hun kansen op de arbeidsmarkt te vergroten. Sinds vele jaren steunt ons kantoor JINC in financiële zin en doen onze collega’s mee aan de vele projecten die JINC organiseert voor leerlingen. Zo zijn er meerdere keren per schooljaar leerlingen bij ons op kantoor voor een Bliksemstage, waarbij het absolute hoogtepunt is dat de leerlingen in toga hun zaak mogen bepleiten bij een rechter. We dragen JINC een zeer warm hart toe."]
];
const CLIENTS=["Klinkende Taal","ECNP","Hydratec Industries","MOJO","Broodfonds","Ravo Fayat Group","Nationale Opera &amp; Ballet","Sony Interactive Entertainment","Geldmaat","Mediahuis Radio","Urgenda","Abonnementenland","Stichting Brein","European Space Agency","Buma Stemra","Stichting De Thuiskopie"];
const blocksHTML=(bs)=>bs.map(b=>b.p?`<p>${b.p}</p>`:b.lead?`<p class="lead-l">${b.lead}</p>`:b.h?`<h4 class="bh">${b.h}</h4>`:b.l?`<ul class="ul">${b.l.map(x=>`<li>${x}</li>`).join('')}</ul>`:'').join('');
const strip=(h)=>String(h).replace(/<[^>]+>/g,'').replace(/&amp;/g,'&');

/* ---------- helpers ---------- */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const quoteBlock=(id)=>`
  <div class="qbox" id="${id}">
    <span class="qmark">${ICON.q}</span>
    <div class="qin"><div class="qn"></div><p class="qt"></p><div class="qs"></div></div>
  </div>
  <div class="qbar">
    <div class="arrows"><button type="button" data-q="-1" aria-label="Vorige quote">${ICON.l}</button><button type="button" data-q="1" aria-label="Volgende quote">${ICON.r}</button></div>
    <button class="btn" type="button" data-cta>Plan een gesprek</button>
  </div>`;
function bindQuotes(root,id,start){
  const box=root.querySelector('#'+id); if(!box) return;
  let i=start||0;
  const draw=(anim)=>{const q=QUOTES[i];
    box.querySelector('.qn').textContent=`${i+1} / ${QUOTES.length}`;
    const t=box.querySelector('.qt'); t.textContent=`“${q.t}”`;
    box.querySelector('.qs').innerHTML=esc(q.s)+(q.r?`<small>${esc(q.r)}</small>`:'');
    if(anim){box.querySelector('.qin').classList.remove('fadeq');void box.offsetWidth;box.querySelector('.qin').classList.add('fadeq');}
  };
  draw(false);
  box.parentElement.querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>{i=(i+QUOTES.length+(+b.dataset.q))%QUOTES.length;draw(true);}));
}

/* ---------- people ---------- */
const PEOPLE=[
  {id:"marijn-kingma",n:"Marijn Kingma",img:IMG.x.marijn,spec:"media-marketing",
   bio:["Volgens Legal 500 een expert in het auteursrecht in de literaire, muziek- en audiovisuele sector.","Schreef onder meer de editorial over AI-deals in de muziekindustrie."],
   tags:["Auteursrecht","Muziek en entertainment","Literair en audiovisueel"],news:["ai-deals-muziekindustrie"]},
  {id:"joep-meddens",n:"Joep Meddens",img:IMG.x.joep,spec:"media-marketing",
   bio:["Volgens Legal 500 bedreven in reclamezaken: van het clearen van campagnes tot procedures bij de Reclamecodecommissie."],
   tags:["Reclamerecht","Clearen van campagnes","Reclamecodecommissie"]},
  {id:"jytte-elfferich",n:"Jytte Elfferich",img:IMG.x.jytte,spec:"media-marketing"},
  {id:"jolien-van-woudenberg",n:"Jolien van Woudenberg",img:IMG.x.jolien,spec:"media-marketing"},
  {id:"janneke-popma",n:"Janneke Popma",img:IMG.x.janneke,spec:"media-marketing"},
  ...IMG.p.map((src,i)=>({id:"collega-"+(i+1),n:null,img:src}))
];
const P_BY=Object.fromEntries(PEOPLE.map(p=>[p.id,p]));
const TEL='<a href="tel:+31205777700">(020) 577 77 00</a>';
const sh=(label,title,intro)=>`<div class="sh"><span class="label">${label}</span><h2>${title}</h2>${intro?`<p>${intro}</p>`:''}</div>`;
const personLink=(p)=>`<a class="ex" href="#/team/${p.id}"><img src="${p.img}" alt="${p.n||'Medewerker van Höcker'}"><b>${p.n||'Naam volgt'}</b></a>`;

/* ---------- home: one page, all sections ---------- */
const shp=(label,title,intro)=>`<div class="sh"><span class="label">${label}</span><h1>${title}</h1>${intro?`<p>${intro}</p>`:''}</div>`;
const specRows=()=>`<div class="srows">${SPEC_ORDER.map((k,i)=>{const ex=PEOPLE.filter(p=>p.spec===k);return `<div class="srow"><span class="n">0${i+1}</span><div class="sm"><h3><a href="#/specialismen/${k}">${SPEC[k].t}</a></h3><p>${SPEC[k].short}</p></div><ul class="ss">${SPEC[k].subs.map(x=>`<li><a href="#/specialismen/${k}/${x.id}">${x.t}</a></li>`).join('')}</ul><a class="sgo" href="#/specialismen/${k}" aria-label="Naar ${SPEC[k].t}">${ICON.arr}</a></div>`;}).join('')}</div>`;
function home(){
  return `
  <section class="intro" aria-label="Introductie">
    <div class="wrap"><div class="stage" id="stage">
      <h1 class="final pending" id="final" aria-label="Höcker vermijdt lange teksten."><span class="fw">Höcker</span> <span class="fw">vermijdt</span> <span class="fw">lange</span> <span class="fw">teksten</span><span class="dot">.</span></h1>
      <p class="para" id="para" aria-hidden="true"></p>
    </div>
    <div class="hacts">
      ${searchBox('qh')}
      <button class="replay" id="replay" type="button">${ICON.replay}Speel opnieuw af</button>
    </div>
    </div>
  </section>
  <img class="heroimg" src="${IMG.hero}" alt="Advocaat van Höcker in gesprek, in het licht van een groot raam">

  <section class="direct" id="sec-specialismen" data-sec="specialismen"><div class="wrap"><div class="dpanel">
    <div class="dhead"><div><span class="label">Direct naar</span><h2>Waar wij goed in zijn.</h2></div><p>Zes praktijken, elk met vaste aanspreekpunten. Klik op een onderwerp en u staat er direct.</p></div>
    <div class="srows">${SPEC_ORDER.map((k,i)=>{const ex=PEOPLE.filter(p=>p.spec===k);return `<div class="srow"><span class="n">0${i+1}</span><div class="sm"><h3><a href="#/specialismen/${k}">${SPEC[k].t}</a></h3><p>${SPEC[k].short}</p></div><ul class="ss">${SPEC[k].subs.map(x=>`<li><a href="#/specialismen/${k}/${x.id}">${x.t}</a></li>`).join('')}</ul><a class="sgo" href="#/specialismen/${k}" aria-label="Naar ${SPEC[k].t}">${ICON.arr}</a></div>`;}).join('')}</div>
  </div></div></section>

  <section class="news blk" id="sec-nieuws" data-sec="nieuws">
    <div class="wrap">
      <div class="shrow">${sh('Nieuws','Actueel.')}<a class="more" href="#/nieuws">Alle berichten</a></div>
      <div class="ngrid">
        <article class="feat">
          <div class="by"><span class="meta">${NEWS[0].d} &nbsp;—&nbsp; ${NEWS[0].a}</span><img src="${IMG.avatar}" alt=""></div>
          <h3>${esc(NEWS[0].t)}</h3>
          <p>${esc(NEWS[0].x)}</p>
          <a class="more" href="#/nieuws/${NEWS[0].slug}">Lees verder</a>
        </article>
        <div class="side">${NEWS.slice(1).map(n=>`<a href="#/nieuws/${n.slug}"><span class="meta">${n.d} - ${esc(n.a)}</span><span class="t">${esc(n.t)}</span></a>`).join('')}</div>
      </div>
    </div>
  </section>

`;
}
function specPage(){
  return `<section class="blk pgtop"><div class="wrap">${shp('Specialismen','Waar wij goed in zijn.','Zes praktijken, elk met vaste aanspreekpunten. Klik op een onderwerp en u staat er direct.')}
    <div class="sg">${SPEC_ORDER.map((k,i)=>`<article class="stile"><a class="stl" href="#/specialismen/${k}"><span class="sn">0${i+1}</span><span class="sarr">${ICON.arr}</span><h2>${SPEC[k].t}</h2><p>${SPEC[k].short}</p></a><ul>${SPEC[k].subs.map(x=>`<li><a href="#/specialismen/${k}/${x.id}">${x.t}</a></li>`).join('')}</ul></article>`).join('')}</div>
  </div></section>`;
}
function newsPage(){
  return `<section class="blk pgtop"><div class="wrap">${shp('Nieuws','Actueel.','Editorials, wetgeving en wat er speelt. Kort, want dat is ons uitgangspunt.')}<div class="alist">${NEWS.map(n=>`<a class="art" href="#/nieuws/${n.slug}"><img src="${IMG.m[n.img]}" alt=""><div class="b"><span class="meta">${n.d} - ${esc(n.a)}</span><h3>${esc(n.t)}</h3>${n.x?`<p>${esc(n.x.slice(0,150))}…</p>`:''}</div></a>`).join('')}</div></div></section>`;
}
function jobsPage(){
  return `
  <section class="blk pgtop" id="sec-jobs" data-sec="jobs"><div class="wrap">
    ${shp('Jobs','Geen gemiddelden.','Wij stellen de hoogste eisen aan onze mensen en ons werk. Zonder uren overwerk als statussymbool. Herken je jezelf daarin? Dan maken we graag kennis.')}
    <div class="jobs-hero"><img class="a" src="${IMG.m.b}" alt=""><div class="b"><img src="${IMG.m.c}" alt=""><img src="${IMG.m.e}" alt=""></div></div>
    <div style="margin-top:clamp(40px,5vw,64px)">
      <button class="vrow" type="button" data-cta data-topic="Werken bij Höcker"><div><h3>Open sollicitatie</h3><p>Advocaten, stagiairs en ondersteuning: vertel ons wie je bent.</p></div>${ICON.arr}</button>
      <button class="vrow" type="button" data-cta data-topic="Werken bij Höcker"><div><h3>Studentstage</h3><p>Een paar maanden meedraaien in de praktijk.</p></div>${ICON.arr}</button>
      <div class="vrow"><div><h3>Actuele vacatures</h3><p>Worden hier geplaatst zodra ze open staan.</p></div></div>
    </div>
  </div></section>

`;
}
function overPage(){
  return `
  <section class="blk about pgtop" id="sec-over" data-sec="over"><div class="wrap">
    ${shp('Over','Over Höcker.','Het kan gebeuren dat u een advocaat nodig heeft. Dan wilt u worden bijgestaan door iemand waarop u kunt rekenen. Een advocaat die zich vastbijt, een advocaat die naast en voor u staat. Advocatuur is maatwerk én mensenwerk. Dat vergt expertise, precisie en een luisterend oor. Daarom geloven wij in korte lijnen en investeren wij in langdurige relaties. Wij zijn behalve uw advocaat ook uw vertrouweling. Uw <i>partner in law</i>.')}
    <div class="two" id="geloven" style="margin-top:clamp(32px,4vw,56px)">
      <div><h3 class="h3">Waar wij in geloven</h3><p>Wij denken met u mee wat de beste oplossing is. U heeft niets aan een advocaat die geheel zijn of haar eigen koers vaart, net zoals u niets heeft aan een jaknikker. Uw belang staat bij ons voorop. Op die manier kunnen wij u het best helpen. Wanneer u ons nodig heeft staan wij voor u klaar.</p></div>
      <div class="pt"><p>Höcker Advocaten combineert de kennis en kunde van een groot kantoor met de persoonlijke aandacht van een klein kantoor. Onze advocaten zijn gespecialiseerd in ondernemingsrecht, arbeidsrecht, intellectueel eigendomsrecht, ICT, media &amp; marketing, algemeen belang en collectieve acties en geschillenoplossing. Wij werken voor multinationals en middelgrote ondernemingen in binnen- en buitenland.</p><p>Wij behandelen ook zaken voor het algemeen belang. Omdat we iets willen bijdragen aan de samenleving, en omdat we nu eenmaal houden van ons vak.</p></div>
    </div>
    <img class="collage" src="${IMG.collage}" alt="Advocaten van Höcker in gesprek aan tafel, met planten op de achtergrond">
    <div class="two" id="internationaal" style="margin-top:clamp(48px,6vw,80px)">
      <div><h3 class="h3">Internationaal</h3><p>Al jaren werken wij intensief samen met advocaten over de hele wereld. Wij zijn lid van grote internationale netwerken. Zodat u ook over de grens zorgeloos zaken kunt doen.</p></div>
      <div>${NETWORKS.map(([h,b,u],i)=>`<div class="acc${i===0?' open':''}"><button type="button" aria-expanded="${i===0}">${h}${ICON.chev}</button><div class="body"><div><p>${b?b:'<span class="tbd">Tekst volgt.</span>'}</p><p><a class="ext" href="${u}" target="_blank" rel="noopener">Website ${h} ↗</a></p></div></div></div>`).join('')}</div>
    </div>
    <div id="samenwerking" style="margin-top:clamp(56px,7vw,96px)">
      <h3 class="h3">Samenwerkingsverbanden</h3>
      <div class="pgrid2">${PARTNERS.map(([h,b])=>`<div class="pcard"><h4>${h}</h4><p>${b}</p></div>`).join('')}</div>
    </div>
  </div></section>

`;
}
function contactPage(){
  return `
  <section class="blk pgtop" id="sec-contact" data-sec="contact"><div class="wrap">
    ${shp('Contact','Kort lijntje.','Bel, mail of laat uw nummer achter. U hoort binnen één werkdag van ons.')}
    <div class="qcards">
      <a class="qc" href="tel:+31205777700"><span class="label">Bellen</span><b>(020) 577 77 00</b><small>Direct iemand aan de lijn</small></a>
      <a class="qc" href="mailto:mail@hocker.nl"><span class="label">Mailen</span><b>mail@hocker.nl</b><small>Antwoord binnen één werkdag</small></a>
      <button class="qc" type="button" data-cta><span class="label">Terugbellen</span><b>Bel mij terug</b><small>Laat uw nummer achter</small></button>
    </div>
    <div class="cgrid" style="margin-top:clamp(40px,5vw,64px)">
      <div class="cinfo"><dl><dt>Bezoekadres</dt><dd>Apollolaan 153<br>1077 AS Amsterdam</dd></dl><a class="more" href="https://www.google.com/maps/search/?api=1&query=Apollolaan+153+Amsterdam" target="_blank" rel="noopener">Plan uw route ↗</a>
        <img src="${IMG.m.d}" alt="" style="margin-top:40px;width:100%;aspect-ratio:3/2;object-fit:cover"></div>
      ${contactForm('cf')}
    </div>
  </div></section>`;
}
function teamPage(){
  return `<section class="blk pgtop"><div class="wrap">${shp('Team','Mensenwerk.')}
    <div class="note" style="max-width:640px">Dit onderdeel blijft hetzelfde als op de huidige website.</div>
  </div></section>`;
}
function clientsPage(){
  const row=CLIENTS.map(c=>`<span class="tk">${c}</span>`).join('');
  return `<section class="blk pgtop"><div class="wrap">${shp('Cliënten over ons','Wat zeggen onze cliënten<span class="qdot">?</span>','Wij werken zowel voor multinationals als voor kleinere ondernemingen en non-profitorganisaties.')}
    <p class="cl-intro">Met een groot deel van onze cliënten werken wij al jarenlang samen. Dit heeft geleid tot een sterke vertrouwensband en tot vermelding in de internationale gidsen <a href="https://chambers.com/" target="_blank" rel="noopener">Chambers</a> en <a href="https://www.legal500.com/" target="_blank" rel="noopener">Legal 500</a>.</p></div>
    <div class="ticker" aria-label="Een greep uit onze cliënten"><div class="tkt">${row}${row.replace(/class="tk"/g,'class="tk" aria-hidden="true"')}</div></div>
    <div class="wrap" style="margin-top:clamp(56px,7vw,96px)">${quoteBlock('hq')}</div>
  </section>`;
}
function contactForm(id,opts={}){
  const opt=(v)=>`<option${opts.topic===v?' selected':''}>${esc(v)}</option>`;
  return `<form class="cf" id="${id}" novalidate>
    <div class="ok"><span>Dank u wel${opts.first?'':''}.</span> Wij bellen u binnen één werkdag terug.<br><span class="demo">(Voorbeeldformulier: er is niets verzonden.)</span></div>
    ${opts.forLine?`<p class="cd-for fld">${opts.forLine}</p>`:''}
    <label class="fld">Naam<input name="n" autocomplete="name" required></label>
    <label class="fld">Telefoonnummer<input name="t" type="tel" autocomplete="tel" required></label>
    <label class="fld"><span>E-mail <span class="opt">(optioneel)</span></span><input name="e" type="email" autocomplete="email"></label>
    <label class="fld">Onderwerp<select name="s">${SPEC_ORDER.map(k=>opt(SPEC[k].t)).join('')}${opt('Werken bij Höcker')}${opt('Anders')}</select></label>
    <label class="fld">Uw vraag, kort<textarea name="m" rows="3"></textarea></label>
    <button class="btn fld" type="submit" style="justify-self:start">Bel mij terug</button>
  </form>`;
}
function wall(){
  const cols=[[5,6,2,1],[7,8,9,0],[10,11,3,4]];
  const f=(p)=>`<a class="pf" href="#/team/${p.id}"><img src="${p.img}" alt="${p.n||'Medewerker van Höcker'}"><span class="cap">${p.n?`<b>${p.n}</b>${p.spec?`<span>${esc(SPEC[p.spec].t)}</span>`:''}`:''}</span><span class="hov">Bekijk profiel ${ICON.arr}</span></a>`;
  return `<div class="wall">${cols.map(c=>`<div class="c">${c.map(i=>f(PEOPLE[i])).join('')}</div>`).join('')}</div>`;
}

/* ---------- detail pages ---------- */
function specNav(cur){
  const ex=PEOPLE.filter(p=>p.spec===cur);
  return `<aside class="subnav"><div class="h">Onze specialismen</div>${SPEC_ORDER.map(k=>`<a href="#/specialismen/${k}" class="${k===cur?'on':''}">${ICON.arr}<span>${esc(SPEC[k].t)}</span></a>`).join('')}
    <div class="scta"><b>Direct een specialist spreken?</b>${ex.length?`<div class="avs">${ex.map(p=>`<a href="#/team/${p.id}" title="${p.n}"><img src="${p.img}" alt="${p.n}"></a>`).join('')}</div>`:''}
      <button class="btn" type="button" data-cta data-spec="${cur}">Plan een gesprek</button><span class="or">of bel ${TEL}</span></div></aside>`;
}
function specialism(slug){
  slug=SPEC_ALIAS[slug]||slug; if(!SPEC[slug]) return null;
  const s=SPEC[slug], ex=PEOPLE.filter(p=>p.spec===slug);
  const crumbs=`<div class="crumbs"><a href="#/">Home</a>${ICON.arr}<a href="#/specialismen">Specialismen</a>${ICON.arr}<span>${s.t}</span></div>`;
  const first=s.intro.slice(0,2), rest=s.intro.slice(2);
  return `<div class="pg">
    <div class="panelrow"><div class="panel s">${crumbs}<h1>${s.t}</h1>
      ${first.map(p=>`<p>${p}</p>`).join('')}
      ${rest.length?`<div class="moretxt" id="moretxt" hidden>${rest.map(p=>`<p>${p}</p>`).join('')}</div><button class="readmore" type="button" aria-expanded="false" aria-controls="moretxt"><span>Lees meer</span>${ICON.chev}</button>`:''}
      ${s.legal500?`<div class="lcard"><div class="top"><span class="label" style="font-size:10px">Recognized by Legal 500</span><span></span></div>
        <q>Highly regarded for its expertise in the media and entertainment sectors</q>
        <p>Höcker Advocaten is versed in defamation and infringement matters. <a href="#/team/marijn-kingma">Marijn Kingma</a> is an expert in copyright across the literary, music, and visual-audio industries, while <a href="#/team/joep-meddens">Joep Meddens</a> is adept at advertising matters.</p></div>`:''}
    </div>${specNav(slug)}</div>
    <section class="xp" id="expertise"><div class="inner">
      <div class="xhead"><span class="label">Expertise</span><h2>Waar wij u bij helpen.</h2></div>
      <div class="xgrid">
        <div class="xnav" role="tablist" aria-label="Onderwerpen ${strip(s.t)}">${s.subs.map((x,i)=>`<button type="button" role="tab" id="tab-${x.id}" aria-controls="sub-${x.id}" aria-selected="${i===0}" data-sub="${x.id}"><span class="xi">0${i+1}</span><span>${x.t}</span></button>`).join('')}</div>
        <div class="xpanels">${s.subs.map((x,i)=>`<article class="xpanel" role="tabpanel" id="sub-${x.id}" aria-labelledby="tab-${x.id}"${i===0?'':' hidden'}><h3>${x.t}</h3>${blocksHTML(x.blocks)}<div class="xcta"><button class="btn" type="button" data-cta data-spec="${slug}">Plan een gesprek</button>${ex.length?`<span class="avs">${ex.slice(0,5).map(p=>`<a href="#/team/${p.id}" title="${p.n}"><img src="${p.img}" alt="${p.n}"></a>`).join('')}</span>`:''}</div></article>`).join('')}</div>
      </div>
    </div></section>
    <div class="inner"><div class="col">
      ${slug==='media-marketing'?`<div class="sec">${quoteBlock('sq')}</div>`:''}
      ${ex.length?`<div class="sec"><h2>Onze experts</h2><div class="experts">${ex.map(personLink).join('')}</div></div>`:''}
      <div class="sec"><div class="cta"><h2 style="font-size:clamp(24px,2.6vw,34px)">Vragen over ${s.t.charAt(0).toLowerCase()+s.t.slice(1)}?</h2><button class="btn" type="button" data-cta data-spec="${slug}">Plan een gesprek</button></div></div>
    </div></div>
  </div>`;
}
function selectSub(id){
  const tab=document.getElementById('tab-'+id); if(!tab) return false;
  app.querySelectorAll('.xnav [role=tab]').forEach(t=>t.setAttribute('aria-selected',t===tab?'true':'false'));
  app.querySelectorAll('.xpanel').forEach(p=>p.hidden=p.id!=='sub-'+id);
  if(matchMedia('(max-width:900px)').matches) tab.scrollIntoView({block:'nearest',inline:'center'});
  return true;
}
function openSub(id,smooth){
  if(!selectSub(id)) return;
  const el=document.getElementById('expertise');
  requestAnimationFrame(()=>window.scrollTo({top:el.getBoundingClientRect().top+scrollY-hdrH()-8,behavior:smooth?'smooth':'instant'}));
}
function dotify(root){
  root.querySelectorAll('h1,h2').forEach(h=>{
    if(h.id==='final'||h.querySelector('.dot')) return;
    const w=document.createTreeWalker(h,NodeFilter.SHOW_TEXT); let last=null,n; while(n=w.nextNode()) if(n.nodeValue.trim()) last=n;
    if(!last) return; const v=last.nodeValue.replace(/\s+$/,'');
    if(v.endsWith('.')&&!v.endsWith('..')){ last.nodeValue=v.slice(0,-1); const d=document.createElement('span'); d.className='dot'; d.textContent='.'; last.parentNode.insertBefore(d,last.nextSibling); }
  });
}
function profile(id){
  const i=PEOPLE.findIndex(x=>x.id===id); if(i<0) return null;
  const p=PEOPLE[i], L=PEOPLE.length, prev=PEOPLE[(i-1+L)%L], next=PEOPLE[(i+1)%L];
  const name=p.n||'Naam volgt', first=p.n?p.n.split(' ')[0]:null, s=p.spec?SPEC[p.spec]:null;
  const col=PEOPLE.filter(x=>x.n&&x.id!==p.id&&(!p.spec||x.spec===p.spec)).slice(0,5);
  const arts=NEWS.filter(n=>(p.news||[]).includes(n.slug));
  const nm=(x)=>x.n||'Collega';
  return `<section class="prof"><div class="wrap">
    <div class="crumbs"><a href="#/">Home</a>${ICON.arr}<a href="#/team">Team</a>${ICON.arr}<span>${esc(name)}</span></div>
    <div class="pgrid">
      <div class="pimg"><img src="${p.img}" alt="${esc(name)}"></div>
      <div class="pbody">
        ${s?`<a class="label" href="#/specialismen/${p.spec}">${esc(s.t)}</a>`:'<span class="label">Team</span>'}
        <h1>${esc(name)}</h1>
        ${p.bio?p.bio.map(b=>`<p class="lead">${esc(b)}</p>`).join(''):`<div class="note">${p.n?'Introductietekst volgt.':'Profiel volgt'}: hier komen ${p.n?'':'naam, '}functie, een korte introductie en directe contactgegevens.</div>`}
        ${p.tags?`<div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>`:''}
        <div class="pact">
          <button class="btn" type="button" data-cta data-person="${p.id}">${first?`Plan een gesprek met ${esc(first)}`:'Plan een gesprek'}</button>
          <a class="btn ghost" href="tel:+31205777700">Bel</a>
          <a class="btn ghost" href="mailto:mail@hocker.nl?subject=${encodeURIComponent('Voor '+(p.n||'Höcker'))}">Mail</a>
        </div>
        <dl class="pfacts">${s?`<dt>Specialisme</dt><dd><a href="#/specialismen/${p.spec}">${esc(s.t)}</a></dd>`:''}<dt>Kantoor</dt><dd>Apollolaan 153, Amsterdam</dd><dt>Telefoon</dt><dd>${TEL}</dd></dl>
      </div>
    </div>
    ${arts.length?`<div class="psec"><h2>Publicaties</h2><div class="side">${arts.map(n=>`<a href="#/nieuws/${n.slug}"><span class="meta">${n.d}</span><span class="t">${esc(n.t)}</span></a>`).join('')}</div></div>`:''}
    ${col.length?`<div class="psec"><h2>${p.spec?'Werkt samen met':'Collega’s'}</h2><div class="experts">${col.map(personLink).join('')}</div></div>`:''}
    <nav class="pnav" aria-label="Andere profielen"><a href="#/team/${prev.id}">${ICON.l}<span>${esc(nm(prev))}</span></a><a href="#/team" class="all">Heel het team</a><a href="#/team/${next.id}"><span>${esc(nm(next))}</span>${ICON.r}</a></nav>
  </div></section>`;
}
function article(slug){
  const n=NEWS.find(x=>x.slug===slug)||NEWS[0];
  const au=n.slug==='ai-deals-muziekindustrie'?P_BY['marijn-kingma']:null;
  return `<article class="article"><div class="crumbs"><a href="#/">Home</a>${ICON.arr}<a href="#/nieuws">Nieuws</a></div><span class="meta">${n.d} — ${esc(n.a)}</span><h1>${esc(n.t)}</h1>
  ${n.x?`<p class="lead">${esc(n.x)}</p>`:''}<div class="note">De volledige tekst van dit artikel volgt. Dit is een voorbeeldpagina in het ontwerp.</div>
  <img src="${IMG.m[n.img]}" alt="" style="margin:32px 0;width:100%;aspect-ratio:16/10;object-fit:cover">
  <div class="acta">${au?`<a href="#/team/${au.id}"><img src="${au.img}" alt=""></a>`:''}<div><b>Vragen over dit onderwerp?</b><span>${au?`Spreek direct met <a href="#/team/${au.id}">${au.n}</a>.`:'Wij denken graag met u mee.'}</span></div><button class="btn" type="button" data-cta ${au?`data-person="${au.id}"`:''}>Plan een gesprek</button></div>
  <a class="more" href="#/nieuws">← Terug naar nieuws</a></article>`;
}

/* ---------- intro animation ---------- */
let introPlayed=false, introToken=0;
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const wait=(ms,tok)=>new Promise((res,rej)=>setTimeout(()=>tok===introToken?res():rej('x'),ms));
function buildPara(para){
  let k=0,i=0;
  para.innerHTML=INTRO.split(' ').map(w=>{
    const bare=w.replace(/[.,:;]/g,'');
    let keep=false;
    if(k<KEEP.length&&bare===KEEP[k]){keep=true;k++;}
    return `<span class="w${keep?' k':''}"${keep?'':` style="--i:${(i++)*17}"`}>${esc(w)}</span>`;
  }).join(' ');
  return i;
}
function showFinal(){
  const stage=document.getElementById('stage'); if(!stage) return;
  const fin=document.getElementById('final'), para=document.getElementById('para');
  stage.querySelectorAll('.clone').forEach(c=>c.remove());
  if(para) para.remove();
  fin.classList.remove('pending'); stage.style.height='';
  const rp=document.getElementById('replay'); if(rp) rp.classList.add('show');
}
async function playIntro(){
  const tok=++introToken;
  const stage=document.getElementById('stage'), fin=document.getElementById('final');
  if(!stage) return;
  let para=document.getElementById('para');
  if(!para){para=document.createElement('p');para.className='para';para.id='para';para.setAttribute('aria-hidden','true');stage.appendChild(para);}
  stage.querySelectorAll('.clone').forEach(c=>c.remove());
  stage.style.height=''; para.style.cssText='';
  fin.classList.add('pending'); fin.style.position='absolute'; fin.style.left='0'; fin.style.right='0'; fin.style.top='0';
  const rp=document.getElementById('replay'); rp.classList.remove('show');
  const n=buildPara(para);
  if(reduce.matches){fin.style.cssText='';showFinal();return;}
  try{
    await Promise.race([document.fonts?document.fonts.ready:Promise.resolve(),new Promise(r=>setTimeout(r,1500))]);
    await wait(1100,tok);
    para.classList.add('strike');
    await wait((n-1)*17+200+120,tok);           // all words struck
    await wait(1000,tok);                         // 1 seconde pauze
    para.classList.add('fade');
    await wait(480,tok);
    // FLIP: collect old positions
    const sRect=stage.getBoundingClientRect();
    const keeps=[...para.querySelectorAll('.k')];
    const fsOld=parseFloat(getComputedStyle(para).fontSize);
    const old=keeps.map(el=>{const r=el.getBoundingClientRect();return {x:r.left-sRect.left,y:r.top-sRect.top,t:el.textContent.replace(/[.,]/g,'')};});
    const hOld=stage.offsetHeight;
    stage.style.height=hOld+'px';
    para.style.position='absolute';para.style.left='0';para.style.right='0';para.style.top='0';
    fin.style.cssText='';                         // final heading back in flow (still hidden)
    const fsNew=parseFloat(getComputedStyle(fin).fontSize);
    const s2=stage.getBoundingClientRect();
    const fws=[...fin.querySelectorAll('.fw')];
    const neu=fws.map(el=>{const r=el.getBoundingClientRect();return {x:r.left-s2.left,y:r.top-s2.top};});
    const hNew=fin.offsetHeight;
    const clones=old.map(o=>{const c=document.createElement('span');c.className='clone';c.textContent=o.t;c.style.fontSize=fsOld+'px';c.style.left=o.x+'px';c.style.top=o.y+'px';c.style.letterSpacing=getComputedStyle(para).letterSpacing;stage.appendChild(c);return c;});
    para.style.visibility='hidden';
    const sc=fsNew/fsOld, D=1050, E='cubic-bezier(.7,0,.2,1)';
    const anims=clones.map((c,i)=>c.animate([
      {transform:'translate(0,0) scale(1)',letterSpacing:getComputedStyle(para).letterSpacing},
      {transform:`translate(${neu[i].x-old[i].x}px,${neu[i].y-old[i].y}px) scale(${sc})`,letterSpacing:(-0.028*fsNew/sc)+'px'}
    ],{duration:D,delay:i*70,easing:E,fill:'forwards'}));
    stage.animate([{height:hOld+'px'},{height:hNew+'px'}],{duration:D+210,easing:E,fill:'forwards'}).finished.then(()=>{});
    await Promise.all(anims.map(a=>a.finished));
    if(tok!==introToken) return;
    stage.getAnimations().forEach(a=>a.cancel());
    showFinal();
    const dot=fin.querySelector('.dot'); dot.animate([{opacity:0,transform:'translateY(-.3em)'},{opacity:1,transform:'none'}],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)'});
    introPlayed=true;
  }catch(e){ /* cancelled */ }
}

/* ---------- zoeken ---------- */
const norm=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const KW={
  "arbeidsrecht":"ontslag reorganisatie werkgever werknemer cao medezeggenschap or wor vaststellingsovereenkomst onderzoek grensoverschrijdend gedrag zzp dba",
  "ondernemingsrecht":"overname fusie aandeelhouder aandeelhouders bestuurder vennootschap herstructurering joint venture due diligence contract contracten franchise corporate litigation ondernemingskamer enquete",
  "ie-ict":"merk merken modellen auteursrecht naburig software saas privacy avg data ict it contract inbreuk e-commerce",
  "media-marketing":"reclame reclamerecht smaad laster pers publicatie publicaties influencer media telecom cookies spam reclame code commissie",
  "algemeen-belang":"wamca collectieve actie acties massaschade urgenda klimaat zorgplicht aansprakelijkheid",
  "geschillenbeslechting":"procederen procedure kort geding arbitrage mediation geschil dispute resolution rechtszaak litigation"
}
const IDX=[
  ...PEOPLE.filter(p=>p.n).map(p=>({t:p.n,type:'Advocaat',sub:SPEC[p.spec].t,href:'#/team/'+p.id,img:p.img,kw:[...(p.tags||[]),...(p.bio||[]),SPEC[p.spec].t].join(' ')})),
  ...SPEC_ORDER.map(k=>({t:SPEC[k].t,type:'Specialisme',sub:SPEC[k].short,href:'#/specialismen/'+k,kw:KW[k]+' '+SPEC[k].subs.map(x=>strip(x.t)).join(' ')})),
  ...SPEC_ORDER.flatMap(k=>SPEC[k].subs.map(x=>({t:strip(x.t),type:'Expertise',sub:SPEC[k].t,href:'#/specialismen/'+k+'/'+x.id,kw:strip(x.blocks.map(b=>b.p||b.lead||b.h||(b.l||[]).join(' ')).join(' '))}))),
  ...NEWS.map(n=>({t:n.t,type:'Nieuws',sub:n.d,href:'#/nieuws/'+n.slug,kw:(n.x||'')+' '+n.a})),
  {t:'Werken bij Höcker',type:'Pagina',sub:'Jobs, stages en open sollicitatie',href:'#/jobs',kw:'vacature vacatures baan sollicitatie solliciteren stage carriere werken jobs'},
  {t:'Contact en route',type:'Pagina',sub:'Apollolaan 153, Amsterdam',href:'#/contact',kw:'adres telefoon mail bellen route afspraak gesprek terugbellen'},
  {t:'Cliënten over ons',type:'Pagina',sub:'Quotes van Chambers en Legal 500',href:'#/clienten',kw:'chambers legal 500 referenties klanten clienten'},
  {t:'Over Höcker',type:'Pagina',sub:'Waar wij in geloven en internationaal',href:'#/over',kw:'internationaal interlex transatlantic adlaw iael avrio netwerk visie kantoor samenwerkingsverbanden urgenda jinc opera ballet ita theater'}
].map(r=>({...r,nt:norm(r.t),nall:norm(r.t+' '+r.sub+' '+r.kw)}));
const SUGGEST=['Ontslag','Reclamerecht','Mediation','Privacy','Marijn Kingma'];
function findAll(q){
  const nq=norm(q).trim(); if(!nq) return [];
  const words=nq.split(/\s+/);
  return IDX.map(r=>{
    if(!words.every(w=>r.nall.includes(w))) return null;
    let s=0;
    if(r.nt.startsWith(nq)) s+=100; else if(r.nt.includes(nq)) s+=60;
    words.forEach(w=>{ if(r.nt.split(/[\s/&-]+/).some(t=>t.startsWith(w))) s+=20; });
    s+= {Advocaat:6,Specialisme:5,Expertise:4,Nieuws:2,Pagina:1}[r.type];
    return {r,s};
  }).filter(Boolean).sort((a,b)=>b.s-a.s).slice(0,7).map(x=>x.r);
}
const ICON_S='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="8.5" cy="8.5" r="6"/><path d="m13 13 5 5"/></svg>';
const TYPE_IC={Specialisme:'§',Expertise:'§',Nieuws:'N',Pagina:'→'};
function hl(t,q){
  const nt=norm(t), nq=norm(q).trim().split(/\s+/)[0]; const i=nq?nt.indexOf(nq):-1;
  if(i<0) return esc(t);
  return esc(t.slice(0,i))+'<mark>'+esc(t.slice(i,i+nq.length))+'</mark>'+esc(t.slice(i+nq.length));
}
const searchBox=(id,ph)=>`<div class="sbox" data-sbox>
  <span class="sic" aria-hidden="true">${ICON_S}</span>
  <input id="${id}" type="search" placeholder="${ph||'Zoek op naam of onderwerp'}" autocomplete="off" spellcheck="false" role="combobox" aria-label="Zoeken op de site" aria-expanded="false" aria-controls="${id}-l" aria-autocomplete="list">
  <div class="sres" id="${id}-l" role="listbox" hidden></div>
</div>`;
function bindSearch(root){
  root.querySelectorAll('[data-sbox]').forEach(box=>{
    if(box.dataset.bound) return; box.dataset.bound='1';
    const inp=box.querySelector('input'), res=box.querySelector('.sres');
    let act=-1;
    const items=()=>[...res.querySelectorAll('.sr-i')];
    const setAct=(i)=>{const it=items(); act=it.length?(i+it.length)%it.length:-1; it.forEach((el,k)=>el.classList.toggle('act',k===act)); if(act>=0) inp.setAttribute('aria-activedescendant',it[act].id);};
    const show=()=>{res.hidden=false;inp.setAttribute('aria-expanded','true');};
    const hide=()=>{res.hidden=true;inp.setAttribute('aria-expanded','false');act=-1;};
    const draw=()=>{
      const q=inp.value;
      if(!q.trim()){
        res.innerHTML=`<div class="sr-sug"><span>Veelgezocht</span>${SUGGEST.map(s=>`<button type="button" data-q="${esc(s)}">${esc(s)}</button>`).join('')}</div>`;
      } else {
        const r=findAll(q);
        res.innerHTML=r.length?r.map((x,i)=>`<a class="sr-i" role="option" id="${inp.id}-o${i}" href="${x.href}">${x.img?`<img src="${x.img}" alt="">`:`<span class="ic">${TYPE_IC[x.type]}</span>`}<span class="tx"><b>${hl(x.t,q)}</b><small>${x.type} · ${esc(x.sub)}</small></span></a>`).join('')
          :`<div class="sr-empty">Geen resultaat voor “${esc(q)}”.<button class="btn" type="button" data-cta data-topic="Anders">Plan een gesprek</button></div>`;
      }
      act=-1; show();
    };
    inp.addEventListener('input',draw);
    inp.addEventListener('focus',draw);
    inp.addEventListener('keydown',e=>{
      if(e.key==='ArrowDown'){e.preventDefault();setAct(act+1);}
      else if(e.key==='ArrowUp'){e.preventDefault();setAct(act-1);}
      else if(e.key==='Enter'){const it=items(); if(it.length){e.preventDefault(); (it[act>=0?act:0]).click();}}
      else if(e.key==='Escape'){hide();}
    });
    res.addEventListener('mousedown',e=>e.preventDefault());
    res.addEventListener('click',e=>{
      const s=e.target.closest('[data-q]'); if(s){inp.value=s.dataset.q;draw();inp.focus();return;}
      if(e.target.closest('.sr-i')){hide();inp.value='';inp.blur();closeSO();}
    });
    inp.addEventListener('blur',()=>setTimeout(hide,120));
  });
}
const so=document.getElementById('so');
function openSO(){ so.classList.add('open'); so.setAttribute('aria-hidden','false'); document.body.classList.add('lock'); setTimeout(()=>so.querySelector('input').focus(),60); }
function closeSO(){ if(!so.classList.contains('open')) return; so.classList.remove('open'); so.setAttribute('aria-hidden','true'); document.body.classList.remove('lock'); }
so.innerHTML=`<div class="so-in wrap"><div class="so-top"><span class="label">Zoeken</span><button class="x" type="button" data-soclose aria-label="Sluiten">×</button></div>${searchBox('qso','Waar kunnen wij u mee helpen?')}</div>`;
so.addEventListener('click',e=>{ if(e.target===so||e.target.closest('[data-soclose]')) closeSO(); });
bindSearch(so); bindSearch(document.getElementById('mnav'));
document.querySelectorAll('[data-search]').forEach(b=>b.addEventListener('click',()=>{closeMenu();openSO();}));
addEventListener('keydown',e=>{
  if(e.key==='/'&&!/input|textarea|select/i.test(document.activeElement.tagName)){e.preventDefault();openSO();}
  if(e.key==='Escape') closeSO();
});

/* ---------- infopagina's (footer) ---------- */
const INFO={klachtenregeling:'Klachtenregeling',privacy:'Privacyverklaring','algemene-voorwaarden':'Algemene voorwaarden','rechtsgebieden-registratie':'Rechtsgebieden registratie'};
function infoPage(slug){
  if(!INFO[slug]) return null;
  return `<article class="article"><div class="crumbs"><a href="#/">Home</a>${ICON.arr}<span>${INFO[slug]}</span></div><h1>${INFO[slug]}</h1>
  <div class="note">De tekst van deze pagina wordt overgenomen van de huidige website.</div>
  <p>Vragen hierover? Bel ${TEL} of mail <a href="mailto:mail@hocker.nl">mail@hocker.nl</a>.</p></article>`;
}

/* ---------- contact drawer (snelle call to action) ---------- */
const cd=document.getElementById('cd'), ovl=document.getElementById('ovl');
let lastFocus=null;
function openCD(o={}){
  const p=o.person?P_BY[o.person]:null;
  const spec=o.spec||(p&&p.spec)||null;
  const topic=o.topic||(spec?SPEC[spec].t:null);
  const forLine=p&&p.n?`Voor <b>${esc(p.n)}</b>${p.spec?` · ${esc(SPEC[p.spec].t)}`:''}`:(topic?`Onderwerp: <b>${esc(topic)}</b>`:'');
  document.getElementById('cdBody').innerHTML=contactForm('cdf',{topic,forLine});
  const m=document.getElementById('cdMail'); m.href='mailto:mail@hocker.nl'+(p&&p.n?'?subject='+encodeURIComponent('Voor '+p.n):'');
  document.getElementById('cdT').textContent=p&&p.n?`Contact met ${p.n.split(' ')[0]}`:'Kort lijntje.';
  bindForm(document.getElementById('cdf'));
  lastFocus=document.activeElement;
  cd.classList.add('open'); ovl.classList.add('open'); cd.setAttribute('aria-hidden','false'); document.body.classList.add('lock');
  setTimeout(()=>{const f=cd.querySelector('input');if(f)f.focus();},260);
}
function closeCD(){
  if(!cd.classList.contains('open')) return;
  cd.classList.remove('open'); ovl.classList.remove('open'); cd.setAttribute('aria-hidden','true'); document.body.classList.remove('lock');
  if(lastFocus&&lastFocus.focus) lastFocus.focus();
}
function bindForm(f){ if(!f) return; f.addEventListener('submit',e=>{e.preventDefault();
  const req=[...f.querySelectorAll('[required]')]; let ok=true;
  req.forEach(i=>{const bad=!i.value.trim(); i.classList.toggle('bad',bad); if(bad&&ok){ok=false;i.focus();}});
  if(ok) f.classList.add('sent');
});}
ovl.addEventListener('click',closeCD);
cd.querySelector('[data-close]').addEventListener('click',closeCD);
addEventListener('keydown',e=>{if(e.key==='Escape'){closeCD();closeMenu();}});

/* ---------- router ---------- */
const app=document.getElementById('app');
const SECTIONS=['specialismen','team','clienten','nieuws','jobs','over','contact'];
const TITLES={specialismen:'Specialismen',team:'Team',clienten:'Cliënten over ons',nieuws:'Nieuws',jobs:'Jobs',over:'Over',contact:'Contact'};
let cur=null, spy=null;
function hdrH(){return document.getElementById('hdr').offsetHeight;}
function scrollToSec(sec,smooth){
  const el=document.getElementById('sec-'+sec); if(!el) return;
  const y=el.getBoundingClientRect().top+scrollY-hdrH()+1;
  window.scrollTo({top:y,behavior:smooth?'smooth':'instant'});
}
function setNav(sec){document.querySelectorAll('.nav a[data-r],.mnav a[data-r]').forEach(a=>a.classList.toggle('on',a.dataset.r===sec));}
function startSpy(){
  if(spy) spy.disconnect();
  spy=new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting) setNav(e.target.dataset.sec); });
  },{rootMargin:'-40% 0px -55% 0px'});
  app.querySelectorAll('[data-sec]').forEach(s=>spy.observe(s));
}
function bindCommon(){
  bindQuotes(app,'hq',0); bindQuotes(app,'sq',1);
  app.querySelectorAll('.acc>button').forEach(b=>b.addEventListener('click',()=>{const a=b.parentElement;const o=a.classList.toggle('open');b.setAttribute('aria-expanded',o);}));
  bindForm(document.getElementById('cf'));
  bindSearch(app);
}
function route(){
  const h=(location.hash||'#/').replace(/^#\/?/,'');
  const [p,sub,third]=h.split('/');
  closeMenu(); closeCD(); closeSO();
  if(p==='specialismen'&&sub&&cur===p+'/'+(SPEC_ALIAS[sub]||sub)){ if(third) openSub(third,true); else window.scrollTo({top:0,behavior:'smooth'}); return; }
  introToken++;
  let html=null;
  if(!p){
    html=home();
  } else if(!sub){
    html=({specialismen:specPage,team:teamPage,clienten:clientsPage,nieuws:newsPage,jobs:jobsPage,over:overPage,contact:contactPage}[p]||(()=>null))();
  } else if(p==='specialismen') html=specialism(sub);
  else if(p==='team') html=profile(sub);
  else if(p==='nieuws') html=article(sub);
  else if(p==='info') html=infoPage(sub);
  if(!html){ location.hash='#/'; return; }
  cur=p?(p+'/'+(p==='specialismen'&&sub?(SPEC_ALIAS[sub]||sub):(sub||''))):'home';
  app.innerHTML=html; bindCommon(); dotify(app); setNav(p||null);
  window.scrollTo({top:0,behavior:'instant'});
  if(!p){
    document.getElementById('replay').addEventListener('click',()=>playIntro());
    if(introPlayed){buildPara(document.getElementById('para'));showFinal();} else playIntro();
  }
  if(third) openSub(third,false);
  app.querySelectorAll('.xnav [role=tab]').forEach(t=>t.addEventListener('click',()=>selectSub(t.dataset.sub)));
  const xn=app.querySelector('.xnav'); if(xn) xn.addEventListener('keydown',e=>{const ts=[...xn.querySelectorAll('[role=tab]')];const k=ts.findIndex(t=>t.getAttribute('aria-selected')==='true');let n=-1;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=(k+1)%ts.length;if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=(k-1+ts.length)%ts.length;if(n>=0){e.preventDefault();ts[n].focus();selectSub(ts[n].dataset.sub);}});
  const rm=app.querySelector('.readmore'); if(rm) rm.addEventListener('click',()=>{const t=document.getElementById('moretxt');const o=t.hidden;t.hidden=!o;rm.setAttribute('aria-expanded',o);rm.querySelector('span').textContent=o?'Minder':'Lees meer';rm.classList.toggle('open',o);});
  const nm=!p?'':!sub?TITLES[p]:p==='info'?INFO[sub]:p==='team'&&P_BY[sub]?(P_BY[sub].n||'Profiel'):p==='specialismen'?SPEC[SPEC_ALIAS[sub]||sub]?.t:p==='nieuws'?(NEWS.find(n=>n.slug===sub)||{}).t:'';
  document.title=(nm?strip(nm)+' — ':'')+'Lama Lama';
}
window.addEventListener('hashchange',route);
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-cta]');
  if(c){ e.preventDefault(); openCD({person:c.dataset.person,spec:c.dataset.spec,topic:c.dataset.topic}); return; }
  const a=e.target.closest('a[href^="#/"]');
  if(a && a.getAttribute('href')===location.hash){ e.preventDefault(); route(); }   // zelfde kopje nog eens: opnieuw scrollen
});
const hdr=document.getElementById('hdr');
addEventListener('scroll',()=>hdr.classList.toggle('sc',scrollY>8),{passive:true});
const mnav=document.getElementById('mnav');
function closeMenu(){mnav.classList.remove('open');mnav.setAttribute('aria-hidden','true');}
document.getElementById('burger').addEventListener('click',()=>{mnav.classList.add('open');mnav.setAttribute('aria-hidden','false');});
document.getElementById('mclose').addEventListener('click',closeMenu);
document.querySelector('[data-en]').addEventListener('click',()=>{const b=document.querySelector('[data-en]');b.textContent='EN (volgt)';setTimeout(()=>b.textContent='EN',1800);});
route();
})();
