import React, { useState, useEffect } from "react";
import axios from "axios";

const GOOGLE_TRANSLATE_API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

export const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: GOOGLE_TRANSLATE_API_KEY,
          },
        }
      );
      console.log("data", data);

      setTranslated(data.data.translations[0].translatedText);
    };

    if (debouncedText) {
      doTranslation();
    }
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};
