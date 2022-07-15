import { Card, Grid } from "@nextui-org/react";
import React from "react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

type Props = {
  pokemons: number[];
};

const Favorites = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => {
        return <FavoriteCardPokemon id={id} key={id} />;
      })}
    </Grid.Container>
  );
};

export default Favorites;
