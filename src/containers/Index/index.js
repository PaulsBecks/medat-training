import React, { useState } from "react";
import { Words, Sequence, Home } from "..";
import { BottomBar, Navbar } from "../../components";

export default () => {
  const [selectedQuiz, setSelectedQuiz] = useState("none");

  return (
    <div>
      <Navbar selectedQuiz={selectedQuiz} />
      {selectedQuiz === "none" && <Home setSelectedQuiz={setSelectedQuiz} />}
      {selectedQuiz === "words" && <Words />}
      {selectedQuiz === "sequence" && <Sequence />}
      <BottomBar setSelectedQuiz={setSelectedQuiz} />
    </div>
  );
};
