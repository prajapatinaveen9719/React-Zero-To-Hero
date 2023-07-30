import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/Client";
import "/app.css";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import HeaderComponent from "./src/components/header";
import FooterComponent from "./src/components/footer";
import BodyComponent from "./src/components/body.js";
import ContactUsComponent from "./src/components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./src/components/errorPage";
import RestaurentDetailComponent from "./src/components/restaurentDetails";
import AboutMe from "./src/components/aboutMe";
import Cart from "./src/components/Cart";
 import { Provider } from "react-redux";
 import appStore from "./src/utils/store";

const Instamart = lazy(() => import("./src/components/Instamart.js"));

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <HeaderComponent />
        <Outlet></Outlet>
        {/* <BodyComponent></BodyComponent> */}
        {FooterComponent()}
      </Provider>
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/contact", element: <ContactUsComponent /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/", element: <BodyComponent /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurent/:id", element: <RestaurentDetailComponent /> },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
