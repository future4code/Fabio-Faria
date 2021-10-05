import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    getPokemon(props.pokemon);
  }, []);

  const getPokemon = async (pokemon) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokemon(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} KG</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;
