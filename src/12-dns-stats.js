/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }
  const arr = [...domains];
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('.').reverse();

    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = `.${arr[i][j]}`;
    }

    let key = arr[i].join('');

    if (arr[i].length > 2) {
      result[key] = 1;
    }

    if (arr[i].length === 2) {
      [key] = [arr[0][0]];
      result[key] = domains.length;
      key = arr[i].join('');
      result[key] = domains.length;
    }
  }

  return result;
}

module.exports = getDNSStats;
