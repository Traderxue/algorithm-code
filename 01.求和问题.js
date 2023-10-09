//求和问题： 编写一个函数，计算给定数组的所有元素之和。

const addArr = (arr) => {
    let result = 0
    arr.forEach((item) => {
        result += item
    })
    return result
}

const res = addArr([1, 2, 3])
console.log(res)