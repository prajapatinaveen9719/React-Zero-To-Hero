import React from "react";
import  ReactDOM  from "react-dom/Client"; 

const heading1=React.createElement("h1",{id:"God"},"Om Namh Shivaay!")
   
const heading2=React.createElement("h2",{id:"Mahadev",className:"btn btn-primary"},"Har Har Mahadev !")

const div=React.createElement("div",{id:"divs"},[heading1,heading2])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

