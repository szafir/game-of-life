class RLEParser {
  parseString(rleString) {
    const startCoord = pattern.substr(0, pattern.indexOf(";")).split("x");
    const lines = pattern
      .substr(pattern.indexOf(";") + 1)
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

    const processedLines = lines.map((line, index) => {
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
    });
  }
}

export default RLEParser;

export const parseString = rleString => {};
