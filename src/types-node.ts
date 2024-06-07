type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

type ExecSyncOptions = {
  // <URL> Current working directory of the child process.
  cwd: string;
  // The value which will be passed as stdin to the spawned process. Supplying this value will override stdio[0].
  input: string | Buffer | TypedArray | DataView;
  // Child's stdio configuration. stderr by default will be output to the parent process' stderr unless stdio is specified. Default: 'pipe'.
  stdio: string | string[];
  // Environment key-value pairs. Default: process.env.
  env: {[key: string]: string};
  // Shell to execute the command with. See Shell requirements and Default Windows shell. Default: '/bin/sh' on Unix, process.env.ComSpec on Windows.
  shell: string;
  // Sets the user identity of the process. (See setuid(2)).
  uid: number;
  // Sets the group identity of the process. (See setgid(2)).
  gid: number;
  // In milliseconds the maximum amount of time the process is allowed to run. Default: undefined.
  timeout: number;
  // The signal value to be used when the spawned process will be killed. Default: 'SIGTERM'.
  killSignal: string | number;
  // Largest amount of data in bytes allowed on stdout or stderr. If exceeded, the child process is terminated and any output is truncated. See caveat at maxBuffer and Unicode. Default: 1024 * 1024.
  maxBuffer: number;
  // The encoding used for all stdio inputs and outputs. Default: 'buffer'.
  encoding: string;
  // Hide the subprocess console window that would normally be created on Windows systems. Default: false.
  windowsHide: boolean;
};

type SpawnOptions = {
  // <string> | <URL> Current working directory of the child process.
  cwd: string;
  // <Object> Environment key-value pairs. Default: process.env.
  env: { [key: string]: string };
  // <string> Explicitly set the value of argv[0] sent to the child process. This will be set to command if not specified.
  argv0: string;
  // <Array> | <string> Child's stdio configuration (see options.stdio).
  // 'pipe': equivalent to ['pipe', 'pipe', 'pipe'] (the default)
  // 'overlapped': equivalent to ['overlapped', 'overlapped', 'overlapped']
  // 'ignore': equivalent to ['ignore', 'ignore', 'ignore']
  // 'inherit': equivalent to ['inherit', 'inherit', 'inherit'] or [0, 1, 2]
  stdio: string[] | string;
  // <boolean> Prepare child to run independently of its parent process. Specific behavior depends on the platform, see options.detached).
  detached: boolean;
  // <number> Sets the user identity of the process (see setuid(2)).
  uid: number;
  // <number> Sets the group identity of the process (see setgid(2)).
  gid: number;
  // <string> Specify the kind of serialization used for sending messages between processes. Possible values are 'json' and 'advanced'. See Advanced serialization for more details. Default: 'json'.
  serialization: string;
  // <boolean> | <string> If true, runs command inside of a shell. Uses '/bin/sh' on Unix, and process.env.ComSpec on Windows. A different shell can be specified as a string. See Shell requirements and Default Windows shell. Default: false (no shell).
  shell: boolean | string;
  // <boolean> No quoting or escaping of arguments is done on Windows. Ignored on Unix. This is set to true automatically when shell is specified and is CMD. Default: false.
  windowsVerbatimArguments: boolean;
  // <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.
  windowsHide: boolean;
  // <AbortSignal> allows aborting the child process using an AbortSignal.
  signal: AbortSignal;
  // <number> In milliseconds the maximum amount of time the process is allowed to run. Default: undefined.
  timeout: number;
  // <string> | <integer> The signal value to be used when the spawned process will be killed by timeout or abort signal. Default: 'SIGTERM'.
  killSignal: string | number;
};

export {
  SpawnOptions,
  ExecSyncOptions
}
