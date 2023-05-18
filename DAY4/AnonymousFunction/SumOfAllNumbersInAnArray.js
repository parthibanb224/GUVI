let res = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let output = res([1, 2, 3, 4, 5]);
console.log(output);