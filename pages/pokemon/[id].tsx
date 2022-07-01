import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import Layout from "../../components/layouts/Layout";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Algun poke">
      <h1>
        {pokemon.id}-{pokemon.name}
      </h1>
    </Layout>
  );
};

/* SE EJECUTA EN LADO DEL SERVIDOR */

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //Sabemos que son 151 pokemons
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    // paths: [
    //   {
    //     params: {
    //       id: "1",
    //     },
    //   },
    //   {
    //     params: {
    //       id: "2",
    //     },
    //   },
    //   {
    //     params: {
    //       id: "3",
    //     },
    //   },
    // ],
    //fallback: "blocking",
    //Si el id no esta definido en la lista de arriba regreso 404
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  console.log(data);

  //Estas props llegan arriba

  return {
    props: { pokemon: data },
  };
};

export default PokemonPage;
