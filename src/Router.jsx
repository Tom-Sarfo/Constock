import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import App from "./App";
import ConstockMarket from "./Routes/ConstockMarket";
import Wallet from "./Routes/Wallet";
import FloatConstock from "./Routes/FloatConstock";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/market",
        element: <ConstockMarket />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/float-constock",
        element: <FloatConstock />,
      },
    ],
  },
]);
