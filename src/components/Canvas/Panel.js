import React from "react";
import Cell from "./Cell";

import { Stage, Layer } from "react-konva";
import { Paper, withStyles } from "@material-ui/core";

const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "#eee",
    backgroundImage: "url(/images/cell_11x11.png)"
  },
});

const Panel = props => {
  const { cells, classes } = props;
  const style = {
    width: props.fieldWidth,
    height: props.fieldHeight
  };
  return (
    <Paper elevation={2} className={classes.paper} square="true" style={style} >
      <Stage width={props.fieldWidth} height={props.fieldHeight}>
        <Layer>
          {cells.map((row, index) => {
            return index > 0 && index < cells.length - 1 ? (
              row.map((cell, cellInd) => {
                return <Cell rowInd={index} cellInd={cellInd} cellSize={props.cellSize} alive={cell} key={`cell-canvas-${index}-${cellInd}`} />
              })) : null;
          })}
        </Layer>
      </Stage>
    </Paper>
  )
}

export default withStyles(styles)(Panel);

