// 移除数组元素：编写一个函数，接受一个数组和一个值，移除数组中所有等于该值的元素，并返回新的数组。

const remove = (arr,x) =>{
    for(let i = 0;i<=arr.length-1;i++){
        if(arr[i]===x){
            arr.splice(i,1);
        }
    }
    return arr
}

console.log(remove([1,2,3,4,3],3))

