import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
  header: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "flex",
    justifyContent: "flex-start"
  },
  button: {
    marginRight: theme.spacing.unit * 2
  }
});

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

  executeRun = () => {
    this.props.startExistence();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <Button className={classes.button} variant="contained" size="small" onClick={this.executeNextGeneration}>Next generation</Button>
        {this.state.interval ? (
          <Button className={classes.button} variant="contained" size="small" onClick={this.executeRun}>Stop</Button>
        ) : (
            <Button className={classes.button} variant="contained" size="small" onClick={this.executeRun}>{this.props.shouldRun ? "Stop" : "Run"} </Button>
          )}
        <Button className={classes.button} variant="contained" size="small" onClick={this.executeClear}>Clear</Button>
        <Button className={classes.button} variant="contained" size="small" onClick={this.executeFillrandomly}>Random</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
)(withStyles(styles)(Toolbar));
