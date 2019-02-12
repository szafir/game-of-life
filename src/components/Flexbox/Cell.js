import React, { PureComponent } from "react";
import mCell from "./Cell.module.scss";

class Cell extends PureComponent {
  cellClick = () => {
    this.props.onCellClick(this.props.rowInd, this.props.cellInd);
  };


  render() {
    const cellClass = [
      mCell.cell,
      this.props.alive !== false ? mCell.alive : null
    ];

    return <span className={cellClass.join(" ")} onClick={this.cellClick} />;
  }
}
export default Cell;
