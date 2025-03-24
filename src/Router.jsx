import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import App from "./App";
import ConstockMarket from "./Routes/ConstockMarket";
import Wallet from "./Routes/Wallet";
import FloatConstock from "./Routes/FloatConstock";
import MobiDashboard from "./Mobile/Routes/MobiDashboard";
import MobiStockMarket from "./Mobile/Routes/MobiStockMarket.jsx"


export const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: 
        [
          {
            path: "/",
            element:<Dashboard />,
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
          {
            path: "/mobi-dashboard",
            element: <MobiDashboard />,
          },
          {
            path: "/mobi-market",
            element: <MobiStockMarket />,
          }
        ],
      },
    ]);



