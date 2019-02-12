import React, { Component } from "react";
import Row from "./Row";
import { connect } from "react-redux";
import mPanel from "./Panel.module.scss";
import * as actions from "../../actions";

import * as actionTypes from "../../actions/actionTypes";

class Panel extends Component {
  onCellClick = (row, col) => {
    this.props.changeCell(row, col);
  };

  componentDidUpdate() {
    if (this.props.shouldRun) {
      setTimeout(() => {
        this.props.nextGeneration();
      }, 1)
    }
  }

  render() {
    const { cells } = this.props;
    const style = {
      width: this.props.fieldWidth,
      height: this.props.fieldHeight
    };
    return (
      <div className={mPanel.panel} style={style}>
        {cells.map((row, index) => {
          return index > 0 && index < cells.length - 1 ? (
            <Row
              items={row}
              rowInd={index}
              onCellClick={this.onCellClick}
              key={`row-${index}`}
            />
          ) : null;
        })}
      </div>
    );
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
