/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if(size === 0){
    return '';
  }
  const stringToArray =  string.split('')
  let counter = 1;
  const newArray = []
  stringToArray.forEach((p,i)=>{
    if(p===stringToArray[i+1]){
      ++counter;
      if(counter>size){
        return p;
      }
      newArray.push(p)
      return;
    }
    counter = 1;
    newArray.push(p)
  })
  return newArray.join('');
}
