import { NEWS, PEOPLE, SPEC, SPEC_ORDER, type Block, type SpecKey } from "./content";
import { norm, toText } from "./text";

export type ResultType = "Advocaat" | "Specialisme" | "Expertise" | "Nieuws" | "Pagina";
export type Result = { t: string; type: ResultType; sub: string; href: string; img?: string };
type Entry = Result & { nt: string; nall: string };

const KW: Record<SpecKey, string> = {
  arbeidsrecht: "ontslag reorganisatie werkgever werknemer cao medezeggenschap or wor vaststellingsovereenkomst onderzoek grensoverschrijdend gedrag zzp dba",
  ondernemingsrecht: "overname fusie aandeelhouder aandeelhouders bestuurder vennootschap herstructurering joint venture due diligence contract contracten franchise corporate litigation ondernemingskamer enquete",
  "ie-ict": "merk merken modellen auteursrecht naburig software saas privacy avg data ict it contract inbreuk e-commerce",
  "media-marketing": "reclame reclamerecht smaad laster pers publicatie publicaties influencer media telecom cookies spam reclame code commissie",
  "algemeen-belang": "wamca collectieve actie acties massaschade urgenda klimaat zorgplicht aansprakelijkheid",
  geschillenbeslechting: "procederen procedure kort geding arbitrage mediation geschil dispute resolution rechtszaak litigation",
};

const blockText = (b: Block) =>
  "p" in b ? toText(b.p) : "lead" in b ? b.lead : "h" in b ? b.h : b.l.map(toText).join(" ");

const IDX: Entry[] = [
  ...PEOPLE.filter((p) => p.n && p.spec).map((p) => ({
    t: p.n!,
    type: "Advocaat" as const,
    sub: SPEC[p.spec!].t,
    href: `/team/${p.id}`,
    img: p.img,
    kw: [...(p.tags ?? []), ...(p.bio ?? []), SPEC[p.spec!].t].join(" "),
  })),
  ...SPEC_ORDER.map((k) => ({
    t: SPEC[k].t,
    type: "Specialisme" as const,
    sub: SPEC[k].short,
    href: `/specialismen/${k}`,
    kw: KW[k] + " " + SPEC[k].subs.map((x) => x.t).join(" "),
  })),
  ...SPEC_ORDER.flatMap((k) =>
    SPEC[k].subs.map((x) => ({
      t: x.t,
      type: "Expertise" as const,
      sub: SPEC[k].t,
      href: `/specialismen/${k}/${x.id}`,
      kw: x.blocks.map(blockText).join(" "),
    })),
  ),
  ...NEWS.map((n) => ({ t: n.t, type: "Nieuws" as const, sub: n.d, href: `/nieuws/${n.slug}`, kw: (n.x ?? "") + " " + n.a })),
  { t: "Werken bij Höcker", type: "Pagina" as const, sub: "Jobs, stages en open sollicitatie", href: "/jobs", kw: "vacature vacatures baan sollicitatie solliciteren stage carriere werken jobs" },
  { t: "Contact en route", type: "Pagina" as const, sub: "Apollolaan 153, Amsterdam", href: "/contact", kw: "adres telefoon mail bellen route afspraak gesprek terugbellen" },
  { t: "Cliënten over ons", type: "Pagina" as const, sub: "Quotes van Chambers en Legal 500", href: "/clienten", kw: "chambers legal 500 referenties klanten clienten" },
  { t: "Over Höcker", type: "Pagina" as const, sub: "Waar wij in geloven en internationaal", href: "/over", kw: "internationaal interlex transatlantic adlaw iael avrio netwerk visie kantoor samenwerkingsverbanden urgenda jinc opera ballet ita theater" },
].map(({ kw, ...r }) => ({ ...r, nt: norm(r.t), nall: norm(`${r.t} ${r.sub} ${kw}`) }));

const WEIGHT: Record<ResultType, number> = { Advocaat: 6, Specialisme: 5, Expertise: 4, Nieuws: 2, Pagina: 1 };

export const SUGGEST = ["Ontslag", "Reclamerecht", "Mediation", "Privacy", "Marijn Kingma"];

export function findAll(q: string): Result[] {
  const nq = norm(q).trim();
  if (!nq) return [];
  const words = nq.split(/\s+/);
  return IDX.flatMap((r) => {
    if (!words.every((w) => r.nall.includes(w))) return [];
    let s = 0;
    if (r.nt.startsWith(nq)) s += 100;
    else if (r.nt.includes(nq)) s += 60;
    words.forEach((w) => {
      if (r.nt.split(/[\s/&-]+/).some((t) => t.startsWith(w))) s += 20;
    });
    return [{ r, s: s + WEIGHT[r.type] }];
  })
    .sort((a, b) => b.s - a.s)
    .slice(0, 7)
    .map(({ r: { nt, nall, ...res } }) => res);
}
