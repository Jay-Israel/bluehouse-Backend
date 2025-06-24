export default function getResponseFromAPI() {
  return new Promise((resolve) => resolve());
}

// Test
const response = getResponseFromAPI();
console.log(response instanceof Promise); // true