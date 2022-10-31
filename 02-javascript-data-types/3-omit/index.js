/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const arrFromObject = Object.entries(obj);
  const newArr = [];

  arrFromObject.forEach(([key,value]) =>{
    if(!fields.includes(key)){
      newArr.push([key, value])
    }
  })

  return Object.fromEntries(newArr);
};
