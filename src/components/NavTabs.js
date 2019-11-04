import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-pills nav-justified justify-content-center">
      <li className="nav-link">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link
          to="/components/projects"
          className={window.location.pathname === "/components/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-link">
        <Link
          to="/components/contact"
          className={window.location.pathname === "/components/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
