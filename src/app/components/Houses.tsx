import { House } from "@/app/interfaces";
import Characters from "./Characters";
import { Suspense } from "react";

export default async function Houses() {
  const houses = await getHouses();

  return (
    <section>
      <h2 className="mb-0 pb-8 border-b border-white">Houses</h2>

      {houses.map((house: House) => (
        <div
          key={house.url}
          className="border-b border-white py-8 overflow-hidden"
        >
          <h3>
            <strong>{house.name} </strong>
            <em className="float-right text-sm mt-1">{house.words}</em>
          </h3>

          <Suspense fallback={<em>Loading...</em>}>
            <Characters characterUrls={house.swornMembers} />
          </Suspense>
        </div>
      ))}
    </section>
  );
}

async function getHouses() {
  const res = await fetch("https://www.anapioficeandfire.com/api/houses");

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const houses = await res.json();

  return houses;
}
