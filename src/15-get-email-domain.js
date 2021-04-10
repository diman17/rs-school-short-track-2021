/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const str = email;
  const arr = str.match(/@[\w-]+.\w+/g);
  let result = arr.join();
  result = result.slice(1, result.length);
  return result;
}

module.exports = getEmailDomain;
