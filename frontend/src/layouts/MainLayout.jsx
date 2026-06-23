import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(true);

  return (
    <>
      <Navbar
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main
        className={`
          pt-[var(--navbar-height)]
          transition-all
          duration-300

          ${
            isSidebarOpen
              ? "md:ml-[240px]"
              : "md:ml-[72px]"
          }
        `}
      >
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;