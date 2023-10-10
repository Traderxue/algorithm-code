//找到重复元素：编写一个函数，接受一个整数数组作为参数，查找数组中重复出现的元素，并返回这些元素的列表。

const findOver = (arr) => {
    let arr1 = []
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] == arr[j]) {
                arr1.push(arr[i])
            }
        }
    }
    return arr1
}

console.log(findOver([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3]));