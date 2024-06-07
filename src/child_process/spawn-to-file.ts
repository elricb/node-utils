import type { StreamOptions, Stream } from "node:stream";
import type { SpawnOptions } from "node:child_process";

import process from "node:process";
import {createWriteStream} from "node:fs";
import {spawn} from "node:child_process";

function spawnToFile(
  cmd: string,
  args: ReadonlyArray<string>,
  spawnOptions: SpawnOptions,
  file: string,
  fileOptions?: StreamOptions<Stream>
): Promise<number> {
  return new Promise((resolve, reject) => {
    const ws = createWriteStream(file, fileOptions);
    const cps = spawn(cmd, args, spawnOptions);

    if (cps.stdout !== null) {
      cps.stdout.pipe(ws);
    }
    if (cps.stderr !== null) {
      cps.stderr.pipe(process.stderr);
    }

    cps.on("close", resolve);
    cps.on("error", reject);
  });
}

export default spawnToFile;
