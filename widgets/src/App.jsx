import React, { useState } from "react";

import { Route } from "./components/Route";
import { Accordion } from "./components/Accordion";
import { Search } from "./components/Search";
import { Translate } from "./components/Translate";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";

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

  return (
    <>
      <Header />
      <Route path="/">
        <Accordion items={ITEMS} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={OPTIONS}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </>
  );
};

export { App };
