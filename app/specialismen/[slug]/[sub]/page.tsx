import type { Metadata } from "next";
import { SpecialismPage, subParams } from "@/components/SpecialismPage";
import { resolveSpec, SPEC } from "@/lib/content";

type Props = { params: Promise<{ slug: string; sub: string }> };

export const dynamicParams = false;
export const generateStaticParams = subParams;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub } = await params;
  const key = resolveSpec(slug);
  const topic = key && SPEC[key].subs.find((x) => x.id === sub);
  return { title: key ? (topic ? `${topic.t} — ${SPEC[key].t}` : SPEC[key].t) : undefined };
}

export default async function Page({ params }: Props) {
  const { slug, sub } = await params;
  return <SpecialismPage slug={slug} sub={sub} />;
}
