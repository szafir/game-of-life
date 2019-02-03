import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../actions/actionTypes";

class Panel extends Component {

    render() {
        const style = {
            width: this.props.fieldWidth,
            height: this.props.fieldHeight
        }
        return (
            <div style={style}>
                panel canvas
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cells: state.cells,
    fieldWidth: state.fieldWidth,
    fieldHeight: state.fieldHeight
})
const mapDispatchToProps = dispatch => ({
    changeCell: (row, col) => (dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } }))
})
export default connect(mapStateToProps, mapDispatchToProps)(Panel);