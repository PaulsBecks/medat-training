import { DIF_TYPES, SEQUENCE_TYPES } from "../constants";

const { PLUS, TIMES } = DIF_TYPES;
const { SEQUENTIAL, PERIODIC } = SEQUENCE_TYPES;

function getNextNumber(last, dif) {
  if (dif.type === TIMES) {
    return last * dif.number;
  }
  if (dif.type === PLUS) {
    return last + dif.number;
  }
  return dif.number;
}

const getRandomNumber = (max) => Math.round(Math.random() * max - max / 2);

function generateSolution(sequence, dif1, dif2, type) {
  if (type === SEQUENTIAL) {
    const first = getNextNumber(sequence[sequence.length - 1], dif1);
    const second = getNextNumber(first, dif2);
    return [first, second];
  }
  if (type === PERIODIC) {
    const first = getNextNumber(sequence[sequence.length - 3], dif1);
    const second = getNextNumber(sequence[sequence.length - 2], dif2);
    return [first, second];
  }
  return null;
}

const getDiff = () => {
  const type = Object.keys(DIF_TYPES)[
    Math.floor(Math.random() * Object.keys(DIF_TYPES).length)
  ];
  let number = type === PLUS ? getRandomNumber(100) : getRandomNumber(10);
  while (type === TIMES && number === 0) {
    number = getRandomNumber(10);
  }
  return {
    type,
    number,
  };
};

function compareDiffs(diff1, diff2) {
  return diff1.type === diff2.type && diff1.number === diff2.number;
}

function execTimes(f, times) {
  let r = [];
  for (let i = 0; i < times; i++) {
    r.push(f());
  }
  return r;
}

export default function generateSequence() {
  let sequence = [];
  let sequenceType = Object.keys(SEQUENCE_TYPES)[Math.floor(Math.random() * 2)];
  const firstNumber = getRandomNumber(100);
  sequence.push(firstNumber);
  const difs = [];
  for (let i = 0; i <= 2; i++) {
    const diff = getDiff();
    let containsDiff = false;
    for (const d in difs) {
      if (compareDiffs(difs[d], diff)) {
        containsDiff = true;
      }
    }
    if (!containsDiff) {
      difs.push(diff);
    } else {
      i--;
    }
  }

  for (let i = 0; i < 6; i++) {
    if (sequenceType === SEQUENTIAL) {
      sequence.push(getNextNumber(sequence[i], difs[i % 3]));
    } else {
      if (i < 2) {
        sequence.push(getRandomNumber(100));
      } else {
        sequence.push(getNextNumber(sequence[i - 2], difs[i % 3]));
      }
    }
  }
  const correctSolution = generateSolution(
    sequence,
    difs[0],
    difs[1],
    sequenceType
  );
  let solutions = [correctSolution];
  const gr = () => Math.floor(Math.random() * 3);
  let a = [`0;1`];
  let i = 0;
  while (i < 3) {
    const e = `${gr()};${gr()}`;
    if (a.indexOf(e) < 0) {
      const sa = e.split(";");
      a.push(e);
      solutions.push(
        generateSolution(
          sequence,
          difs[Number(sa[0])],
          difs[Number(sa[1])],
          sequenceType
        )
      );
      i++;
    }
  }
  return { sequence, difs, sequenceType, solutions, correctSolution };
}
