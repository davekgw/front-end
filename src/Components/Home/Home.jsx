import React from "react";
import Search from "./Search";
import CardInfo from "./CardInfo/CardInfo";

function Home({ title }) {
  return (
    <section className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 text-cyan-300">{title}</h2>
      <Search text="🔭 Search your Pokémon among the stars..." />
      <CardInfo title="Pokémon Cosmic Data" />
    </section>
  );
}

export default Home;