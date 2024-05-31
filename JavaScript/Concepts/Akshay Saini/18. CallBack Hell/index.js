const cart = ["shoes", "kurta", "pants"];

// CallBack Hell & Inversion Of Control
// We gave our control to the api to call the callback function
api.createOrder(cart, function () {

    api.proceedPayment(function () {

        api.showOrderSummary(function () {

            api.updateWallet()
        })
    })
})