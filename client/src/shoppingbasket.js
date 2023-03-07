const orders = JSON.parse(localStorage.getItem('orders'))

for (i in orders) {
    console.log(orders[i]["Name of attraction"])
    console.log(parseInt(orders[i]["Number of adults"]))
    console.log(parseInt(orders[i]["Number of kids"]))
}
