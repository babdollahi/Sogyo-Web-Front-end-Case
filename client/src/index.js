var orderedItems = document.getElementsByClassName("orderbutton")
console.log(orderedItems)

for (var i = 0; i < orderedItems.length ; i++) {
    var button = orderedItems[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        console.log(buttonClicked.parentElement.parentElement.querySelectorAll("parkname"))
        // console.log(buttonClicked.classList.contains())
        // console.log(buttonClicked.nextElementSibling)
        // console.log(buttonClicked.previousElementSibling)
    })
}
