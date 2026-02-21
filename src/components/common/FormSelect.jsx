const selectBase =
  "appearance-none w-full bg-[#0e0e0e] border border-[#2a2a2a] rounded-xl text-[15px] px-4 py-[14px] pr-10 outline-none transition-colors duration-200 focus:border-[#e8294a] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

export default function FormSelect({ label, options, value, onChange }) {
  return (
    <section className="flex flex-col gap-2">
      <label className="text-[16px] font-semibold text-[#555] uppercase tracking-[0.1em]">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${selectBase}`}
          style={{ color: value === "" ? "#444" : "white" }}
        >
          {options.map((opt) =>
            opt.value === "" ? (
              <option key="" value="" hidden>
                {opt.label}
              </option>
            ) : (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-[#161616] text-white"
              >
                {opt.label}
              </option>
            ),
          )}
        </select>
        {/* Custom dropdown arrow */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] text-[10px] pointer-events-none">
          ▼
        </span>
      </div>
    </section>
  );
}
