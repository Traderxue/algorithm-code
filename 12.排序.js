// 排序：编写一个函数，接受一个整数数组作为参数，对数组进行升序排序。

const main = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                let flag = arr[i]
                arr[i] = arr[j]
                arr[j] = flag
            }
        }
    }
    return arr
}

console.log(main([1, 5, 2, 3, 4]));