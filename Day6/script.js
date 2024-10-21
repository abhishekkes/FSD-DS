// let arr = [1, 22, 3, 2, 3, 33, 1];
// let newary = arr.map((x) => x * 2);
// console.log(newary);
// let even = arr.filter((x) => x % 2 == 0);
// console.log(even);
// let sum = arr.filter((x) => x % 2 == 0).reduce((x, y) => x + y, 0);
// console.log(sum);
// Students data Example
const students = [
  { name: "Alice", score: 50 },
  { name: "Bob", score: 65 },
  { name: "Charlie", score: 80 },
  { name: "David", score: 45 },
  { name: "Joe", score: 75 },
];
let newar = students
  .filter((student) => student.score > 60)
  .map((student) => student.score * 2)
  .reduce((x, y) => x + y, 0);
console.log(newar);
