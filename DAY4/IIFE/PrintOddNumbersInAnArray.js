(function(arr){
    let sum =[];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2 != 0)
        {
            sum.push(arr[i]);
        }
    }
    console.log(sum);
})([1,2,3,4,5]);