import React, { Component } from "react";

import { LanguageContext } from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "名字";

    return (
      <div className={"ui field"}>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export { Field };
