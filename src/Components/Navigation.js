import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";

export default class Navigation extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="nav-flex navbar">
        <div className="magic-icon">{children}</div>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <a href="">
            <p>Skills</p>
          </a>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <a href="">
            <p>About</p>
          </a>
        </Link>
      </div>
    );
  }
}
