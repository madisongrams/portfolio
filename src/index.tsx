import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import ErrorPage from "./routes/ErrorPage";

import appTheme from "./theme";
import Work from "./routes/Work";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "Work",
        element: <Work />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={appTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
