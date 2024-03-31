/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
//import RefactoredApp from "./RefactoredApp"

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Root from "./routes/root.jsx";
import Contact from "./routes/contact.jsx";
import ErrorPage from "./error-page.jsx";
import Home from "./routes/home.jsx";
import About from "./routes/about.jsx";
import Index from "./routes/index.jsx";
import Login from "./routes/login.jsx";
//Examples
import FruitsApp from "./Examples/Context/FruitsApp.jsx";
import ThemeWrapper from "./context/ThemeWrapper.jsx";
import StyledComponent from "./Examples/StyledComponent.jsx";

// Create a Router
const router = createBrowserRouter([
  {
    path: "/",
    //element: <h1 className='title'>Hello from React Router</h1>,
    //element: <RefactoredApp />
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "home",
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
        path: "login",
        element: <Login />,
      },
    ],
  },
  // {
  //   path: "home",
  //   element: <Home />
  // },{
  //   path: "contact",
  //   element: <Contact />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeWrapper>
    <React.StrictMode>
      {/* <RefactoredApp /> */}
      <RouterProvider router={router} />
      {/* <FruitsApp /> */}
      {/* <StyledComponent /> */}
    </React.StrictMode>
  </ThemeWrapper>
);
