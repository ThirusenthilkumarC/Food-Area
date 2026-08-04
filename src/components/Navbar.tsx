import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Menu", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-orange-500">
          🍔 Food Area
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-orange-400 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-white transition">
          Login
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 text-center py-5 space-y-5">
          {links.map((link) => (
            <p key={link} className="text-white hover:text-orange-400">
              {link}
            </p>
          ))}

          <button className="bg-orange-500 px-5 py-2 rounded-full text-white">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}