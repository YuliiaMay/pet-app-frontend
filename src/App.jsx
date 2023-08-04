import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles";

import { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { PublicRoute } from "./routes/PublicRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/authSlice/operations";
import { useAuth } from "./hooks/useAuth";
import { Loader } from "./components/Loader/Loader";
// import { selectUser } from "./redux/authSlice/selectors";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage/FriendsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));

const NoticesCategoriesList = lazy(() =>
  import("./components/Notices/NoticesCategoriesList/NoticesCategoriesList")
);

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<NoticesPage />} />

          {/* <Route index element={<Navigate to="/notices/sell" />} /> */}
          <Route path="/main" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />

          <Route path="/notices" element={<NoticesPage />}>
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path="sell" element={<NoticesCategoriesList />} />
            <Route path="lost-found" element={<NoticesCategoriesList />} />
            <Route path="for-free" element={<NoticesCategoriesList />} />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<NoticesCategoriesList />}
                />
              }
            />
            <Route
              path="own"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<NoticesCategoriesList />}
                />
              }
            />
          </Route>

          <Route path="/friends" element={<FriendsPage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/user"
                component={<RegisterPage />}
                restricted
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo="/user"
                component={<LoginPage />}
                restricted
              />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute
                redirectTo="/notices/sell"
                component={<UserPage />}
              />
            }
          />
          <Route path="/logout" element={<Navigate to="/notices/sell" />} />

          <Route
            path="/add-pet"
            element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
