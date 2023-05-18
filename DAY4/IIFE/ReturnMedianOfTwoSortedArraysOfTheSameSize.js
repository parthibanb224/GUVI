(function (arr1, arr2) {
    let arr = arr1.concat(arr2);
    let res = arr.sort(function (a, b) { return a - b });
    let res1 = res.length / 2;
    console.log(res[(res1 - 1)], res[res1]);
})([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);