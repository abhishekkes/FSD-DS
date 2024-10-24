const myPromise = new Promise((resolve, reject) => {
  let success = true;
  console.log("Data Sending");
  setTimeout(() => {
    if (success) {
      resolve("Data Send Successfully");
    } else {
      reject("Data failed to send");
    }
  }, 4000);
});

myPromise
  .then((mesaage) => {
    console.log("Data Receivd " + mesaage);
  })
  .catch((err) => {
    console.log("Failed to fetch data: " + err);
  });
