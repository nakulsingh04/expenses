import { Navigate } from "react-router-dom";
import { PrivateRouteName } from "../../utils/routesName";

export function PublicRoute({ children }) {
  let token = localStorage.getItem("token");
  return !token ? <>{children}</> : <Navigate to={PrivateRouteName.HOME} />;
}
