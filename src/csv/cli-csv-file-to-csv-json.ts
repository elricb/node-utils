/**
 * Sample:
 * node dist/cli-csv-file-to-csv-json.js config/sample.csv
 */
import convertCsvFileToCsvArray from "./convert-csv-file-to-csv-array";
import convertCsvArrayToCsvJson from "./convert-csv-array-to-csv-json";

const csvFile = process.argv[process.argv.length - 1];

convertCsvFileToCsvArray(csvFile)
  .then(convertCsvArrayToCsvJson)
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    throw new Error(error);
  });
