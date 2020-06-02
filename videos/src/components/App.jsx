import React, { Component } from "react";

import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";

import { youtube } from "../apis/youtube";
import { YOUTUBE_API } from "../credentials/youtube";
import { VideoDetails } from "./VideoDetails";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.handleFormSubmit("hyper cars");
  }

  handleFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: YOUTUBE_API,
      },
    });

    console.log("response =", response);

    const videos = response.data.items;
    this.setState({ videos, selectedVideo: videos[0] });
  };

  render() {
    console.log("App, this.state =", this.state);
    return (
      <div className={"container ui"}>
        <SearchBar onFormSubmit={this.handleFormSubmit} />

        <div className={"ui grid"}>
          <div className={"ui row"}>
            <div className={"eleven wide column"}>
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className={"five wide column"}>
              <VideoList
                videos={this.state.videos}
                onVideSelect={(selectedVideo) =>
                  this.setState({ selectedVideo })
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { App };
