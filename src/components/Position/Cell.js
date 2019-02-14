import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cell: {
    background: "#aaa",
    display: "block",
    width: 9,
    height: 9,
    border: "1px solid rgb(220, 220, 220)",
    position: "absolute"
  },
  alive: {
    background: "#fff"
  }
});

const Cell = props => {
  const { classes } = props;
  const cellClass = [classes.cell, props.alive !== false ? classes.alive : null];
  const cellSize = 11;
  const style = {
    transform: `translate3d(${cellSize * (props.cellInd - 1)}px,${cellSize *
      (props.rowInd - 1)}px, 0)`
  };

  return <span className={cellClass.join(' ')} style={style} />;
};
export default withStyles(styles)(Cell);
