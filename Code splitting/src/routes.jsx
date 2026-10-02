import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import { ErrorBoundary } from "./components/ErrorBoundary";

const Dashboard = lazy(() => import("./components/Dashboard"));
const About = lazy(() => import("./components/ABout"));
const Analytices = lazy(() => import("./components/Analytices"));
const Product = lazy(() => import("./components/Product"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "analytics",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Analytices />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "product",
        element: (
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        ),
      },
    ],
  },
]);

// import { createBrowserRouter } from "react-router";

// export const router = createBrowserRouter([
//   {
//     path: "",
//     lazy: async () => {
//       const { default: Dashboard } = await import(
//         "./components/Dashboard"
//       );

//       return {
//         Component: Dashboard,
//       };
//     },
//   },

//   {
//     path: "about",
//     lazy: async () => {
//       const { default: About } = await import(
//         "./components/ABout"
//       );

//       return {
//         Component: About,
//       };
//     },
//   },

//   {
//     path: "analytics",
//     lazy: async () => {
//       const { default: Analytices } = await import(
//         "./components/Analytices"
//       );

//       return {
//         Component: Analytices,
//       };
//     },
//   },

//   {
//     path: "product",
//     lazy: async () => {
//       const { default: Product } = await import(
//         "./components/Product"
//       );

//       return {
//         Component: Product,
//       };
//     },
//   },
// ]);
