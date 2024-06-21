/**
 * Stream.Transform remove lines that matches any regex array entry
 */
import type { MatchArray } from "../types";

import {Transform} from "node:stream";

function isMatch(s: string, test: RegExp | string) {
  if (test instanceof RegExp) {
    return test.test(s);
  }

  return s === test;
}

function transformRemoveMatches(
  remove: MatchArray,
  baseEncoding: string = "utf8"
): Transform {
  function transform(chunk, encoding, callback) {
    const line = chunk.toString(baseEncoding) + "\n";

    let i = 0;
    for (; i < remove.length && isMatch(line, remove[i]) === false; i++);
    if (i !== remove.length) {
      callback(null, "");
      return;
    }

    callback(null, chunk + "\n");
  }

  return new Transform({transform});
}

export default transformRemoveMatches;
