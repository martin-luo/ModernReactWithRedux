import { combineReducers } from "redux";

// This is a static reducer, i.e. it only contains the constants.
const songsReducer = () => {
  return [
    { title: "Song A", duration: "4:05" },
    { title: "Song B", duration: "4:15" },
    { title: "Song C", duration: "4:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
