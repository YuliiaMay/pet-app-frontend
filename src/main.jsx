import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, FontStyles } from "./assets/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <FontStyles />
    <BrowserRouter basename="/pet-app-frontend">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
