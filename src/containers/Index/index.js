import React, { useState, useMemo } from "react";
import { Words, Sequence, Home } from "..";
import { BottomBar, Navbar } from "../../components";
import { sendGAPageView } from "../../helpers/googleAnalytics";

export default () => {
  const [selectedQuiz, setSelectedQuiz] = useState("none");
  useMemo(() => sendGAPageView(`/${selectedQuiz}`), [selectedQuiz]);

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
