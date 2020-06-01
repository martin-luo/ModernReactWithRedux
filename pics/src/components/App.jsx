// Import React and ReactDOM libraries.
import React, { Component } from "react";
import { SearchBar } from "./SearchBar";

import { unsplash } from "../api/unsplash";
import { ImageList } from "./ImageList";

// Create a React component.
class App extends Component {
  state = { images: [] };

  onFormSubmit = async (term) => {
    console.log("Form values =", term);

    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className={"ui container"} style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        Found {this.state.images.length} images.
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export { App };
