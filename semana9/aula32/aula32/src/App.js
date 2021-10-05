import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PokeCard from "./components/PokeCard/PokeCard";

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   height: 100vh;
//   width: 100vw;
// `;

const App = () => {
  const [pokelist, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    getPokemonList();
  }, [pokeName]);

  const getPokemonList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokelist(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changePokeName = (e) => {
    setPokeName(e.target.value);
  };

  return (
    <>
      <h1>Pokemons</h1>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokelist.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </>
  );
};

export default App;
