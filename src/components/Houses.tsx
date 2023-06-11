import { Suspense } from "react";
import Characters from "@/components/Characters";
import { House } from "@/types";

export default async function Houses({ page }: { page: number }) {
  const houses = (await getHouses(page)) as House[];

  return (
    <section>
      {houses.map((house) => (
        <article
          key={house.url}
          className="border-b border-slate-700 py-8 overflow-hidden"
        >
          <h3>
            <strong>{house.name} </strong>
            <em className="float-right text-sm mt-1">{house.words}</em>
          </h3>

          <Suspense fallback={<em>Loading...</em>}>
            <Characters characterUrls={house.swornMembers} />
          </Suspense>
        </article>
      ))}
    </section>
  );
}

async function getHouses(page: number) {
  const res = await fetch(
    `https://www.anapioficeandfire.com/api/houses?page=${page}`
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const houses = await res.json();

  return houses;
}
