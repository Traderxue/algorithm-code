// 在给定的数组中，找到出现次数最多的数字。出现次数相同时，返回数值最小的数字。
const main = (arr)=>{
    let arr1 = []

    for(let i=0;i<=arr.length-1;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            if(arr[i]===arr[j]){
                arr1.push(arr[i])
            }
        }
    }

    let arr2 = arr1.filter(item=>{
        return item==arr1[0]
    })
    let arr3 = arr1.filter(item=>{
        return item==arr1[arr1.length-1]
    })

    if(arr2.length>arr3.length){
        return arr1[0]
    }else if(arr2.length<arr3.length){
        return arr1[arr1.length-1]
    }else{
        return arr1[0]>arr1[arr1.length-1]?arr1[arr1.length-1]:arr1[0]
    }

}

console.log(main([1,1,2,3,3,3,4,5]))