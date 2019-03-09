import * as actionTypes from "../actions/actionTypes";

const initState = () => {
  const initialState = {
    isDragging: false,
    startX: 0,
    startY: 0,
    viewportX: 0,
    viewportY: 0,
    oldViewportX: 0,
    oldViewportY: 0
  };
  return initialState;
};

const initialState = initState();

const startDrag = (state, action) => {
  const { pageX, pageY } = action.payload;
  return {
    ...state,
    isDragging: true,
    oldViewportX: state.viewportX,
    oldViewportY: state.viewportY,
    startX: pageX,
    startY: pageY
  };
};
const stopDrag = (state, action) => {
  return {
    ...state,
    isDragging: false,
    oldViewportX: 0,
    oldViewportY: 0,
    startX: 0,
    startY: 0
  };
};
const dragging = (state, action) => {
  const { pageX, pageY } = action.payload;
  const dX = pageX - state.startX;
  const dY = pageY - state.startY;
  return {
    ...state,
    viewportX: state.oldViewportX + dX,
    viewportY: state.oldViewportY + dY
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VIEWPORT_START_DRAG:
      return startDrag(state, action);
    case actionTypes.VIEWPORT_STOP_DRAG:
      return stopDrag(state, action);
    case actionTypes.VIEWPORT_DRAGGING:
      return dragging(state, action);
    default:
      return state;
  }
};
export default reducer;
