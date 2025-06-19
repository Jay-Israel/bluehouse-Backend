// 12-createReportObject.js
// Q: Return object with method to count departments
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}

const employees = {
  ...createEmployeesObject("engineering", ["Bob", "Jane"]),
  ...createEmployeesObject("marketing", ["Sylvie"]),
};
const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
