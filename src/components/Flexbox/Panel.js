import React, { Component } from "react";
import Row from "./Row";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import mPanel from "./Panel.module.scss";

const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "#eee",
    backgroundImage: "url(/images/cell_11x11.png)"
  },
});

class Panel extends Component {

  render() {
    const { cells, classes } = this.props;
    const style = {
      width: this.props.fieldWidth,
      height: this.props.fieldHeight
    };
    return (
      <Paper elevation={2} className={classes.paper} square={true} style={style} >
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
      </Paper>
    );
  }
}
export default withStyles(styles)(Panel);