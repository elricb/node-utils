/* Format: [() => new Promise(), () => new Promise()] */
function promiseAllSequential(
  a: Array<() => Promise<any>>,
  callback: (x: any) => void,
): Promise<void> {
  return a.reduce((previousPromise, nextFunction) => {
    return previousPromise.then((o) => {
      if (callback) {
        callback(o);
      }
      return nextFunction();
    });
  }, Promise.resolve());
}

export default promiseAllSequential;
