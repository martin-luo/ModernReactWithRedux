import React, { Component } from "react";

class App extends Component {
  state = { resource: "posts" };

  render() {
    return (
      <div>
        <div>
          <button
            className={"ui button"}
            onClick={() => this.setState({ resource: "posts" })}
          >
            Posts
          </button>
          <button
            className={"ui button"}
            onClick={() => this.setState({ resource: "todos" })}
          >
            Todos
          </button>
        </div>
      </div>
    );
  }
}

export { App };
