import React from "react";
import Logo from "./Logo";
import Generations from "./Generations/Generations";

function Header({ title }) {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6 shadow-xl rounded-b-3xl text-center">
      <Logo text="🚀 SpaceDex Logo" />
      <h1 className="text-3xl font-bold tracking-wider mt-2 text-cyan-300 drop-shadow-md">
        {title}
      </h1>
      <Generations title="✨ Galactic Generations ✨" />
    </header>
  );
}

export default Header;
