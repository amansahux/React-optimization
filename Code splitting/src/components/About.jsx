import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(168,85,247,0.2)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-violet-300">
            Story
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About Page
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Built with a premium, glassmorphism-inspired layout that feels polished and modern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
