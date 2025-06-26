// 0-constants.js
// Q: Modify the functions to use const and let instead of var
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

console.log(taskFirst());
console.log(taskNext());

// 1-block-scoped.js
// Q: Modify the function so variables aren’t overwritten inside block
export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    return [task, task2];
  }
  const task = false;
  const task2 = true;
  return [task, task2];
}

console.log(taskBlock(true));
console.log(taskBlock(false));

// 2-arrow.js
// Q: Rewrite to use arrow function
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

const neighborhoodsList = new getNeighborhoodsList();
console.log(neighborhoodsList.addNeighborhood('Noe Valley'));

// 3-default-parameter.js
// Q: Use default parameters
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

// 4-rest-parameter.js
// Q: Use rest parameter to count arguments
export default function returnHowManyArguments(...args) {
  return args.length;
}

console.log(returnHowManyArguments('Hello', 'World'));
console.log(returnHowManyArguments('One', 'Two', 'Three', 4));

// 5-spread-operator.js
// Q: Use spread operator to merge arrays and string
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

// 6-string-interpolation.js
// Q: Use template literals
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}

console.log(getSanFranciscoDescription());

// 7-getBudgetObject.js
// Q: Use object property shorthand
export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}

console.log(getBudgetObject(400, 700, 900));

// 8-getBudgetCurrentYear.js
// Q: Use computed property names
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

// 9-getFullBudget.js
// Q: Use ES6 method properties
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}

const fullBudget = getFullBudgetObject(100, 200, 300);
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

// 10-loops.js
// Q: Rewrite with for...of loop
export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    result.push(`${appendString}${value}`);
  }
  return result;
}

console.log(appendToEachArrayValue(['apple', 'banana'], 'fruit-'));

// 11-createEmployeesObject.js
// Q: Create object with computed property name
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

console.log(createEmployeesObject('Engineering', ['Alice', 'Bob']));

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
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};
const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

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

// 101-iterateThroughObject.js
// Q: Return string of employee names separated by " | "
export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
}

console.log(iterateThroughObject(createIteratorObject(report)));
