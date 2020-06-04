import React from "react";

import { Button, Icon } from "..";

import "./BottomBar.css";

export default ({ setSelectedQuiz }) => (
  <div className="mt-de-bottom-bar">
    <div>
      <Button
        className="mt-de-bottom-bar-button mt-de-bottom-bar-sequences-button"
        onClick={() => setSelectedQuiz("sequence")}
      >
        Folgen
      </Button>
      <Button
        className="mt-de-bottom-bar-button mt-de-bottom-bar-words-button "
        onClick={() => setSelectedQuiz("words")}
      >
        Wörter
      </Button>
    </div>
    <div>
      <Button
        className="mt-de-bottom-bar-button mt-de-bottom-bar-icon-button"
        onClick={() => setSelectedQuiz("none")}
      >
        <Icon.Home />
      </Button>
    </div>
    <div>
      <Button
        className="mt-de-bottom-bar-button mt-de-bottom-bar-icon-button"
        onClick={() => {
          document.location.href = "https://www.instagram.com/aufgabenmedat/";
        }}
      >
        <Icon.Insta />
      </Button>
    </div>
  </div>
);
