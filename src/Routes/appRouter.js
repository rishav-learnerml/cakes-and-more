import React, { lazy, Suspense } from "react";
import Body from "../components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Layout from "../Layout/Layout";

const RestaurantDetails = lazy(() => import("../components/RestaurantDetails"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <About
            name={"Rishav"}
            location={"Kolkata"}
            description={"A passionate software developer!"}
          />
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense>
            <RestaurantDetails />
          </Suspense>
        ),
      },
    ],
  },
]);