(function (str) {
    let temp = "";
    let str1 = str.split(" ");
    for (let i = 0; i < str1.length; i++) {
        temp = temp + str1[i].charAt(0).toUpperCase() + str1[i].slice(1) + " ";
    }
    console.log(temp);
})("hello world");