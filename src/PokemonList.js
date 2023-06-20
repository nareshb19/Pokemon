import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonList.scss'; 

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="pokemon-list"> 
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div> 
  );
};

export default PokemonList;