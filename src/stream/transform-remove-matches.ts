/**
 * Stream.Transform remove lines that matches any regex array entry
 */
import {Transform} from "node:stream";

function transformRemoveMatches(
  remove: Array<RegExp>,
  baseEncoding: string = "utf8"
): Transform {
  function transform(chunk, encoding, callback) {
    const line = chunk.toString(baseEncoding) + "\n";

    let i = 0;
    for (; i < remove.length && remove[i].test(line) === false; i++);
    if (i !== remove.length) {
      callback(null, "");
      return;
    }

    callback(null, chunk + "\n");
  }

  return new Transform({transform});
}

export default transformRemoveMatches;
