import React from "react";
import ReactDOM from "react-dom/Client";
import "bootstrap/dist/css/bootstrap.css";
import "/app.css";
import HeaderComponent from "./src/components/header";
import FooterComponent from "./src/components/footer";
import BodyComponent from "./src/components/body.js";
import ContactUsComponent from "./src/components/Contact";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ErrorComponent from "./src/components/errorPage"

const appRoutes = createBrowserRouter([
  { path: "/", element: <BodyComponent/> ,errorElement:<ErrorComponent/>},
  { path: "contact", element: <ContactUsComponent/> },
]);

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent></BodyComponent>
      {FooterComponent()}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
