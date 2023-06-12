import Houses from "@/components/Houses";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function HousesPage({
  params,
}: {
  params: { page: string };
}) {
  const page = parseInt(params.page, 10);

  if (isNaN(page) || page < 1 || page > 45) {
    notFound();
  }

  return (
    <section>
      <h2 className="mb-0 pb-8 border-b border-slate-700">Houses</h2>

      <Houses page={page} />

      <nav className="flex justify-between mt-8">
        <Link
          href={`/houses/${page - 1}`}
          className={`cta ${page === 1 ? "invisible" : ""}`}
          id="previous"
        >
          Previous
        </Link>

        <Link
          href={`/houses/${page + 1}`}
          className={`cta ${page === 45 ? "invisible" : ""}`}
          id="next"
        >
          Next
        </Link>
      </nav>
    </section>
  );
}
