import { Character } from "@/app/interfaces";
import CharacterItem from "./CharacterItem";

export default async function CharacterList({
  characterUrls,
}: {
  characterUrls: string[];
}) {
  if (characterUrls.length === 0)
    return <em>This house has no sworn members</em>;

  const characters = await getCharacters(characterUrls);

  return (
    <section>
      <h3>Sworn Members</h3>

      <ul>
        {characters.map((character: Character) => (
          <CharacterItem key={character.url} character={character} />
        ))}
      </ul>
    </section>
  );
}

async function getCharacters(characterUrls: string[]) {
  return Promise.all(
    characterUrls.map(async (character) => {
      const res = await fetch(character);

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return await res.json();
    })
  );
}
