import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../actions/actionTypes";
import { Stage, Layer } from "react-konva";
import mPanel from "./Panel.module.scss";
// import Konva from "konva";
import Cell from "./Cell";

class Panel extends Component {

  render() {
    const style = {
      width: this.props.fieldWidth,
      height: this.props.fieldHeight
    };
    const { cells } = this.props;
    return <div className={mPanel.Panel} style={style}>
      <Stage width={this.props.fieldWidth} height={this.props.fieldHeight} className={"dudpa"}>
        <Layer>
          {cells.map((row, index) => {
            return index > 0 && index < cells.length - 1 ? (
              row.map((cell, cellInd) => {
                return <Cell rowInd={index} cellInd={cellInd} cellSize={this.props.cellSize} alive={cell} />
              })) : null;
          })}

        </Layer>
      </Stage>;
    </div>
  }
}
const mapStateToProps = state => ({
  cells: state.cells,
  fieldWidth: state.fieldWidth,
  fieldHeight: state.fieldHeight,
  cellSize: state.cellSize
});
const mapDispatchToProps = dispatch => ({
  changeCell: (row, col) =>
    dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
