/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const arrFromObject = Object.entries(obj);
  const newArr = [];

  arrFromObject.forEach(([key,value]) =>{
    if(fields.includes(key)){
      newArr.push([key, value])
    }
  })

  return Object.fromEntries(newArr);
};
