import React from "react";
import ReactDOM from "react-dom/Client";
import "bootstrap/dist/css/bootstrap.css";
import "/app.css";
import HeaderComponent from "./src/components/header";
import FooterComponent from "./src/components/footer";
import BodyComponent from "./src/components/body.js";
import ContactUsComponent from "./src/components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./src/components/errorPage";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet></Outlet>
      {/* <BodyComponent></BodyComponent> */}
      {FooterComponent()}
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "contact", element: <ContactUsComponent /> },
      { path: "/", element: <BodyComponent /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
