//查找第一个重复的字符：编写一个函数，接受一个字符串，返回字符串中第一个重复的字符。如果没有不重复的字符，返回 -1。

const main = (str)=>{
    for(let i=0;i<=str.length-1;i++){
        for(let j=i+1;j<=str.length-1;j++){
            if(str[i]==str[j]){
                return str[i]
            }
        }
    }
    return -1
}

console.log(main('javascript'))
