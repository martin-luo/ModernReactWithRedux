import React, { useState } from "react";

export const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className={"ui segment search-bar"}>
      <form className={"ui form"} onSubmit={handleFormSubmit}>
        <div className={"field"}>
          <label>Video Search: </label>
          <input
            type={"text"}
            value={term}
            onChange={(event) => setTerm(event.currentTarget.value)}
          />
        </div>
      </form>
    </div>
  );
};
