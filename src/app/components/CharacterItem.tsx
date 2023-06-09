import { Character } from "@/app/interfaces";

export default async function CharacterItem({
  character,
}: {
  character: Character;
}) {
  return (
    <li>
      {character.name}
      {character.died ? `Died ${character.died}` : "Alive"}
    </li>
  );
}
