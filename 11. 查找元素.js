//查找元素：编写一个函数，接受一个整数数组和一个目标整数作为参数，查找目标整数在数组中的索引，如果找不到则返回 -1。

const main = (arr,x)=>{
    for(let i= 0 ;i<=arr.length-1;i++){
        if(arr[i] == x){
            return i
        }
    }
    return -1
}


console.log(main([1,2,3,4,5],5))