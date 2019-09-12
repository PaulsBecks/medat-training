import React, { useState } from "react";
import { Button, Icon } from "..";
import { CARD_STATUSES } from "../../constants";

import "./History.css";

const HISTORY_STEP_SIZE = 10;
const { SKIPPED, CORRECT, WRONG } = CARD_STATUSES;

export default ({ elements = [], handleElementClick }) => {
  const [maxWords, setMaxWords] = useState(HISTORY_STEP_SIZE);
  const [mouseOver, setMouseOver] = useState();
  const showAllWords = elements.length <= maxWords;
  const sliceFrom = showAllWords ? 0 : elements.length - maxWords;
  const count = elements.reduce(
    ({ correct, wrong, skipped }, element) => ({
      correct: element.status === CORRECT ? correct + 1 : correct,
      wrong: element.status === WRONG ? wrong + 1 : wrong,
      skipped: element.status === SKIPPED ? skipped + 1 : skipped
    }),
    { correct: 0, wrong: 0, skipped: 0 }
  );
  return (
    <div className="mt-de-history">
      <div className="mt-de-history-header">
        <h2>History</h2>
        <h2>
          {count.correct}/{count.correct + count.wrong}
        </h2>
      </div>
      <ul className="mt-de-history-list">
        {elements
          .slice(sliceFrom)
          .reverse()
          .map((element, i) => {
            const { word, status } = element;
            const mouseIsOver = mouseOver === i;
            return (
              <li
                className={`mt-de-history-list-item mt-de-history-list-item-${status.toLowerCase()}`}
                onMouseOver={() => setMouseOver(i)}
                onMouseLeave={() => setMouseOver()}
                onClick={() => handleElementClick(element)}
              >
                <span>{word}</span>
                <div className="mt-de-history-list-item-icon">
                  {!mouseIsOver && status === SKIPPED && <Icon.Skipped />}
                  {!mouseIsOver && status === WRONG && <Icon.Failed />}
                  {!mouseIsOver && status === CORRECT && <Icon.Check />}
                  {mouseIsOver && <Icon.Retry />}
                </div>
              </li>
            );
          })}
      </ul>
      {!showAllWords && (
        <Button onClick={() => setMaxWords(maxWords + HISTORY_STEP_SIZE)}>
          Mehr
        </Button>
      )}
    </div>
  );
};
