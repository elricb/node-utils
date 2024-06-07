import type { CsvArray } from "../types";

import {createReadStream} from "fs";
import {parse} from "csv-parse";

function convertCsvFileToCsvArray(file: string): Promise<CsvArray> {
  return new Promise((resolve, reject) => {
    const records = [];
    const parser = parse({
      trim: true,
      skip_empty_lines: true,
      delimiter: ","
    });

    const readableStream = createReadStream(file);

    parser.on("readable", function () {
      let record;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
    });

    parser.on("error", function (error) {
      reject(error);
    });

    parser.on("end", function () {
      resolve(records);
    });

    readableStream.pipe(parser);
  });
}

export default convertCsvFileToCsvArray;
