import React from "react";
function Logo({ text }) {
  return (
    <div className="flex justify-center">
      <p className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-full shadow-lg">
        {text}
      </p>
    </div>
  );
}

export default Logo;
