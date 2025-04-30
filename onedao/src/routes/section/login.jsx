import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Login } from "../../pages/auth/Login";
import { Register } from "../../pages/auth/Register";
import { ForgetPassword } from "../../pages/auth/ForgetPassword";

const layoutContent = (
  <Suspense fallback={<h1>Loading....</h1>}>
    <Outlet />
  </Suspense>
);

export const loginRoutes = [
  {
    path: "/",
    element: <>{layoutContent}</>,
    children: [
      { path: "", element: <Login />, index: true },
      { path: "register", element: <Register />, index: true },
      {
        path: "otp",
        element: <ForgetPassword />,
        index: true,
      },
    ],
  },
];
