import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles";

import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { PublicRoute } from "./routes/PublicRoute";
import { PrivateRoute } from "./routes/PrivateRoute";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage/FriendsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));

const OptionForm = lazy(() =>
  import("./components/Forms/AddPetForm/OptionForm/OptionForm")
);
const PersonalDetailsForm = lazy(() =>
  import(
    "./components/Forms/AddPetForm/PersonalDetailsForm/PersonalDetailsForm"
  )
);
const MoreInfoForm = lazy(() =>
  import("./components/Forms/AddPetForm/MoreInfoForm/MoreInfoForm")
);

const NoticesCategoriesList = lazy(() =>
  import("./components/Notices/NoticesCategoriesList/NoticesCategoriesList")
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            path='/main'
            element={
              <PublicRoute
                redirectTo='/user'
                component={<MainPage />}
                restricted
              />
            }
          />
          <Route
            path='/news'
            element={
              <PublicRoute
                redirectTo='/user'
                component={<NewsPage />}
                restricted
              />
            }
          />

          <Route
            path='/notices'
            element={
              <PublicRoute
                redirectTo='/user'
                component={<NoticesPage />}
                restricted
              />
            }>
            <Route
              path='sell'
              element={
                <PublicRoute
                  redirectTo='/user'
                  component={<NoticesCategoriesList />}
                  restricted
                />
              }
            />
            <Route
              path='lost-found'
              element={
                <PublicRoute
                  redirectTo='/user'
                  component={<NoticesCategoriesList />}
                  restricted
                />
              }
            />
            <Route
              path='for-free'
              element={
                <PublicRoute
                  redirectTo='/user'
                  component={<NoticesCategoriesList />}
                  restricted
                />
              }
            />
            <Route
              path='favorite'
              element={
                <PrivateRoute
                  redirectTo='/login'
                  component={<NoticesCategoriesList />}
                />
              }
            />
            <Route
              path='own'
              element={
                <PrivateRoute
                  redirectTo='/login'
                  component={<NoticesCategoriesList />}
                />
              }
            />
          </Route>

          <Route
            path='/friends'
            element={
              <PublicRoute
                redirectTo='/user'
                component={<FriendsPage />}
                restricted
              />
            }
          />
          <Route
            path='/register'
            element={
              <PublicRoute
                redirectTo='/user'
                component={<RegisterPage />}
                restricted
              />
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute
                redirectTo='/user'
                component={<LoginPage />}
                restricted
              />
            }
          />

          {/* <Route path="/login" element={<LoginPage />} />    

          <Route path="/user" element={<UserPage />} />           */}

          {/* <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          /> */}
          {/* <Route
            path='/user'
            element={<UserPage />}
          /> */}

          <Route
            path='/user'
            element={
              <PrivateRoute redirectTo='/user' component={<UserPage />} />
            }
          />

          {/* <Route
            path="/add-pet"
            element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }
          > */}
          <Route path='/add-pet' element={<AddPetPage />}>
            <Route path='option' element={<OptionForm />} />
            <Route path='details' element={<PersonalDetailsForm />} />
            <Route path='more-info' element={<MoreInfoForm />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
