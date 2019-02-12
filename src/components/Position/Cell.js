import React from "react";
import mCell from "./Cell.module.scss";

const Cell = props => {
  const cellClass = [mCell.cell, props.alive !== false ? mCell.alive : null];
  const cellSize = 11;
  const style = {
    transform: `translate3d(${cellSize * (props.cellInd - 1)}px,${cellSize *
      (props.rowInd - 1)}px, 0)`
  };

  return <span className={cellClass.join(" ")} style={style} />;
};
export default Cell;
