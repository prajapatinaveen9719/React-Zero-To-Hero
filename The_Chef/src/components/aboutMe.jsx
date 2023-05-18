import React from "react";

class AboutMe extends React.Component {
  constructor() {
    super();
    //console.log("Child Constructor");

    this.state = {
      userData: {},
    };
  }

  async componentDidMount() {
    //console.log("Child componentDidMount ");
    const options = {
      method: "GET",
      headers: {
        Authorization: "",
      },
    };

    const data = await fetch(
      "https://api.github.com/users/prajapatinaveen9719",
      options
    );
    const json = await data.json();
    console.log(json);
    this.setState({
      userData: json,
    });
    //console.log("Child componentDidMount 2");
  }

  render() {
   // console.log("Child Render");
    return (
      <>
        <h1>My Name is {this.state.userData.login}</h1>
        <h1>ID  {this.state.userData.id}</h1>
        <h1>Contact at {this.state.userData.html_url}</h1>
      </>
    );
  }
}

export default AboutMe;
