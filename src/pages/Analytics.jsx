import { useTasks } from "../context/TaskContext";

function Analytics() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const todoTasks = tasks.filter(
    (task) => task.status === "Todo"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "Medium"
  ).length;

  const lowPriorityTasks = tasks.filter(
    (task) => task.priority === "Low"
  ).length;

  const completionRate =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;
  const activeTasks = inProgressTasks + todoTasks;

  const activeProjects = new Set(
    tasks
      .filter((task) => task.status !== "Completed")
      .map((task) => task.project)
      .filter(Boolean)
  ).size;

  const metrics = [
    { label: "Total Tasks", value: totalTasks, color: "text-white" },
    {
      label: "Completed",
      value: completedTasks,
      color: "text-emerald-400",
    },
    {
      label: "In Progress",
      value: inProgressTasks,
      color: "text-blue-400",
    },
    { label: "To Do", value: todoTasks, color: "text-slate-300" },
  ];

  const priorityMetrics = [
    {
      label: "High Priority",
      value: highPriorityTasks,
      color: "text-red-400",
    },
    {
      label: "Medium Priority",
      value: mediumPriorityTasks,
      color: "text-yellow-400",
    },
    {
      label: "Low Priority",
      value: lowPriorityTasks,
      color: "text-slate-300",
    },
  ];

  const projects = [...new Set(tasks.map((task) => task.project))]
    .filter(Boolean)
    .map((projectName) => {
      const projectTasks = tasks.filter(
        (task) => task.project === projectName
      );

      const projectCompletedTasks = projectTasks.filter(
        (task) => task.status === "Completed"
      ).length;

      const projectProgress =
        projectTasks.length > 0
          ? Math.round(
            (projectCompletedTasks / projectTasks.length) * 100
          )
          : 0;

      let projectStatus = "Not Started";

      if (
        projectCompletedTasks === projectTasks.length &&
        projectTasks.length > 0
      ) {
        projectStatus = "Completed";
      } else if (
        projectTasks.some(
          (task) =>
            task.status === "In Progress" ||
            task.status === "Completed"
        )
      ) {
        projectStatus = "In Progress";
      }

      return {
        name: projectName,
        totalTasks: projectTasks.length,
        completedTasks: projectCompletedTasks,
        progress: projectProgress,
        status: projectStatus,
      };
    });

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          Track your productivity and task performance.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
          >
            <p className="text-sm text-slate-400">{metric.label}</p>

            <p className={`mt-3 text-3xl font-bold ${metric.color}`}>
              {metric.value}
            </p>
          </div>
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">
            Completion Rate
          </p>

          <p className="mt-3 text-3xl font-bold text-emerald-400">
            {completionRate}%
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Overall task completion
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">
            Active Tasks
          </p>

          <p className="mt-3 text-3xl font-bold text-blue-400">
            {activeTasks}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Tasks still requiring attention
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">
            High Priority
          </p>

          <p className="mt-3 text-3xl font-bold text-red-400">
            {highPriorityTasks}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            High-priority tasks
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">
            Active Projects
          </p>

          <p className="mt-3 text-3xl font-bold text-purple-400">
            {activeProjects}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Projects with unfinished work
          </p>
        </div>
      </section>
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Productivity Insights
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            A quick overview of your current workload
          </p>
        </div>

       <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Completion Status
            </p>

            <p className="mt-3 text-lg font-semibold text-white">
              {completedTasks} of {totalTasks} completed
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {completionRate}% of your tasks are complete.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Current Workload
            </p>

            <p className="mt-3 text-lg font-semibold text-white">
              {activeTasks} active tasks
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Tasks that still require attention.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Priority Focus
            </p>

            <p className="mt-3 text-lg font-semibold text-white">
              {highPriorityTasks} high-priority tasks
            </p>

            <p className="mt-2 text-sm text-slate-500">
              High-priority work currently in your task list.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Completion Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Progress across all tasks
            </p>
          </div>

          <span className="text-2xl font-bold text-white">
            {completionRate}%
          </span>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </section>
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Task Status Distribution
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Breakdown of your current task statuses
          </p>
        </div>

        <div className="mt-6">
          <div className="flex h-3 overflow-hidden rounded-full bg-slate-800">
            {totalTasks > 0 && (
              <>
                <div
                  className="bg-emerald-500"
                  style={{
                    width: `${(completedTasks / totalTasks) * 100}%`,
                  }}
                />

                <div
                  className="bg-blue-500"
                  style={{
                    width: `${(inProgressTasks / totalTasks) * 100}%`,
                  }}
                />

                <div
                  className="bg-slate-600"
                  style={{
                    width: `${(todoTasks / totalTasks) * 100}%`,
                  }}
                />
              </>
            )}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                <span className="text-sm text-slate-400">
                  Completed
                </span>
              </div>

              <span className="font-semibold text-white">
                {completedTasks}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

                <span className="text-sm text-slate-400">
                  In Progress
                </span>
              </div>

              <span className="font-semibold text-white">
                {inProgressTasks}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />

                <span className="text-sm text-slate-400">
                  To Do
                </span>
              </div>

              <span className="font-semibold text-white">
                {todoTasks}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Project Progress
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Completion across your projects
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-medium text-white">
                  {project.name}
                </h3>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                  {project.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                {project.completedTasks} of {project.totalTasks} tasks completed
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Priority Breakdown
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Tasks grouped by priority
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {priorityMetrics.map((priority) => (
            <div
              key={priority.label}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <p className="text-sm text-slate-400">
                {priority.label}
              </p>

              <p className={`mt-3 text-3xl font-bold ${priority.color}`}>
                {priority.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Analytics;