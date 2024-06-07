import type { SpawnOptions } from "node:child_process";

import { spawn } from "node:child_process";

/**
 * Return the stdout results in a result string
 *
 * Notes:
 * Only for short terminal responses.
 */

function spawnPromise(
  command: string,
  args: string[],
  options: SpawnOptions
): Promise<string> {
  return new Promise((resolve, reject) => {
    let bufferOut = "";
    let bufferError = "";
    const script = spawn(command, args, options);

    if (script?.stdout) {
      script.stdout.on("data", (data) => {
        bufferOut += data.toString();
      });
    }

    if (script?.stderr) {
      script.stderr.on("data", (data) => {
        bufferError += data.toString();
      });
    }

    script.on("close", () => {
      if (bufferError) {
        reject(new Error(bufferError));
      }

      resolve(bufferOut);
    });

    script.on("error", reject);
  });
}

export default spawnPromise;
