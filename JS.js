let count = 0;
function Inc() {
    count = count + 1;
    document.getElementById("Heading").innerHTML = count;
}
function Dec() {
    if (count >= 1) {
        count = count - 1;
        document.getElementById("Heading").innerHTML = count;
    }
    else {
        document.getElementById("Heading").innerHTML = 0;
    }
}
function reset() {
    document.getElementById("Heading").innerHTML = 0;
}