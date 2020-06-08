import React, { Component } from "react";

import { UserCreate } from ".";
import { LanguageContext } from "../contexts/LanguageContext";

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
            <UserCreate />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export { App };
