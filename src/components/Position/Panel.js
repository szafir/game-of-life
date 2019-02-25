import React, { Component } from "react";
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
    flexWrap: "wrap",
    position: "relative"

  },
  quater1: {
    // background: "rgba(0, 0, 0, 0.14)",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "left bottom",
    width: "50%",
    position: "relative"
  },
  quater2: {
    background: "blue",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "100% 0%",
    width: "50%",
    position: "relative"
  },
  quater3: {
    // background: "green",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "right top",
    width: "50%",
    position: "relative"
  },
  quater4: {
    // background: "orange",
    // backgroundImage: "url(/images/cell_7x7.png)",
    backgroundPosition: "left top",
    width: "50%",
    position: "relative"
  }
});

class Panel extends Component {
  constructor(refs) {
    super(refs);
    this.pageRef = React.createRef();
    this.state = {
      containerWidth: 0,
      containerHeight: 0
    }
  }
  componentDidMount() {
    this.setState({
      containerWidth: this.pageRef.current.offsetWidth,
      containerHeight: this.pageRef.current.offsetHeight
    });
  }

  render() {
    const { classes, cells } = this.props;

    return (
      <div
        elevation={2}
        className={classes.paper}
        square="true"
        ref={this.pageRef}
      >
        {Object.keys(cells).map(item => {
          return (
            <Cell
              item={item}
              containerWidth={this.state.containerWidth}
              containerHeight={this.state.containerHeight}
              cellSize={this.props.cellSize}
            />
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Panel);