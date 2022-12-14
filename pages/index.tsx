import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import Layout from "../components/layouts/Layout";
import PokemonCard from "../components/pokemon/PokemonCard";
import { PokeminListResponse, SmallPokemon } from "../interfaces";
// import { Layout } from "../components/layouts";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log("Pokemons", pokemons);
  return (
    <>
      <Layout title="Listado de Pokémons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </Grid.Container>
      </Layout>
    </>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
  } catch (error) {}
  const { data } = await pokeApi.get<PokeminListResponse>("/pokemon?limit=151");
  console.log(data);

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  //Estas props llegan arriba
  return {
    props: { pokemons },
  };
};

export default HomePage;
