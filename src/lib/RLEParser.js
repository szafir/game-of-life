class RLEParser {
  constructor(formation) {
    this.formation = formation;
  }
  parseBoundingBox = () => {
    return this.formation.substr(0, this.formation.indexOf(";")).split("x");
  };
  prepareLines = () => {
    const lines = this.formation
      .substr(this.formation.indexOf(";") + 1)
      .replace("!", "")
      .split("$")
      .map(line => {
        if (line) {
          line = line.trim();
          let emptyLines = line.match(/(\d{1,})$/gm);
          if (emptyLines) {
            line += "$".repeat(emptyLines - 1);
          }
        }
        return line;
      })
      .join("$")
      .split("$");
    return lines;
  };
  parseSingleLine = line => {
    let number = "";
    const items = line
      .split("")
      .map(item => {
        if (item === "o" || item === "b") {
          if (number === "") {
            number = "";
            return item;
          } else {
            const ret = item.repeat(number);
            number = "";
            return ret;
          }
        } else {
          number += item;
        }
        return "";
      })
      .join("");
    return items;
  };
  parseLines = () => {
    const lines = this.prepareLines();
    const parsedLines = lines.map(line => this.parseSingleLine(line));
    return parsedLines;
  };
  parse = () => {
    const boundingBox = this.parseBoundingBox();
    const parsedLines = this.parseLines();

    return {
      boundingBox,
      parsedLines
    };
  };
}

export default RLEParser;

export const parseRLE = rleString => {
  const parser = new RLEParser(rleString);
  return parser.parse();
};
