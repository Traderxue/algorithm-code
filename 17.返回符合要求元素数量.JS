//存在一个数组 arr。你需要对该数组的元素进行计数。如果一个数 x 存在于 arr，且 x + 1 也存在于 arr 中，那么计数加一。返回符合要求元素数量。

const main = (arr)=>{
    let num = 0
    for(let i=0;i<=arr.length-1;i++){
        for(let j=0;j<=arr.length-1;j++){
            if(arr[i]==arr[j]+1){
                num++
            }
        }
    }    
    return num
}

console.log(main([1, 1, 2, 3]))