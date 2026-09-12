import { useEffect, useState } from "react";
import { X } from "lucide-react";

function CreateTaskModal({ isOpen, onClose, onCreate, initialData }) {
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        project: initialData?.project || "",
        priority: initialData?.priority || "Medium",
        status: initialData?.status || "Todo",
        dueDate:
            initialData?.dueDate && initialData.dueDate !== "No due date"
                ? new Date(initialData.dueDate).toISOString().split("T")[0]
                : "",
        description: initialData?.description || "",
    });
    useEffect(() => {
        setFormData({
            title: initialData?.title || "",
            project: initialData?.project || "",
            priority: initialData?.priority || "Medium",
            status: initialData?.status || "Todo",
            dueDate:
                initialData?.dueDate && initialData.dueDate !== "No due date"
                    ? new Date(initialData.dueDate).toISOString().split("T")[0]
                    : "",
            description: initialData?.description || "",
        });
    }, [initialData, isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            return;
        }

        onCreate(formData);

        setFormData({
            title: "",
            project: "",
            priority: "Medium",
            status: "Todo",
            dueDate: "",
            description: "",
        });
    };

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
                        <h2 className="text-xl font-semibold text-white">
                            {initialData ? "Edit Task" : "Create New Task"}
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Add a new task to your workspace.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-900 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 p-6">

                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Task Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter task title"
                            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Project + Priority */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        {/* Project */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Project
                            </label>

                            <input
                                type="text"
                                name="project"
                                value={formData.project}
                                onChange={handleChange}
                                placeholder="e.g. TaskFlow"
                                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Priority */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Priority
                            </label>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>

                    {/* Status + Due Date */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        {/* Status */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                            >
                                <option value="Todo">Todo</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        {/* Due Date */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Due Date
                            </label>

                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Describe the task..."
                            className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 border-t border-slate-800 pt-5">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                        >
                            {initialData ? "Update Task" : "Create Task"}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTaskModal;