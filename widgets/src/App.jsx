import React, { useState } from "react";
import { Accordion } from "./components/Accordion";
import { Search } from "./components/Search";
import { Dropdown } from "./components/Dropdown";

const ITEMS = [
  {
    title: "What is React?",
    content: "React is a frontend Javascript framework",
  },
  {
    title: "Why use React?",
    content: "It's cool",
  },
  {
    title: "How do you use React?",
    content: "I use it by creating component",
  },
];

const OPTIONS = [
  { label: "This is red", value: "red" },
  { label: "The color green", value: "green" },
  { label: "A shade of Blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(OPTIONS[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <>
      {/* <Accordion items={ITEMS} /> */}
      {/* <Search /> */}
      <button
        className="ui button primary"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle Dropdown
      </button>
      {showDropdown && (
        <Dropdown
          options={OPTIONS}
          selected={selected}
          onSelectedChange={setSelected}
        />
      )}
    </>
  );
};

export { App };
