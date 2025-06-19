// 1-block-scoped.js
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    const task2 = false;
  }

  return [task, task2];
}
console.log(taskBlock(true));
console.log(taskBlock(false));