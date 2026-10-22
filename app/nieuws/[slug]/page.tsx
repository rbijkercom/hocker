import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaButton } from "@/components/CtaButton";
import { Crumbs } from "@/components/ui";
import { NEWS, personById } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => NEWS.map((n) => ({ slug: n.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: NEWS.find((n) => n.slug === slug)?.t };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const n = NEWS.find((x) => x.slug === slug);
  if (!n) notFound();
  const author = n.slug === "ai-deals-muziekindustrie" ? personById("marijn-kingma") : undefined;

  return (
    <article className="article">
      <Crumbs items={[["Home", "/"], ["Nieuws", "/nieuws"]]} />
      <span className="meta">
        {n.d} — {n.a}
      </span>
      <h1>{n.t}</h1>
      {n.x && <p className="lead">{n.x}</p>}
      <div className="note">De volledige tekst van dit artikel volgt. Dit is een voorbeeldpagina in het ontwerp.</div>
      <img src={n.img} alt="" style={{ margin: "32px 0", width: "100%", aspectRatio: "16/10", objectFit: "cover" }} />
      <div className="acta">
        {author && (
          <Link href={`/team/${author.id}`}>
            <img src={author.img} alt="" />
          </Link>
        )}
        <div>
          <b>Vragen over dit onderwerp?</b>
          <span>
            {author ? (
              <>
                Spreek direct met <Link href={`/team/${author.id}`}>{author.n}</Link>.
              </>
            ) : (
              "Wij denken graag met u mee."
            )}
          </span>
        </div>
        <CtaButton person={author?.id} />
      </div>
      <Link className="more" href="/nieuws">
        ← Terug naar nieuws
      </Link>
    </article>
  );
}
