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
  const array = email.split('');
  const ats = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '@') {
      ats.push(array[i]);
    }
  }
  return ats.length === 2 ? email.split('@')[2] : email.split('@')[1];
}

module.exports = getEmailDomain;
