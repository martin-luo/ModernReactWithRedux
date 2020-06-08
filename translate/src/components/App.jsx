import React, { Component } from "react";

import { UserCreate } from ".";
import { LanguageContext } from "../contexts/LanguageContext";
import { ColorContext } from "../contexts/ColorContext";

class App extends Component {
  state = { language: "chinese" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className={"ui container"}>
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag cn"
            onClick={() => this.onLanguageChange("chinese")}
          />
          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value={"red"}>
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export { App };
