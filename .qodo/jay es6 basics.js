// 0-constants.js
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
  
  // 1-block-scoped.js
  export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }
  
  // 2-arrow.js
  export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }
  
  // 3-default-parameter.js
  export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
    return initialNumber + expansion1989 + expansion2019;
  }
  
  // 4-rest-parameter.js
  export default function returnHowManyArguments(...args) {
    return args.length;
  }
  
  // 5-spread-operator.js
  export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, ...string];
  }
  
  // 6-string-interpolation.js
  export default function getSanFranciscoDescription() {
    const year = 2017;
    const budget = {
      income: '$119,868',
      gdp: '$154.2 billion',
      capita: '$178,479',
    };
    return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
  }
  
  // 7-getBudgetObject.js
  export default function getBudgetObject(income, gdp, capita) {
    return { income, gdp, capita };
  }
  
  // 8-getBudgetCurrentYear.js
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
  
  // 9-getFullBudget.js
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
  
  // 10-loops.js
  export default function appendToEachArrayValue(array, appendString) {
    const result = [];
    for (const value of array) {
      result.push(appendString + value);
    }
    return result;
  }
  
  // 11-createEmployeesObject.js
  export default function createEmployeesObject(departmentName, employees) {
    return { [departmentName]: employees };
  }
  
  // 12-createReportObject.js
  export default function createReportObject(employeesList) {
    return {
      allEmployees: { ...employeesList },
      getNumberOfDepartments(employees) {
        return Object.keys(employees).length;
      },
    };
  }
  
  // 100-createIteratorObject.js
  export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    let employees = [];
    for (const dept of Object.keys(allEmployees)) {
      employees = employees.concat(allEmployees[dept]);
    }
    let idx = 0;
    return {
      [Symbol.iterator]() {
        return {
          next() {
            if (idx < employees.length) {
              return { value: employees[idx++], done: false };
            }
            return { done: true };
          },
        };
      },
    };
  }
  
  // 101-iterateThroughObject.js
  export default function iterateThroughObject(reportWithIterator) {
    return [...reportWithIterator].join(' | ');
  }
  