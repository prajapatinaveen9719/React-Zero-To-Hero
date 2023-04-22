const heading1=React.createElement("h1",{id:"God"},"Om Namh Shivaay!")
   
const heading2=React.createElement("h2",{id:"Mahadev",className:"btn btn-primary"},"Om Namh Shivaay 2!")

const div=React.createElement("div",{id:"div"},[heading1,heading2])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(div);