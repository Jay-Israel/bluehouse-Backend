import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ]).then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      return { status: result.status, value: result.value };
    }
    return { status: result.status, value: result.reason };
  }));
}

// Test
handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg').then(console.log);