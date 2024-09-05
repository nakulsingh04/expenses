import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./Auth/PrivateRoute";
import { PublicRoute } from "./Auth/PublicRoute";
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
    // {
    //   path: "/SignUp",
    //   component: SignUp,
    // },
  ];

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-details/:userId/user"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        /> */}
        {/* <Route
          path="/login"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        /> */}

        {PublicRoutes?.map((routesItem) => {
          const { path, component: Component } = routesItem || "";
          return (
            <Route
              path={path}
              element={
                <PublicRoute>
                  <Component />
                </PublicRoute>
              }
            />
          );
        })}

        {PrivateRoutes?.map((routesItem) => {
          const { path, component: Component } = routesItem || "";
          return (
            <Route
              path={path}
              element={
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};
