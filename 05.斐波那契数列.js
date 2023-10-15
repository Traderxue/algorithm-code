//斐波那契数列： 编写一个函数，计算第n个斐波那契数。

//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 每个数字是前两个数字的和

const fibonacci = (n)=>{
    if(n<=1){
        return n
    }

    let num1 = 0
    let num2 = 1

    for(let i=2;i<=n;i++){
        let next = num1 +num2
        num1=num2
        num2=next
    }
    return num2
}

console.log(fibonacci(10))