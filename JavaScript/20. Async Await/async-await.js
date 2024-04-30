const pr = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

// Handling using promise
function getData() {
  pr.then((data) => console.log(data)).catch((err) => console.log(err));
}
getData();

// Handling using async-await
async function handlePromise() {
  const val = await pr;
  return val;
}
// Promise pending
console.log(handlePromise());