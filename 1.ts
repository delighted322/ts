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
    function result(N) {
        if (N == 1) {
            return 1
        }
        return result(N - 1) * N
    }
    let num = result(N)
    console.log(num)
});

//1.21到文具店里买尽量多的签字笔。已知一只签字笔的价格是1元9角，而班主任给小玉的钱是A元B角，小玉想知道，她最多能买多少只签字笔呢
(async () => {
    let A = Number(await input("输入一个自然数A: "))
    let B = Number(await input("输入一个自然数B: "))

})();
