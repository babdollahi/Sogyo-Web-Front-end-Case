function registerEventListener(event) {
        var buttonClicked = event.target

        var nameOfAttraction = buttonClicked.parentElement.parentElement.firstElementChild.innerText
        // console.log(nameOfAttraction)

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

    var numberOfOrders = orders.length
    updateNumberOfOrders(numberOfOrders)
}

function updateNumberOfOrders(numberOfOrders) { 
    document.getElementsByClassName("badge")[0].innerText =  (numberOfOrders).toString()
}

function getAttractions() {
    fetch("api/attractions")
    .then(response => response.json())
    .then(attractions => {
        for(i in attractions) {
            addAttraction(attractions[i])
        }
    })
}

function addAttraction(attraction) {
    var temp = document.getElementsByTagName("template")[0];
    // console.log(temp)
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

    // if(attraction.available = 0) {
    //     console.log(attraction.available, attraction.name)
        
    //  } 
    // else {
        button.addEventListener('click', function(event) {registerEventListener(event)})
    // }

    document.body.appendChild(clon)
}

function setBadge() {
    const orders = localStorage.getItem("orders")
    if (orders) {
        const numberOfOrders = JSON.parse(orders).length
        updateNumberOfOrders(numberOfOrders)
    }
}

getAttractions() 
setBadge()