let oddNum = function(arr)
{
   let res=[];
   for(let i=0; i<arr.length; i++)
   {
    if(arr[i]%2 != 0)
    {
        res.push(arr[i]);
    }
   }
   return res;
}
let outputData=oddNum([1,2,3,4,5]);
console.log(outputData);