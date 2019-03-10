import * as actionTypes from "../actions/actionTypes";
import formations from "../formations";

const initState = () => {
  const amountX = 80;
  const amountY = 50;
  const cellSize = 6;
  const initialState = {
    cells: [],
    generationNo: 0,
    alivedCells: 0,
    cellsAmount: 0,
    fieldWidth: (amountX - 1) * cellSize,
    fieldHeight: (amountY - 1) * cellSize,
    cellSize,
    generationHistory: [],
    velocity: 0,
    shouldRun: false,
    populationSpeed: 100 // in ms
  };
  return initialState;
};

const initialState = initState();

const calculateVelocity = history => {
  let currentDate = new Date();
  currentDate.setSeconds(currentDate.getSeconds() - 2);
  let velocity = history.reduce((prev, curr) => {
    return currentDate.getTime() < curr ? prev + 1 : prev;
  }, 0);
  return (velocity / 2).toFixed(1);
};

const calculateCell = (id, cells) => {
  const xy = id.split("_").map(num => parseInt(num));
  const nb = [
    cells[`${xy[0] - 1}_${xy[1] - 1}`],
    cells[`${xy[0] - 1}_${xy[1]}`],
    cells[`${xy[0] - 1}_${xy[1] + 1}`],
    cells[`${xy[0]}_${xy[1] - 1}`],
    cells[`${xy[0]}_${xy[1] + 1}`],
    cells[`${xy[0] + 1}_${xy[1] - 1}`],
    cells[`${xy[0] + 1}_${xy[1]}`],
    cells[`${xy[0] + 1}_${xy[1] + 1}`]
  ];
  const nbCount = nb.reduce((prev, id) => prev + (id ? 1 : 0), 0);

  let retValue = false;
  if ([2, 3].includes(nbCount) && cells[`${xy[0]}_${xy[1]}`]) {
    retValue = true;
  }
  if (nbCount === 3 && !cells[`${xy[0]}_${xy[1]}`]) {
    retValue = true;
  }
  return retValue;
};

const runGeneration = (state, action) => {
  let cells = {};
  Object.keys(state.cells).map(item => {
    const cellsToProcess = [];
    const xy = item.split("_").map(num => parseInt(num));
    cellsToProcess.push(`${xy[0] - 1}_${xy[1] - 1}`);
    cellsToProcess.push(`${xy[0] - 1}_${xy[1]}`);
    cellsToProcess.push(`${xy[0] - 1}_${xy[1] + 1}`);
    cellsToProcess.push(`${xy[0]}_${xy[1] - 1}`);
    cellsToProcess.push(`${xy[0]}_${xy[1]}`);
    cellsToProcess.push(`${xy[0]}_${xy[1] + 1}`);
    cellsToProcess.push(`${xy[0] + 1}_${xy[1] - 1}`);
    cellsToProcess.push(`${xy[0] + 1}_${xy[1]}`);
    cellsToProcess.push(`${xy[0] + 1}_${xy[1] + 1}`);

    cellsToProcess.map(item => {
      if (calculateCell(item, state.cells)) {
        cells[item] = true;
      }
      return false;
    });
  });

  const generationHistory = state.generationHistory.slice(state.generationHistory.length - 500);
  generationHistory.push(new Date().getTime());
  const velocity = calculateVelocity(generationHistory);

  return {
    ...state,
    generationNo: ++state.generationNo,
    alivedCells: Object.keys(cells).length,
    cells,
    generationHistory,
    velocity
  };
};

const changeCell = (state, action) => {
  let cells = state.cells.map(item => [...item]);
  const { row, col } = action.payload;
  cells[row][col] = !cells[row][col];

  return {
    ...state,
    alivedCells: cells[row][col] ? state.alivedCells + 1 : state.alivedCells,
    cells
  };
};

const clearCells = (state, action) => {
  const cells = {};
  return {
    ...state,
    generationNo: 0,
    alivedCells: 0,
    cells
  };
};

const fillFormation = (state, action) => {
  const pattern = formations.patterns[action.payload.formation];
  const startCoord = pattern.substr(0, pattern.indexOf(";")).split("x");
  let translateX = Math.ceil(startCoord[0] / 2);
  let translateY = Math.ceil(startCoord[1] / 2);
  const lines = pattern
    .substr(pattern.indexOf(";") + 1)
    .replace("!", "")
    .split("$")
    .map(line => {
      if (line) {
        line = line.trim();
        let emptyLines = line.match(/(\d{1,})$/gm);
        if (emptyLines) {
          line += "$".repeat(emptyLines - 1);
        }
      }
      return line;
    })
    .join("$")
    .split("$");
 
  const processedLines = lines.map((line, index) => {
 
    let number = "";

    const items = line
      .split("")
      .map(item => {
        if (item === "o" || item === "b") {
          if (number === "") {
            number = "";
            return item;
          } else {
            const ret = item.repeat(number);
            number = "";
            return ret;
          }
        } else {
          number += item;
        }
        return "";
      })
      .join("");
    return items;
  });

  const cells = {};
  for (let i = 0; i < startCoord[0]; i++) {
    for (let j = 0; j < startCoord[1]; j++) {

      if (
        processedLines &&
        processedLines[j] &&
        processedLines[j][i] &&
        processedLines[j][i] === "o"
      ) {
        cells[`${i - translateX}_${j - translateY}`] = true;
      }
    }
  }
  return {
    ...state,
    cells
  };
};

const startExistence = (state, action) => {
  return {
    ...state,
    shouldRun: !state.shouldRun
  };
};
const stopExistence = (state, action) => {
  return {
    ...state,
    shouldRun: false
  };
};
const changeSpeed = (state, action) => {
  let { speed } = action.payload;
  speed = 101 - speed;
  let populationSpeed = speed * 10;
  return {
    ...state,
    populationSpeed
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RUN_GENERATION:
      return runGeneration(state, action);
    case actionTypes.CHANGE_CELL:
      return changeCell(state, action);
    case actionTypes.CLEAR_CELLS:
      return clearCells(state, action);
    case actionTypes.START_EXISTENCE:
      return startExistence(state, action);
    case actionTypes.STOP_EXISTENCE:
      return stopExistence(state, action);
    case actionTypes.FILL_FORMATION:
      return fillFormation(state, action);
    case actionTypes.CHANGE_SPEED:
      return changeSpeed(state, action);
    default:
      return state;
  }
};
export default reducer;
