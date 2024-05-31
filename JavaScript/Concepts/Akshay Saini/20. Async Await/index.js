// async function will return a promise
async function getData() {
  // async function will convert the return value to a promise
  return 2;
}

console.log("Hello");

const pr = getData();
pr.then((data) => console.log(data)).catch((err) => console.log(err));

console.log("Bye");
