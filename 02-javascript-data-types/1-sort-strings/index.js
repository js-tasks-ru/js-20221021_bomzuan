/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newSortedArray = [...arr];
  const locales = ['ru', 'en'];
  newSortedArray.sort((a,b) => a.localeCompare(b, locales, {caseFirst: 'upper'}));
  return (param === 'asc') ? newSortedArray: newSortedArray.reverse();
}
