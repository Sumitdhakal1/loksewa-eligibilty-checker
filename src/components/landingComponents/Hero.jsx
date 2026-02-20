import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden ">
      <section className="relative z-10 text-center px-6 pt-16 pb-1 animate-fade-up">
        <h1
          className="font-serif font-black leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: "clamp(48px, 8vw, 88px)" }}
        >
          लोकसेवा <span className="text-red-500 italic">Eligibility</span>
          <br />
          Checker
        </h1>
        <p
          className="text-[#aaa] -mb-3"
          style={{ fontSize: "clamp(15px,2vw, 19px)" }}
        >
          Find out which government posts you qualify for — in seconds.
        </p>
      </section>
      {/* form card */}
      <section className="flex justify-center">
        <div>
          {/* card header */}
          <div>
            <h2>Enter your Details</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
