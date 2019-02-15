import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";
import { Button, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
  toolbar: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    display: "flex",
    justifyContent: "flex-start"
  },
  button: {
    marginRight: theme.spacing.unit * 2
  },
  formationContainer: {
    position: "relative"
  },
  formationSelector: {
    position: "absolute",
    top: theme.spacing.unit * -2,
    minWidth: theme.spacing.unit * 12
  }
});

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }
  state = {
    interval: 0,
    formation: ''
  };

  componentDidMount() {
    this.executeFormationChange({
      target: {
        value: 1
      }
    });
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
  executeFormationChange = (event) => {
    this.setState({
      formation: event.target.value
    });
    console.log('formation change')

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.toolbar}>
        <Button className={classes.button} variant="contained" size="small" onClick={this.executeNextGeneration}>Next generation</Button>
        {this.state.interval ? (
          <Button className={classes.button} variant="contained" size="small" onClick={this.executeRun}>Stop</Button>
        ) : (
            <Button className={classes.button} variant="contained" size="small" onClick={this.executeRun}>{this.props.shouldRun ? "Stop" : "Run"} </Button>
          )}
        <Button className={classes.button} variant="contained" size="small" onClick={this.executeClear}>Clear</Button>
        <Button className={classes.button} variant="contained" size="small" onClick={this.executeFillrandomly}>Random</Button>
        <div className={classes.formationContainer}>
          <FormControl className={classes.formationSelector}>
            <InputLabel htmlFor="formation">Formation</InputLabel>
            <Select
              value={this.state.formation}
              onChange={this.executeFormationChange}
              ref={this.ref}
              inputProps={{
                name: 'formation',
                id: 'formation',
              }}
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={1}>Glider</MenuItem>
              <MenuItem value={2}>Small Exploder</MenuItem>
              <MenuItem value={3}>Lightweight spaceship (LWSS)</MenuItem>
              <MenuItem value={4}>Random</MenuItem>
            </Select>
          </FormControl>
        </div>

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
