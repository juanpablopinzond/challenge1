let number = 1;

function newItem() {
    var createElement = document.createElement("div");
    var TextNewItem = document.createTextNode("Student " + number);
    createElement.appendChild(TextNewItem);
    var list = document.getElementById("item");
    list.appendChild(createElement);
    number++;
}

let button = document.getElementById("button");
button.addEventListener("click", newItem);