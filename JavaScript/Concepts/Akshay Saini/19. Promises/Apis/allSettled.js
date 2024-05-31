const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 success");
    }, 3000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 success");
    }, 1000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 success");
    }, 2000);
  });
  
  // Returns a single Promise when all promises are resolved and will not reject if any one of them is rejected.
  Promise.allSettled([p1, p2, p3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  