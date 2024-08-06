import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemContextProvider } from "./Contexts/ThemContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemContextProvider>
    <App />
  </ThemContextProvider>
);
