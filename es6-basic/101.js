// 101-iterateThroughObject.js
// Q: Return string of employee names separated by " | "
export default function iterateThroughObject(reportWithIterator) {
    return [...reportWithIterator].join(' | ');
  }
  
  console.log(iterateThroughObject(createIteratorObject(report)));