
import { Bell, Search, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="flex h-20 items-center justify-end border-b border-slate-800 bg-slate-950 px-4 sm:px-6 lg:px-8">

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-5">

        {/* Search Button */}
        <button
          type="button"
          aria-label="Search tasks"
          title="Search tasks"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
        >
          <Search size={19} />
        </button>

        {/* Notification Button */}
        <button
          type="button"
          aria-label="Notifications"
          title="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
        >
          <Bell size={19} />

          {/* Notification Dot */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-slate-900" />
        </button>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-slate-800 sm:block" />

        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-slate-900"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/20">
              SS
            </div>

            {/* Online Indicator */}
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-500" />
          </div>

          {/* User Info */}
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-white">
              Somanath Sahoo
            </p>

            <p className="text-xs text-slate-500">
              Software Developer
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-slate-500 sm:block"
          />
        </button>

      </div>
    </header>
  );
}

export default Navbar;

