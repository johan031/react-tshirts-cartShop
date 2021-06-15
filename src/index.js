import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import { AppProvider } from "./context/context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
