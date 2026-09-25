import React, { useEffect, useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
        console.log("debounced")
      setQuery(search.trim());
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  const pieces = ["Sable", "Nocturne", "Ivory", "Cedar", "Velvet", "Solstice"];
  const results = pieces.filter((piece) => piece.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-10 sm:px-8">
      <div className="border border-[#c5a46d]/30 bg-[#171613]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c5a46d]">Private archive</p>
            <h2 className="font-serif text-3xl text-[#f8f1e5] sm:text-4xl">Find your next piece</h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.24em] text-[#776f62] sm:block">Debounce / 500ms</span>
        </div>

        <label className="group flex items-center gap-4 border-b border-[#c5a46d]/40 pb-4 transition-colors focus-within:border-[#e0bf84]">
          <span className="text-xl text-[#c5a46d]" aria-hidden="true">⌕</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search the collection..."
            aria-label="Search the collection"
            className="w-full bg-transparent text-base text-[#f8f1e5] outline-none placeholder:text-[#776f62]"
          />
          {search && <span className="text-[10px] uppercase tracking-[0.2em] text-[#9b9386]">Waiting</span>}
        </label>

        <div className="mt-5 flex min-h-7 items-center justify-between gap-4">
          <p className="text-xs text-[#9b9386]">
            {query ? `${results.length} ${results.length === 1 ? "piece" : "pieces"} found for “${query}”` : "Begin with a name, mood, or material"}
          </p>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#776f62]">{query ? "Updated" : "Ready"}</span>
        </div>

        {query && (
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#c5a46d]/15 pt-5 sm:grid-cols-3">
            {results.length > 0 ? results.map((piece) => (
              <div key={piece} className="border border-[#c5a46d]/20 bg-[#1d1b17] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[#c5a46d]">
                {piece}
              </div>
            )) : <p className="col-span-full text-sm text-[#776f62]">No pieces match this search.</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default Search
