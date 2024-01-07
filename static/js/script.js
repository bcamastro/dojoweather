function closeCookie() {
    element = document.querySelector("#cookies")
    element.remove()
}

function c2f(tempVal) {
    return Math.round(9 / 5 * tempVal + 32);
}

function f2c(tempVal) {
    return Math.round ((5/9) * (tempVal - 32));
}

function tempConverter(element) {
    for (var i=1; i<9; i++) {
        var tempVal = document.querySelector("#temp" + i);
        var val = tempVal.innerText;
        if (element.value == "°F") {
        tempVal.innerText = c2f(val);
        }
        else {
        tempVal.innerText = f2c(val);
        }
    }
}