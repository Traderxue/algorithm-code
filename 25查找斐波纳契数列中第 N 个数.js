//查找斐波纳契数列中第 N 个数
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const main = (n) =>{
    if(n==1){
        return 0
    }else if(n<=3){
        return 1
    }
    let num1 = 1;
    let num2 = 1; 
    for(let i = 4;i<=n;i++){
        let next = num1+num2
        num1 = num2
        num2=next
        }
    return num2
}

console.log(main(5))