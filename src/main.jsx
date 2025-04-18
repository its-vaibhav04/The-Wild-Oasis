import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StyleSheetManager } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "variation"}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <div>
          <p
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "2.2rem",
              backgroundColor: "beige",
            }}
          >
            Some Data Mutations are deactivated for deployment purposes
          </p>
        </div>
        <App />
      </ErrorBoundary>
    </StyleSheetManager>
  </StrictMode>
);
