"use client";

import { useEffect, useState } from "react";

import { PokemonListResponse } from "@/models/basePokemonRequest";
import pokedexService from "@/services/pokemonServices";

export default function PokedexPage() {
  const [loading, setLoading] = useState(true);
  const [currentResponse, setCurrentResponse] = useState<PokemonListResponse>();

  useEffect(() => {
    initialFetch();
  }, []);

  const initialFetch = async () => {
    const response = await pokedexService.getInitialFetchPokemon();
    setCurrentResponse(response);
    setLoading(false);
  };

  const handleClick = async (url?: string | null) => {
    if (url) {
      setLoading(true);
      const response = await pokedexService.getPokemonFromUrl(url);
      setCurrentResponse(response);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pokedex</h1>
      {!currentResponse || loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {currentResponse?.results.map((p) => (
              <li key={p.name}>{p.name}</li>
            ))}
          </ul>
          <div>
            <button
              disabled={!currentResponse?.previous}
              onClick={() => handleClick(currentResponse?.previous)}
            >
              Previous
            </button>
            <button
              disabled={!currentResponse?.next}
              onClick={() => handleClick(currentResponse?.next)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
