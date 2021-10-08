import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../assets/style.css";

export default class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: {},
      isLoaded: false,
      query: "",
      category: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      this.setState({ jokes: res.data, isLoaded: true });
    });

    axios.get("https://api.chucknorris.io/jokes/categories").then((res) => {
      this.setState({
        category: res.data,
      });
    });
  }

  handleClick = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      this.setState({ jokes: res.data, isLoaded: true });
    });
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { jokes, category } = this.state;

    return (
      <section className="text-center relative">
        <div className="search">
          <input
            type="text"
            placeholder="search jokes by text"
            onChange={this.handleChange}
            value={this.state.query}
          />
          <button className="btn btn-primary">
            <Link
              style={{ textDecoration: "none", color: "#ffffff" }}
              to={`/search/${this.state.query}`}
            >
              Search!
            </Link>
          </button>
        </div>
        <figure className="mt-4">
          <img
            src={jokes.icon_url && jokes.icon_url}
            alt="Chuck Norris faces"
          />
        </figure>
        <h3 className="mt-4">{jokes.value && jokes.value}</h3>
        <button className="btn btn-primary mt-4" onClick={this.handleClick}>
          Another!
        </button>
        <div className="mt-40">
          <select
            className="mr-4"
            onChange={(e) => this.setState({ query: e.target.value })}
          >
            <option>select jokes from category</option>
            {category.length > 0 &&
              category.map((item) => {
                return <option value={item}>{item}</option>;
              })}
          </select>
          <button className="btn btn-primary">
            <Link
              style={{ textDecoration: "none", color: "#ffffff" }}
              to={`/category/${this.state.query}`}
            >
              Search!
            </Link>
          </button>
        </div>
      </section>
    );
  }
}
