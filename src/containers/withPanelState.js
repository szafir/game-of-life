import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../actions";

import * as actionTypes from "../actions/actionTypes";

const withPanelState = WrappedComponent => {
    // console.log(panelProps);
    return class PanelHOC extends Component {


        componentDidUpdate() {
            if (this.props.shouldRun) {
                setTimeout(() => {
                    this.props.nextGeneration();
                }, 1)
            }
        }

        render() {
            // console.log(this.props)
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
    shouldRun: state.shouldRun
});
const mapDispatchToProps = dispatch => ({
    nextGeneration: () => dispatch(actions.nextGeneration()),
    changeCell: (row, col) =>
        dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } })

});

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(PanelHOC);

const composedWithPanelState = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withPanelState
);
export default composedWithPanelState;
// export default withPanelState;