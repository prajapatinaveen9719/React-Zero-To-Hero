import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/Client";
import "bootstrap/dist/css/bootstrap.css";
import "/app.css";
import HeaderComponent from "./src/components/header";
import FooterComponent from "./src/components/footer";
import BodyComponent from "./src/components/body.js";
import ContactUsComponent from "./src/components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./src/components/errorPage";
import RestaurentDetailComponent from "./src/components/restaurentDetails";


const Instamart=lazy(()=>import("./src/components/instamart"))

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
      { path: "restaurent/:id", element: <RestaurentDetailComponent /> },
      { path: "instamart", element: <Suspense><Instamart /></Suspense> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
