import React from "react";
import mRow from "./Row.module.scss";
import Cell from "./Cell";

const Row = props => (
  <div className={mRow.row}>
    {props.items.map((item, index) =>
      index > 0 && index < props.items.length - 1 ? (
        <Cell
          {...props}
          cellInd={index}
          alive={item}
          key={`cell-${props.rowInd}-${index}`}
        />
      ) : null
    )}
  </div>
);

export default Row;
