import React, { Component } from "react";
import axios from "axios";

import Header from "../parts/Header";
import CategoryJokes from "../parts/CategoryJokes";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: {},
      isLoaded: false,
      query: this.props.location.pathname.replace("/category/", ""),
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.chucknorris.io/jokes/random?category=${this.state.query}`
      )
      .then((res) => {
        this.setState({ jokes: res.data, isLoaded: true });
      });
  }

  render() {
    return (
      <>
        <Header />
        <CategoryJokes jokes={this.state.jokes} query={this.state.query} />
      </>
    );
  }
}
