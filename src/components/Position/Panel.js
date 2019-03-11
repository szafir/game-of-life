import React, { Component } from "react";
import Cell from "./Cell";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    margin: "0px auto",
    background: "rgba(0, 0, 0, 0.14)",
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap",
    position: "relative",
    cursor: "grab"
  },
  isDragging: {
    cursor: "grabbing"
  }
});

class Panel extends Component {
  constructor(refs) {
    super(refs);
    this.pageRef = React.createRef();
    this.state = {
      containerWidth: 0,
      containerHeight: 0
    };
  }
  componentDidMount() {
    this.setState({
      containerWidth: this.pageRef.current.offsetWidth,
      containerHeight: this.pageRef.current.offsetHeight
    });
  }

  handleOnMouseDownCapture = event => {
    this.props.dragStart({
      pageX: event.pageX,
      pageY: event.pageY
    });
  };
  handleOnMouseUpCapture = event => {
    this.props.dragStop({
      pageX: event.pageX,
      pageY: event.pageY
    });
  };
  handleOnMouseMoveCapture = event => {
    if (this.props.isDragging) {
      this.props.dragging({
        pageX: event.pageX,
        pageY: event.pageY
      });
    }
  };

  render() {
    const { classes, cells, viewportX, viewportY } = this.props;
    const paperClasses = [classes.paper];
    if (this.props.isDragging) {
      paperClasses.push(classes.isDragging);
    }
    return (
      <div
        elevation={2}
        className={paperClasses.join(" ")}
        square="true"
        ref={this.pageRef}
        onMouseDownCapture={this.handleOnMouseDownCapture}
        onMouseUpCapture={this.handleOnMouseUpCapture}
        onMouseMoveCapture={this.handleOnMouseMoveCapture}
        id="plane"
      >
        {Object.keys(cells).map(item => {
          return (
            <Cell
              item={item}
              containerWidth={this.state.containerWidth}
              containerHeight={this.state.containerHeight}
              cellSize={this.props.cellSize}
              viewportX={viewportX}
              viewportY={viewportY}
              key={`cell-${item}`}
            />
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Panel);
