
// function registerEventListener(button){
//     // var orderedItems = document.getElementsByClassName("orderbutton")

//     // for (var i = 0; i < orderedItems.length ; i++) {
//         // var button = orderedItems[i]
//     var nameOfAttraction
//     var numAdults
//     var numKids
//     var basket 
//     // var NumberOfOrders = 0
//     var orders = []   
//     button.addEventListener('click', function(event) {

//         var buttonClicked = event.target
//         nameOfAttraction = buttonClicked.parentElement.parentElement.firstElementChild.innerText

//         var classNumAdults = buttonClicked.parentElement.getElementsByClassName("numberofadults")
//         if (classNumAdults[0].value) {
//             numAdults = classNumAdults[0].value
//         }
//         else {
//             numAdults = 0
//         }

//         var classNumKids = buttonClicked.parentElement.getElementsByClassName("numberofkids")

//         if (classNumKids[0].value) {
//             numKids = classNumKids[0].value
//         }
//         else {
//             numKids = 0
//         }

//         basket = {
//             "Name of attraction" : nameOfAttraction,
//             "Number of adults" : numAdults,
//             "Number of kids" : numKids
//         }

//         //Add basket dics to an array
//         orders.push(basket)
//         //store basket array to local storage
//         localStorage.setItem("orders", JSON.stringify(orders))
//         // Update array using the stored array in local storage
//         orders = JSON.parse(localStorage.getItem('orders'))


//         // //Updating number of orders stored in the shopping basket
//         // NumberOfOrders =NumberOfOrders +1
//         // document.getElementsByClassName("badge")[0].innerText =  (NumberOfOrders).toString()


//         // saveOrderInShoppingBasket(orders)

//     })
        
//     }
// // }


// function saveOrderInShoppingBasket(orders) {
// }

function registerEventListener(event){
        var buttonClicked = event.target

        var nameOfAttraction = buttonClicked.parentElement.parentElement.firstElementChild.innerText
        console.log(nameOfAttraction)

        var classNumAdults = buttonClicked.parentElement.querySelector(".numberofadults")
        if (classNumAdults.value) {
            numAdults = classNumAdults.value
        }
        else {
            numAdults = 0
        }

        var classNumKids = buttonClicked.parentElement.querySelector(".numberofkids")
        if (classNumKids.value) {
            numKids = classNumKids.value
        }
        else {
            numKids = 0
        }
        storeOrderInShoppingBasket(nameOfAttraction, numAdults, numKids)
    }

function storeOrderInShoppingBasket(nameOfAttraction, numAdults, numKids) {
        basket = {
                "Name of attraction" : nameOfAttraction,
                "Number of adults" : numAdults,
                "Number of kids" : numKids
        }

    var orders = localStorage.getItem('orders')
    orders = orders ? JSON.parse(orders) : []
    orders.push(basket)
    localStorage.setItem("orders", JSON.stringify(orders))
}


function getAttractions() {
    fetch("api/attractions")
    .then(response => response.json())
    .then(attractions => {
        for(i in attractions) {
            addAttraction(attractions[i])
        }
    }
    )
}


function addAttraction(attraction) {
    var temp = document.getElementsByTagName("template")[0];
    console.log(temp)
    var clon = temp.content.cloneNode(true);
    var divs = []
    var divs = clon.querySelectorAll("div")
    divs[0].innerText = attraction.name
    divs[1].innerText = attraction.description
    divs[2].children[0].getElementsByClassName("price")[0].innerText = attraction.adultPrice + ",-"
    divs[2].children[0].getElementsByClassName("price")[1].innerText = attraction.kidsPrice + ",-"
    divs[2].children[0].getElementsByClassName("adults")[0].innerText = attraction.minimumNumberOfAdults
    divs[2].children[0].getElementsByClassName("child")[0].innerText = attraction.minimumNumberOfKids
    divs[2].children[0].getElementsByClassName("percentage")[0].innerText = attraction.discount
    var button = divs[2].getElementsByClassName("orderbutton")[0]
    console.log(button)
    // registerEventListener(button)

    button.addEventListener('click', function(event) {registerEventListener(event)})

    document.body.appendChild(clon);

    }

getAttractions() 
// registerEventListeners (button)
