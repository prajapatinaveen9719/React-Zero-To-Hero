import React from "react";

class AboutUsComponent extends React.Component {
constructor(){
  super();
this.state={
  Counter:10
}
}
  render(){
    return(
      <>
        <h1>This is about us page.</h1>
        <h2>{this.state.Counter}</h2></>
    )
  }
}


export default AboutUsComponent;

