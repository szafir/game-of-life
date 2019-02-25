import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cell: {
    background: "#aaa",
    display: "block",
    width: 6,
    height: 6,
    // border: "1px solid rgb(220, 220, 220)",
    position: "absolute",
    top: 0,
    left: 0,
    transformOrigin: "right bottom",
    background: "#fff"
  }
});

const Cell = props => {
  const { classes, item, containerWidth, containerHeight, cellSize } = props;

  const indexes = item.split("_");
  const style = {
    transform: `translate3d( ${(cellSize + 1) * indexes[0] +
      containerWidth / 2}px,${(cellSize + 1) * indexes[1] +
      containerHeight / 2}px, 0)`
  };

  return <span className={classes.cell} style={style} />;
};
export default withStyles(styles)(Cell);
