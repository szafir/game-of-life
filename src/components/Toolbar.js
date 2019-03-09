import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import formations from "../formations";

const styles = theme => ({
  toolbar: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    display: "flex",
    justifyContent: "center",
    flexGrow: 1
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
    formation: ""
  };

  componentDidMount() {
    this.executeFormationChange({
      target: {
        value: 3
      }
    });
    // this.executeNextGeneration();
    // this.executeRun();
  }
  executeNextGeneration = () => {
    this.props.nextGeneration();
  };
  executeClear = () => {
    this.props.clearCells();
  };
  executeRun = () => {
    this.props.startExistence();
  };
  executeFormationChange = event => {
    this.setState({
      formation: event.target.value
    });
    if (event.target.value === "") {
      this.props.clearCells();
    } else {
      this.props.fillFormation({
        formation: event.target.value
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.toolbar}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="small"
          onClick={this.executeNextGeneration}
        >
          Next generation
        </Button>
        {this.state.interval ? (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
            onClick={this.executeRun}
          >
            Stop
          </Button>
        ) : (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
            onClick={this.executeRun}
          >
            {this.props.shouldRun ? "Stop" : "Run"}{" "}
          </Button>
        )}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="small"
          onClick={this.executeClear}
          id="clear-button"
        >
          Clear
        </Button>
        <div className={classes.formationContainer} id="formation-selector">
          <FormControl className={classes.formationSelector}>
            <InputLabel htmlFor="formation" className={classes.label}>
              Formation
            </InputLabel>
            <Select
              variant="standard"
              value={this.state.formation}
              onChange={this.executeFormationChange}
              ref={this.ref}
              inputProps={{
                name: "formation",
                id: "formation"
              }}
            >
              <MenuItem value="">None</MenuItem>
              {formations.labels.map((item, key) => (
                <MenuItem value={key} key={`formationmenu-${key}`}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shouldRun: state.cell.shouldRun
});
const mapDispatchToProps = dispatch => ({
  nextGeneration: () => dispatch(actions.nextGeneration()),
  clearCells: () => dispatch({ type: actionTypes.CLEAR_CELLS }),
  startExistence: () => dispatch({ type: actionTypes.START_EXISTENCE }),
  stopExistence: () => dispatch({ type: actionTypes.STOP_EXISTENCE }),
  fillFormation: payload =>
    dispatch({ type: actionTypes.FILL_FORMATION, payload })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Toolbar));
