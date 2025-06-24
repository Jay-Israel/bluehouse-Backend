export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

// Test
const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(resolve => setTimeout(resolve, 100, ukSuccess));
const promiseUKSlow = new Promise(resolve => setTimeout(resolve, 400, ukSuccess));
const promiseFR = new Promise(resolve => setTimeout(resolve, 200, frSuccess));

(async () => {
  console.log(await loadBalancer(promiseUK, promiseFR));
  console.log(await loadBalancer(promiseUKSlow, promiseFR));
})();