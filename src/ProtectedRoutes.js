import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("session");
  return token ? <Outlet /> : <Navigate to="/log-in" replace />;
};
export default ProtectedRoutes;
