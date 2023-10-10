//计算平均值：编写一个函数，接受一个整数数组作为参数，计算数组中所有数字的平均值并返回。

const main = (arr) =>{
    let res = 0
    let total = 0
    for(let i = 0;i<=arr.length-1;i++){
        total += arr[i]
    }
    res = total/arr.length
    return res
}

console.log(main([1,23,34,34,5]));