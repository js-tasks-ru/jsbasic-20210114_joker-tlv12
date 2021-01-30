/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let salaryArr = [];

  for (let item of users) {
    if (item.age <= age) {
      salaryArr.push(`${item.name}, ${item.balance}`);
    }
  }

  return salaryArr.join('\n');
}
