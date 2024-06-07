/**
 * Assumes first row is column name.
 */
import type {CsvJson, CsvArray} from "../types";

function csvArrayToCsvJson(csvArray: CsvArray): Promise<CsvJson> {
  return new Promise(resolve => {
    const results = [{}];

    for (let i = 1; i < csvArray.length; i++) {
      results.push({});
      for (let j = 0; j < csvArray[0].length; j++) {
        results[i][csvArray[0][j]] = csvArray[i][j] || "";
      }
    }

    results.shift();

    resolve(results);
  });
}

export default csvArrayToCsvJson;
