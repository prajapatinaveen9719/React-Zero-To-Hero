import React from "react";

class Child extends React.Component{

    constructor(){
        super();
console.log("child 2 constructor");

    }

componentDidMount(){
    console.log("child 2 componentdidmount");
}


    render(){
        console.log("Child2 render")
        return(
            <>
            <h1>Hi This is child 2</h1>
            </>
        )
    }

}

export default Child;