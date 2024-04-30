const api = "https://api.github.com/users/harsh-sangwan2003";

async function handleFetch() {
  try {
    const data = await fetch(api);
    const value = await data.json();
    console.log(value);
    console.log("Done async-await");
  } catch (err) {
    console.log(err);
  }
}
handleFetch();

function handlePromise() {
  const pr = fetch(api);

  pr.then((data) => {
    return data.json();
  })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });

   console.log("Done promise.");
}
handlePromise();
