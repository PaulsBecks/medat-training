import React, { useState, useMemo } from "react";
import { Button } from "..";
import "./SequenceQuizCard.css";

//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default ({
  solutions,
  sequence,
  difs,
  correctSolution,
  handleNextClick
}) => {
  const shuffledSolutions = useMemo(() => shuffle(solutions), [solutions]);
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="ltn-de-sqc">
      <div className="ltn-de-sqc-sequence">
        {sequence.map(num => (
          <h2>{num}</h2>
        ))}
      </div>
      <p>Diese Folge kann mit folgenden Zahlen erweitert werden:</p>
      <ul>
        {shuffledSolutions.map(([dif1, dif2], i) => (
          <li onClick={() => setSelectedSolution(i)}>
            <input
              type="radio"
              name="quiz-char"
              checked={i === selectedSolution}
              onChange={() => setSelectedSolution(i)}
            />
            [{dif1}, {dif2}]
          </li>
        ))}
      </ul>
      {showSolution && (
        <h3>
          [{correctSolution[0]}, {correctSolution[1]}]
        </h3>
      )}
      {!showSolution && (
        <Button
          onClick={() => {
            setShowSolution(true);
          }}
        >
          Lösung
        </Button>
      )}
      {!showSolution && (
        <Button
          onClick={() => {
            handleNextClick();
          }}
          className="mt-de-sequence-quiz-card-skip-button"
        >
          Skip
        </Button>
      )}
      {showSolution && (
        <Button
          onClick={() => {
            handleNextClick(shuffledSolutions[selectedSolution]);
            setShowSolution(false);
          }}
        >
          Nächste Folge
        </Button>
      )}
    </div>
  );
};
