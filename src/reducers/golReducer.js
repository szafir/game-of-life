import * as actionTypes from "../actions/actionTypes";
import formations from "../formations";

const initState = () => {
  const amountX = 80;
  const amountY = 50;
  const cellSize = 11;
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
    populationSpeed: 1000 // in ms
  };

  for (let i = 0; i <= amountY; i++) {
    initialState.cells[i] = [];
    for (let j = 0; j <= amountX; j++) {
      initialState.cells[i][j] = false;
    }
  }
  initialState.cellsAmount =
    (initialState.cells.length - 2) * (initialState.cells[1].length - 2);
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
  let alivedCells = 0;
  let cells = state.cells.map(item => [...item]);
  for (let i = 1; i < state.cells.length - 1; i++) {
    for (let j = 1; j < state.cells[i].length - 1; j++) {
      const nb = [
        state.cells[i - 1][j - 1],
        state.cells[i - 1][j],
        state.cells[i - 1][j + 1],
        state.cells[i][j - 1],
        state.cells[i][j + 1],
        state.cells[i + 1][j - 1],
        state.cells[i + 1][j],
        state.cells[i + 1][j + 1]
      ];

      const nbCount = nb.reduce((prev, item) => prev + (item ? 1 : 0), 0);

      cells[i][j] =
        (state.cells[i][j] && [2, 3].includes(nbCount)) ||
        (!state.cells[i][j] && nbCount === 3);
      alivedCells = cells[i][j] ? alivedCells + 1 : alivedCells;
    }
  }
  const generationHistory = state.generationHistory.slice(
    state.generationHistory.length - 500
  );
  generationHistory.push(new Date().getTime());
  const velocity = calculateVelocity(generationHistory);
  return {
    ...state,
    generationNo: ++state.generationNo,
    alivedCells,
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
  const cells = initialState.cells.map(item => [...item]);
  return {
    ...state,
    generationNo: 0,
    alivedCells: 0,
    cells
  };
};

const fillRandomly = (state, action) => {
  const cells = initialState.cells.map(item => [...item]);
  let alivedCells = 0;
  for (let i = 1; i < state.cells.length - 1; i++) {
    for (let j = 1; j < state.cells[i].length; j++) {
      cells[i][j] = Math.random() > 0.9;
      alivedCells = cells[i][j] ? alivedCells + 1 : alivedCells;
    }
  }
  return {
    ...state,
    generationNo: 0,
    alivedCells,
    cells
  };
};

const fillFormation = (state, action) => {
  const cells = initialState.cells.map(item => [...item]);
  const formation = formations.matrixes[action.payload.formation];
  let startX = Math.ceil(cells.length / 2) - Math.ceil(formation.length / 2);
  let startY =
    Math.ceil(cells[0].length / 2) - Math.ceil(formation[0].length / 2);
  for (let i = startX; i < startX + formation.length; i++) {
    for (let j = startY; j < startY + formation[0].length; j++) {
      cells[i][j] = formation[i - startX][j - startY];
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
    case actionTypes.FILL_RANDOMLY:
      return fillRandomly(state, action);
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
