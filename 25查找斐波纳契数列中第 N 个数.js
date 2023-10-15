//查找斐波纳契数列中第 N 个数
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const main = (n) =>{
    if (n == 1) {
        return 0;
      }
      
      let a = 0;
      let b = 1;
      let res = 0;
    
      for (let i = 3; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
      }
      
      return res;
}

console.log(main(3))