export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}
