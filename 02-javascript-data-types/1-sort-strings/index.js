/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const orders = {
    asc: 1,
    desc: -1
  }
  const order = orders[param];
  const newSortedArray = [...arr];
  const locales = ['ru', 'en'];
  return newSortedArray.sort((a,b) => order * a.localeCompare(b, locales, {caseFirst: 'upper'}));

}
