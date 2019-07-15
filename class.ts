// 11B 上课题目
import {input} from './utils'

//1. 质数

//1.1 求N以内的素数（例如求N，除的范围是根号N。证明：为何是根号N）
(async () => {
    let N = Number(await input("输入一个自然数N: "))

});

//1.2使用函数求N以内的质数
(async () => {
    let N = Number(await input("输入一个自然数N: "))

    let str = ""
    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            str += i + " "
        }
    }
    console.log(str)
    function isPrime(n : number) {
        let flag = true
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false
                break
            }
        }
        return flag
    }
});

//1.3筛选法（1，2，3，4，5，6，7...第一次循环，2，4，6，8删除，第二次循环，3，6，9，12删除）
(async () => {
    let N = Number(await input("输入一个自然数N: ")
})();