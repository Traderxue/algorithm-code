//二分查找： 实现二分查找算法，查找一个有序数组中的特定元素的索引。

const binarySearch = (arr, x) => {
    arr.sort((a, b) => { b - a })
    let low = 0
    let height = arr.length - 1

    while (low <= height) {
        let mid = (low + height) / 2
        if (arr[mid] === x) {
            return mid
        } else if (arr[mid] < x) {
            low = mid + 1
        } else {
            height = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));