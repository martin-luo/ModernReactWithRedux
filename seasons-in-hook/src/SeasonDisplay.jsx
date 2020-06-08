import "./SeasonDisplay.css";

import React from "react";

const seasonConfig = {
  summer: { text: "Let's hit the beach!", iconName: "sun" },
  winter: { text: "Burr, it is chilly.", iconName: "snowflake" },
};

const getSeason = (lat, month) => {
  if (lat > 0) {
    return month >= 3 && month <= 8 ? "summer" : "winter";
  } else {
    return month >= 3 && month <= 8 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export { SeasonDisplay };
