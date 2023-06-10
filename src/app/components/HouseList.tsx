import { House } from "@/app/interfaces";
import CharacterList from "./CharacterList";

export default async function HouseList() {
  const houses = await getHouses();

  return (
    <section>
      <h2>Houses</h2>

      {houses.map((house: House) => (
        <div
          key={house.url}
          className="border-b py-4 overflow-hidden border-white"
        >
          <h3>
            <strong>{house.name} </strong>
            <em className="float-right text-sm mt-1">{house.words}</em>
          </h3>

          <CharacterList characterUrls={house.swornMembers} />
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

function logHouses() {}
