const main = (str,x) =>{
    let res = ''
    for(let i = 0;i<str.length;i++){
        if(i==0||i==x){
            res+=str[i]
        }
    }
    return res
}

console.log(main('javascript',4))