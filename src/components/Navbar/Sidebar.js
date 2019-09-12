import React from "react";
import { Button } from "..";
import "./Sidebar.css";

export default ({ selectedQuiz, setSelectedQuiz }) => {
  return (
    <div className="mt-de-navbar">
      <h2>Medat Training</h2>
      <div>
        <Button onClick={() => setSelectedQuiz("sequence")}>Folgen</Button>
        <Button onClick={() => setSelectedQuiz("words")}>Wörter</Button>
      </div>
    </div>
  );
};
