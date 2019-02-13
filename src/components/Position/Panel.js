import React, { PureComponent } from "react";
import mPanel from "./Panel.module.scss";
import Row from "./Row";



const Panel = props => {
  const { cells } = props;
  const style = {
    width: props.fieldWidth,
    height: props.fieldHeight
  };
  return (
    <div className={mPanel.Panel} style={style}>
      {cells.map((row, index) => {
        return index > 0 && index < cells.length - 1 ? (
          <Row
            items={row}
            rowInd={index}
            key={`row-${index}`}
          />
        ) : null;
      })}
    </div>
  );


}
export default Panel;
