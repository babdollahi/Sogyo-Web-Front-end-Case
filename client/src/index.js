function registerEventListeners (){
    var orderedItems = document.getElementsByClassName("orderbutton")

    for (var i = 0; i < orderedItems.length ; i++) {
        var button = orderedItems[i]
        var nameOfAttraction
        var numAdults
        var numKids
        var basket 
        var NumberOfOrders = 0
        var orders = []

        
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target
            nameOfAttraction = buttonClicked.parentElement.parentElement.firstElementChild.innerText

            var classNumAdults = buttonClicked.parentElement.getElementsByClassName("numberofadults")
            if (classNumAdults.length >0 ) {
                numAdults = classNumAdults[0].value
            }

            var classNumKids = buttonClicked.parentElement.getElementsByClassName("numberofkids")
            if (classNumKids.length >0 ) {
                numKids = classNumKids[0].value
            }

            basket = {
                "Name of attraction:" : nameOfAttraction,
                "Number of adults:" : numAdults,
                "Number of kids:" : numKids
            }

            //Add basket dics to an array
            orders.push(basket)
            //store basket array to local storage
            localStorage.setItem("orders", JSON.stringify(orders))
            // Update array using the stored array in local storage
            orders = JSON.parse(localStorage.getItem('orders'))


            //Updating number of orders stored in the shopping basket
            NumberOfOrders =NumberOfOrders +1
            document.getElementsByClassName("badge")[0].innerText =  (NumberOfOrders).toString()


            saveOrderInShoppingBasket(orders)

        })
        
    }

}

function saveOrderInShoppingBasket(orders) {
    console.log(orders)
}

registerEventListeners ()

