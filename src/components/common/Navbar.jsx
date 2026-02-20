import React, { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const navItems = ["Home", "Old Questions", "Learning Materials", "Mock Test"];
  return (
    <div>
      {" "}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`px-6 py-3 text-sm font-semibold transition-all duration-200 border-b-2 ${
                activeNav === item
                  ? "text-blue-700 border-blue-600 bg-blue-50"
                  : "text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
