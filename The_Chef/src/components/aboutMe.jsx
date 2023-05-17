import React from "react";

class AboutMe extends React.Component {

    constructor(){
        super();
        console.log("Child Constructor");
    }

    componentDidMount(){
        console.log("Child componentDidMount"); 
    }


  render() {
    console.log("Child Render");
    return (
      <>
        <h1>My Name is Naveen Kumar Prajapati</h1>
      </>
    );
  }



}


export default AboutMe;