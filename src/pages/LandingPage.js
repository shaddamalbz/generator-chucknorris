import React, { Component } from "react";

import Header from "../parts/Header";
import Jokes from "../parts/Jokes";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Jokes />
      </>
    );
  }
}
