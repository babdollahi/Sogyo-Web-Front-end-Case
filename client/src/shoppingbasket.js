function updateNumberOfOrders(numberOfOrders) { 
  document.getElementsByClassName("badge")[0].innerText =  (numberOfOrders).toString()
}

function setBadge() {
  const orders = localStorage.getItem("orders")
  if (orders) {
      const numberOfOrders = JSON.parse(orders).length
      updateNumberOfOrders(numberOfOrders)
  }
}

const orders = JSON.parse(localStorage.getItem('orders'))

function addOrder(order) {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    var divs = []
    var divs = clon.querySelectorAll("div")
    divs[0].innerText = "Park Name: " + order["Name of attraction"]
    divs[1].innerText = "Number of Adults: " + order["Number of adults"]
    divs[2].innerText = "Number of Kids: " + order["Number of kids"]
    document.body.appendChild(clon);
  }

function showContent() {
  for (i in orders) {
    addOrder(orders[i])
    }
}

showContent()

function clickPay() { 
    document.getElementById("finalizepaymentbutton").addEventListener("click", 
    function() {
        localStorage.clear()
        window.location.href = "orderplaced.html"
    })
}


clickPay()
setBadge()
