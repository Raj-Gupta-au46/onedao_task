import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Login } from "../../pages/auth/Login";
import { Home } from "../../pages/home/Home";
import { AuthGuard } from "../../auth/AuthGuard";
import { Dashboard } from "../../pages/home/Dashboard";

const layoutContent = (
  <Suspense fallback={<h1>Loading....</h1>}>
    <Outlet />
  </Suspense>
);

export const homeRoutes = [
  {
    path: "/dashboard",
    element: <>{layoutContent}</>,
    children: [{ element: <Dashboard />, index: true }],
  },
];

// export const homeRoutes = [
//     {
//       path: "/",
//       element: <AuthGuard>{layoutContent}</AuthGuard>,
//       children: [{ element: <Home />, index: true }],

//     },
//   ];
