import React, { PureComponent } from "react";

import Cell from "./Cell";

class Row extends PureComponent {
  render() {
    return (
      <>
        {/* Row */}
        {this.props.items.map((item, index) =>
          index > 0 && index < this.props.items.length - 1 && item ? (
            <Cell
              {...this.props}
              cellInd={index}
              alive={item}
              key={`cell-${this.props.rowInd}-${index}`}
            />
          ) : null
        )}
      </>
    );
  }
}
export default Row;
