import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const MainPage = lazy(() => import("./pages/MainPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const NoticesPage = lazy(() => import("./pages/NoticesPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
// const FriendsPage = lazy(() => import("./pages/FriendsPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
// const UserPage = lazy(() => import("./pages/UserPage"));
// const AddPetPage = lazy(() => import("./pages/AddPetPage"));

// const NoticesCategoriesList = lazy(() =>
//   import("./components/Notices/NoticesCategoriesList/NoticesCategoriesList")
// );

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />

          {/* <Route path="/notices" element={<NoticesPage />}>
            <Route path="sell" element={<NoticesCategoriesList />} />
            <Route path="lost-found" element={<NoticesCategoriesList />} />
            <Route path="for-free" element={<NoticesCategoriesList />} />
            <Route path="favorite" element={<NoticesCategoriesList />} />
            <Route path="own" element={<NoticesCategoriesList />} />
          </Route>

          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="*" element={<NotFoundPage />}></Route> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
