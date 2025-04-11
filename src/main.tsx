import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client.ts";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </StrictMode>
);
