import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-indigo-900 text-white font-sans">
      <Header title="🌌 SpaceDex – Galactic Pokémon Database" />
      <Home title="Explore the Universe of Pokémon" />
      <Footer text="© 2025 SpaceDex. Powered by Cosmic Energy." />
    </div>
  );
}

export default App;
