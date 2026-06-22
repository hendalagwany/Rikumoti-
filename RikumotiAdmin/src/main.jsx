import React from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/variables.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
