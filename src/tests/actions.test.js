import { parseRLE } from "../lib/RLEParser";

describe("Pattern import", () => {
  test("Pattern is correct", () => {
    const pattern = `#N 37P10.1
#O Dean Hickerson
#C The smallest known non-trivial period-10 oscillator in terms of
#C bounding box
#C http://www.conwaylife.com/wiki/index.php?title=37P10.1
x = 13, y = 10, rule = b3/s23
2b2o5b2o2b$2bobo3bobo2b$3bo5bo3b$o5bo5bo$5o3b5o$5bobo5b$2b2o5b2o2b$2bo
7bo2b$3bo5bo3b$2b2o5b2o!`;
    const result = parseRLE(pattern);
    expect(result).toBeDefined();
    expect(result["boundingBox"]).toEqual([13,10]);
    expect(result["parsedLines"].length).toBeGreaterThan(0);
    expect(result["parsedLines"].join("")).toEqual("bboobbbbboobbbbobobbbobobbbbbobbbbbobbbobbbbbobbbbboooooobbbooooobbbbbobobbbbbbboobbbbboobbbbobbbbbbbobbbbbobbbbbobbbbboobbbbboo");
  });
});
