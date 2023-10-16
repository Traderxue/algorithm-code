//找到n以内的素数。 素数只能被1和它本身整除

const main = (n) => {
    let arr = []
    for (let j = 2; j < n; j++) {
        let isPrime = true;
        for (let i = 2; i < j; i++) {
            if (j % i == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            arr.push(j)
        }
    }
    return arr

}

console.log(main(100));
