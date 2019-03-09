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
  const { classes, item, containerWidth, containerHeight, cellSize, viewportX, viewportY } = props;

  const indexes = item.split("_");
  const x = viewportX + (cellSize + 1) * indexes[0] + containerWidth / 2;
  const y = viewportY + (cellSize + 1) * indexes[1] + containerHeight / 2;
  const style = {
    transform: `translate3d(${x}px,${y}px, 0)`
  };
  const showCell = !(x < 0 || x > containerWidth || y < 0 || y > containerHeight);
  return showCell ? <span className={classes.cell} style={style} /> : null;
};
export default withStyles(styles)(Cell);
