import { Character } from "../types";

export default async function Characters({
  characterUrls,
}: {
  characterUrls: string[];
}) {
  if (characterUrls.length === 0)
    return <em>This house has no sworn members</em>;

  const characters = (await getCharacters(characterUrls)) as Character[];

  return (
    <section>
      <h4>Sworn Members</h4>

      <ul className="characters list-disc list-inside">
        {characters.map((character) => (
          <li key={character.url} className="character list-disc">
            {character.name || "Unknown"}
            {character.died ? ` - Died ${character.died}` : " - Alive"}
          </li>
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
