import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../actions/actionTypes";
import { Stage, Layer } from "react-konva";
import mPanel from "./Panel.module.scss";
import * as actions from "../../actions";
import { Paper, withStyles } from "@material-ui/core";

// import Konva from "konva";
import Cell from "./Cell";


const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "#eee",
    backgroundImage: "url(/images/cell_11x11.png)"
  },
});


class Panel extends Component {

  render() {
    const style = {
      width: this.props.fieldWidth,
      height: this.props.fieldHeight,
    };
    const { cells, classes } = this.props;
    return <Paper elevation={2} className={classes.paper} square={true} style={style} >
      <Stage width={this.props.fieldWidth} height={this.props.fieldHeight}>
        <Layer>
          {cells.map((row, index) => {
            return index > 0 && index < cells.length - 1 ? (
              row.map((cell, cellInd) => {
                return <Cell rowInd={index} cellInd={cellInd} cellSize={this.props.cellSize} alive={cell} key={`cell-${index}-${cellInd}`} />
              })) : null;
          })}
        </Layer>
      </Stage>
    </Paper>
  }
}

export default withStyles(styles)(Panel);

