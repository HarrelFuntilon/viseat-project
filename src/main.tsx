// LIBRARIES
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./custom.css";
import Indexpage from "./pages/Indexpage";
import AdminPageLogin from "./pages/AdminPageLogin";
import AdminPage from "./pages/AdminPage";
import Promote from "./pages/Promote";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Inquire from "./pages/Inquire";
import CreateUserPage from "./pages/CreateUserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Indexpage />,
  },
  {
    path: "/pages/promote",
    element: <Promote />,
  },
  {
    path: "/pages/explore",
    element: <Explore />,
  },
  {
    path: "/pages/explore/inquire",
    element: <Inquire />,
  },
  {
    path: "/pages/about",
    element: <About />,
  },
  {
    path: "/admin",
    element: <AdminPageLogin />,
  },
  {
    path: "/admin/:adminpage",
    element: <AdminPage />,
  },

  {
    path: "/admin/adminpage/createUserPage",
    element: <CreateUserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
