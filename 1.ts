//python练习题

import {input} from './utils'

//1.1输入一个自然数N，打印N个星号，每行一个。 
(async () => {
    let N = await input("输入一个自然数N: ")
    for (let i = 0; i < N; i++) {
        console.log("*")
    }
});

//1.2输入一个自然数N，打印N * 4个星号，每行两个
(async () => {
    let N =  Number(await input("输入一个自然数N: ")) //转换类型的函数应该在await的的外面 等待接收输入了之后再转int
    //let N = await Number(input("输入一个自然数N: "))   × 不行 会出错
    for (let i = 0; i < N; i++) {
        console.log("**")
    }   
});

//1.3输入一个自然数N, 在一行中打印N个星号。
(async () => {
    let N = await input("输入一个自然数N: ")
    let str = ""
    for (let i = 0; i < N; i++) {
        str += "* "
    }
    console.log(str)
});

//1.4输入一个自然数N，打印从0至N一1的所有整数（包括0和N -1）。
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for (let i = 0; i < N; i++) {
        console.log(i)
    }
});

//1.5输入一个正整数N，打印从1至N的所有整数（包括1和N) 
(async () => {
    let N =  Number(await input("输入一个自然数N: "))
    for (let i = 1; i < N + 1; i++) {
        console.log(i)
    }
});

//1.6输入一个正整数N，倒序打印从N至1的所有整数（包括N和1）
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for (let i = N; i > 0; i--) {
        console.log(i)
    }
});

//1.7输入一个正整数N，打印从-N至N中的所有整数（包括-N和N) 
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for (let i = -N; i < N + 1; i++) {
        console.log(i)
    }
});

//1.8输入两个正整数M和N,已知M小于N,打印N一M个星号（*），每行一个
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    for (let i = 0; i < N - M; i++) {
        console.log("*")
    }
});

//1.9输入两个正整数M和N,已知M小于N,打印从M到N之间所有的整数（包括M和N)
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    for (let i = M; i < N + 1; i++) {
        console.log(i)
    }

});

//1.10输入两个正整数M和N, M和N之间的大小未知，打印从M到N之间所有的整数（包括M和N) 
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    let i = M < N ? M : N
    for (let i = M < N ? M : N; i < Math.max(M, N) + 1; i++) {
        console.log(i)
    } 
});

//1.11输入一个自然数N,打印从0至2 * N之间的所有偶数（包括0，不包括2 * N）
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for (let i = 0; i < 2 * N; i+=2) {
        console.log(i)
    }
});

//1.12输入一个自然数N,打印小于N的所有除以3余1的自然数。（至少用两种方法）。
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for (let i = 1; i < N; i++) {
        if ((i % 3) == 1) {
            console.log(i)
        }
    }
});

//1.13输入一个自然数N,倒序打印小于N的所有正偶数
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for (let i = N; i > 0; i--) {
        if ((i % 2) == 0) {
            console.log(i)
        }
    }
});

//1.14输入一个自然数N,倒序打印所有小于N个位数为7的自然数
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for (let i = N; i > 0; i--) {6
        if ((i % 10) == 7) {
            console.log(i)
        }
    }
});

//1.15输入两个自然数M和N,打印所有小于N的是M倍数的自然数
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    for (let i = M; i < N; i++) {
        if ((i % M) == 0) {
            console.log(i)
        }
    }
});

//1.16输入两个自然数M和N,打印所有小于M * N的是M倍数或是N倍数的自然数
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    for (let i = Math.min(M, N); i < M * N; i++) {
        if ((i % M == 0) || (i % N == 0)) {
            console.log(i)
        }
    }
});

//1.17输入两个自然数M和N, M和N之间的大小未知，逆序打印M和N中间所有除以3余2的数（包括M和N) 
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    for (let i = Math.max(M, N); i > Math.min(M, N) - 1; i--) {
        if (i % 3 == 2) {
            console.log(i)
        }
    }
});

//1.18输入一个自然数N，求1 + 2 + 3 + .... + N
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let sum = 0
    for (let i = 1; i <= N; i++) {
        sum += i
    }
    console.log("sum:",sum)
});

//1.19输入一个自然数N，求1 + 1/2 + 1/3 +.... + 1/N，打印小数部分
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let sum = 0
    for (let i = 1; i <= N; i++) {
        sum += 1 / i
    }
    console.log(sum % 1)
});

//1.20输入一个小于20的数N，求1 * 2 * 3 * ... * N（即求N的阶乘）
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let fn = N => {
        if (N == 1) {
            return 1
        }
        return fn(N - 1) * N
    }
    console.log(fn(N))
});

//1.21到文具店里买尽量多的签字笔。已知一只签字笔的价格是1元9角，而班主任给小玉的钱是A元B角，小玉想知道，她最多能买多少只签字笔呢
(async () => {
    let A = Number(await input("输入一个自然数A: "))
    let B = Number(await input("输入一个自然数B: "))
    let num = (A * 10 + B) / (1 * 10 + 9)
    console.log(num - (num % 1))
});

//1.22输入两个小数M和N，计算它们的和，并四舍五入到整数，将计算结果打印出来
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    let num = M + N
    let float = num % 1
    if (float >= 0.5) {
        num = num - float +1
    } else {
        num = num - float
    }
    console.log(num)
});

