import React from "react";
import { Route, Routes } from "react-router";

const Home = React.lazy(() => import("./pages/Home"));
const Details = React.lazy(() => import("./pages/Details"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback="Loading...">
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/details/:id"
        element={
          <React.Suspense fallback="Loading...">
            <Details />
          </React.Suspense>
        }
      />
    </Routes>
  );
};
