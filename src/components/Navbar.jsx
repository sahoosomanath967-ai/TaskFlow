import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      
      {/* Search */}
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        
        <button className="relative text-slate-400 transition hover:text-white">
          <Bell size={21} />

          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            SS
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">
              Somanath Sahoo
            </p>

            <p className="text-xs text-slate-500">
              Software Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;