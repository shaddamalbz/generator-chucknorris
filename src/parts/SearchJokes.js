import React from "react";

import "../assets/style.css";

export default function SearchJokes(props) {
  const { jokes, query } = props;

  return (
    <section className="text-center">
      <figure className="mt-8">
        {jokes.result !== undefined ? (
          <img src={jokes.result[0].icon_url} alt="Chuck Norris faces" />
        ) : (
          <p>wait....</p>
        )}
      </figure>
      <p className="text-primary font-bold mt-4 mb-8 text-base">
        Search Text: {query}
      </p>
      {jokes.result !== undefined ? (
        jokes.result.slice(0, 5).map((joke) => {
          return (
            <h3 className="mt-4 text-base font-italic">
              "{joke.value && joke.value}"
            </h3>
          );
        })
      ) : (
        <h3 className="mt-4">Wait....</h3>
      )}
    </section>
  );
}
