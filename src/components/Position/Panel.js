import React from "react";
import Cell from "./Cell";

import { withStyles } from "@material-ui/core/styles";
import { relative } from "path";

const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "rgba(0, 0, 0, 0.14)",
    // backgroundImage: "url(/images/cell_11x11.png)",
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap"

  },
  quater1: {
    // background: "rgba(0, 0, 0, 0.14)",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "left bottom",
    width: "50%",
    position: "relative",
  },
  quater2: {
    // background: "blue",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "100% 0%",
    width: "50%",
    position: "relative",
  },
  quater3: {
    // background: "green",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "right top",
    width: "50%",
    position: "relative",
  },
  quater4: {
    // background: "orange",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "left top",
    width: "50%",
    position: "relative",
  }
});

const Panel = props => {
  const { q1Cells, q2Cells, q3Cells, q4Cells, classes } = props;


  console.log(q1Cells);
  console.log(Object.keys(q1Cells))

  return (
    <div elevation={2} className={classes.paper} square="true">
      <div className={classes.quater2}>
      {
          Object.keys(q2Cells).map((item) => {
            return <Cell 
              item={item}
              translateX={0}
              translateY={0}
              ratioY={-1}
              ratioX={-1}
              positionY={"bottom"}
              positionX={"right"}
              />
          })
        }
      </div>
      <div className={classes.quater1}>
        {
          Object.keys(q1Cells).map((item) => {
            return <Cell 
              item={item}
              translateX={1}
              translateY={0}
              ratioX={1}
              ratioY={-1}
              positionY={"bottom"}
              positionX={"left"}
              />
          })
        }
      </div>
      <div className={classes.quater3}>
      {
          Object.keys(q3Cells).map((item) => {
            return <Cell 
              item={item}
              translateX={0}
              translateY={1}
              ratioX={-1}
              ratioY={1}
              positionY={"top"}
              positionX={"right"}
              />
          })
        }
      </div>
      <div className={classes.quater4}>
      {
          Object.keys(q4Cells).map((item) => {
            return <Cell 
              item={item}
              translateX={1}
              translateY={1}
              ratioY={1}
              ratioX={1}
              positionY={"top"}
              positionX={"left"}
              />
          })
        }
      </div>
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
