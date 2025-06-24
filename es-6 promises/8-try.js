export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw Error('cannot divide by 0');
  return numerator / denominator;
}

// Test
try {
  console.log(divideFunction(10, 2));
  console.log(divideFunction(10, 0));
} catch (e) {
  console.log(e.message);
}