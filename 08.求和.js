//求和：编写一个函数，接受一个整数 n 作为参数，返回 1 到 n 所有整数的和。

const add = (n)=>{
    let total = 0
    for(let i=1;i<=n;i++){
        total+=i
    }
    return total
}

const res = add(100)

console.log(res)