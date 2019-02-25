import * as actionTypes from "../actions/actionTypes";
import formations from "../formations";

const initState = () => {
  const amountX = 80;
  const amountY = 50;
  const cellSize = 6;
  const initialState = {
    cells: [],
    q1Cells: {},
    q2Cells: {},
    q3Cells: {},
    q4Cells: {},
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

const runGeneration = (state, action) => {
  const cellsToProcess = {};
  Object.keys(state.cells).map(item => {
    const xy = item.split("_").map(num => parseInt(num));
    cellsToProcess[`${xy[0] - 1}_${xy[1] - 1}`] =
      state.cells[`${xy[0] - 1}_${xy[1] - 1}`];
    cellsToProcess[`${xy[0] - 1}_${xy[1]}`] =
      state.cells[`${xy[0] - 1}_${xy[1]}`];
    cellsToProcess[`${xy[0] - 1}_${xy[1] + 1}`] =
      state.cells[`${xy[0] - 1}_${xy[1] + 1}`];

    cellsToProcess[`${xy[0]}_${xy[1] - 1}`] =
      state.cells[`${xy[0]}_${xy[1] - 1}`];
    cellsToProcess[`${xy[0]}_${xy[1]}`] = state.cells[`${xy[0]}_${xy[1]}`];
    cellsToProcess[`${xy[0]}_${xy[1] + 1}`] =
      state.cells[`${xy[0]}_${xy[1] + 1}`];

    cellsToProcess[`${xy[0] + 1}_${xy[1] - 1}`] =
      state.cells[`${xy[0] + 1}_${xy[1] - 1}`];
    cellsToProcess[`${xy[0] + 1}_${xy[1]}`] =
      state.cells[`${xy[0] + 1}_${xy[1]}`];
    cellsToProcess[`${xy[0] + 1}_${xy[1] + 1}`] =
      state.cells[`${xy[0] + 1}_${xy[1] + 1}`];
  });

  let cells = {};

  Object.keys(cellsToProcess).map(item => {
    const xy = item.split("_").map(num => parseInt(num));
    const nb = [
      state.cells[`${xy[0] - 1}_${xy[1] - 1}`],
      state.cells[`${xy[0] - 1}_${xy[1]}`],
      state.cells[`${xy[0] - 1}_${xy[1] + 1}`],
      state.cells[`${xy[0]}_${xy[1] - 1}`],
      state.cells[`${xy[0]}_${xy[1] + 1}`],
      state.cells[`${xy[0] + 1}_${xy[1] - 1}`],
      state.cells[`${xy[0] + 1}_${xy[1]}`],
      state.cells[`${xy[0] + 1}_${xy[1] + 1}`]
    ];
    const nbCount = nb.reduce((prev, item) => prev + (item ? 1 : 0), 0);
    if ([2, 3].includes(nbCount) && state.cells[`${xy[0]}_${xy[1]}`]) {
      cells[item] = true;
    }
    if (nbCount === 3 && !state.cells[`${xy[0]}_${xy[1]}`]) {
      cells[item] = true;
    }
    return false;
  });

  const generationHistory = state.generationHistory.slice(
    state.generationHistory.length - 500
  );
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

  const formation = formations.matrixes[action.payload.formation];
  let startX = Math.ceil(formation[0].length / 2);
  let startY = Math.ceil(formation.length / 2);
  const cells = {};
  for (let i = -1 * startX; i < formation[0].length - startX; i++) {
    for (let j = -1 * startY; j < formation.length - startY; j++) {
  
      if (formation[j + startY][i + startX]) {
        cells[`${i}_${j}`] = true;
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
