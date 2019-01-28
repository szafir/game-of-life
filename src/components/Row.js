import React, { PureComponent } from "react";
import mRow from "./Row.module.scss";
import Cell from "./Cell";

class Row extends PureComponent {

    render() {
        return (
            <div className={mRow.row}>
                {this.props.items.map((item, index) => index > 0 && index < this.props.items.length - 1 ? <Cell {...this.props} cellInd={index} alive={item} key={`cell-${this.props.rowInd}-${index}`} /> : null)}
            </div>
        )
    }
}
export default Row;