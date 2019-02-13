import React, { PureComponent } from "react";
import mPanel from "./Panel.module.scss";
import Row from "./Row";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


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
    // <div className={mPanel.Panel} style={style}>
    <Paper elevation={2} className={classes.paper} square={true} style={style} >
      {
        cells.map((row, index) => {
          return index > 0 && index < cells.length - 1 ? (
            <Row
              items={row}
              rowInd={index}
              key={`row-${index}`}
            />
          ) : null;
        })
      }
    </Paper >
  );


}
export default withStyles(styles)(Panel);
