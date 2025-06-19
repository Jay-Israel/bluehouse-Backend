// 4-rest-parameter.js
// Q: Use rest parameter to count arguments
export default function returnHowManyArguments(...args) {
  return args.length;
}

console.log(returnHowManyArguments("Hello", "World"));
console.log(returnHowManyArguments("One", "Two", "Three", 4));
