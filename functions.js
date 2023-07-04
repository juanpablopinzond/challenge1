let number = 1;

function newItem() {
    var createElement = document.createElement("div");
    var input = document.createElement("input");
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
    var inputs = document.querySelectorAll("input");
    var sum = 0;
    var allnumbers = true;
    for (var i = 0; i < inputs.length; i++) {
        var value = parseInt(inputs[i].value);
        if (value === "" || isNaN(value)) {
            allnumbers = false;
            break;
        }
        sum += value;
    }

    var valueResult = document.getElementById("result");

    if (allnumbers && inputs.length > 0) {
        var average = sum / inputs.length;
        valueResult.textContent = "The average is: " + average;
    } else if (!allnumbers) {
        valueResult.textContent = "One of the values are not a number, please add correctly";
    } else {
        valueResult.textContent = "Please add value";
    }

}

let result = document.getElementById("average");
result.addEventListener("click", calculateAverage);