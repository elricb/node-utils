import { ExecSyncOptionsWithStringEncoding } from "child_process";

import { execSync } from "child_process";

function nodeExecSync(
  command: string,
  options: ExecSyncOptionsWithStringEncoding,
): string {
  return execSync(command, options).toString().trim();
}

export default nodeExecSync;
