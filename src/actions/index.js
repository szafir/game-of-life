import * as actionTypes from "./actionTypes";
import formations from "../formations";
import { parseRLE } from "../lib/RLEParser";
import { calculateGeneration } from "../lib/Plane";

export const fillFormation = payload => {
  const { formation } = payload;
  let { pattern } = payload;

  if (Number.isInteger(formation)) {
    pattern = formations.patterns[formation];
  }

  const parsedData = parseRLE(pattern);
  const { boundingBox, parsedLines } = parsedData;
  let translateX = Math.ceil(boundingBox[0] / 2);
  let translateY = Math.ceil(boundingBox[1] / 2);

  const cells = {};
  for (let i = 0; i < boundingBox[0]; i++) {
    for (let j = 0; j < boundingBox[1]; j++) {
      if (parsedLines && parsedLines[j] && parsedLines[j][i] && parsedLines[j][i] === "o") {
        cells[`${i - translateX}_${j - translateY}`] = true;
      }
    }
  }
  return {
    type: actionTypes.NEXT_GENERATION,
    payload: {
      cells,
      generationNo: 0
    }
  };
};

let generationHistory = [];
const calculateVelocity = () => {
  generationHistory = generationHistory.slice(generationHistory.length - 500);
  generationHistory.push(new Date().getTime());

  let currentDate = new Date();
  currentDate.setSeconds(currentDate.getSeconds() - 2);
  let velocity = generationHistory.reduce((prev, curr) => {
    return currentDate.getTime() < curr ? prev + 1 : prev;
  }, 0);
  return (velocity / 2).toFixed(1);
};

export const nextGeneration = payload => {
  const { cells } = payload;
  const calculatedCells = calculateGeneration(cells);
  const velocity = calculateVelocity();

  return {
    type: actionTypes.NEXT_GENERATION,
    payload: {
      cells: calculatedCells,
      velocity
    }
  };
};

export const importFormation = payload => {
  console.log(payload);

  return {
    type: false,
    payload: {
      // cells: calculatedCells,
      // velocity
    }
  };
};
