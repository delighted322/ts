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
    let N = Number(await input("输入一个自然数N: "))
    let array = []
    for (let i = 0; i <= N; i++) {
        array.push(i)
        if (i == 1) {
            array[1] = 0
        }
    }

    for(let i = 2; i < N / 2; i++) {
        let index = i + 1
        while (index <= N) {
            if ((array[index] != 0) && (array[index] % i == 0)) {
                array[index] = 0
            }
            index++
        }
    }

    let str = ""
    for (let i of array) {
        if (i != 0) {
            str += i + " "
        }
    }
    console.log(str)
});

//1.4质因数分解(将一个数字分解成质因数  其实不需要求证因数是否为指数 例如能整除4就肯定能先被2整除)
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let str = ""
    let index = 2
    while (N != 1) {
        if (N % index == 0) {
            str += index + " "
            N /= index
            index = 2
        } else {
            index++
        }
    }
    console.log(str)
});

//1.5求孪生素数(两个素数相差不大于2)
//TODO
(async () => {
    let N = Number(await input("输入一个自然数N: "))

});

//2.最大公约数和最小公倍数

//2.1 穷举法
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    let gcd = 2 //最大公约数
    let lcm = Math.min(M, N) //最小公倍数

    for (let i = 2; i <= Math.min(M, N); i++) {
        if (M % i == 0 && N % i == 0) {
            gcd = i
        }
    }
    while (true) {
        if (lcm % M == 0 && lcm % N == 0) {
            console.log("最小公倍数：", lcm)
            break
        }
        lcm++
    }
    console.log("最大公约数：", gcd)
});

//2.2 辗转相除
(async () => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    let initM = M
    let initN = N
    let temp = 0
    while (N != 0) {
        temp = M % N
        M = N
        N = temp
    }
    console.log("最大公约数：", M)
    let lcm = initM * initN / M
    console.log("最小公倍数", lcm)
});

//2.3辗转相减
(async() => {
    let M = Number(await input("输入一个自然数M: "))
    let N = Number(await input("输入一个自然数N: "))
    let initM = M
    let initN = N
    let temp = 0
    while (N != 0) {
        temp = Math.max(M, N) - Math.min(M, N)
        M = Math.max(N, temp)
        N = Math.min(N, temp)
    }
    console.log("最大公约数：", M)
    let lcm = initM * initN / M
    console.log("最小公倍数", lcm)   
});

//2.4打印n以内所有互质的数对
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    for(let i = 1; i <= N; i++) {
        let str = ""
        for(let j = 1; j <= N; j++) {
            if (i > j) {
                continue
            }
            if (gcd(i, j) == 1) {
                str += "[" + i + ", " + j + "]  "
            }
        }
        console.log(str)
    }
    
    function gcd(M : number, N : number) {
        let temp = 0
        while (N != 0) {
            temp = Math.max(M, N) - Math.min(M, N)
            M = Math.max(N, temp)
            N = Math.min(N, temp)
        }
        return M
    }
});

//2.5 N/M分数化简
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let M = Number(await input("输入一个自然数M: "))

    while(gcd(N, M) != 1) {
        let temp = gcd(N, M)
        N = N / temp
        M = M / temp
    }
    console.log(N, M)
    function gcd(M : number, N : number) {
        let temp = 0
        while (N != 0) {
            temp = Math.max(M, N) - Math.min(M, N)
            M = Math.max(N, temp)
            N = Math.min(N, temp)
        }
        return M
    }   
});

//2.6 分数的加法
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let M = Number(await input("输入一个自然数M: "))
    let O = Number(await input("输入一个自然数O: "))
    let P = Number(await input("输入一个自然数P: "))

    console.log("加法", N * P + O * M, M * P)
    console.log("减法", N * P - O * M, M * P)
    console.log("乘法", N * O, M * P)
    console.log("除法", N * P, M * O)
});

//2.7 输入一个数字组成的字符串表示循环小数，求等价的分数 
//如 输入3 输出1/3
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let i = 10
    while (N / i > 1) {
        i *= 10
    }
    console.log(N, "/", i - 1)
});

//2.8 输入一个数N，找到所有1/M + 1/P =1/N的数对
(async () => {
    let N = Number(await input("输入一个自然数N: "))
    let P = 0
    for (let M = N + 1; M <= N * 2; M++) { // M、P ∈ [N + 1, N(N + 1)]
        P = (M * N) / (M - N)
        if (P % 1 == 0) {
            console.log(M, P)
        }
    }
});

