import React from "react";
import { Link } from "react-router-dom";

import "../assets/style.css";
import arrowleft from "../assets/icons/arrowleft.svg";

export default function Header() {
  const pathname = window.location.pathname;

  return (
    <header>
      {pathname.length > 1 && (
        <Link to="/" className="arrow-left" style={{ textDecoration: "none" }}>
          <img src={arrowleft} alt="icon arrow that pointing to the left" />
        </Link>
      )}
      <div className="text-center text-primary font-bold header-title">
        CHUCK NORRIS
      </div>
    </header>
  );
}
