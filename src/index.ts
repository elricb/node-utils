import type { CsvArray, CsvJson, MatchArray } from "./types";

import convertCsvArrayToCsvJson from "./csv/convert-csv-array-to-csv-json";
import convertCsvFileToCsvArray from "./csv/convert-csv-file-to-csv-array";
import dirHome from "./dir-home";
import execSync from "./child_process/exec-sync";
import execSyncCode from "./child_process/exec-sync-code";
import fileTransformRemoveMatches from "./stream/file-transform-remove-matches";
import promiseAllSequential from "./promise-all-sequential";
import spawnToFile from "./child_process/spawn-to-file";
import tarCzf from "./tar/tar-czf";
import tarXzf from "./tar/tar-xzf";
import transformRemoveMatches from "./stream/transform-remove-matches";

export type { CsvArray, CsvJson, MatchArray };

export {
  convertCsvArrayToCsvJson,
  convertCsvFileToCsvArray,
  dirHome,
  execSync,
  execSyncCode,
  fileTransformRemoveMatches,
  promiseAllSequential,
  spawnToFile,
  tarCzf,
  tarXzf,
  transformRemoveMatches,
};
