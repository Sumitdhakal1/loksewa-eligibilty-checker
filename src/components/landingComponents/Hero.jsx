import { useState } from "react";
import FormSelect from "../common/FormSelect";
import {
  educationOptions,
  genderOptions,
  facultyOptions,
  categoryOptions,
} from "../../constant/options";
import { useNavigate } from "react-router-dom";

const inputBase =
  "w-full bg-[#0e0e0e] border border-[#2a2a2a] rounded-xl text-white text-[15px] px-4 py-[14px] outline-none transition-colors duration-200 focus:border-[#e8294a] placeholder-[#444]";

// const selectBase =
//   "appearance-none w-full bg-[#0e0e0e] border border-[#2a2a2a] rounded-xl text-white text-[15px] px-4 py-[14px] pr-10 outline-none transition-colors duration-200 focus:border-[#e8294a] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";
const Hero = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState("");

  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [faculty, setFaculty] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handelCheckEligibilty = () => {
    setError("");
    const ageNum = parseInt(age);

    if (!age || !gender || !education || !category) {
      setError("Please fill in all fields before checking eligibility.");
      return;
    }

    if ((education === "bachelor" || education === "master") && !faculty) {
      setError("Please select your Faculty / Stream.");
      return;
    }

    if (isNaN(ageNum)) {
      setError("Please enter a valid age.");
      return;
    }

    if (ageNum < 18 || ageNum > 35) {
      setError(
        ageNum < 18
          ? "You must be at least 18 years old to be eligible."
          : "You must be 35 or younger to be eligible.",
      );
      return;
    }

    // All good — navigate
    navigate("/eligibility-results", {
      state: { age: ageNum, gender, education, faculty, category },
    });
  };

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
      <section className=" relative z-10 flex justify-center px-6 pb-14 mt-20">
        <div className="w-full max-w-[640px] bg-[#161616] border border-[#222] rounded-[20px] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
          {/* card header */}
          <div className="text-center">
            <h2 className="font-serif font-bold text-[26px] text-white mb-2">
              Enter your Details
            </h2>
            <p className=" text-[14px] text-[#666]">
              Fill in your information to instantly check Loksewa eligibility
            </p>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-2 gap-5 mb-6 max-sm:grid-cols-1">
            {/* Age */}
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-semibold text-[#555] uppercase tracking-[0.1em]">
                AGE
              </label>
              <input
                type="number"
                placeholder="e.g. 25"
                value={age}
                min={18}
                max={45}
                onChange={(e) => setAge(e.target.value)}
                className={`${inputBase}`}
              />
            </div>
            {/* gender */}
            {/* <div className="flex  flex-col gap-2">
              <label>Gender</label>
              <select>
                <option value="male">Male (पुरुष)</option>
                <option value="female">Female (महिला)</option>
                <option value="other">Other (अन्य)</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] text-[10px] pointer-events-none">
                ▼
              </span>
            </div> */}
            <FormSelect
              label="Gender"
              options={genderOptions}
              value={gender}
              onChange={setGender}
            />
            {/* Education */}
            <FormSelect
              label="HIGHEST EDUCATION"
              options={educationOptions}
              value={education}
              onChange={setEducation}
            />
            {/* faculty */}
            {(education === "bachelor" || education === "master") && (
              <FormSelect
                label="FACULTY / STREAM"
                options={facultyOptions}
                value={faculty}
                onChange={setFaculty}
              />
            )}
            {/* category */}
            <FormSelect
              label=" CATEGORY (जाति)"
              options={categoryOptions}
              value={category}
              onChange={setCategory}
            />

            {/* Error message */}
            {error && (
              <div className="col-span-full flex items-center gap-2 bg-[#1e0a0d] border border-[#e8294a33] rounded-xl px-4 py-3">
                <span className="text-[#e8294a] text-[13px] font-medium">
                  {error}
                </span>
              </div>
            )}

            {/* Submit */}
            <button
              className="col-span-full w-full flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#e8294a] to-[#c41f3b] text-white font-semibold text-[16px] tracking-wide rounded-xl py-[18px] mb-4 transition-all duration-200
              hover:enabled:-translate-y-0.5 hover:enabled:shadow-[0_12px_40px_rgba(232,41,74,0.4)]
              active:enabled:translate-y-0
              disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={handelCheckEligibilty}
            >
              Check My Eligibility
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
