const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 10000);
});

// Handling using async-await
async function handlePromise() {
  console.log("Hello World");

  const val = await p1;
  console.log("Namaste Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste Javascript2");
  console.log(val2);
}
// Promise pending
handlePromise();

// Handling using promise
// function getData() {
//   p1.then((data) => console.log(data)).catch((err) => console.log(err));
// }
// getData();
