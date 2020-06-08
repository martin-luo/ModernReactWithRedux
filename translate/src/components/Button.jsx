import React, { Component } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;
  // This is equivalent to `Button.contextType = LanguageContext`.

  render() {
    console.log(this);
    return <div className={"ui button primary"}>Submit</div>;
  }
}

export { Button };
