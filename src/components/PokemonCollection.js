import React from "react";
import { Card } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";

function PokemonCollection({ pokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke.id}
          name={poke.name}
          sprites={poke.sprites}
          hp={poke.hp}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
