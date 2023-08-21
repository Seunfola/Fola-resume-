import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./Context";
import "./index.css";
import { Toaster } from "react-hot-toast";



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster/>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
