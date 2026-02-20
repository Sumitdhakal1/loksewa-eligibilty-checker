import React from "react";

const Header = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="text-2xl">🏛️</span>
          </div>
          <div>
            <p
              className="text-white font-bold text-lg leading-tight"
              style={{ fontFamily: "serif" }}
            >
              लोकसेवा तयारी
            </p>
            <p className="text-blue-200 text-sm font-medium tracking-wide">
              Loksewa Prep
            </p>
          </div>
        </div>

        {/* Exam Alerts Button */}
        <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow transition-all duration-200 hover:scale-105">
          <span>✉️</span>
          <span>Exam Alerts</span>
          <span className="text-blue-300">›</span>
        </button>
      </div>
    </section>
  );
};

export default Header;
