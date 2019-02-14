import React from "react";
import Cell from "./Cell";

import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "#eee",
    backgroundImage: "url(images/cell_11x11.png)"
  },
});

const Panel = props => {
  const { cells, classes } = props;
  const style = {
    width: props.fieldWidth,
    height: props.fieldHeight
  };
  return (
    <Paper elevation={2} className={classes.paper} square={true} style={style}>
      {
        cells.map((row, index) => {
          return index > 0 && index < cells.length - 1 ? (
            row.map((item, cellInd) =>
              cellInd > 0 && cellInd < row.length - 1 && item ? (
                <Cell
                  cellInd={cellInd}
                  rowInd={index}
                  alive={item}
                  key={`cell-positioned-${index}-${cellInd}`}
                />
              ) : null
            )
          ) : null;
        })
      }
    </Paper>
  );
}
export default withStyles(styles)(Panel);
