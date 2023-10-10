
// 阶乘：编写一个函数，接受一个整数 n 作为参数，返回 n 的阶乘（n!），即 n * (n-1) * (n-2) * ... * 2 * 1 的结果。

const factorial = (n)=>{
    let num = 1
    for(let i =1;i<=n;i++){
        num*=i
    }
    return num
}

console.log(factorial(5));