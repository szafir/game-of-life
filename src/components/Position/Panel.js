import React from "react";
import Cell from "./Cell";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "#eee",
    backgroundImage: "url(/images/cell_11x11.png)",
    display: "flex",
    flexGrow: 1
  },
});

const Panel = props => {
  const { cells, classes } = props;

  return (
    <div elevation={2} className={classes.paper} square="true">
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
    </div>
  );
}
export default withStyles(styles)(Panel);
