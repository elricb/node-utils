/**
 * Sample:
 * node dist/cli-csv-file-to-csv-array.js config/sample.csv
 */
import convertCsvFileToCsvArray from "./convert-csv-file-to-csv-array";

const csvFile = process.argv[process.argv.length - 1];

convertCsvFileToCsvArray(csvFile).then(results => {
  console.log(results);
}).catch(error => {
  throw new Error(error);
});

