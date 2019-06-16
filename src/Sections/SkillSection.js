import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../Components/Fullpage";
import SkillCard from "../Components/SkillCard";
import "./SkillSection.css";
import { Link, Element } from "react-scroll";
import MaterialIcon, { colorPalette } from "material-icons-react";

export default class SkillSection extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.bgColor,
          color: this.props.fontColor
        }}
      >
        <Fullpage className="third">
          <h3 className="title">{data.sections[1].title}</h3>
          <div className="cards-flow">
            {data.sections[1].items.map(eachSkill => {
              return <SkillCard className="skill-card" skill={eachSkill} />;
            })}
          </div>
        </Fullpage>

        <Link
          activeClass="active"
          to="home"
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
              icon="keyboard_arrow_up"
              size="large"
              color={this.props.fontColor}
            />
          </div>
        </Link>
      </div>
    );
  }
}
