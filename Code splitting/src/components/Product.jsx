import Navbar from "./Navbar";

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(251,146,60,0.18)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-amber-300">
            Catalog
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Product Page
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Explore premium items and keep your journey beautifully connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
