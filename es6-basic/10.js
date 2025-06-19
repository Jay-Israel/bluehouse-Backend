// 10-loops.js
// Q: Rewrite with for...of loop
export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    result.push(`${appendString}${value}`);
  }
  return result;
}

console.log(appendToEachArrayValue(["apple", "banana"], "fruit-"));
