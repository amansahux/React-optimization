import React, { useEffect, useState } from "react";
import { Fix } from "./components/Fix";
import Search from "./components/Search";
import User from "./components/User";

// Rule 🧠

// If you can calculate it during render from existing props/state, don't use useEffect for it.

// useEffect should generally be about synchronization, not ordinary calculations.

// If an effect updates state, check whether that state can cause the same effect to run again.

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("Effect");
  });

  return (
   
   <>
  <Search />
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#11100e] px-5 py-10 text-[#f6f0e5] sm:px-8">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#c5a46d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#6f5a3c]/15 blur-3xl" />

      <section className="relative w-full max-w-5xl border border-[#c5a46d]/30 bg-[#171613]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-[34rem] flex-col justify-between border-b border-[#c5a46d]/20 p-7 sm:p-12 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.32em] text-[#c5a46d]">
              <span>Atelier No. 09</span>
              <span className="text-[#9b9386]">Est. 1987</span>
            </div>

            <div className="max-w-md py-14">
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#9b9386]">The art of accumulation</p>
              <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] text-[#f8f1e5] sm:text-8xl">
                Quietly <span className="italic text-[#c5a46d]">rare.</span>
              </h1>
              <p className="mt-8 max-w-sm text-sm leading-7 text-[#aaa193]">
                A private space for measured progress. Each mark is a small ceremony.
              </p>
            </div>

            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#776f62]">
              <span className="h-px w-10 bg-[#c5a46d]/50" />
              <span>Personal collection</span>
            </div>
          </div>

          <div className="flex min-h-[34rem] flex-col items-center justify-center p-7 text-center sm:p-12">
            <div className="mb-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b9386]">
              <span className="h-1 w-1 rounded-full bg-[#c5a46d]" />
              <span>Current edition</span>
              <span className="h-1 w-1 rounded-full bg-[#c5a46d]" />
            </div>

            <button
              type="button"
              aria-label="Add to your collection"
              onClick={() => setCount((prev) => prev + 1)}
              className="group relative flex aspect-square w-56 flex-col items-center justify-center rounded-full border border-[#c5a46d]/50 bg-[#1d1b17] shadow-[inset_0_0_0_8px_#171613,inset_0_0_0_9px_rgba(197,164,109,0.25),0_18px_50px_rgba(0,0,0,0.4)] transition duration-500 hover:border-[#e0bf84] hover:shadow-[inset_0_0_0_8px_#171613,inset_0_0_0_9px_rgba(224,191,132,0.45),0_20px_65px_rgba(197,164,109,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e0bf84] focus-visible:ring-offset-4 focus-visible:ring-offset-[#171613] active:scale-95"
            >
              <span className="mb-2 text-xs uppercase tracking-[0.3em] text-[#9b9386] transition-colors group-hover:text-[#c5a46d]">Collected</span>
              <span className="font-serif text-7xl leading-none text-[#f8f1e5]">{count}</span>
              <span className="mt-4 text-[10px] uppercase tracking-[0.24em] text-[#776f62]">Add one</span>
            </button>

            <p className="mt-10 text-xs leading-6 text-[#776f62]">Your collection is yours alone.<br />Continue when the moment feels right.</p>
          </div>
        </div>
      </section>
    </main>

    <Fix/>
   </>
  );
};

export default App;
