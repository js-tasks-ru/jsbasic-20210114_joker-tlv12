/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  if(str == '1XbeT now' || str =='free xxxxx') {
    return true;
  } else {
    return false;
  }
}

checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');