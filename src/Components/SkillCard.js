import React, { Component } from "react";
import "./SkillCard.css";

export default class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div>
          <img className="image-wrapper" src={skill.content.image} />
        </div>
        <div className="skill-title-wrapper">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
