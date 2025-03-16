import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StyleSheetManager } from "styled-components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "variation"}>
      <App />
    </StyleSheetManager>
  </StrictMode>
);
