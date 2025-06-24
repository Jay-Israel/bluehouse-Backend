export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Test
getFullResponseFromAPI(true).then(console.log).catch(console.log);
getFullResponseFromAPI(false).then(console.log).catch(e => console.log(e.message));