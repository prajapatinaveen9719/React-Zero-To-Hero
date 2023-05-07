import React from "react";
import ReactDOM from "react-dom/Client";
import "bootstrap/dist/css/bootstrap.css";
import "/app.css";
import HeaderComponent from "./src/components/header";
import FooterComponent from "./src/components/footer";
import BodyComponent from "./src/components/body.js"


const AppLayout= () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent></BodyComponent>
      {FooterComponent()}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

