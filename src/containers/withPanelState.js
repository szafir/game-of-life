import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import * as actionTypes from "../actions/actionTypes";

const withPanelState = WrappedComponent => {
    class PanelHOC extends Component {
        componentDidUpdate(prevProps) {
            // console.log('componentDidUpdate')
            if (this.props.shouldRun && prevProps.populationSpeed === this.props.populationSpeed) {
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        this.props.nextGeneration();
                    }, prevProps.populationSpeed)
                })
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = state => ({
        cells: state.cells,
        fieldWidth: state.fieldWidth,
        fieldHeight: state.fieldHeight,
        cellSize: state.cellSize,
        shouldRun: state.shouldRun,
        populationSpeed: state.populationSpeed
    });
    const mapDispatchToProps = dispatch => ({
        nextGeneration: () => dispatch(actions.nextGeneration()),
        changeCell: (row, col) =>
            dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } })
    });

    return connect(mapStateToProps, mapDispatchToProps)(PanelHOC);
}

export default withPanelState;