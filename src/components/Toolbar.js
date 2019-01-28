import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";

class Toolbar extends Component {

    state = {
        interval: 0
    }

    executeNextGeneration = () => {
        this.props.nextGeneration();
    }
    executeClear = () => {
        this.props.clearCells();
    }
    executeFillrandomly = () => {
        this.props.fillRandomly();
    }
    interval = 0;
    executeRun = () => {

        if (!this.state.interval) {

            this.interval = setInterval(() => {
                this.props.nextGeneration();
            }, 100);
            this.setState({ interval: this.interval })
        }
        else {
            clearInterval(this.interval);
            this.setState({ interval: 0});
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.executeNextGeneration}>Next generation</button>
                {this.state.interval ? <button onClick={this.executeRun}>Stop </button> : <button onClick={this.executeRun}>Run </button>}
                <button onClick={this.executeClear}>Clear</button>
                <button onClick={this.executeFillrandomly}>Random</button>
                <span>Generation: {this.props.generationNo}</span> 
                <span>Alived cells: {this.props.alivedCells}</span>
                <span>Cells amount: {this.props.cellsAmount}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    generationNo: state.generationNo,
    alivedCells: state.alivedCells,
    cellsAmount: state.cellsAmount,
    
})
const mapDispatchToProps = dispatch => ({
    nextGeneration: () => dispatch(actions.nextGeneration()),
    clearCells: () => dispatch({ type: actionTypes.CLEAR_CELLS }),
    fillRandomly: () => dispatch({ type: actionTypes.FILL_RANDOMLY })
})
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);