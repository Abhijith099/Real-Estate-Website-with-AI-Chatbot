import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";      // ✅ Import MantineProvider
import "@mantine/core/styles.css";                    // ✅ Import Mantine styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pimkwze13bc72sdk.eu.auth0.com"
      clientId="onB44LRlKsY0VTNnHQAvxmE1fcnowq7G"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      {/* ✅ Wrap your entire app in MantineProvider */}
      <MantineProvider defaultColorScheme="light">
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
