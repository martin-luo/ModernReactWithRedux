import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className={"ui segment search-bar"}>
        <form className={"ui form"} onSubmit={this.onFormSubmit}>
          <div className={"field"}>
            <label>Video Search: </label>
            <input
              type={"text"}
              value={this.state.term}
              onChange={(event) =>
                this.setState({ term: event.currentTarget.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export { SearchBar };
