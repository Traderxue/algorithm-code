//给你一个数组和两个索引，交换下标为这两个索引的数字
//输入:  [1, 2, 3, 4], index1 = 2, index2 = 3   => [1, 2, 4, 3]

const main = (arr,index1,index2)=>{
    let flag =arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = flag
    return arr
}

console.log(main([1,2,3,4],2,3))