import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import * as actionTypes from "../actions/actionTypes";

const withPanelState = WrappedComponent => {
  class PanelHOC extends Component {
    componentDidUpdate(prevProps) {
      if (
        this.props.shouldRun &&
        !this.props.isDragging &&
        prevProps.populationSpeed === this.props.populationSpeed
      ) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            this.props.nextGeneration({ cells: this.props.cells });
          }, Math.ceil((100 - prevProps.populationSpeed) * 0.01 * 200));
        });
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    cells: state.cell.cells,
    viewportX: state.viewport.viewportX,
    viewportY: state.viewport.viewportY,
    isDragging: state.viewport.isDragging,
    fieldWidth: state.cell.fieldWidth,
    fieldHeight: state.cell.fieldHeight,
    cellSize: state.cell.cellSize,
    shouldRun: state.cell.shouldRun,
    populationSpeed: state.cell.populationSpeed
  });
  const mapDispatchToProps = dispatch => ({
    nextGeneration: payload => dispatch(actions.nextGeneration(payload)),
    changeCell: (row, col) => dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } }),
    dragStart: payload =>
      dispatch({
        type: actionTypes.VIEWPORT_START_DRAG,
        payload
      }),
    dragStop: payload =>
      dispatch({
        type: actionTypes.VIEWPORT_STOP_DRAG,
        payload
      }),
    dragging: payload =>
      dispatch({
        type: actionTypes.VIEWPORT_DRAGGING,
        payload
      })
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PanelHOC);
};

export default withPanelState;
