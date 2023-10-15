//给出两个整数 a , b ,以及一个操作符 opeator+, -, *, /返回结果 a<operator>b

const main = (a,b,operator) =>{
    switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return parseInt(a/b)
        default:
            return -1
    }
}
console.log(main(10,20,'/'))