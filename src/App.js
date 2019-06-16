import React, { Component } from "react";
import "./App.css";
import TitlesAndIcons from "./Sections/TitlesAndIcons";
import AboutSection from "./Sections/AboutSection";
import SkillSection from "./Sections/SkillSection";
import Navigation from "./Components/Navigation";
import { Element } from "react-scroll";
import SnowStorm from "react-snowstorm";
import data from "./data.json";
import MaterialIcon, { colorPalette } from "material-icons-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      fnColor: "#fff",
      bgColor: "#5e6073"
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    let backgroundPalette = ["#293462", "#009975", "#5e6073", "#854777"];
    let fontPalette = ["#fff1c1", "#fff", "#fff", "#ffc6be"];
    let counter = this.state.counter === 3 ? 0 : this.state.counter + 1;
    this.setState({
      counter: counter,
      bgColor: backgroundPalette[this.state.counter],
      fnColor: fontPalette[this.state.counter]
    });
  }

  render() {
    return (
      <div className="App">
        <SnowStorm
          followMouse={false}
          animationInterval={50}
          snowCharacter={"*"}
          vMaxY={2}
          vMaxX={2}
        />

        <Element name="home" className="element" />
        <Navigation>
          <MaterialIcon
            onClick={this.changeTheme}
            icon="brush"
            size="medium"
            color={this.state.fnColor}
          />
        </Navigation>
        <TitlesAndIcons
          fontColor={this.state.fnColor}
          bgColor={this.state.bgColor}
        />
        <Element name="about" className="element" />
        <AboutSection
          fontColor={this.state.fnColor}
          bgColor={this.state.bgColor}
        />
        <Element name="skills" className="element" />
        <SkillSection
          fontColor={this.state.fnColor}
          bgColor={this.state.bgColor}
        />
      </div>
    );
  }
}

export default App;
