import React, { Component } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import { ColorContext } from "../contexts/ColorContext";

class Button extends Component {
  renderText = (language) => (language === "english" ? "Submit" : "提交");

  renderButton = (color) => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>{this.renderText}</LanguageContext.Consumer>
    </button>
  );

  render() {
    return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
  }
}

export { Button };
