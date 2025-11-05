import React from "react";
function Search({ text }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder={text}
        className="w-2/3 p-3 rounded-xl border border-cyan-400 bg-slate-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
    </div>
  );
}

export default Search;

