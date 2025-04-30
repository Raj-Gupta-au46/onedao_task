import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function AuthGuard({ children }) {
  const navigate = useNavigate();
  const authorized = false;
  if (!authorized) return <Navigate to="/auth/login" />;
  return children;
}
