
function Profile() {
  return (
    <div className="space-y-8">

      {/* Page Header */}
      <section>
        <p className="text-sm font-medium text-blue-400">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Profile
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your account information.
        </p>
      </section>

      {/* Profile Card */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

          {/* Avatar */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/20">
            SS
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Somanath Sahoo
            </h2>

            <p className="mt-1 text-slate-400">
              Aspiring Software Developer
            </p>

            <span className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Available for opportunities
            </span>
          </div>

        </div>

      </section>

      {/* Professional Information */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

        <div className="grid gap-6 sm:grid-cols-2">

          {/* Email */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Email
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Your email
            </p>
          </div>

          {/* Education */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Education
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Master of Computer Applications (MCA)
            </p>
          </div>

          {/* Role */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Role
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Aspiring Software Developer
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Location
            </p>

            <p className="mt-2 text-sm text-slate-200">
              Odisha, India
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Profile;