//3. 列表的顺序查找

//3.1 生成一个长为100的列表 大小为1~99
(async () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)
});

//3.2 找出列表中最小的数并打印它的下标
(async () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)

    let min = 0
    for (let i = 0; i <array.length; i++) {
        if (array[i] < array[min]) {
            min = i
        }
    }
    console.log("最小值：", array[min], "下标:", min)
});

//3.3 有一个列表，输入一个n，如果列表中有这个数，打印这个数第一次出现的下标，不存在则打印-1
(async () => {
    let N = Number(await input("输入一个自然数N："))
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)

    for (let i = 0; i < array.length; i++) {
        if (array[i] == N) {
            console.log(i)
            return
        }
    }
    console.log(-1)
});

//3.4 列表中，问前多少个数的和是不超过300的（再多加一个就超过300了）
(async () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)

    let sum = 0
    let index = 0
    while (sum <= 300) {
        sum += array[index]
        index++
    }
    console.log(index--,sum)
});

//3.5 用一个循环，同时找到列表中的最大和最小值
(async () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)

    let min = 0
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = i
        }
        if (array[i] > array[max]) {
            max = i
        }
    }
    console.log(array[min], array[max])
});

//3.6 从先往后查列表，输出最小值的下标（如果有多个输出最后一个）
(async () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)

    let min = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= array[min]) {
            min = i
        }
    }
    console.log(min, array[min])
});

//3.7 计算一下列表中奇数多还是偶数多
(async () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)

    let odd = 0 //奇数
    let even = 0 //偶数
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even++
        } else {
            odd++
        }
    }

    let str = odd > even ? "奇数多" : "偶数多"
    console.log(str)
});

//3.8 找出列表中第二大的数 (只用一次循环)
(async () => {
    let array = []
    for (let i = 0; i < 10; i++) {
        array.push(Math.round(100 * Math.random()))
    }

    array = [9,19,18,7]
    console.log(array)

    let max = 0
    let second = 1
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[max]) {
            second = max
            max = i
        } else if (array[i] > array[second]) {
            second = i
        }
    }
    console.log(array[max], array[second], max, second)
});

//3.9 找出列表中相邻两个数的和的最大值以及这两个数的下标
(async () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(100 * Math.random()))
    }
    console.log(array)

    let max = array[0] + array[1]
    let index = 1
    for (let i = 2; i < array.length; i++) {
        if (array[i] + array[i - 1] > max) {
            max = array[i] + array[i - 1]
            index = i
        }
    }
    console.log(max, index - 1, index)
});

//4. 二维列表

//4.1 生成一个20行 30列的列表，写一个函数，把这个二维列表打印成矩阵
function randMatrix(M : number, N : number) {
    //let M = Number(await input("请输入一个自然数M：")) //行
    //let N = Number(await input("请输入一个自然数N：")) //列

    let list = []   //这里如果写 let list = Array<Array<number>>  会出错 why?
    for (let m = 0; m < M; m++) {
        list.push([])
        for (let n = 0; n < N; n++) {
            list[m].push(Math.round(10 * Math.random()))
        }
    }
    return list
}

function printMatrix(list : Array<Array<number>>) {
    for (let i = 0; i < list.length; i++) {
        let str = ""
        for (let j = 0; j < list[i].length; j++) {
            str += list[i][j] + " "
        }
        console.log(str)
    }
};

//4.2 求最大值以及它的下标
(async () => {
    let M = Number(await input("请输入一个自然数M：")) //行
    let N = Number(await input("请输入一个自然数N：")) //列
    let list = randMatrix(M, N)
    printMatrix(list)

    let index = [0, 0]
    for (let m = 0; m < list.length; m++) {
        for (let n = 0; n < list[m].length; n++) {
            if (list[m][n] > list[index[0]][index[1]]) {
                index[0] = m
                index[1] = n
            }
        }
    }
    console.log(list[index[0]][index[1]], index[0], index[1])
});

//4.3 用一个循环打印二维列表
(async () => {
    let M = Number(await input("请输入一个自然数M：")) //行
    let N = Number(await input("请输入一个自然数N：")) //列
    let list = randMatrix(M, N)
    printMatrix(list)
})();