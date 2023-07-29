import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, FontStyles } from "./assets/styles";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="/pet-app-frontend">
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
      <GlobalStyle />
      <FontStyles />
    </React.StrictMode>
  </Provider>
);