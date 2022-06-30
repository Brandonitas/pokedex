import { FC } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Brandon Reyes" />
        <meta name="description" content="Información sobre el pokémon XXXXX" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
