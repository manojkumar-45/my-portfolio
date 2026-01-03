import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-container fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="nav-sec  max-w-7xl mx-auto  px-6 h-18 grid grid-cols-3 items-center">
        <div
          className="logo inline-block text-outfit-regular text-3xl font-bold tracking-wide
    bg-gradient-to-r from-[#34d399] via-[#5eead4] to-[#d1fae5]
    bg-clip-text text-transparent
    "
        >
          Manoj Kumar V
        </div>

        <div className="nav-center  hidden md:flex justify-center">
          <ul
            className=" 
      flex items-center gap-0
      px-1 py-1.5
      rounded-full
      bg-white/7
      backdrop-blur-xl
      border border-white/20
      text-gray-300 text-lg font-semibold
      shadow-lg
    "
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="
    inline-block
    max-h-[16px]
    my-auto
      px-4 
      rounded-full
      font-semibold
      transition-transform transition-colors
      duration-300
      ease-[cubic-bezier(0.34,1.56,0.64,1)]
      hover:text-[#1c9772]/60
      hover:scale-110
      active:scale-95
    "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex justify-end">
          <a
            href="https://www.linkedin.com/in/manojkumar017"
            target="_blank"
            rel="noopener noreferrer"
            className="
       px-6 py-2 rounded-full
      bg-gradient-to-r from-[#34d399] via-[#5eead4] to-[#d1fae5]
      text-[#0b1f1a] font-semibold
      shadow-[0_2px_10px_rgba(52,211,153,0.25)]
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_6px_10px_rgba(52,211,153,0.45)]
    "
          >
            Connect with Me
          </a>
        </div>

        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-[#34d399]
             drop-shadow-[0_0_1px_#5eead4]
             drop-shadow-[0_0_15px_#d1fae5] text-3xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pt-2">
          <div
            className="
              rounded-2xl
              bg-white/5
              backdrop-blur-xl
              border border-white/20
              shadow-xl
              py-6
            "
          >
            <ul className="flex flex-col items-center gap-6 text-gray-300 text-lg font-semibold">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center">
              <a
                href="https://www.linkedin.com/in/manojkumar017"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-2 rounded-full
              bg-gradient-to-r from-[#34d399] via-[#5eead4] to-[#d1fae5] 
                  text-black font-semibold
                  shadow-md
                "
              >
                Connect with Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

