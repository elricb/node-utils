import type { SpawnOptions } from "node:child_process";

import {spawn} from "node:child_process";

/**
 * Spawn terminal command and direct std to inherit
 * Note: Ink does not work well with node promisify, so spawn events are used.
 */

function spawnPromiseInherit(
  command: string,
  args: string[],
  options?: SpawnOptions
): Promise<number> {
  return new Promise((resolve, reject) => {
    const script = spawn(
      command,
      args,
      Object.assign({stdio: "inherit"}, options || {})
    );

    script.on("close", resolve);
    script.on("exit", resolve);
    script.on("error", reject);
  });
}

export default spawnPromiseInherit;
