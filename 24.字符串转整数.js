//将字符转换为一个整数。你可以假设字符是ASCII码，也就是说转换后的整数在0~255之间

const main = (str)=>{

    const res = str.charCodeAt(0)

    if(res<0 || res>255){
        return -1
    }

    return res

}

console.log(main('A'))