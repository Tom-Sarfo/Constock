import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
