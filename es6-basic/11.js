// 11-createEmployeesObject.js
// Q: Create object with computed property name
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

console.log(createEmployeesObject("Engineering", ["Alice", "Bob"]));
