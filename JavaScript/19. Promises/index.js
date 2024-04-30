// A promise is an object representing eventual completion/failure of an asynchronous operation
const cart = ["shoes", "pants", "kurta"];

const promise = api.createOrder(cart);
promise.then(function () {
    return api.proceedToPayment();
}).then(function () {
    return api.showOrderSummary();
}).then(function () {
    return api.updateWallet();
})