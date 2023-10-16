import { PokemonListResponse } from "@/models/basePokemonRequest";

async function getInitialFetchPokemon(): Promise<PokemonListResponse> {
  console.log(process.env.NEXT_PUBLIC_POKEDEX_API);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_POKEDEX_API}pokemon/`
  );
  const data = await response.json();
  return data;
}

async function getPokemonFromUrl(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const pokedexService = {
  getInitialFetchPokemon,
  getPokemonFromUrl,
};

export default pokedexService;
