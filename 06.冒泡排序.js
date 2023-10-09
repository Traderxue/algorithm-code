//冒泡排序： 实现冒泡排序算法，对一个数组进行排序

const sort = (arr) => {

    let flag
    do {
        flag = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let item = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = item
                flag = true
            }
            console.log(flag)
        }
    } while (flag)
    return arr

}
console.log(sort([1, 2, 35, 52, 6, 24]));