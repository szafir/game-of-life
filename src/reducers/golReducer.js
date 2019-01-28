import * as actionTypes from "../actions/actionTypes";


const initialState = {
    cells: [],
    generationNo: 0,
    alivedCells: 0,
    cellsAmount: 0,
};

for (let i = 0; i <= 70; i++) {
    initialState.cells[i] = [];
    for (let j = 0; j <= 100; j++) {
        initialState.cells[i][j] = false;
    }
}
initialState.cellsAmount = (initialState.cells.length-2) * (initialState.cells[1].length-2);

const reducer = (state = initialState, action) => {
    let cells = [];
    let alivedCells = 0;
    switch (action.type) {
        case actionTypes.RUN_GENERATION:
            cells = state.cells.map((item) => [...item]);
            for (let i = 1; i < state.cells.length - 1; i++) {
                for (let j = 1; j < state.cells[i].length - 1; j++) {

                    let nb = [
                        state.cells[i - 1][j - 1],
                        state.cells[i - 1][j],
                        state.cells[i - 1][j + 1],
                        state.cells[i][j - 1],
                        state.cells[i][j + 1],
                        state.cells[i + 1][j - 1],
                        state.cells[i + 1][j],
                        state.cells[i + 1][j + 1]
                    ];

                    const nbCount = nb.reduce((prev, item) => {
                        return prev + (item ? 1 : 0);
                    }, 0);

                    cells[i][j] = state.cells[i][j] && [2, 3].includes(nbCount) || !state.cells[i][j] && nbCount === 3;
                    alivedCells = cells[i][j] ? alivedCells + 1 : alivedCells;
                }
            }
            return {
                ...state,
                generationNo: ++state.generationNo,
                alivedCells,
                cells
            }
        case actionTypes.CHANGE_CELL:
            cells = state.cells.map((item) => [...item]);
            const { row, col } = action.payload;
            cells[row][col] = !cells[row][col];
            return {
                ...state,
                alivedCells: cells[row][col] ? state.alivedCells + 1 : state.alivedCells,
                cells
            }
        case actionTypes.CLEAR_CELLS:
            // console.log('clear')
            cells = initialState.cells.map((item) => [...item]);
            return {
                ...state,
                generationNo: 0,
                alivedCells: 0,
                cells
            }
        case actionTypes.FILL_RANDOMLY:
            // console.log('random')

            cells = initialState.cells.map((item) => [...item]);
            for (let i = 1; i < state.cells.length - 1; i++) {
                for (let j = 1; j < state.cells[i].length; j++) {
                    cells[i][j] = (Math.random() > 0.9);
                    alivedCells = cells[i][j] ? alivedCells + 1 : alivedCells;
                }
            }
            return {
                ...state,
                generationNo: 0,
                alivedCells,
                cells
            }
        default:
            return state;
    }
};

export default reducer;