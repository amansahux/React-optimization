import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/about", label: "About" },
  { to: "/analytics", label: "Analytics" },
  { to: "/product", label: "Product" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.45)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-lg font-bold text-white shadow-lg shadow-cyan-500/30">
            V
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Studio
            </p>
            <h1 className="text-lg font-semibold text-white">Velora</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-slate-900 shadow-lg shadow-cyan-500/20"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
