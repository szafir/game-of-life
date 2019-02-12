import * as actionTypes from "../actions/actionTypes";

const amountX = 100;
const amountY = 60;
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
  shouldRun: false
};

for (let i = 0; i <= amountY; i++) {
  initialState.cells[i] = [];
  for (let j = 0; j <= amountX; j++) {
    initialState.cells[i][j] = false;
  }
}
initialState.cellsAmount =
  (initialState.cells.length - 2) * (initialState.cells[1].length - 2);

const reducer = (state = initialState, action) => {
  let cells = [];
  let alivedCells = 0;
  switch (action.type) {
    case actionTypes.RUN_GENERATION:
      cells = state.cells.map(item => [...item]);
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
      const generationHistory = state.generationHistory.slice(state.generationHistory.length - 500);
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
    case actionTypes.CHANGE_CELL:
      cells = state.cells.map(item => [...item]);
      const { row, col } = action.payload;
      cells[row][col] = !cells[row][col];
      return {
        ...state,
        alivedCells: cells[row][col]
          ? state.alivedCells + 1
          : state.alivedCells,
        cells
      };
    case actionTypes.CLEAR_CELLS:
      cells = initialState.cells.map(item => [...item]);
      return {
        ...state,
        generationNo: 0,
        alivedCells: 0,
        cells
      };
    case actionTypes.FILL_RANDOMLY:
      cells = initialState.cells.map(item => [...item]);
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
    case actionTypes.START_EXISTENCE:
      return {
        ...state,
        shouldRun: !state.shouldRun
      }
    default:
      return state;
  }
};

const calculateVelocity = (history) => {
  let currentDate = new Date();
  currentDate.setSeconds(currentDate.getSeconds() - 2);
  let velocity = history.reduce((prev, curr) => {
    return currentDate.getTime() < curr ? (prev + 1) : prev;
  }, 0)
  return velocity / 2;
}

export default reducer;
