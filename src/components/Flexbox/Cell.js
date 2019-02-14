import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cell: {
    background: "#aaa",
    display: "block",
    width: 9,
    height: 9,
    border: "1px solid rgb(220, 220, 220)",
  },
  alive: {
    background: "#fff"
  }
});

const Cell = props => {
  const { classes } = props;
  const cellClass = [
    classes.cell,
    props.alive !== false ? classes.alive : null
  ];

  return <span className={cellClass.join(" ")} />;
}
export default withStyles(styles)(Cell);