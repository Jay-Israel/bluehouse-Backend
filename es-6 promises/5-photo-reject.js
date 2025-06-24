export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

// Test
uploadPhoto('guillaume.jpg').catch(e => console.log(e.message));