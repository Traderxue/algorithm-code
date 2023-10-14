// 输入 = ["192.168.1.1","192.118.2.1","192.168.1.1","192.118.2.1","192.118.2.1"]
// 输出 "192.118.2.1"

//给定一个字符串数组lines, 每一个元素代表一个IP地址，找到出现频率最高的IP。

const main = (ips) => {

  const ipCount = {}

  for (let ip of ips) {
    if (ipCount[ip]) {
      ipCount[ip]++     //记录ip出现的次数
    } else {
      ipCount[ip] = 1     //第一次出现的ip
    }
  }

  let res_ip = null
  let maxCount = 0;


  for (let ip in ipCount) {             //循环对象 这里的 ip 是对象 ipCounts 的属性（IP地址）
    if (ipCount[ip] > maxCount) {          
      res_ip = ip;
      maxCount = ipCount[ip];      //如果ip所对应的属性值大于maxCount,就把ip所对应属性值赋值给maxCount然后接着循环直到ipCount[ip]大于所有
    }
  }
  return res_ip
}

const ips = ["177.7.173.87", "33.7.42.50", "63.27.77.114", "120.116.28.90", "136.90.108.15", "33.7.42.50", "63.27.77.114", "120.116.28.90", "136.90.108.15", "63.27.77.114", "120.116.28.90", "136.90.108.15", "120.116.28.90", "136.90.108.15", "136.90.108.15"];
console.log(main(ips))