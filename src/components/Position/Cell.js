import React, { PureComponent } from "react";

import mCell from "./Cell.module.scss";

class Cell extends PureComponent {
  render() {
    const cellClass = [
      mCell.cell,
      this.props.alive !== false ? mCell.alive : null
    ];
    const cellSize = 11;
    const style = {
      transform: `translate3d(${cellSize *
        (this.props.cellInd - 1)}px,${cellSize * (this.props.rowInd - 1)}px, 0)`
    };
    return <span className={cellClass.join(" ")} style={style} />;
  }
}
export default Cell;
