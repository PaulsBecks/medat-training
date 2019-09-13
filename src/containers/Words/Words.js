import React, { useState } from "react";
import { WordQuizCard, History } from "../../components";
import { words } from "../../constants";
import { useLocalStorage } from "../../hooks";
import { CARD_STATUSES } from "../../constants";
import "./Words.css";

const { SKIPPED, CORRECT, WRONG } = CARD_STATUSES;

export default () => {
  const [wordsSolved, setWordsSolved] = useLocalStorage("wordsSolved", []);
  const [reviewWord, setReviewWord] = useState();

  const wordIndex = wordsSolved.length;

  return (
    <div className="mt-de-words-page">
      <h1>Wörter</h1>
      <div>
        {!reviewWord && words && words.length && words.length > wordIndex && (
          <WordQuizCard
            word={words[wordIndex]}
            key={words[wordIndex]}
            onNextClick={charPicked => {
              const word = words[wordIndex];
              let status = SKIPPED;
              if (charPicked) {
                status = charPicked === word[0] ? CORRECT : WRONG;
              }
              setWordsSolved(
                wordsSolved.concat([
                  {
                    word,
                    id: wordIndex,
                    charPicked,
                    status
                  }
                ])
              );
            }}
          />
        )}
        {reviewWord && (
          <WordQuizCard
            word={reviewWord.word}
            key={reviewWord.id}
            onNextClick={charPicked => {
              let status = SKIPPED;
              if (charPicked) {
                status = charPicked === reviewWord.word[0] ? CORRECT : WRONG;
              }
              const newSolution = { ...reviewWord, charPicked, status };
              const wordCopy = [...wordsSolved];
              wordCopy[reviewWord.id] = newSolution;
              setWordsSolved(wordCopy);
              setReviewWord();
            }}
          />
        )}
        {wordsSolved && (
          <History
            isWords
            elements={wordsSolved}
            handleElementClick={word => setReviewWord(word)}
          />
        )}
      </div>
    </div>
  );
};
