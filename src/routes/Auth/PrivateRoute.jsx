import { Navigate } from "react-router-dom";
import { PublicRouteName } from "../../utils/routesName";

export function PrivateRoute({ children }) {
  let token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to={PublicRouteName.SIGNIN} />;
}
