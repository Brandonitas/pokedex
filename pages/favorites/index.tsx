import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import Favorites from "../../components/pokemon/Favorites";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorites pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
