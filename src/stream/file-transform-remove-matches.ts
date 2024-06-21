/**
 * Remove matching lines from file
 *
 * - tbd change to use os temp directory
 */
import type { MatchArray } from "../types";

import {createReadStream, createWriteStream} from "node:fs";
import {unlink, copyFile} from "node:fs/promises";
import {pipeline} from "node:stream/promises";
import split2 from "split2";

import transformRemoveMatches from "./transform-remove-matches";

async function fileTransformRemoveMatches(
  streamRemoveMatches: MatchArray,
  configFile: string
): Promise<void> {
  await copyFile(`${configFile}`, `${configFile}.tmp`);

  await pipeline(
    createReadStream(`${configFile}.tmp`),
    split2(),
    transformRemoveMatches(streamRemoveMatches),
    createWriteStream(`${configFile}`)
  );

  await unlink(`${configFile}.tmp`);
}

export default fileTransformRemoveMatches;
