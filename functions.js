let number = 1;

function newItem() {
    var createElement = document.createElement("div");
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("type");
    var TextNewItem = document.createTextNode("Student " + number + ": ");
    createElement.appendChild(TextNewItem);
    createElement.appendChild(input);
    var list = document.getElementById("item");
    list.appendChild(createElement);
    number++;
}

let button = document.getElementById("button");
button.addEventListener("click", newItem);

function calculateAverage() {
    var elementTypes = document.getElementsByClassName("type");
    if (typeof elementTypes === "number") {
        alert("this is a number");
    } else {
        alert("this is a string");
    }

}

let result = document.getElementById("average");
result.addEventListener("click", calculateAverage);