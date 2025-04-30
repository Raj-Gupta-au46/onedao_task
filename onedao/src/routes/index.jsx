import React from "react";
import { useRoutes } from "react-router-dom";
import { loginRoutes } from "./section/Login";
import { homeRoutes } from "./section/home";

export function Router() {
  return useRoutes([
    // login
    ...loginRoutes,

    // home
    ...homeRoutes,
  ]);
}
