//查找最大值和最小值： 编写一个函数，查找给定数组的最大值和最小值。

const findMin = (arr) => {
    if (arr.length === 0) {
        throw new Error("数组为空");
    }
    let min = arr[0]
    arr.forEach(item => {
        if (item < min) {
            min = item
        }
    })
    return min
}

const findMax = (arr) => {
    if (arr.length === 0) {
        throw new Error("数组为空");
    }
    let max = arr[0]
    arr.forEach(item => {
        if (item > max) {
            max = item
        }
    })
    return max
}

const res = findMin([])
const res1 = findMax([2, 3, 1, 0])
console.log(res, res1);