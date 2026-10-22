import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs } from "@/components/ui";
import { EMAIL, INFO, PHONE, PHONE_HREF } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(INFO).map((slug) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: INFO[(await params).slug] };
}

export default async function InfoPage({ params }: Props) {
  const title = INFO[(await params).slug];
  if (!title) notFound();
  return (
    <article className="article">
      <Crumbs items={[["Home", "/"], [title]]} />
      <h1>{title}</h1>
      <div className="note">De tekst van deze pagina wordt overgenomen van de huidige website.</div>
      <p>
        Vragen hierover? Bel <a href={PHONE_HREF}>{PHONE}</a> of mail <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </article>
  );
}
