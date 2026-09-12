import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;