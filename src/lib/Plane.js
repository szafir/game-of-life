class Plane {
  constructor(cells) {
    this.cells = cells;
  }

  calculateCell = id => {
    const xy = id.split("_").map(num => parseInt(num));
    const nb = [
      this.cells[`${xy[0] - 1}_${xy[1] - 1}`],
      this.cells[`${xy[0] - 1}_${xy[1]}`],
      this.cells[`${xy[0] - 1}_${xy[1] + 1}`],
      this.cells[`${xy[0]}_${xy[1] - 1}`],
      this.cells[`${xy[0]}_${xy[1] + 1}`],
      this.cells[`${xy[0] + 1}_${xy[1] - 1}`],
      this.cells[`${xy[0] + 1}_${xy[1]}`],
      this.cells[`${xy[0] + 1}_${xy[1] + 1}`]
    ];
    const nbCount = nb.reduce((prev, id) => prev + (id ? 1 : 0), 0);

    let retValue = false;
    if ([2, 3].includes(nbCount) && this.cells[`${xy[0]}_${xy[1]}`]) {
      retValue = true;
    }
    if (nbCount === 3 && !this.cells[`${xy[0]}_${xy[1]}`]) {
      retValue = true;
    }
    return retValue;
  };

  calculateGeneration = () => {
    const calculatedCells = {};
    Object.keys(this.cells).map(item => {
      const cellsToProcess = [];
      const xy = item.split("_").map(num => parseInt(num));
      cellsToProcess.push(`${xy[0] - 1}_${xy[1] - 1}`);
      cellsToProcess.push(`${xy[0] - 1}_${xy[1]}`);
      cellsToProcess.push(`${xy[0] - 1}_${xy[1] + 1}`);
      cellsToProcess.push(`${xy[0]}_${xy[1] - 1}`);
      cellsToProcess.push(`${xy[0]}_${xy[1]}`);
      cellsToProcess.push(`${xy[0]}_${xy[1] + 1}`);
      cellsToProcess.push(`${xy[0] + 1}_${xy[1] - 1}`);
      cellsToProcess.push(`${xy[0] + 1}_${xy[1]}`);
      cellsToProcess.push(`${xy[0] + 1}_${xy[1] + 1}`);

      cellsToProcess.map(item => {
        if (this.calculateCell(item, this.cells)) {
          calculatedCells[item] = true;
        }
        return false;
      });
    });
    return calculatedCells;
  };
}

export default Plane;

export const calculateGeneration = cells => {
  const plane = new Plane(cells);
  return plane.calculateGeneration();
};
