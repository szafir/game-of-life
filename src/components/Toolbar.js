import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";
import { Button, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import formations from "../formations";
import FormationDialog from "./FormationDialog";

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
        value: 
        6
      }
    });
  }
  executeNextGeneration = () => {
    this.props.nextGeneration({ cells: this.props.cells });
  };
  executeClear = () => {
    this.props.clearCells();
  };
  executeRun = () => {
    this.props.startExistence();
  };
  executeFormationChange = event => {
    const { value } = event.target;
    this.setState({
      formation: value
    });
    if (value === "") {
      this.props.clearCells();
    } else if (value === "-1") {
      this.props.importPopup(true);
    } else {
      this.props.fillFormation({
        formation: parseInt(value)
      });
    }
  };

  handleImportClose = () => {
    this.props.importPopup(false);
    this.props.clearImportError();
  };
  handleImport = pattern => {
    this.props.clearImportError();
    this.props.fillFormation({ pattern });
    this.props.importPopup(false);
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
              <MenuItem value="-1">Import pattern</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormationDialog
          open={this.props.showImportPopup || this.props.importError}
          hasError={this.props.importError}
          handleClose={this.handleImportClose}
          handleImport={this.handleImport}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shouldRun: state.cell.shouldRun,
  cells: state.cell.cells,
  importError: state.cell.importError,
  showImportPopup: state.cell.showImportPopup
});
const mapDispatchToProps = dispatch => ({
  nextGeneration: payload => dispatch(actions.nextGeneration(payload)),
  clearCells: () => dispatch({ type: actionTypes.CLEAR_CELLS }),
  startExistence: () => dispatch({ type: actionTypes.START_EXISTENCE }),
  stopExistence: () => dispatch({ type: actionTypes.STOP_EXISTENCE }),
  fillFormation: payload => dispatch(actions.fillFormation(payload)),
  clearImportError: () =>
    dispatch({ type: actionTypes.IMPORT_ERROR, payload: { importError: false } }),
  importPopup: showImportPopup =>
    dispatch({ type: actionTypes.IMPORT_POPUP, payload: { showImportPopup } })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Toolbar));
