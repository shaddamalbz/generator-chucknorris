import React from "react";

import "./style.css";

export default function CategoryJokes(props) {
  const { jokes, query } = props;

  return (
    <section className="text-center">
      <figure className="mt-4">
        <img src={jokes && jokes.icon_url} alt="Chuck Norris faces" />
      </figure>
      <p className="mt-4 text-primary font-bold">Category {query}</p>
      <h3 className="mt-4">"{jokes.value && jokes.value}"</h3>
    </section>
  );
}
