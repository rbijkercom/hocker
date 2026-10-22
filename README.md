# Höcker Advocaten – website (concept "Lama Lama")

Dit is het klikbare ontwerp van de nieuwe website van Höcker Advocaten, als basis voor de bouw.
De foto's staan als losse bestanden in `assets/img/` (niet ingebed in de code).

## Starten

Geen build-stap nodig: het is gewone HTML, CSS en JavaScript.

- Open `index.html` in een browser, of
- start een lokale server in deze map, bijvoorbeeld `python3 -m http.server 8000`, en ga naar http://localhost:8000

De lettertypes (Source Serif 4 en DM Sans) komen van Google Fonts; daarvoor is internet nodig.

## Structuur

```
index.html          kop, menu, footer, zoekscherm en contactpaneel (vaste onderdelen)
css/style.css       alle opmaak
js/app.js           routing, pagina's, teksten, zoekfunctie en interactie
assets/img/         foto's als losse JPG-bestanden (zie lijst hieronder)
assets/logos/       keurmerken in de footer (Chambers, Legal 500, Interlex)
```

## Hoe het werkt

- **Routing** gaat via de hash in de URL (`#/specialismen/ondernemingsrecht`). Pagina's: home, specialismen, specialisme (+ onderwerp), team, profiel, cliënten, nieuws, artikel, jobs, over, contact, infopagina's.
- **Openingsanimatie** op de homepage: de lange tekst wordt doorgestreept tot "Höcker vermijdt lange teksten." (functie `playIntro` in `app.js`; respecteert "prefers-reduced-motion").
- **Teksten** staan als data bovenin `app.js`: `SPEC` (zes specialismen met onderwerpen), `NEWS`, `QUOTES`, `NETWORKS`, `PARTNERS`, `CLIENTS`, `PEOPLE`.
- **Zoekfunctie** werkt in de browser op dezelfde data (`IDX` in `app.js`); sneltoets `/`.
- **Groene punten** achter koppen worden automatisch toegevoegd (functie `dotify`).
- **Contactpaneel** ("Plan een gesprek") en het contactformulier versturen nog niets; hier moet een backend of formulierdienst aan gekoppeld worden.

## Foto's

Alle foto's staan als losse bestanden in `assets/img/` en worden in de code alleen via hun pad aangeroepen (object `IMG` bovenin `js/app.js`).
De foto bij Over Höcker is definitief; de overige zijn ontwerp- of stockfoto's die nog vervangen worden. Vervang een foto door een bestand met dezelfde naam, of pas het pad aan in `IMG`.

| Bestand | Plek | Afmeting (px) |
|---|---|---|
| `assets/img/contact.jpg` | Contact, onder "Plan uw route" | 1100 × 733 |
| `assets/img/expert-janneke-popma.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `assets/img/expert-joep-meddens.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `assets/img/expert-jolien-van-woudenberg.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `assets/img/expert-jytte-elfferich.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `assets/img/expert-marijn-kingma.jpg` | Profielfoto (vierkant) | 256 × 256 |
| `assets/img/home-hero.jpg` | Homepage, grote foto onder de openingszin (stockfoto) | 1200 × 800 |
| `assets/img/jobs-groot.jpg` | Jobs, grote foto links | 736 × 920 |
| `assets/img/jobs-rechtsboven.jpg` | Jobs, rechtsboven | 1100 × 733 |
| `assets/img/jobs-rechtsonder.jpg` | Jobs, rechtsonder | 1100 × 733 |
| `assets/img/nieuws-ai-deals-muziekindustrie.jpg` | Nieuwsbericht | 736 × 1102 |
| `assets/img/nieuws-auteur.jpg` | Nieuws, auteursfoto bij uitgelicht artikel | 128 × 128 |
| `assets/img/nieuws-de-druk-om-het-goed-te-doen.jpg` | Nieuwsbericht | 1000 × 1500 |
| `assets/img/nieuws-ik-ga-op-reis.jpg` | Nieuwsbericht | 736 × 490 |
| `assets/img/nieuws-wetgevingsoverzicht-2026.jpg` | Nieuwsbericht | 750 × 631 |
| `assets/img/over.jpg` | Over Höcker, grote foto (definitief) | 2576 × 1718 |
| `assets/img/team-collega-1.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `assets/img/team-collega-2.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `assets/img/team-collega-3.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `assets/img/team-collega-4.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `assets/img/team-collega-5.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `assets/img/team-collega-6.jpg` | Profielfoto (vierkant) | 440 × 440 |
| `assets/img/team-collega-7.jpg` | Profielfoto (vierkant) | 440 × 440 |

## Nog open

- Team-pagina: blijft hetzelfde als op de huidige website (nu alleen de kop "Mensenwerk.").
- Engelse versie (EN) bestaat nog niet.
- Infopagina's (klachtenregeling, privacy, algemene voorwaarden, rechtsgebieden registratie): tekst van de huidige website overnemen.
- Adlaw International: tekst volgt.
- Quotes van cliënten volgen nog.
- De paginatitel in de browser is nu "Lama Lama" (conceptnaam).
