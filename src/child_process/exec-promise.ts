import { ExecSyncOptionsWithStringEncoding } from "child_process";

import execSync from "./exec-sync";

function execPromise(
  command: string,
  options: ExecSyncOptionsWithStringEncoding,
): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      resolve(execSync(command, options));
    } catch (error) {
      reject(error);
    }
  });
}

export default execPromise;
