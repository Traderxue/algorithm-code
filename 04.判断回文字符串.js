//判断回文字符串： 编写一个函数，判断一个字符串是否是回文串（正读和倒读都一样）。txt/rar

const isCommon = (str)=>{
    let newStr = ''
    for(let i= str.length-1;i>=0;i--){
        newStr += str.charAt(i)
    }
    return newStr===str
}

const res = isCommon("txt")
console.log(res);