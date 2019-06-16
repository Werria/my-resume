import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../Components/Fullpage";
import "./AboutSection.css";
import { Link, Element } from "react-scroll";
import MaterialIcon, { colorPalette } from "material-icons-react";

export default class AboutSection extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.bgColor,
          color: this.props.fontColor
        }}
      >
        <Fullpage className="second">
          <h3 className="title">{data.sections[0].title}</h3>
          <p>{data.sections[0].items[0].content}</p>
        </Fullpage>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MaterialIcon
              icon="keyboard_arrow_down"
              size="large"
              color={this.props.fontColor}
            />
          </div>
        </Link>
      </div>
    );
  }
}
