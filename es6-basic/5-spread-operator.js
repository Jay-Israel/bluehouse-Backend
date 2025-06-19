// 5-spread-operator.js
// Q: Use spread operator to merge arrays and string
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

console.log(concatArrays(["a", "b"], ["c", "d"], "Hello"));
