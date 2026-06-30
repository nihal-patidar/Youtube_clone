import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import VideoPlayer from "../pages/VideoPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import CreateChannel from "../pages/CreateChannel";
import VideoPage from "../pages/VideoPage";
// import MyChannel from "../pages/MyChannel";
import MyChannel from "../pages/MyChannel";
import ChannelLayout from "../components/channel/ChannelLayout";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "videos/:videoId",
        element: (
          <ProtectedRoute>
            <VideoPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "channel",
        element: (
          <ProtectedRoute>
            <ChannelLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "create",
            element: <CreateChannel />,
          },
          {
            path: ":channelId",
            element: <MyChannel />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
