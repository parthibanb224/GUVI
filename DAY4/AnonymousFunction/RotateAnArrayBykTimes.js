let rotate = function (arr, n) {
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
let output = rotate([1, 2, 3, 4, 5], 2);
console.log(output);