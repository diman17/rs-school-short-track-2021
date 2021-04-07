/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (!result.includes(names[i])) {
      result.push(names[i]);
    } else {
      const array = result.slice(0, i);
      const array2 = names.slice(0, i);

      if (names[i].includes('(')) {
        const countItem = array.reduce((acc, el) => {
          let res = acc;

          if (el === names[i]) {
            res++;
          }
          return res;
        }, 0);

        const newItem = `${names[i]}(${countItem})`;
        result.push(newItem);
      } else {
        const countItem = array2.reduce((acc, el) => {
          let res = acc;

          if (el === names[i]) {
            res++;
          }
          return res;
        }, 0);

        const newItem = `${names[i]}(${countItem})`;
        result.push(newItem);
      }
    }
  }

  return result;
}

module.exports = renameFiles;
