# Höcker Advocaten – website (concept "Lama Lama")

Dit is het klikbare ontwerp van de nieuwe website van Höcker Advocaten, als basis voor de bouw.
De site is gebouwd met React en [Next.js](https://nextjs.org/). Elke pagina wordt bij de build vooraf omgezet naar een eigen HTML-bestand, zodat de inhoud ook zonder JavaScript en voor zoekmachines leesbaar is.

Live: https://rbijkercom.github.io/hocker/

## Starten

Nodig: Node.js 24 of nieuwer.

    npm install
    npm run dev       # ontwikkelserver op http://localhost:3000
    npm run build     # statische site in de map out/
    npm start         # bekijk de build uit out/

De lettertypes (Source Serif 4 en DM Sans) komen van Google Fonts; daarvoor is internet nodig.

## Publiceren

Elke push naar `main` bouwt de site en zet hem op GitHub Pages (`.github/workflows/deploy.yml`).
Daar staat de site onder `/hocker/`; de build krijgt dat pad via de variabele `BASE_PATH`.

## Structuur

```
app/                pagina's, één map per URL (bijv. app/team/[id]/page.tsx = /team/marijn-kingma/)
app/layout.tsx      kop, footer, zoekscherm en contactpaneel rond elke pagina
app/globals.css     alle opmaak
components/         React-componenten (Header, Footer, Intro, SearchBox, ContactForm, Expertise, ...)
lib/content.tsx     alle teksten en gegevens
lib/search.ts       zoekindex en zoekfunctie
public/assets/img/  foto's als losse JPG-bestanden (zie lijst hieronder)
public/assets/logos/ keurmerken in de footer (Chambers, Legal 500, Interlex)
```

## Hoe het werkt

- **Pagina's** hebben gewone URL's (`/specialismen/ondernemingsrecht/`): home, specialismen, specialisme, specialisme met onderwerp (`/specialismen/arbeidsrecht/medezeggenschap/` opent dat tabblad), team, profiel, cliënten, nieuws, artikel, jobs, over, contact, infopagina's. Oude links met `#/` (uit het eerste prototype) worden doorgestuurd.
- **Openingsanimatie** op de homepage: de lange tekst wordt doorgestreept tot "Höcker vermijdt lange teksten." (`components/Intro.tsx`; respecteert "prefers-reduced-motion").
- **Teksten** staan in `lib/content.tsx`: `SPEC` (zes specialismen met onderwerpen), `NEWS`, `QUOTES`, `NETWORKS`, `PARTNERS`, `CLIENTS`, `PEOPLE`.
- **Zoekfunctie** werkt in de browser op dezelfde gegevens (`lib/search.ts`); sneltoets `/`.
- **Groene punten** achter koppen die op een punt eindigen: functie `dot` in `lib/text.tsx`.
- **Contactpaneel** ("Plan een gesprek") en het contactformulier versturen nog niets; hier moet een backend of formulierdienst aan gekoppeld worden.

## Foto's

Alle foto's staan als losse bestanden in `public/assets/img/` en worden alleen via hun pad aangeroepen (bovenin `lib/content.tsx`).
De foto bij Over Höcker is definitief; de overige zijn ontwerp- of stockfoto's die nog vervangen worden. Vervang een foto door een bestand met dezelfde naam, of pas het pad aan in `lib/content.tsx`.

| Bestand | Plek | Afmeting (px) |
|---|---|---|
| `public/assets/img/contact.jpg` | Contact, onder "Plan uw route" | 1100 × 733 |
| `public/assets/img/expert-janneke-popma.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `public/assets/img/expert-joep-meddens.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `public/assets/img/expert-jolien-van-woudenberg.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `public/assets/img/expert-jytte-elfferich.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `public/assets/img/expert-marijn-kingma.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `public/assets/img/home-hero.jpg` | Homepage, grote foto onder de openingszin (stockfoto) | 1200 × 800 |
| `public/assets/img/jobs-groot.jpg` | Jobs, grote foto links | 736 × 920 |
| `public/assets/img/jobs-rechtsboven.jpg` | Jobs, rechtsboven | 1100 × 733 |
| `public/assets/img/jobs-rechtsonder.jpg` | Jobs, rechtsonder | 1100 × 733 |
| `public/assets/img/nieuws-ai-deals-muziekindustrie.jpg` | Nieuwsbericht | 736 × 1102 |
| `public/assets/img/nieuws-auteur.jpg` | Nieuws, auteursfoto bij uitgelicht artikel | 128 × 128 |
| `public/assets/img/nieuws-de-druk-om-het-goed-te-doen.jpg` | Nieuwsbericht | 1000 × 1500 |
| `public/assets/img/nieuws-ik-ga-op-reis.jpg` | Nieuwsbericht | 736 × 490 |
| `public/assets/img/nieuws-wetgevingsoverzicht-2026.jpg` | Nieuwsbericht | 750 × 631 |
| `public/assets/img/over.jpg` | Over Höcker, grote foto (definitief) | 2576 × 1718 |
| `public/assets/img/team-collega-1.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `public/assets/img/team-collega-2.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `public/assets/img/team-collega-3.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `public/assets/img/team-collega-4.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `public/assets/img/team-collega-5.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `public/assets/img/team-collega-6.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `public/assets/img/team-collega-7.jpg` | Profielfoto (vierkant) | 440 × 440 |

## Nog open

- Team-pagina: blijft hetzelfde als op de huidige website (nu alleen de kop "Mensenwerk.").
- Engelse versie (EN) bestaat nog niet.
- Infopagina's (klachtenregeling, privacy, algemene voorwaarden, rechtsgebieden registratie): tekst van de huidige website overnemen.
- Adlaw International: tekst volgt.
- Quotes van cliënten volgen nog.
- De paginatitel in de browser is nu "Lama Lama" (conceptnaam).
