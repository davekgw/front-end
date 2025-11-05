import React from "react";
function Footer({ text }) {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 py-4 mt-8 text-center rounded-t-3xl shadow-lg">
      <p className="text-sm text-gray-200">{text}</p>
    </footer>
  );
}

export default Footer;
