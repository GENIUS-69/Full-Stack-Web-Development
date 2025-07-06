//Example 1

document.
    getElementById("changeTextButton").
    addEventListener('click', function () {
        let para = document.getElementById("myParagraph");
        para.textContent = "Text changed!";
    })


//Example 2
document.
    getElementById("highlightFirstCity").
    addEventListener('click', function () {
        let citylist = document.getElementById("citiesList");
        citylist.firstElementChild.classList.add("highlight");

    })

//Example 3
document.
    getElementById("changeOrder").
    addEventListener('click', function () {
        let coffeeType = document.getElementById("coffeeType");
        coffeeType.textContent = "Espresso";
    })

//Example 4
document.
    getElementById("addNewItem").
    addEventListener('click', function () {
        let newItem = document.createElement("li");
        newItem.textContent = "Eggs";
        let itemList = document.getElementById("shoppingList");
        itemList.appendChild(newItem);
    })