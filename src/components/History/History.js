import React, { useState } from "react";
import { Button, Icon } from "..";
import { CARD_STATUSES } from "../../constants";

import "./History.css";

const HISTORY_STEP_SIZE = 10;
const { SKIPPED, CORRECT, WRONG } = CARD_STATUSES;

export default ({
  elements = [],
  handleElementClick,
  isWords,
  isSequences
}) => {
  const [maxElements, setMaxElements] = useState(HISTORY_STEP_SIZE);
  const [mouseOver, setMouseOver] = useState();
  const showAllElements = elements.length <= maxElements;
  const sliceFrom = showAllElements ? 0 : elements.length - maxElements;
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
            const { status } = element;
            const mouseIsOver = mouseOver === i;
            return (
              <li
                className={`mt-de-history-list-item mt-de-history-list-item-${status.toLowerCase()}`}
                key={element.id}
                onMouseOver={() => setMouseOver(i)}
                onMouseLeave={() => setMouseOver()}
                onClick={() => {
                  document.location.href = "#";
                  handleElementClick(element);
                }}
              >
                {isWords && <span>{element.word}</span>}
                {isSequences && (
                  <div>
                    {element.sequence.map((s, i) => (
                      <span
                        key={`${s}:${i}`}
                        className="mt-de-history-list-item-sequence-number"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
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
      {!showAllElements && (
        <Button
          className="mt-de-history-more-button"
          onClick={() => setMaxElements(maxElements + HISTORY_STEP_SIZE)}
        >
          Mehr
        </Button>
      )}
    </div>
  );
};
