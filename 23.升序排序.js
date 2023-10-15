// 给一组整数，按照升序排序，使用选择排序，冒泡排序，插入排序或者任何 O(n2) 的排序算法。

// 输入: [3, 2, 1, 4, 5]
// 输出: [1, 2, 3, 4, 5]


const main = (arr)=>{
    for(let i = 0;i<=arr.length-1;i++){
        for(let j = i+1;j<=arr.length-1;j++){
            if(arr[i]>arr[j]){
                let flag = arr[j]
                arr[j] = arr[i]
                arr[i] = flag
            }
        }
    }
    return arr
}

console.log(main([3, 2, 1, 4, 5]))