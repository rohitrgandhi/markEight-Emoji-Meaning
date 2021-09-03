import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "❤️‍🔥": " Heart on Fire"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not in DATABASE";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>mean emojis</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> popular emojis </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
