import React, { Component } from "react";
import TeamMembers from "../components/TeamMembers";
import DisplayData from "../components/DisplayData";
import db from "../base";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Home</h1>
        <div className="centered">
          <TeamMembers />
          <DisplayData />
        </div>
        <button onClick={() => db.auth().signOut()}>Sign Out</button>
      </>
    );
  }
}

export default Home;
