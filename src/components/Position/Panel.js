import React, { Component } from "react";
import mPanel from "./Panel.module.scss";
import Row from "./Row";

import * as actionTypes from "../../actions/actionTypes";
import { connect } from "react-redux";

class Panel extends Component {

    render() {
        const { cells } = this.props;
        const style = {
            width: this.props.fieldWidth,
            height: this.props.fieldHeight
        }
        return (
            <div className={mPanel.Panel} style={style}>
                {
                    cells.map((row, index) => {
                        return index > 0 && index < cells.length - 1 ? <Row items={row} rowInd={index} onCellClick={this.onCellClick} key={`row-${index}`} /> : null
                    })
                }
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