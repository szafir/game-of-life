import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../actions/actionTypes";
import { Stage, Layer } from "react-konva";
import mPanel from "./Panel.module.scss";
import * as actions from "../../actions";
// import Konva from "konva";
import Cell from "./Cell";

class Panel extends Component {

  componentDidUpdate() {
    if (this.props.shouldRun) {
      setTimeout(() => {
        this.props.nextGeneration();
      }, 1)
    }
  }
  render() {
    const style = {
      width: this.props.fieldWidth,
      height: this.props.fieldHeight
    };
    const { cells } = this.props;
    return <div className={mPanel.Panel} style={style}>
      <Stage width={this.props.fieldWidth} height={this.props.fieldHeight}>
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
  cellSize: state.cellSize,
  shouldRun: state.shouldRun
});
const mapDispatchToProps = dispatch => ({
  nextGeneration: () => dispatch(actions.nextGeneration()),
  changeCell: (row, col) =>
    dispatch({ type: actionTypes.CHANGE_CELL, payload: { row, col } })
});

// export default Panel;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
