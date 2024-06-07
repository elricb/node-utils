import {execSync} from "node:child_process";

/**
 * Run terminal command and return result code.
 *
 * ```js
 * if (execSyncCode("ls") !== 0) {
 *   throw new Error("ls failed");
 * }
 * ```
 */
function execSyncCode(command: string): number {
  try {
    execSync(command);
    return 0;
  } catch (error) {
    return parseInt(error.status) || -1;
  }
}

export default execSyncCode;
