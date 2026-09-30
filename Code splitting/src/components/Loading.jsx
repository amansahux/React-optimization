const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl">
      <div className="relative flex flex-col items-center gap-5 rounded-[28px] border border-white/10 bg-white/5 px-8 py-7 shadow-[0_30px_80px_rgba(14,165,233,0.22)]">
        <div className="flex items-center gap-3">
          <span className="h-3.5 w-3.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.2s]" />
          <span className="h-3.5 w-3.5 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.1s]" />
          <span className="h-3.5 w-3.5 animate-bounce rounded-full bg-emerald-400" />
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.38em] text-cyan-300">
            Loading
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Preparing your experience
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Loading;
