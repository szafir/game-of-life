import React from "react";
import Cell from "./Cell";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "#eee",
    // backgroundImage: "url(/images/cell_11x11.png)",
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap"

  },
  quater1: {
    background: "red",
    backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "left bottom",
    width: "50%",
  },
  quater2: {
    background: "blue",
    backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "right bottom",
    width: "50%"
  },
  quater3: {
    background: "green",
    backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "right top",
    width: "50%"
  },
  quater4: {
    background: "orange",
    backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "left top",
    width: "50%"
  }
});

const Panel = props => {
  const { cells, classes } = props;

  return (
    <div elevation={2} className={classes.paper} square="true">
      <div className={classes.quater2}></div>
      <div className={classes.quater1}></div>
      <div className={classes.quater3}></div>
      <div className={classes.quater4}></div>
      {/* {
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
      } */}
    </div>
  );
}
export default withStyles(styles)(Panel);
