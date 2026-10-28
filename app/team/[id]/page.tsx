import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { CtaButton } from "@/components/CtaButton";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { Crumbs, PersonLink } from "@/components/ui";
import { EMAIL, NEWS, PEOPLE, PHONE, PHONE_HREF, SPEC, isSpecRole, personSpecs, teamRoleLabel, type Person } from "@/lib/content";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => PEOPLE.map((p) => ({ id: p.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = PEOPLE.find((x) => x.id === id);
  return { title: p ? (p.n ?? "Profiel") : undefined };
}

const nameOf = (p: Person) => p.n ?? "Collega";

export default async function ProfilePage({ params }: Props) {
  const { id } = await params;
  const i = PEOPLE.findIndex((x) => x.id === id);
  if (i < 0) notFound();
  const p = PEOPLE[i];
  const L = PEOPLE.length;
  const prev = PEOPLE[(i - 1 + L) % L];
  const next = PEOPLE[(i + 1) % L];
  const name = p.n ?? "Naam volgt";
  const first = p.n?.split(" ")[0];
  const specs = personSpecs(p);
  const duties = p.roles.filter((r) => !isSpecRole(r));
  const colleagues = PEOPLE.filter((x) => x.n && x.id !== p.id && x.roles.some((r) => p.roles.includes(r))).slice(0, 5);
  const articles = NEWS.filter((n) => p.news?.includes(n.slug));

  return (
    <section className="prof">
      <div className="wrap">
        <Crumbs items={[["Home", "/"], ["Team", "/team"], [name]]} />
        <div className="pgrid">
          <div className="pimg">
            <img src={p.img} alt={name} />
          </div>
          <div className="pbody">
            {specs[0] ? (
              <Link className="label" href={`/specialismen/${specs[0]}`}>
                {SPEC[specs[0]].t}
              </Link>
            ) : (
              <span className="label">{duties[0] ? teamRoleLabel(duties[0]) : "Team"}</span>
            )}
            <h1>{name}</h1>
            {p.bio ? (
              p.bio.map((b) => (
                <p className="lead" key={b}>
                  {b}
                </p>
              ))
            ) : (
              <div className="note">
                {p.n ? "Introductietekst volgt." : "Profiel volgt"}: hier komen {p.n ? "" : "naam, "}functie, een korte introductie en directe
                contactgegevens.
              </div>
            )}
            {p.tags && (
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            <div className="pact">
              <CtaButton person={p.id}>{first ? `Plan een gesprek met ${first}` : "Plan een gesprek"}</CtaButton>
              <a className="btn ghost" href={PHONE_HREF}>
                Bel
              </a>
              <a className="btn ghost" href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Voor ${p.n ?? "Höcker"}`)}`}>
                Mail
              </a>
            </div>
            <dl className="pfacts">
              {specs.length > 0 && (
                <>
                  <dt>{specs.length > 1 ? "Specialismen" : "Specialisme"}</dt>
                  <dd>
                    {specs.map((k, i) => (
                      <span key={k}>
                        {i > 0 && ", "}
                        <Link href={`/specialismen/${k}`}>{SPEC[k].t}</Link>
                      </span>
                    ))}
                  </dd>
                </>
              )}
              {duties.map((role) => (
                <Fragment key={role}>
                  <dt>Functie</dt>
                  <dd>{teamRoleLabel(role)}</dd>
                </Fragment>
              ))}
              <dt>Kantoor</dt>
              <dd>Apollolaan 153, Amsterdam</dd>
              <dt>Telefoon</dt>
              <dd>
                <a href={PHONE_HREF}>{PHONE}</a>
              </dd>
            </dl>
          </div>
        </div>

        {articles.length > 0 && (
          <div className="psec">
            <h2>Publicaties</h2>
            <div className="side">
              {articles.map((n) => (
                <Link key={n.slug} href={`/nieuws/${n.slug}`}>
                  <span className="meta">{n.d}</span>
                  <span className="t">{n.t}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
        {colleagues.length > 0 && (
          <div className="psec">
            <h2>{p.spec ? "Werkt samen met" : "Collega’s"}</h2>
            <div className="experts">
              {colleagues.map((c) => (
                <PersonLink key={c.id} p={c} />
              ))}
            </div>
          </div>
        )}
        <nav className="pnav" aria-label="Andere profielen">
          <Link href={`/team/${prev.id}`}>
            <ChevronLeft />
            <span>{nameOf(prev)}</span>
          </Link>
          <Link href="/team" className="all">
            Heel het team
          </Link>
          <Link href={`/team/${next.id}`}>
            <span>{nameOf(next)}</span>
            <ChevronRight />
          </Link>
        </nav>
      </div>
    </section>
  );
}
