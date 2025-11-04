import React from "react";

function Logo({ text }) {
  return (
    <div className="mt-3">
      <span className="text-cyan-400 font-semibold italic">{text}</span>
    </div>
  );
}

export default Logo;