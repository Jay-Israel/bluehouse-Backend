// 7-getBudgetObject.js
// Q: Use object property shorthand
export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}

console.log(getBudgetObject(400, 700, 900));