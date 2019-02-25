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
    transformOrigin: "right bottom"
  },
  alive: {
    background: "#fff"
  }
});

const Cell = props => {
  const { classes, item, positionX, positionY, translateX, translateY, ratioX, ratioY} = props;
  const cellClass = [classes.cell, props.alive !== false ? classes.alive : null];
  const cellSize = 7;
  const indexes = item.split('_');
  console.log(indexes)
  const style = {
    transform: `translate3d( ${cellSize * (indexes[0]) * ratioX + translateX}px,${cellSize * (indexes[1]) * ratioY + translateY}px, 0)`,
    [positionX]: 0,
    [positionY]: 0,
  };

  return <span className={cellClass.join(' ')} style={style} />;
};
export default withStyles(styles)(Cell);
