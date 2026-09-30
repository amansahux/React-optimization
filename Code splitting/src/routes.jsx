// import { createBrowserRouter } from "react-router";
// import Dashboard from "./components/Dashboard";
// import About from "./components/ABout";
// import Analytices from "./components/Analytices";
// import Product from "./components/Product";

// export const router = createBrowserRouter([
//   { path: "", element: <Dashboard /> },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "analytics",
//     element: <Analytices />,
//   },
//   {
//     path: "product",
//     element: <Product />,
//   },
// ]);

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "",
    lazy: async () => {
      const { default: Dashboard } = await import(
        "./components/Dashboard"
      );

      return {
        Component: Dashboard,
      };
    },
  },

  {
    path: "about",
    lazy: async () => {
      const { default: About } = await import(
        "./components/ABout"
      );

      return {
        Component: About,
      };
    },
  },

  {
    path: "analytics",
    lazy: async () => {
      const { default: Analytices } = await import(
        "./components/Analytices"
      );

      return {
        Component: Analytices,
      };
    },
  },

  {
    path: "product",
    lazy: async () => {
      const { default: Product } = await import(
        "./components/Product"
      );

      return {
        Component: Product,
      };
    },
  },
]);