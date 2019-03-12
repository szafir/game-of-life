import * as actionTypes from "../actions/actionTypes";

const initState = () => {
  const cellSize = 6;
  const initialState = {
    cells: [],
    generationNo: 0,
    alivedCells: 0,
    cellSize,
    velocity: 0,
    shouldRun: false,
    populationSpeed: 100, // in ms
    importError: false,
    showImportPopup: false
  };
  return initialState;
};

const initialState = initState();

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

const clearCells = state => {
  const cells = {};
  return {
    ...state,
    generationNo: 0,
    alivedCells: 0,
    cells
  };
};

const nextGeneration = (state, action) => {
  const {
    cells,
    generationNo = state.generationNo + 1,
    alivedCells = Object.keys(cells).length,
    velocity = state.velocity
  } = action.payload;
  return {
    ...state,
    cells,
    generationNo,
    alivedCells,
    velocity
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
const importError = (state, action) => {
  const { importError } = action.payload;
  return {
    ...state,
    importError
  };
};

const importPopup = (state, action) => {
  // console.log(action.payload);
  const { showImportPopup } = action.payload;
  return {
    ...state,
    showImportPopup
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CELL:
      return changeCell(state, action);
    case actionTypes.CLEAR_CELLS:
      return clearCells(state, action);
    case actionTypes.START_EXISTENCE:
      return startExistence(state, action);
    case actionTypes.STOP_EXISTENCE:
      return stopExistence(state, action);
    case actionTypes.CHANGE_SPEED:
      return changeSpeed(state, action);
    case actionTypes.NEXT_GENERATION:
      return nextGeneration(state, action);
    case actionTypes.IMPORT_ERROR:
      return importError(state, action);
    case actionTypes.IMPORT_POPUP:
      return importPopup(state, action);
    default:
      return state;
  }
};
export default reducer;
