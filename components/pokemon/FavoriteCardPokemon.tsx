import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  id: number;
};
const FavoriteCardPokemon = ({ id }: Props) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid
      onClick={onFavoriteClicked}
      xs={6}
      sm={3}
      md={2}
      xl={1}
      key={id}
      style={{ cursor: "pointer" }}
    >
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          width={"100%"}
          height={140}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
