// Integral application doman

import React, { useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");

  const getPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );

      const data = await response.json();

      setPokemon(data);
    } catch (error) {
      alert("Pokemon not found");
    }
  };

  return (
    <div className="App">
      <h1>PokéFinder</h1>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter Pokémon name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={getPokemon}>Search</button>
      </div>

      <div className="pokemonGrid">
        {pokemon && (
          <div className="card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />

            <h2>{pokemon.name.toUpperCase()}</h2>

            <p>Type: {pokemon.types[0].type.name}</p>

            <p>Height: {pokemon.height}</p>

            <p>Weight: {pokemon.weight}</p>
          </div>
        )}
      </div>

      <footer>
        <p>
          Created by Eli Shell |
          <a href="https://github.com/Elishell79/Pokefinder">GitHub Repository</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
