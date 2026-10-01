import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-[1500px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(14,116,144,0.28)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
            Overview
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Dashboard Page
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            A refined navigation experience for showcasing all of your app pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
