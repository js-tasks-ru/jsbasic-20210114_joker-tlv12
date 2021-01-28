/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  
  let result = {
    min: 0,
    max: 0,
  };

  let SEPARATOR_RE = /[\s,]/;
  let numberStr = str

    .split(SEPARATOR_RE)
    .filter(item => Number(item))
    .map(item => Number(item))
    .sort((a, b) => a - b);


  result.min = numberStr[0];
  result.max = numberStr[numberStr.length - 1];
  let {min, max} = result;
  return {min, max};
}
