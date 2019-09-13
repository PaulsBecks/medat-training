import React, { useMemo, useState } from "react";
import { Button } from "..";

import "./WordQuizCard.css";

const shuffle = str => {
  return str
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
};

const chooseQuizChars = word => {
  const firstChar = word[0].toUpperCase();
  const wordInRandomOrder = shuffle(word).toUpperCase();
  let quizChars = firstChar;

  for (let char in wordInRandomOrder) {
    if (quizChars.length >= 4) {
      break;
    }

    if (!quizChars.includes(wordInRandomOrder[char])) {
      quizChars += wordInRandomOrder[char];
    }
  }

  return quizChars;
};

export default ({ word, onNextClick }) => {
  const wordInRandomOrder = useMemo(() => shuffle(word).toUpperCase(), [word]);
  const quizChars = useMemo(() => chooseQuizChars(word), [word]);
  const shuffledQuizChars = useMemo(() => shuffle(quizChars), [quizChars]);
  const [selectedChar, setSelectedChar] = useState(shuffledQuizChars[0]);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="mt-de-word-quiz-card">
      <h2>{wordInRandomOrder}</h2>
      <p>Dieses Wort beginnt mit dem Buchstaben:</p>
      <ul>
        {shuffledQuizChars.split("").map(char => (
          <li key={char} onClick={() => setSelectedChar(char)}>
            <input
              type="radio"
              name="quiz-char"
              checked={char === selectedChar}
              onChange={() => setSelectedChar(char)}
            />
            <span>{char}</span>
          </li>
        ))}
      </ul>
      {showSolution && <h3>{word}</h3>}
      {!showSolution && (
        <Button onClick={() => setShowSolution(true)}>Lösung</Button>
      )}
      {!showSolution && <Button className="mt-de-word-quiz-card-skip-button" onClick={() => onNextClick()}>Skip</Button>}
      {showSolution && (
        <Button onClick={() => onNextClick(selectedChar)}>Nächstes Wort</Button>
      )}
    </div>
  );
};
