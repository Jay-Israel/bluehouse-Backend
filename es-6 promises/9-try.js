export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}

// Test
import divideFunction from './8-try.js';

console.log(guardrail(() => divideFunction(10, 2)));
console.log(guardrail(() => divideFunction(10, 0)));