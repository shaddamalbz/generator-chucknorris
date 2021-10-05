import React, { Component } from "react";
import axios from "axios";

import Header from "../parts/Header";
import SearchJokes from "../parts/SearchJokes";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: {},
      isLoaded: false,
      query: this.props.location.pathname.replace("/search/", ""),
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${this.state.query}`)
      .then((res) => {
        this.setState({ jokes: res.data, isLoaded: true });
      });
  }

  render() {
    return (
      <>
        <Header />
        <SearchJokes jokes={this.state.jokes} query={this.state.query} />
      </>
    );
  }
}
