import { createBrowserRouter } from "react-router";
import Dashboard from "./components/Dashboard";
import About from "./components/ABout";
import Analytices from "./components/Analytices";
import Product from "./components/Product";

export const router = createBrowserRouter([
  { path: "", element: <Dashboard /> },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "analytics",
    element: <Analytices />,
  },
  {
    path: "product",
    element: <Product />,
  },
]);