//2.1某车站行李托运收费标准是:10公斤或10公斤以下，收费2.5 元，超过10公斤的行李，按每超过1公斤增加1.5元进行收费。试编一程序，输入行李的重量，算出托运费。
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    if (N <= 10) {
        console.log(2.5)
    } else {
        let extra = N - (N % 1) - 10 
        console.log(2.5 + 1.5 * extra)
    }
});

//2.2.输入某学生成绩，如果86分以上（包括86分）则输出“VERY GOOD”，如果在60到85之间的则输出“GOOD”（包括60和85），小于60的则输出“BAD”
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    if (N < 60) {
        console.log("BAD")
    } else if ((N >= 60) && (N <= 85)){
        console.log("GOOD")
    } else {
        console.log("VERY GOOD")
    }
});

//2.3输入一个月份，输出该月是多少天（假设是平年不是闰年）
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let b = [31,28,31,30,31,30,31,31,30,31,30,31]
    console.log(b[N - 1])
});

//2.4输入某月某日,判断这一天是这一年的第几天?（假设是平年）
(async () => {
    let month = Number(await input("输入月 month: "))
    let day = Number(await input("输入日 day: "))
    let b = [31,28,31,30,31,30,31,31,30,31,30,31]
    let sum = 0
    for (let i = 1; i < month; i++) {
        sum += b[i - 1]
    }
    sum += day
    console.log(sum)
});

//2.5输入一个年份，如果是闰年，则输出“TRUE”,否则输出“FALSE”
(async () => {
    let year = Number(await input("输入年份: "))
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("TRUE")
    } else {
        console.log("FALSe")
    }
});

//2.6输入一个年份和月份，输出该月是多少天
(async () => {
    let year = Number(await input("输入年份: "))
    let month = Number(await input("输入月 month: "))
    let ping = [31,28,31,30,31,30,31,31,30,31,30,31]
    let run = [31,29,31,30,31,30,31,31,30,31,30,31]
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(run[month - 1])      
    } else {
        console.log(ping[month - 1])
    }
});

//2.7电子表上的时间显示方法形如xx:xx:xx，现在给出一个时间N，单位是秒，要求按照电子表格式输出。输出保证不会超过24小时
(async () => {
    let time = Number(await input("输入时间: "))
    let h = time / (60 * 60)
    h = h - h % 1
    let m = (time - 60 * 60 * h) / 60
    m = m - m % 1
    let s = time % 60
    let str = ""
    let list = [h, m, s]
    for (let i in list) {
        if (list[i] < 10) {
            str += "0" + list[i]
        } else {
            str += list[i]
        }
        if (Number(i) != 2) {
            str += ":"
        }
    }
    console.log(str)
});

//2.8东东给自己的做题时间做了精确的计时(计时按 24 小时制计算)，他从 A 时 B 分一直做到当天的 C 时 D 分，请你帮他计算一下，他这天一共做了多少时间呢?
(async () => {
    let A = Number(await input("输入一个自然数A: "))
    let B = Number(await input("输入一个自然数B: "))
    let C = Number(await input("输入一个自然数C: "))   
    let D = Number(await input("输入一个自然数D: "))
    let min = 60 - B + 60 * (C - A - 1) + D
    let m = min % 60
    let h = (min - m) / 60
    console.log(h,"时",m,"分")
});

//2.9一个笼子里面关了鸡和兔子（鸡有2只脚，兔子有4只脚，没有例外）。已经知道了笼子里面脚的总数a，问笼子里面至少有多少只动物，至多有多少只动物
(async () => {
    let A = Number(await input("输入一个自然数A: "))
    let most = A / 2
    let lest = (A - (A % 4)) / 4 + (A % 4) / 2
    console.log("至少有",lest,"只","至多有",most,"只")
});

//2.10你买了一箱n个苹果，很不幸的是买完时箱子里混进了一条虫子。虫子每x小时能吃掉一个苹果，假设虫子在吃完一个苹果之前不会吃另一个，那么经过y小时你还有多少个完整的苹果？
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let X = Number(await input("输入一个自然数X: "))
    let Y = Number(await input("输入一个自然数Y: "))
    let num = N - Math.ceil(Y / X)
    console.log(num)
});

//2.11相传韩信才智过人，从不直接清点自己军队的人数，只要让士兵先后以三人一排、五人一排、七人一排地变换队形，而他每次只掠一眼队伍的排尾就知道总人数了。
//输入3个非负整数a，b，c，表示每种队形排尾的人数（a<3，b<5，c<7），输出总人数的最小值，如果没有则输出no。例如：输入2 1 6 输出：41
(async () => {
    let A = Number(await input("输入一个自然数A: "))
    let B = Number(await input("输入一个自然数B: "))
    let C = Number(await input("输入一个自然数C: "))
    let num = 1
    while (true) {
        if ((num % 7 == C) && (num % 5 == B) && (num % 3 == A)) {
            console.log(num)
            break
        }
        num++
    }
});

//2.12某程序员开始工作，年薪N（N不小于20）万，他希望在中关村公馆买一套60平米的房子，现在价格是200万，假设房子价格以每年百分之K（K不超过3）增长，
//并且该程序员未来年薪不变，且不吃不喝，不用交税，每年所得N万全都积攒起来，问第几年能够买下这套房子？（第一年年薪N万，房价200万）
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let K = Number(await input("输入一个自然数K: "))
    let price = 200
    let money = 20

})();