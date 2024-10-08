import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./routes/ErrorPage";

import { Layout } from "./components/layout/Layout";
import { CanvasSpace } from "./components/three/CanvasSpace";
import { Experience } from "./components/three/Experience";
import { HomePage } from "./routes/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/grid", element: <CanvasSpace /> },
          { path: "/iso", element: <Experience /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
