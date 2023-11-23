import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ token }) => {
  return token ? <Outlet /> : <Navigate to="/log-in" replace />;
};
export default ProtectedRoutes;
