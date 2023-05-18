(function (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        var a = arr[i].split("");
        var b = a.reverse().join("");
        if (arr[i] == b) {
            res.push(arr[i]);
        }
    }
    console.log(res);
})(["mom", "madam", "hello", "malayalam", "hi"]);