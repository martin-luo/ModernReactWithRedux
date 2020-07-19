import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { Convert } from "./Convert";

const LANGUAGE_OPTIONS = [
  { label: "中文", value: "zh" },
  { label: "Arabic", value: "ar" },
  { label: "English", value: "en" },
];

export const Translate = () => {
  const [language, setLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label={"Select a language"}
        options={LANGUAGE_OPTIONS}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
