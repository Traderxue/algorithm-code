//反转字符串： 编写一个函数，反转一个字符串。

const reverseStr = (str)=>{
    let newStr = ''
    for(let i=str.length-1;i>=0;i--){
        newStr += str.charAt(i)
    }
    return newStr
}

const res = reverseStr('abcd')

console.log(res);
 