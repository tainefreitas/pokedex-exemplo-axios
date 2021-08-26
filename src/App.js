import "./App.css";

import getPokemon from "./pokedex";

import { useState, useEffect } from "react";



function App() {

  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await getPokemon(1);
        console.log(response);
        setPokemon(response);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemons();
  }, []);

  return (

    <div className="App">
      {pokemon && (
        <img src={pokemon?.sprites?.other["official-artwork"].front_default} />
      )}
    </div>
  );

}



export default App;