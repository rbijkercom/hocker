import Link from "next/link";
import { notFound } from "next/navigation";
import { PHONE, PHONE_HREF, peopleIn, resolveSpec, SPEC, SPEC_ORDER, type Block } from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { Expertise } from "./Expertise";
import { Arrow } from "./icons";
import { Quotes } from "./Quotes";
import { ReadMore } from "./ReadMore";
import { Avatars, Crumbs, PersonLink } from "./ui";

function Blocks({ blocks }: { blocks: Block[] }) {
  return blocks.map((b, i) =>
    "p" in b ? (
      <p key={i}>{b.p}</p>
    ) : "lead" in b ? (
      <p key={i} className="lead-l">
        {b.lead}
      </p>
    ) : "h" in b ? (
      <h4 key={i} className="bh">
        {b.h}
      </h4>
    ) : (
      <ul key={i} className="ul">
        {b.l.map((x, j) => (
          <li key={j}>{x}</li>
        ))}
      </ul>
    ),
  );
}

export function SpecialismPage({ slug, sub }: { slug: string; sub?: string }) {
  const key = resolveSpec(slug);
  if (!key) notFound();
  const s = SPEC[key];
  const ex = peopleIn(key);
  const [first, second, ...rest] = s.intro;

  return (
    <div className="pg">
      <div className="panelrow">
        <div className="panel s">
          <Crumbs items={[["Home", "/"], ["Specialismen", "/specialismen"], [s.t]]} />
          <h1>{s.t}</h1>
          {[first, second].map((p, i) => p && <p key={i}>{p}</p>)}
          {rest.length > 0 && (
            <ReadMore>
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </ReadMore>
          )}
          {s.legal500 && (
            <div className="lcard">
              <div className="top">
                <span className="label" style={{ fontSize: 10 }}>
                  Recognized by Legal 500
                </span>
                <span />
              </div>
              <q>Highly regarded for its expertise in the media and entertainment sectors</q>
              <p>
                Höcker Advocaten is versed in defamation and infringement matters. <Link href="/team/marijn-kingma">Marijn Kingma</Link> is
                an expert in copyright across the literary, music, and visual-audio industries, while{" "}
                <Link href="/team/joep-meddens">Joep Meddens</Link> is adept at advertising matters.
              </p>
            </div>
          )}
        </div>

        <aside className="subnav">
          <div className="h">Onze specialismen</div>
          {SPEC_ORDER.map((k) => (
            <Link key={k} href={`/specialismen/${k}`} className={k === key ? "on" : undefined} aria-current={k === key ? "page" : undefined}>
              <Arrow />
              <span>{SPEC[k].t}</span>
            </Link>
          ))}
          <div className="scta">
            <b>Direct een specialist spreken?</b>
            {ex.length > 0 && (
              <div className="avs">
                <Avatars people={ex} />
              </div>
            )}
            <CtaButton spec={key} />
            <span className="or">
              of bel <a href={PHONE_HREF}>{PHONE}</a>
            </span>
          </div>
        </aside>
      </div>

      <Expertise
        label={s.t}
        initial={sub}
        tabs={s.subs.map(({ id, t }) => ({ id, t }))}
        panels={s.subs.map((x) => (
          <>
            <h3>{x.t}</h3>
            <Blocks blocks={x.blocks} />
            <div className="xcta">
              <CtaButton spec={key} />
              {ex.length > 0 && (
                <span className="avs">
                  <Avatars people={ex.slice(0, 5)} />
                </span>
              )}
            </div>
          </>
        ))}
      />

      <div className="inner">
        <div className="col">
          {key === "media-marketing" && (
            <div className="sec">
              <Quotes start={1} />
            </div>
          )}
          {ex.length > 0 && (
            <div className="sec">
              <h2>Onze experts</h2>
              <div className="experts">
                {ex.map((p) => (
                  <PersonLink key={p.id} p={p} />
                ))}
              </div>
            </div>
          )}
          <div className="sec">
            <div className="cta">
              <h2 style={{ fontSize: "clamp(24px,2.6vw,34px)" }}>Vragen over {s.t.charAt(0).toLowerCase() + s.t.slice(1)}?</h2>
              <CtaButton spec={key} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const specParams = () => [...SPEC_ORDER, "ie-media", "dispute-resolution"].map((slug) => ({ slug }));

export const subParams = () =>
  specParams().flatMap(({ slug }) => SPEC[resolveSpec(slug)!].subs.map((x) => ({ slug, sub: x.id })));
