
function Settings() {
  return (
    <div className="space-y-8">

      {/* Page Header */}
      <section>
        <p className="text-sm font-medium text-blue-400">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Customize your TaskFlow experience.
        </p>
      </section>

      {/* General Settings */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950">

        <div className="border-b border-slate-800 p-6">
          <h2 className="text-lg font-semibold text-white">
            General
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage your basic application preferences.
          </p>
        </div>

        <div className="divide-y divide-slate-800">

          {/* Language */}
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm font-medium text-white">
                Language
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Choose your preferred language.
              </p>
            </div>

            <select
              defaultValue="English"
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300 outline-none focus:border-blue-500"
            >
              <option>English</option>
            </select>
          </div>

          {/* Compact Mode */}
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm font-medium text-white">
                Compact Mode
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Reduce spacing throughout the dashboard.
              </p>
            </div>

            <button
              type="button"
              className="h-6 w-11 rounded-full bg-slate-700 p-1"
            >
              <span className="block h-4 w-4 rounded-full bg-slate-400" />
            </button>
          </div>

        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950">

        <div className="border-b border-slate-800 p-6">
          <h2 className="text-lg font-semibold text-white">
            Notifications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage how TaskFlow keeps you updated.
          </p>
        </div>

        <div className="divide-y divide-slate-800">

          {/* Task Notifications */}
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm font-medium text-white">
                Task Notifications
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Receive notifications about your tasks.
              </p>
            </div>

            <button
              type="button"
              className="h-6 w-11 rounded-full bg-blue-600 p-1"
            >
              <span className="ml-auto block h-4 w-4 rounded-full bg-white" />
            </button>
          </div>

          {/* Deadline Reminders */}
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm font-medium text-white">
                Deadline Reminders
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Get reminders when a task deadline is approaching.
              </p>
            </div>

            <button
              type="button"
              className="h-6 w-11 rounded-full bg-blue-600 p-1"
            >
              <span className="ml-auto block h-4 w-4 rounded-full bg-white" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Settings;

