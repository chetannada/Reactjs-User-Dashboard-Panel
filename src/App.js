import React from "react";
import SidebarDrawer from "./components/SidebarDrawer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import User from "./components/User";
import Blogs from "./components/Blogs";
import BlogsId from "./components/BlogsId";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SidebarDrawer />
      <Outlet />
    </React.Fragment>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user",
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs/:id",
        element: (
          <PrivateRoute>
            <BlogsId />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
