import { X, CalendarDays, FolderKanban, Flag, CircleDot } from "lucide-react";

function TaskDetailsModal({ isOpen, onClose, task, onEdit }) {
    if (!isOpen || !task) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                            Task Details
                        </p>

                        <h2 className="mt-1 text-xl font-semibold text-white">
                            {task.title}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-900 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="space-y-6 p-6">

                    {/* Task Info */}
                    <div className="grid gap-4 sm:grid-cols-2">

                        {/* Project */}
                        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                            <div className="flex items-center gap-2 text-slate-500">
                                <FolderKanban size={16} />
                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Project
                                </span>
                            </div>

                            <p className="mt-2 text-sm font-medium text-white">
                                {task.project || "No project"}
                            </p>
                        </div>

                        {/* Priority */}
                        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                            <div className="flex items-center gap-2 text-slate-500">
                                <Flag size={16} />
                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Priority
                                </span>
                            </div>

                            <p className="mt-2 text-sm font-medium text-white">
                                {task.priority}
                            </p>
                        </div>

                        {/* Status */}
                        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                            <div className="flex items-center gap-2 text-slate-500">
                                <CircleDot size={16} />
                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Status
                                </span>
                            </div>

                            <p className="mt-2 text-sm font-medium text-white">
                                {task.status}
                            </p>
                        </div>

                        {/* Due Date */}
                        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                            <div className="flex items-center gap-2 text-slate-500">
                                <CalendarDays size={16} />
                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Due Date
                                </span>
                            </div>

                            <p className="mt-2 text-sm font-medium text-white">
                                {task.dueDate || "No due date"}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="mb-2 text-sm font-medium text-slate-300">
                            Description
                        </p>

                        <div className="min-h-24 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                            <p className="whitespace-pre-wrap text-sm leading-6 text-slate-400">
                                {task.description || "No description added."}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-slate-800 px-6 py-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-xl border border-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                    >
                        Close
                    </button>

                    <button
                        type="button"
                        onClick={() => onEdit(task)}
                        className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                        Edit Task
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TaskDetailsModal;