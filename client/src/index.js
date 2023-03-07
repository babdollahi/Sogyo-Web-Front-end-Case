function registerEventListeners (){
    var orderedItems = document.getElementsByClassName("orderbutton")

    for (var i = 0; i < orderedItems.length ; i++) {
        var button = orderedItems[i]
        var nameOfAttraction
        var numAdults
        var numKids
        var basket 
        var dictBasket = {}
        var NumberOfOrders = 0
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

            NumberOfOrders =NumberOfOrders +1
            dictBasket[(NumberOfOrders).toString()] = basket
            saveOrderInShoppingBasket(dictBasket)

            document.getElementsByClassName("badge")[0].innerText =  (NumberOfOrders).toString()
            console.log(document.getElementsByClassName("badge")[0].innerText)

        })
        
    }

}

function saveOrderInShoppingBasket(dictBasket) {
    for (var key in dictBasket) {
        localStorage.setItem(key, JSON.stringify(dictBasket[key]))
        localStorage.getItem(key)
      }
  }

registerEventListeners ()

