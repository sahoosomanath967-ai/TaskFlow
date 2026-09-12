import { useEffect, useState } from "react";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskDetailsModal from "../components/TaskDetailsModal";

import {
  Plus,
  Search,
  MoreHorizontal,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Build portfolio website",
    project: "Personal Portfolio",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 08, 2026",
  },
  {
    id: 2,
    title: "Complete React authentication",
    project: "TaskFlow",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 10, 2026",
  },
  {
    id: 3,
    title: "Design dashboard components",
    project: "TaskFlow",
    priority: "Medium",
    status: "Completed",
    dueDate: "Sep 05, 2026",
  },
  {
    id: 4,
    title: "Write project documentation",
    project: "TaskFlow",
    priority: "Low",
    status: "Todo",
    dueDate: "Sep 12, 2026",
  },
  {
    id: 5,
    title: "Create MongoDB database",
    project: "TaskFlow",
    priority: "High",
    status: "Todo",
    dueDate: "Sep 14, 2026",
  },
  {
    id: 6,
    title: "Build REST API",
    project: "TaskFlow",
    priority: "Medium",
    status: "Todo",
    dueDate: "Sep 16, 2026",
  },
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Modal state

  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenuId(null);
    };

    if (openMenuId !== null) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenuId]);
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
  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.project.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || task.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "priority-high") {
        const priorityOrder = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }

      if (sortBy === "priority-low") {
        const priorityOrder = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }

      if (sortBy === "due-date") {
        if (a.dueDate === "No due date") return 1;
        if (b.dueDate === "No due date") return -1;

        return new Date(a.dueDate) - new Date(b.dueDate);
      }

      return b.id - a.id;
    });

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            My Tasks
          </h1>

          <p className="mt-2 text-slate-400">
            Manage and track all your tasks in one place.
          </p>
        </div>

        <button
          onClick={() => setIsCreateTaskOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          <Plus size={18} />
          Create Task
        </button>
      </section>



      {/* Filters */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks or projects..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">

            {/* Status Filter */}
            {["All", "Todo", "In Progress", "Completed"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${statusFilter === status
                  ? "bg-blue-600 text-white"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                {status}
              </button>
            ))}

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cursor-pointer rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 outline-none transition focus:border-blue-500"
            >
              <option value="newest">Newest</option>
              <option value="priority-high">Priority: High → Low</option>
              <option value="priority-low">Priority: Low → High</option>
              <option value="due-date">Due Date</option>
            </select>
            {/* Clear Filters */}
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setStatusFilter("All");
                setSortBy("newest");
              }}
              className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              Clear
            </button>

          </div>
        </div>
      </section>

      {/* Task Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">
          Showing{" "}
          <span className="font-semibold text-white">
            {filteredTasks.length}
          </span>{" "}
          tasks
        </p>

        <p className="text-sm text-slate-500">
          Total: {tasks.length}
        </p>
      </div>

      {/* Tasks List */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

        {/* Table Header */}
        <div className="hidden border-b border-slate-800 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid md:grid-cols-[2fr_1fr_1fr_1fr_40px] md:gap-4">
          <span>Task</span>
          <span>Priority</span>
          <span>Status</span>
          <span>Due Date</span>
          <span />
        </div>

        {/* Task Items */}
        <div className="divide-y divide-slate-800">

          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex flex-col gap-4 p-5 transition hover:bg-slate-900/50 md:grid md:grid-cols-[2fr_1fr_1fr_1fr_40px] md:items-center md:gap-4 md:px-6"
              >

                {/* Task */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (task.status === "Completed") {
                        return;
                      }

                      setTasks((prevTasks) =>
                        prevTasks.map((item) =>
                          item.id === task.id
                            ? { ...item, status: "Completed" }
                            : item
                        )
                      );
                    }}
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${task.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-blue-500/10 text-blue-400 hover:bg-emerald-500/10 hover:text-emerald-400"
                      }`}
                    title={
                      task.status === "Completed"
                        ? "Task completed"
                        : "Mark as completed"
                    }
                  >
                    {task.status === "Completed" ? (
                      <CheckCircle2 size={17} />
                    ) : (
                      <CalendarDays size={17} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTask(task)}
                    className="text-left"
                  >
                    <h3 className="font-medium text-white transition hover:text-blue-400">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {task.project}
                    </p>
                  </button>
                </div>

                {/* Priority */}

                <div>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${task.priority === "High"
                      ? "bg-red-500/10 text-red-400"
                      : task.priority === "Medium"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-slate-800 text-slate-400"
                      }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${task.priority === "High"
                        ? "bg-red-400"
                        : task.priority === "Medium"
                          ? "bg-yellow-400"
                          : "bg-slate-400"
                        }`}
                    />

                    {task.priority}
                  </span>
                </div>

                {/* Status */}

                <div>
                  <select
                    value={task.status}
                    onChange={(e) => {
                      const newStatus = e.target.value;

                      setTasks((prevTasks) =>
                        prevTasks.map((item) =>
                          item.id === task.id
                            ? { ...item, status: newStatus }
                            : item
                        )
                      );
                    }}
                    className={`cursor-pointer rounded-full border-0 px-3 py-1 text-xs font-medium outline-none ${task.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : task.status === "In Progress"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-slate-800 text-slate-400"
                      }`}
                  >
                    <option value="Todo">Todo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                {/* Due Date */}
                <div className="text-sm text-slate-400">
                  {task.dueDate}
                </div>

                {/* Menu */}
                <div className="relative self-end md:self-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      setOpenMenuId(
                        openMenuId === task.id ? null : task.id
                      );
                    }}
                    aria-label={`Actions for ${task.title}`}
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white"
                  >
                    <MoreHorizontal size={20} />
                  </button>

                  {openMenuId === task.id && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-0 top-8 z-20 w-36 rounded-xl border border-slate-800 bg-slate-900 shadow-lg"
                    >
                      <button
                        onClick={() => {
                          setEditingTask(task);
                          setIsCreateTaskOpen(true);
                          setOpenMenuId(null);
                        }}
                        className="block w-full px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800"
                      >
                        ✏️ Edit
                      </button>

                      <button
                        onClick={() => {
                          const confirmDelete = window.confirm(
                            `Delete "${task.title}"?`
                          );

                          if (confirmDelete) {
                            setTasks((prevTasks) =>
                              prevTasks.filter((item) => item.id !== task.id)
                            );
                          }

                          setOpenMenuId(null);
                        }}
                        className="block w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-slate-800"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-16 text-center">
              <p className="text-lg font-medium text-white">
                No tasks found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or filter.
              </p>
            </div>
          )
          }

        </div >
      </section >
      {/* Create Task Modal */}
      {
        (isCreateTaskOpen || editingTask !== null) && (
          <CreateTaskModal
            isOpen={isCreateTaskOpen || editingTask !== null}
            initialData={editingTask}
            onClose={() => {
              setIsCreateTaskOpen(false);
              setEditingTask(null);
            }}
            onCreate={(newTask) => {
              const formattedTask = {
                ...newTask,
                dueDate: newTask.dueDate
                  ? new Date(newTask.dueDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })
                  : "No due date",
              };

              if (editingTask) {
                setTasks((prevTasks) =>
                  prevTasks.map((task) =>
                    task.id === editingTask.id
                      ? {
                        ...task,
                        ...formattedTask,
                      }
                      : task
                  )
                );

                setEditingTask(null);
              } else {
                const task = {
                  ...formattedTask,
                  id: Date.now(),
                };

                setTasks((prevTasks) => [task, ...prevTasks]);
              }

              setIsCreateTaskOpen(false);
            }}
          />
        )
      }
      {/* Task Details Modal */}
      <TaskDetailsModal
        isOpen={selectedTask !== null}
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
        onEdit={(task) => {
          setSelectedTask(null);
          setEditingTask(task);
          setIsCreateTaskOpen(true);
        }}
      />
    </div >
  );
}

export default Tasks;