import {
  CheckCircle2,
  Clock3,
  ListTodo,
  AlertCircle,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

const stats = [
  {
    title: "Total Tasks",
    value: "24",
    change: "+12%",
    description: "from last month",
    icon: ListTodo,
  },
  {
    title: "In Progress",
    value: "08",
    change: "+5%",
    description: "from last month",
    icon: Clock3,
  },
  {
    title: "Completed",
    value: "13",
    change: "+18%",
    description: "from last month",
    icon: CheckCircle2,
  },
  {
    title: "Overdue",
    value: "03",
    change: "-8%",
    description: "from last month",
    icon: AlertCircle,
  },
];

const recentTasks = [
  {
    title: "Build portfolio website",
    project: "Personal Portfolio",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 08, 2026",
  },
  {
    title: "Complete React authentication",
    project: "TaskFlow",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 10, 2026",
  },
  {
    title: "Design dashboard components",
    project: "TaskFlow",
    priority: "Medium",
    status: "Completed",
    dueDate: "Sep 05, 2026",
  },
  {
    title: "Write project documentation",
    project: "TaskFlow",
    priority: "Low",
    status: "Todo",
    dueDate: "Sep 12, 2026",
  },
];

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-blue-400">
            Tuesday, September 8, 2026
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Welcome back, Somanath! 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Here's what's happening with your work today.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          <ListTodo size={18} />
          Create Task
        </button>
      </section>

      {/* Statistics */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-blue-400">
                  <Icon size={21} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600"
                />
              </div>

              <p className="mt-5 text-sm text-slate-400">
                {stat.title}
              </p>

              <div className="mt-1 flex items-end gap-3">
                <h2 className="text-3xl font-bold text-white">
                  {stat.value}
                </h2>

                <span className="mb-1 text-xs font-medium text-emerald-400">
                  {stat.change}
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                {stat.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* Progress Overview */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Weekly Progress
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your task completion this week
            </p>
          </div>

          <button className="text-sm font-medium text-blue-400 hover:text-blue-300">
            View analytics
          </button>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">
              Overall completion
            </span>

            <span className="font-semibold text-white">
              72%
            </span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[72%] rounded-full bg-blue-600" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
          <div>
            <p className="text-2xl font-bold text-white">18</p>
            <p className="mt-1 text-xs text-slate-500">
              Completed
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">6</p>
            <p className="mt-1 text-xs text-slate-500">
              In Progress
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">2</p>
            <p className="mt-1 text-xs text-slate-500">
              Remaining
            </p>
          </div>
        </div>
      </section>

      {/* Recent Tasks */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950">

        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Recent Tasks
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest tasks and activities
            </p>
          </div>

          <button className="text-sm font-medium text-blue-400 hover:text-blue-300">
            View all
          </button>
        </div>

        <div className="divide-y divide-slate-800">
          {recentTasks.map((task) => (
            <div
              key={task.title}
              className="flex flex-col gap-4 p-5 transition hover:bg-slate-900/50 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />

                <div>
                  <h3 className="font-medium text-white">
                    {task.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {task.project}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:justify-end">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    task.priority === "High"
                      ? "bg-red-500/10 text-red-400"
                      : task.priority === "Medium"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {task.priority}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    task.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : task.status === "In Progress"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {task.status}
                </span>

                <span className="text-xs text-slate-500">
                  {task.dueDate}
                </span>

                <button className="text-slate-500 hover:text-white">
                  <MoreHorizontal size={19} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;