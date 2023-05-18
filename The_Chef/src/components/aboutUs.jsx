import React from "react";
import AboutMe from "./aboutMe";
import Child from "./child2";

class AboutUsComponent extends React.Component {
  constructor() {
    //console.log("Parent Constructor")
    super();

    this.state = {
      Counter: 10,
    };

  
  }

  componentDidMount() {
    //console.log("Parent componentDidMount")
    this.interval= setInterval(() => {
      console.log("22266");
    }, 1000);
   
  }

  //we have clear some code in componentWillUnmount
  componentWillUnmount() {
    clearInterval(this.interval)
    console.log("componentWillUnmount");
  }

  render() {
    // console.log("Parent render")
    return (
      <>
        <h1>This is about us page.</h1>
        <h2>{this.state.Counter}</h2>
        {/* <AboutMe /> */}
        {/* <Child/> */}
      </>
    );
  }
}

export default AboutUsComponent;
