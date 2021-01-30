/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let nameArr = [];
  for (let obj of users) {
    nameArr.push(obj.name);
  }
  return nameArr;
}

