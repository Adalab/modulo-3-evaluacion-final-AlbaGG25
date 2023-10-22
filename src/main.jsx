import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";


import './styles/index.scss'
// Fichero src/index.jsx (código nuevo)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <StrictMode>
    <App />
   </StrictMode>
);