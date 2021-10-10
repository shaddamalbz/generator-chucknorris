import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// components
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// assets
import "../assets/style.css";

export default class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: {},
      query: "",
      category: [],
      loading: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      this.setState({ jokes: res.data });
    });

    axios.get("https://api.chucknorris.io/jokes/categories").then((res) => {
      this.setState({
        category: res.data,
      });
    });
  }

  handleClick = () => {
    this.setState({ loading: true });
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      this.setState({ jokes: res.data, loading: false });
    });
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value === 0 ? e.target.innerText : e.target.value,
    });
  };

  render() {
    const { jokes, category } = this.state;
    return (
      <section className="text-center">
        <div className="search">
          <input
            type="text"
            placeholder="Search jokes by text"
            onChange={this.handleChange}
            value={this.state.query}
          />
          <button className="btn btn-primary">
            <Link
              style={{
                textDecoration: "none",
                color: "#ffffff",
                fontSize: "16px",
              }}
              to={`/search/${this.state.query}`}
            >
              Search!
            </Link>
          </button>
        </div>
        <figure className="pb-6">
          {jokes.icon_url ? (
            <img src={jokes.icon_url} alt="Chuck Norris faces" />
          ) : (
            <p>wait....</p>
          )}
        </figure>
        <h3 className="jokes font-italic">{jokes.value && jokes.value}</h3>
        <button
          className="btn btn-primary text-base"
          onClick={this.handleClick}
        >
          {!this.state.loading ? "Another!" : "Wait...."}
        </button>
        <div className="category">
          <Autocomplete
            onChange={this.handleChange}
            disablePortal
            id="combo-box-demo"
            options={category}
            sx={{ width: 300, marginRight: "1rem" }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
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
