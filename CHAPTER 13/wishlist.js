let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

let herPrintButton = document.getElementById("herPrintable");
herPrintButton.addEventListener("click", herPrintView);

let addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

let sheButton = document.getElementById("newButton");
sheButton.addEventListener("click", addHerThing);


let myList = [];
let myListArea = document.getElementById("wishList");

let herList = [];
let herListArea = document.getElementById("herWishList");


function addTheThing() {

    let theThing = document.getElementById("iWant");

    addToTheList(theThing);
    resetInput(theThing);

}

function addHerThing() {

    let theThing = document.getElementById("sheWants");

    addToHerList(theThing);
    resetInput(theThing);

}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);

}

function addToHerList(thingToAdd) {
    herList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = herList[herList.length - 1];

    herListArea.appendChild(newListItem);

}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (let i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}

function herPrintView() {
    let herListPage = document.getElementById("herListPage");
    let herFormArea = document.getElementById("herFormArea");

    herFormArea.style.display = "none";
    herListPage.className = "herPrint";
    herListArea.innerHTML = "";
    herList.sort();

    for (let i = 0; i < herList.length; i++) {
        herWishList.innerHTML += "<li>" + herList[i] + "</li>";
    }
    window.print();
}