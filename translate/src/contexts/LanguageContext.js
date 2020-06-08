import React, { Component } from "react";

// We can initializie the context with any type of data, e.g. object, array.
const Context = React.createContext("chinese");

class LanguageStore extends Component {
  state = { language: "chinese" };

  onLanguageChange = (language) => this.setState({ language });

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context as LanguageContext, LanguageStore };
