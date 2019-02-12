import React from "react";
import { Rect } from "react-konva";
const Cell = props => {

    const x = (props.cellSize) * (props.cellInd - 1) + 1;
    const y = (props.cellSize) * (props.rowInd - 1) + 1;

    return (
        props.alive ? <Rect
            x={x}
            y={y}
            width={9}
            height={9}
            fill="#fff"
        /> : null
    )
}
export default Cell;