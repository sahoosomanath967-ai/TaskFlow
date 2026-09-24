
import { useTasks } from "../context/TaskContext";
import { useState } from "react";
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const { tasks } = useTasks();

  const projects = [...new Set(tasks.map((task) => task.project))]
    .filter(Boolean)
    .map((projectName) => {
      const projectTasks = tasks.filter(
        (task) => task.project === projectName
      );

      const completedTasks = projectTasks.filter(
        (task) => task.status === "Completed"
      ).length;

      const totalTasks = projectTasks.length;

      const progress =
        totalTasks > 0
          ? Math.round((completedTasks / totalTasks) * 100)
          : 0;

      let status = "Not Started";

      if (completedTasks === totalTasks && totalTasks > 0) {
        status = "Completed";
      } else if (
        projectTasks.some(
          (task) =>
            task.status === "In Progress" ||
            task.status === "Completed"
        )
      ) {
        status = "In Progress";
      }

      return {
        name: projectName,
        totalTasks,
        completedTasks,
        progress,
        status,
      };
    });
  const selectedProjectTasks = selectedProject
    ? tasks.filter((task) => task.project === selectedProject)
    : [];
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Projects
        </h1>

        <p className="mt-2 text-slate-400">
          Organize and track your work across projects.
        </p>
      </section>
      {selectedProject && (
        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                {selectedProject}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Tasks in this project
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="space-y-3">
            {selectedProjectTasks.map((task) => (
              <div
                key={task.id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-white">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Due: {task.dueDate}
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => handleProjectClick(project.name)}
            className={`cursor-pointer rounded-2xl border bg-slate-950 p-6 transition ${
              selectedProject === project.name
                ? "border-blue-500 ring-1 ring-blue-500/50"
                : "border-slate-800 hover:border-slate-700"
            }`}
          >
            <h2 className="text-lg font-semibold text-white">
              {project.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {project.totalTasks}{" "}
              {project.totalTasks === 1 ? "task" : "tasks"}
            </p>

            <span
              className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-medium ${project.status === "Completed"
                ? "bg-emerald-500/10 text-emerald-400"
                : project.status === "In Progress"
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-slate-800 text-slate-400"
                }`}
            >
              {project.status}
            </span>

            <div className="mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">
                  Progress
                </span>

                <span className="font-semibold text-white">
                  {project.progress}%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{
                    width: `${project.progress}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    {project.completedTasks}
                  </p>

                  <p className="text-xs text-slate-500">
                    Completed
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-white">
                    {project.totalTasks - project.completedTasks}
                  </p>

                  <p className="text-xs text-slate-500">
                    Remaining
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                {project.totalTasks}{" "}
                {project.totalTasks === 1 ? "task" : "tasks"} in this project
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;

