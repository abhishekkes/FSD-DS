function fetchdata() {
  return new Promise((resolve, reject) => {
    const students = [
      { name: "Alice", score: 50 },
      { name: "Bob", score: 65 },
      { name: "Charlie", score: 80 },
      { name: "David", score: 45 },
    ];
    setTimeout(() => {
      resolve(students);
    }, 3000);
  });
}
fetchdata()
  .then((data) => {
    // let sum = data.map((x) => x.score).reduce((x, y) => x + y, 0);
    let x = 0;
    data.forEach((element) => {
      x = x + element.score;
    });
    console.log(x);
  })
  .catch((err) => {
    console.log(err);
  });
