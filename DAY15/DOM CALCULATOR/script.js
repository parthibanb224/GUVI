function dis(x) {
    if (document.getElementById("result").value == 0) {
        document.getElementById("result").value = "";
        document.getElementById("result").value = x;
    } else {
        document.getElementById("result").value += x;

    }

}

function equal() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}

function clean() {
    document.getElementById("result").value = 0;
}