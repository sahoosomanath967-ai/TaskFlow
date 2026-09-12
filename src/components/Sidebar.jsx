import {
  LayoutDashboard,
  ListTodo,
  FolderKanban,
  BarChart3,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "My Tasks",
    icon: ListTodo,
    path: "/tasks",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
];

const bottomItems = [
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950 text-white">
      
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-800 px-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Task<span className="text-blue-500">Flow</span>
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            Work smarter
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        
        {/* Workspace */}
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            );
          })}
        </div>

        {/* Account */}
        <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Account
        </p>

        <div className="space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-800 p-4">
        <button
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={19} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;