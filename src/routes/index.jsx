import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { PublicRoute } from "./auth/PublicRoute";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import HomePage from "../pages/afterLogin/home/HomePage";
import { PrivateRouteName, PublicRouteName } from "../utils/routesName";

export const RoutesPage = () => {
  const PublicRoutes = [
    {
      path: PublicRouteName.SIGNIN,
      component: SignIn,
    },
    {
      path: PublicRouteName.SIGNUP,
      component: SignUp,
    },
  ];
  const PrivateRoutes = [
    {
      path: PrivateRouteName.HOME,
      component: HomePage,
    },
  ];

  return (
    <Router>
      <Routes>
        {PublicRoutes?.map((routesItem, index) => {
          const { path, component: Component } = routesItem || "";
          return (
            <Route
              key={index}
              path={path}
              element={
                <PublicRoute>
                  <Component />
                </PublicRoute>
              }
            />
          );
        })}

        {PrivateRoutes?.map((routesItem, index) => {
          const { path, component: Component } = routesItem || "";
          return (
            <Route
              key={index}
              path={path}
              element={
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              }
            />
          );
        })}
        
        {/* Redirect from root to sign-in page */}
        <Route path="/" element={<Navigate to={PublicRouteName.SIGNIN} replace />} />
      </Routes>
    </Router>
  );
};
