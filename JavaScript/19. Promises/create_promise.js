const cart = ["shoes", "kurta", "pants"];

const promise = createOrder(cart);
promise
  .then((orderId) => {
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

function proceedToPayment() {
  return new Promise((resolve, reject) => {
    resolve("Payment successful");
  });
}

function createOrder() {
  const pr = new Promise((resolve, reject) => {
    // validateCart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }

    // createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart() {
  return true;
}
