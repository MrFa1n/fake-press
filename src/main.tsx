import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@app/App";
import "./index.css";
import { ThemeProvider } from "./shared/lib/theme/ThemeProvider";
import { StoreProvider } from "./app/providers/store/StoreProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </StrictMode>
);
