import React, { Component } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;
  // This is equivalent to `Button.contextType = LanguageContext`.

  render() {
    const text = this.context === "english" ? "Submit" : "提交";
    return <div className={"ui button primary"}>{text}</div>;
  }
}

export { Button };
