let median = function (arr1, arr2) {
    let arr = arr1.concat(arr2);
    let res = arr.sort(function (a, b) { return a - b });
    let res1 = res.length / 2;
    let a = res[res1 - 1];
    let b = res[res1];
    return [a, b];
}
let output = median([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
console.log(output);