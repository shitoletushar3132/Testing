import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/cont",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "",
    element: (
      <div style={{ color: "red" }}>
        Error <NavLink to={"/cont"}>Navigate to</NavLink>{" "}
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
