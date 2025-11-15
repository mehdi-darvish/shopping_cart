import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {  HashRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </HashRouter>
);
