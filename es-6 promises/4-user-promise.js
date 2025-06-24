export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

// Test
signUpUser('Bob', 'Dylan').then(console.log);