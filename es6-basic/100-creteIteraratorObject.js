// 100-createIteratorObject.js
// Q: Return an iterator for employee names
export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }
  return employees[Symbol.iterator]();
}

const reportWithIterator = createIteratorObject(report);
for (const emp of reportWithIterator) {
  console.log(emp);
}
