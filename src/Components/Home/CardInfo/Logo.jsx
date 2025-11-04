import React from "react";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

function CardInfo({ title }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mx-auto w-3/4">
      <h3 className="text-xl font-semibold mb-3 text-cyan-300">{title}</h3>
      <Evolution text="🌱 Bulbasaur → Ivysaur → Venusaur" />
      <TypeEffect text="🌀 Type: Grass / Poison" />
      <Logo text="💫 Galactic Pokémon Badge" />
    </div>
  );
}

export default CardInfo;
