import { ExecSyncOptionsWithStringEncoding } from "child_process";

import execPromise from "./exec-promise";

function execPromiseIncludes(
  command: string,
  options: ExecSyncOptionsWithStringEncoding,
  includes: string,
): Promise<boolean> {
  return execPromise(command, options).then((stdout) => stdout.includes(includes));
}

export default execPromiseIncludes;
