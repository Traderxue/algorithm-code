//在给定的数组中，找到出现次数最多的数字。出现次数相同时，返回数值最小的数字。

const main = (nums) => {
    const amounts = {}

    for (let n of nums) {
        if (amounts[n]) {
            amounts[n]++
        } else {
            amounts[n] = 1
        }
    }

    let res
    let maxCount = 0

    for (let n in amounts) {
        if (amounts[n] > maxCount) {
            res = n;
            maxCount = amounts[n];
        } else if (amounts[n] === maxCount && n < res) {
            res = n;
        }
    }
    return parseInt(res)
}

let nums = [1, 1, 1, 2, 3, 3, 3, 4, 5]
console.log(main(nums))