function registerEventListeners (){
    var orderedItems = document.getElementsByClassName("orderbutton")
    console.log(orderedItems)


    for (var i = 0; i < orderedItems.length ; i++) {
        var button = orderedItems[i]
        var nameOfAttraction
        var numAdults
        var numKids
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target
            nameOfAttraction = buttonClicked.parentElement.parentElement.firstElementChild.innerText
            // console.log(nameOfAttraction)


            var classNumAdults = buttonClicked.parentElement.getElementsByClassName("numberofadults")
            if (classNumAdults.length >0 ) {
                numAdults = classNumAdults[0].value
                // console.log(numAdults)
            }

            var classNumKids = buttonClicked.parentElement.getElementsByClassName("numberofkids")
            if (classNumKids.length >0 ) {
                numKids = classNumKids[0].value
                // console.log(numKids)
            }
            saveOrderInShoppingBasket(numAdults, numKids, nameOfAttraction)
        })
        
    }

}

function saveOrderInShoppingBasket(numAdults, numKids, nameOfAttraction) {
    console.log(numAdults, numKids, nameOfAttraction)
}

registerEventListeners ()
