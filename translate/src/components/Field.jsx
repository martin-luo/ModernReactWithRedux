import React, { Component } from "react";

import { LanguageContext } from "../contexts/LanguageContext";

class Field extends Component {
  render() {
    return (
      <div className={"ui field"}>
        <label>
          <LanguageContext.Consumer>
            {({ language }) => (language === "english" ? "Name" : "名字")}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export { Field };
