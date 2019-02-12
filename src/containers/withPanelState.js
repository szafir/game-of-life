import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../actions";

import * as actionTypes from "../actions/actionTypes";

const withPanelState = WrappedComponent => {
    return class PanelHOC extends Component {
        componentDidMount() {
            console.log('did mount')
        }
        componentDidUpdate() {
            if (this.props.shouldRun) {
                setTimeout(() => {
                    this.props.nextGeneration();
                }, 1)
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}

const mapStateToProps = state => ({
    cells: state.cells,
    fieldWidth: state.fieldWidth,
    fieldHeight: state.fieldHeight,
    cellSize: state.cellSize,
    shouldRun: state.shouldRun
});
const mapDispatchToProps = dispatch => ({
    nextGeneration: () => dispatch(actions.nextGeneration()),
    changeCell: (row, col) =>
        dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } })

});

const composedWithPanelState = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withPanelState
);
export default composedWithPanelState;