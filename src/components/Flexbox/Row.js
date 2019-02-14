import React from "react";
import Cell from "./Cell";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  row: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  }
});

const Row = props => (
  <div className={props.classes.row}>
    {props.items.map((item, index) =>
      index > 0 && index < props.items.length - 1 ? (
        <Cell
          cellInd={index}
          alive={item}
          key={`cell-flexbox-${props.rowInd}-${index}`}
        />
      ) : null
    )}
  </div>
);

export default withStyles(styles)(Row);
