import React, { useState, useMemo } from "react";
import { SequenceQuizCard, History } from "../../components";
import { useLocalStorage } from "../../hooks";
import { generateSequence } from "../../helpers";
import { CARD_STATUSES } from "../../constants";

import "./Sequence.css";

const { SKIPPED, CORRECT, WRONG } = CARD_STATUSES;

export default () => {
  const [sequencesSolved, setSequencesSolved] = useLocalStorage(
    "sequencesSolved",
    []
  );
  const [reviewSequence, setReviewSequence] = useState();

  const { sequence, difs, sequenceType, solutions, correctSolution } = useMemo(
    generateSequence,
    [sequencesSolved]
  );

  return (
    <div className="mt-de-sequence-page">
      <h1>Folgen</h1>

      <div>
        {reviewSequence && (
          <SequenceQuizCard
            {...reviewSequence}
            handleNextClick={solutionPicked => {
              let status = SKIPPED;
              if (solutionPicked) {
                status =
                  JSON.stringify(solutionPicked) ===
                  JSON.stringify(reviewSequence.correctSolution)
                    ? CORRECT
                    : WRONG;
              }
              const newSolution = { ...reviewSequence, solutionPicked, status };
              const sequenceCopy = [...sequencesSolved];
              sequenceCopy[newSolution.id] = newSolution;
              setSequencesSolved(sequenceCopy);
              setReviewSequence();
            }}
          />
        )}
        {!reviewSequence && (
          <SequenceQuizCard
            {...{ sequence, difs, solutions, correctSolution }}
            handleNextClick={solutionPicked => {
              let status = SKIPPED;
              if (solutionPicked) {
                status =
                  JSON.stringify(solutionPicked) ===
                  JSON.stringify(correctSolution)
                    ? CORRECT
                    : WRONG;
              }
              setSequencesSolved(
                sequencesSolved.concat({
                  sequence,
                  solutions,
                  difs,
                  sequenceType,
                  correctSolution,
                  id: sequencesSolved.length,
                  status
                })
              );
            }}
          />
        )}
        <History
          isSequences
          elements={sequencesSolved}
          handleElementClick={setReviewSequence}
        />
      </div>
    </div>
  );
};
