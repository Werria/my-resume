import React, { Component } from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../Components/Fullpage";
import "./TitlesAndIcons.css";
import { Link, Element } from "react-scroll";
import MaterialIcon, { colorPalette } from "material-icons-react";

export default class TitlesAndIcons extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.bgColor,
          color: this.props.fontColor
        }}
      >
        <Fullpage className={`first`}>
          <h1 className="title">{data.title}</h1>
          <div>
            <h2 className="subtitle">{data.subtitle}</h2>
          </div>
          <div>
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
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
              alignItems: "center",
              transform: "translateY(-50px)"
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
