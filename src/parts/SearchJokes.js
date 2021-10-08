import React from "react";

import "../assets/style/css";

export default function SearchJokes(props) {
  const { jokes, query } = props;

  return (
    <section className="text-center">
      <figure className="mt-4">
        <img
          src={jokes.result !== undefined && jokes.result[0].icon_url}
          alt="Chuck Norris faces"
        />
      </figure>
      <p className="mt-4 text-primary font-bold">Search Text: {query}</p>
      {jokes.result !== undefined ? (
        jokes.result.slice(0, 5).map((joke) => {
          return <h3 className="mt-4">"{joke.value && joke.value}"</h3>;
        })
      ) : (
        <h3 className="mt-4">Loading....</h3>
      )}
    </section>
  );
}
