import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clearUser,
  logout,
  setLoading,
  setUser,
} from "../redux/slices/authSlice";
import api from "../services/api";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const user = useSelector((store) => store.auth.user); // only subscribed to user
  const loading = useSelector((store) => store.auth.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // User already exists in Redux
        if (user) return;

        // Fetch logged-in user
        const meResponse = await api.get("/auth/me");

        console.log("Me Response:", meResponse);

        if (meResponse) {
          dispatch(setUser(meResponse.data.user));
          dispatch(setLoading(false));
        }
      } catch (error) {
        console.error("Authentication initialization failed:", error);
      }
    };

    initializeAuth();
  }, [user, dispatch]);

  const handleLogout = async () => {
    try {
      const logoutResponse = await api.post("/auth/logout");

      if (!logoutResponse) return;

      dispatch(logout());

      navigate("/");

      console.log("Logout successful");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <>
      <Navbar
        setIsSidebarOpen={setIsSidebarOpen}
        navigate={navigate}
        user={user}
        handleLogout={handleLogout}
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

          ${isSidebarOpen ? "md:ml-[240px]" : "md:ml-[72px]"}
        `}
      >
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
