import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";

class Toolbar extends Component {
  state = {
    interval: 0
  };

  componentDidMount() {
    this.props.fillRandomly();
  }
  executeNextGeneration = () => {
    this.props.nextGeneration();
  };
  executeClear = () => {
    this.props.clearCells();
  };
  executeFillrandomly = () => {
    this.props.fillRandomly();
  };
  interval = 0;
  executeRun = () => {
    this.props.startExistence();

  };

  render() {
    return (
      <div>
        <button onClick={this.executeNextGeneration}>Next generation</button>
        {this.state.interval ? (
          <button onClick={this.executeRun}>Stop </button>
        ) : (
            <button onClick={this.executeRun}>{this.props.shouldRun ? "Stop" : "Run"} </button>
          )}
        <button onClick={this.executeClear}>Clear</button>
        <button onClick={this.executeFillrandomly}>Random</button>
        <span>Generation: {this.props.generationNo}</span>
        <span>Alived cells: {this.props.alivedCells}</span>
        <span>Cells amount: {this.props.cellsAmount}</span>
        <span>Velocity: {this.props.velocity}/s</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  generationNo: state.generationNo,
  alivedCells: state.alivedCells,
  cellsAmount: state.cellsAmount,
  velocity: state.velocity,
  shouldRun: state.shouldRun
});
const mapDispatchToProps = dispatch => ({
  nextGeneration: () => dispatch(actions.nextGeneration()),
  clearCells: () => dispatch({ type: actionTypes.CLEAR_CELLS }),
  startExistence: () => dispatch({ type: actionTypes.START_EXISTENCE }),
  stopExistence: () => dispatch({ type: actionTypes.STOP_EXISTENCE }),
  fillRandomly: () => dispatch({ type: actionTypes.FILL_RANDOMLY })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
