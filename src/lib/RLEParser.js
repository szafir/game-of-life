class RLEParser {
  constructor(pattern) {
    this.rawPattern = pattern;
    this.pattern = this.preparePattern(pattern);
  }
  preparePattern = pattern => {
    const lines = pattern.split("\n").filter(line => line && line.indexOf("#") !== 0);

    this.boundingBox = this.parseBoundingBox(lines[0]);
    lines.shift();
    return lines.join("\n");
  };

  parseBoundingBox = line => {
    return line
      .split(", ")
      .filter(line => ["x", "y"].includes(line[0]))
      .map(coord => parseInt(coord.match(/(\d{1,})$/gm)[0]));
  };
  prepareLines = () => {
    const lines = this.pattern
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
    const parsedLines = this.parseLines();

    return {
      boundingBox: this.boundingBox,
      parsedLines
    };
  };
}

export default RLEParser;

export const parseRLE = rleString => {
  const parser = new RLEParser(rleString);
  return parser.parse();
};
