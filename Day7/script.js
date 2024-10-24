console.log("Task Started");
setTimeout(() => {
  console.log("First Task Completed");
  setTimeout(() => {
    console.log("Second Task Completed");
    setTimeout(() => {
      console.log("Third Task Completed");
    }, 3000);
  }, 2000);
}, 1000);
console.log("Task End");
