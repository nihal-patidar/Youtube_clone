import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { useState } from "react";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Top Navigation */}

      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Section */}
      <div className="flex pt-[var(--navbar-height)]">
        {/* Sidebar */}

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
