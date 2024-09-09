import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./routes/ErrorPage";

import Layout from "./routes/Layout";
import { CanvasSpace } from "./components/three/CanvasSpace";
import { IsometricGrid } from "./components/three/IsometricGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <CanvasSpace /> },
          { path: "/iso", element: <IsometricGrid /> },
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
