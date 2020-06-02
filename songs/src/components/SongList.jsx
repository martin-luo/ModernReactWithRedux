import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongListComponent extends Component {
  render() {
    console.log(this.props);

    const { songs, selectSong } = this.props;
    return (
      <div className={"ui divided list"}>
        {songs.map((song) => (
          <div className={"item"} key={song.title}>
            <div className={"right floated content"}>
              <button
                className={"ui button primary"}
                onClick={() => selectSong(song)}
              >
                Select
              </button>
            </div>
            <div className={"content"}>{song.title}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ songs: state.songs });

const SongList = connect(mapStateToProps, { selectSong })(SongListComponent);

export { SongList };
