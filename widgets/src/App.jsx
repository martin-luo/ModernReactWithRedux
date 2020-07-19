import React from "react";
import { Accordion } from "./components/Accordion";
import { Search } from "./components/Search";

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

const App = () => {
  return (
    <>
      {/* <Accordion items={ITEMS} /> */}
      <Search />
    </>
  );
};

export { App };
