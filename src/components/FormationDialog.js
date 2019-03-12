import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    "& textarea": {
      fontSize: 14,
      width: 600
    }
  }
});

class FormationDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pattern: ""
    };
  }
  
  handleImport = () => {
    this.props.handleImport(this.state.pattern);
  };
  handleClose = () => {
    this.props.handleClose();
    this.setState({
      pattern: ""
    });
  };

  handlePatternChange = event => {
    this.setState({
      pattern: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">Import from RLE file</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can find over 1000 patterns on{" "}
            <a
              href="http://www.conwaylife.com/wiki/Category:Patterns"
              target="_blank"
              rel="noopener noreferrer"
            >
              this
            </a>{" "}
            wiki.
          </DialogContentText>
          <TextField
            error={this.props.hasError}
            className={classes.textField}
            autoFocus
            margin="dense"
            id="Pattern"
            label={this.props.hasError ? "Invalid pattern" : "Pattern"}
            value={this.state.pattern}
            helperText="Paste content of RLE file"
            type="text"
            fullWidth
            multiline
            rows="10"
            onChange={this.handlePatternChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleImport} color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(FormationDialog);
