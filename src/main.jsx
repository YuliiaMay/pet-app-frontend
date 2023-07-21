import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, FontStyles } from "./assets/styles";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/pet-app-frontend">
        <App />
      </BrowserRouter>
    </Provider>
    <GlobalStyle />
    <FontStyles />
  </React.StrictMode>
);
