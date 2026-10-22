import type { Metadata } from "next";
import { SpecialismPage, specParams } from "@/components/SpecialismPage";
import { resolveSpec, SPEC } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = specParams;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = resolveSpec((await params).slug);
  return { title: key ? SPEC[key].t : undefined };
}

export default async function Page({ params }: Props) {
  return <SpecialismPage slug={(await params).slug} />;
}
