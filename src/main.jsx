import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { HashRouter } from "react-router-dom";
import './styles/index.scss'
// Fichero src/index.jsx (código nuevo)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);