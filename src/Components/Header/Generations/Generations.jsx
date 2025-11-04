import React from "react";
import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

function Generations({ title }) {
  return (
    <div className="mt-5 bg-slate-800 p-5 rounded-2xl shadow-inner">
      <h2 className="text-xl font-semibold mb-4 text-cyan-400">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Gen1 text="Gen 1 - Cosmic Origins" />
        <Gen2 text="Gen 2 - Stellar Evolution" />
        <Gen3 text="Gen 3 - Nebula Expansion" />
        <Gen4 text="Gen 4 - Galactic Legends" />
      </div>
    </div>
  );
}

export default Generations;
