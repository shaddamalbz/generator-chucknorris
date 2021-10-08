import React from "react";
import { Link } from "react-router-dom";

import "../assets/style.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="arrow-left" style={{ textDecoration: "none" }}>
        &#8592;
      </Link>
      <div className="text-center text-primary font-bold text-lg">
        CHUCK NORRIS
      </div>
    </header>
  );
}
