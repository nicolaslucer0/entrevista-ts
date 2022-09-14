import { useState } from "react";
import styled from "styled-components";

const Padding = styled.div`
  padding: 2em;
`;

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const URL = "https://pokeapi.co/api/v2/type/{POKEMON_TYPE}";

  return (
    <Padding>
      <select placeholder="Nombre de pokemon">
        <option value="">Seleccionar</option>
        <option value="normal">Normal</option>
        <option value="electric">Electic</option>
        <option value="water">Water</option>
        <option value="fire">Fire</option>
        <option value="ghost">Ghost</option>
      </select>
      <button>Buscar</button>

      {!!pokemons && (
        <div>
          {pokemons.map((p: any) => (
            <div key={p.pokemon.id}>{p.pokemon.name}</div>
          ))}
        </div>
      )}
    </Padding>
  );
};

export default Home;
