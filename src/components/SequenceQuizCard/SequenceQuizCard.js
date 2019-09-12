import React, { useState, useMemo } from "react";
import { Button } from "..";
import "./SequenceQuizCard.css";

const getDiff = () => Math.round(Math.random() * 100 - 50);

function execTimes(f, times) {
  let r = [];
  for (let i = 0; i < times; i++) {
    r.push(f());
  }
  return r;
}

function generateSolution(last, dif1, dif2) {
  return [last + dif1, last + dif1 + dif2];
}

//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default () => {
  const [counter, setCounter] = useState(0);
  const { sequence, difs } = useMemo(() => {
    let sequence = [];
    const firstNumber = Math.round(Math.random() * 100);
    sequence.push(firstNumber);
    const difs = execTimes(getDiff, 3);
    for (let i = 0; i < 6; i++) {
      sequence.push(difs[i % 3] + sequence[i]);
    }
    return { sequence, difs };
  }, [counter]);

  const { solutions, correctSolution } = useMemo(() => {
    const correctSolution = generateSolution(sequence[6], difs[0], difs[1]);
    let solutions = [];
    const gr = () => difs[Math.floor(Math.random() * 3)];
    let a = [`${difs[0]};${difs[1]}`];
    let i = 0;
    while (i < 3) {
      const e = `${gr()};${gr()}`;
      console.log(a);
      if (a.indexOf(e)) {
        a.push(e);
        i++;
      }
    }
    for (let r in a) {
      const sa = a[r].split(";");
      console.log(sa);
      solutions.push(
        generateSolution(sequence[6], Number(sa[0]), Number(sa[1]))
      );
    }
    return { solutions, correctSolution };
  }, [sequence, difs]);
  const shuffledSolutions = useMemo(() => shuffle(solutions), [solutions]);

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
        {shuffledSolutions.map(([dif1, dif2]) => (
          <li>
            <input type="radio" name="quiz-char" />[{dif1}, {dif2}]
          </li>
        ))}
      </ul>
      {showSolution && (
        <h3>
          [{correctSolution[0]}, {correctSolution[1]}]
        </h3>
      )}
      {!showSolution && (
        <Button onClick={() => setShowSolution(true)}>Lösung</Button>
      )}
      {showSolution && (
        <Button
          onClick={() => {
            setCounter(counter + 1);
            setShowSolution(false);
          }}
        >
          Nächste Folge
        </Button>
      )}
    </div>
  );
};
