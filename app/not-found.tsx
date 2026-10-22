import Link from "next/link";
import { SectionHead } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="blk pgtop">
      <div className="wrap">
        <SectionHead level={1} label="404" title="Deze pagina bestaat niet." intro="Misschien is hij verplaatst. Zoek met / of ga terug naar de homepage." />
        <Link className="more" href="/">
          Naar de homepage
        </Link>
      </div>
    </section>
  );
}
