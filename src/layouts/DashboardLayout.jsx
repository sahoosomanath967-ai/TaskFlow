import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="ml-64">
        <Navbar />

        <main className="min-h-[calc(100vh-5rem)] bg-slate-900 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;