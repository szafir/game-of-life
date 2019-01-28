import React, { Component } from "react";
import Row from "./Row";
import { connect } from "react-redux";
import mPanel from "./Panel.module.scss";

import * as actionTypes from "../actions/actionTypes";

class Panel extends Component {

    onCellClick = (row, col) => {
        this.props.changeCell(row, col)
    }
    componentDidUpdate() {
    }

    render() {
        const { cells } = this.props;
        return (
            <div className={mPanel.panel}>
                {cells.map((row, index) => {
                    return index > 0 && index < cells.length - 1 ? <Row items={row} rowInd={index} onCellClick={this.onCellClick} key={`row-${index}`} /> : null
                }
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cells: state.cells
})
const mapDispatchToProps = dispatch => ({
    changeCell: (row, col) => (dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } }))
})
export default connect(mapStateToProps, mapDispatchToProps)(Panel);