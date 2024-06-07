/* Format: [() => new Promise(), () => new Promise()] */
const promiseAllSequential = (a, callback) =>
  a.reduce((previousPromise, nextFunction) => {
    return previousPromise.then((o) => {
      if (callback) {
        callback(o);
      }
      return nextFunction();
    });
  }, Promise.resolve());

export default promiseAllSequential;
