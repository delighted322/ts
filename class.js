"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
// 11B 上课题目
var utils_1 = require("./utils");
//1. 质数
//1.1 求N以内的素数（例如求N，除的范围是根号N。证明：为何是根号N）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/];
        }
    });
}); });
//1.2使用函数求N以内的质数
(function () { return __awaiter(_this, void 0, void 0, function () {
    function isPrime(n) {
        var flag = true;
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    var N, _a, str, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                str = "";
                for (i = 2; i <= N; i++) {
                    if (isPrime(i)) {
                        str += i + " ";
                    }
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//1.3筛选法（1，2，3，4，5，6，7...第一次循环，2，4，6，8删除，第二次循环，3，6，9，12删除）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, array, i, i, index, str, _i, array_1, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                array = [];
                for (i = 0; i <= N; i++) {
                    array.push(i);
                    if (i == 1) {
                        array[1] = 0;
                    }
                }
                for (i = 2; i < N / 2; i++) {
                    index = i + 1;
                    while (index <= N) {
                        if ((array[index] != 0) && (array[index] % i == 0)) {
                            array[index] = 0;
                        }
                        index++;
                    }
                }
                str = "";
                for (_i = 0, array_1 = array; _i < array_1.length; _i++) {
                    i = array_1[_i];
                    if (i != 0) {
                        str += i + " ";
                    }
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//1.4质因数分解(将一个数字分解成质因数  其实不需要求证因数是否为指数 例如能整除4就肯定能先被2整除)
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, str, index;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                str = "";
                index = 2;
                while (N != 1) {
                    if (N % index == 0) {
                        str += index + " ";
                        N /= index;
                        index = 2;
                    }
                    else {
                        index++;
                    }
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//1.5求孪生素数(两个素数相差不大于2)
//TODO
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/];
        }
    });
}); });
//2.最大公约数和最小公倍数
//2.1 穷举法
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, gcd, lcm, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数M: ")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                gcd = 2 //最大公约数
                ;
                lcm = Math.min(M, N) //最小公倍数
                ;
                for (i = 2; i <= Math.min(M, N); i++) {
                    if (M % i == 0 && N % i == 0) {
                        gcd = i;
                    }
                }
                while (true) {
                    if (lcm % M == 0 && lcm % N == 0) {
                        console.log("最小公倍数：", lcm);
                        break;
                    }
                    lcm++;
                }
                console.log("最大公约数：", gcd);
                return [2 /*return*/];
        }
    });
}); });
//2.2 辗转相除
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, initM, initN, temp, lcm;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数M: ")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                initM = M;
                initN = N;
                temp = 0;
                while (N != 0) {
                    temp = M % N;
                    M = N;
                    N = temp;
                }
                console.log("最大公约数：", M);
                lcm = initM * initN / M;
                console.log("最小公倍数", lcm);
                return [2 /*return*/];
        }
    });
}); });
//2.3辗转相减
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, initM, initN, temp, lcm;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数M: ")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                initM = M;
                initN = N;
                temp = 0;
                while (N != 0) {
                    temp = Math.max(M, N) - Math.min(M, N);
                    M = Math.max(N, temp);
                    N = Math.min(N, temp);
                }
                console.log("最大公约数：", M);
                lcm = initM * initN / M;
                console.log("最小公倍数", lcm);
                return [2 /*return*/];
        }
    });
}); });
//2.4打印n以内所有互质的数对
(function () { return __awaiter(_this, void 0, void 0, function () {
    function gcd(M, N) {
        var temp = 0;
        while (N != 0) {
            temp = Math.max(M, N) - Math.min(M, N);
            M = Math.max(N, temp);
            N = Math.min(N, temp);
        }
        return M;
    }
    var N, _a, i, str, j;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 1; i <= N; i++) {
                    str = "";
                    for (j = 1; j <= N; j++) {
                        if (i > j) {
                            continue;
                        }
                        if (gcd(i, j) == 1) {
                            str += "[" + i + ", " + j + "]  ";
                        }
                    }
                    console.log(str);
                }
                return [2 /*return*/];
        }
    });
}); });
//2.5 N/M分数化简
(function () { return __awaiter(_this, void 0, void 0, function () {
    function gcd(M, N) {
        var temp = 0;
        while (N != 0) {
            temp = Math.max(M, N) - Math.min(M, N);
            M = Math.max(N, temp);
            N = Math.min(N, temp);
        }
        return M;
    }
    var N, _a, M, _b, temp;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数M: ")];
            case 2:
                M = _b.apply(void 0, [_c.sent()]);
                while (gcd(N, M) != 1) {
                    temp = gcd(N, M);
                    N = N / temp;
                    M = M / temp;
                }
                console.log(N, M);
                return [2 /*return*/];
        }
    });
}); });
//2.6 分数的加法
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, M, _b, O, _c, P, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_e.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数M: ")];
            case 2:
                M = _b.apply(void 0, [_e.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数O: ")];
            case 3:
                O = _c.apply(void 0, [_e.sent()]);
                _d = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数P: ")];
            case 4:
                P = _d.apply(void 0, [_e.sent()]);
                console.log("加法", N * P + O * M, M * P);
                console.log("减法", N * P - O * M, M * P);
                console.log("乘法", N * O, M * P);
                console.log("除法", N * P, M * O);
                return [2 /*return*/];
        }
    });
}); });
//2.7 输入一个数字组成的字符串表示循环小数，求等价的分数 
//如 输入3 输出1/3
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                i = 10;
                while (N / i > 1) {
                    i *= 10;
                }
                console.log(N, "/", i - 1);
                return [2 /*return*/];
        }
    });
}); });
//2.8 输入一个数N，找到所有1/M + 1/P =1/N的数对
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, P, M;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                P = 0;
                for (M = N + 1; M <= N * 2; M++) { // M、P ∈ [N + 1, N(N + 1)]
                    P = (M * N) / (M - N);
                    if (P % 1 == 0) {
                        console.log(M, P);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//3. 列表的顺序查找
//3.1 生成一个长为100的列表 大小为1~99
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 100; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        console.log(array);
        return [2 /*return*/];
    });
}); });
//3.2 找出列表中最小的数并打印它的下标
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i, min, i;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 100; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        console.log(array);
        min = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] < array[min]) {
                min = i;
            }
        }
        console.log("最小值：", array[min], "下标:", min);
        return [2 /*return*/];
    });
}); });
//3.3 有一个列表，输入一个n，如果列表中有这个数，打印这个数第一次出现的下标，不存在则打印-1
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, array, i, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                array = [];
                for (i = 0; i < 100; i++) {
                    array.push(Math.round(100 * Math.random()));
                }
                console.log(array);
                for (i = 0; i < array.length; i++) {
                    if (array[i] == N) {
                        console.log(i);
                        return [2 /*return*/];
                    }
                }
                console.log(-1);
                return [2 /*return*/];
        }
    });
}); });
//3.4 列表中，问前多少个数的和是不超过300的（再多加一个就超过300了）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i, sum, index;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 100; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        console.log(array);
        sum = 0;
        index = 0;
        while (sum <= 300) {
            sum += array[index];
            index++;
        }
        console.log(index--, sum);
        return [2 /*return*/];
    });
}); });
//3.5 用一个循环，同时找到列表中的最大和最小值
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i, min, max, i;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 100; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        console.log(array);
        min = 0;
        max = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] < array[min]) {
                min = i;
            }
            if (array[i] > array[max]) {
                max = i;
            }
        }
        console.log(array[min], array[max]);
        return [2 /*return*/];
    });
}); });
//3.6 从先往后查列表，输出最小值的下标（如果有多个输出最后一个）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i, min, i;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 100; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        console.log(array);
        min = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] <= array[min]) {
                min = i;
            }
        }
        console.log(min, array[min]);
        return [2 /*return*/];
    });
}); });
//3.7 计算一下列表中奇数多还是偶数多
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i, odd, even, i, str;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 100; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        console.log(array);
        odd = 0 //奇数
        ;
        even = 0 //偶数
        ;
        for (i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                even++;
            }
            else {
                odd++;
            }
        }
        str = odd > even ? "奇数多" : "偶数多";
        console.log(str);
        return [2 /*return*/];
    });
}); });
//3.8 找出列表中第二大的数 (只用一次循环)
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i, max, second, i;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 10; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        array = [9, 19, 18, 7];
        console.log(array);
        max = 0;
        second = 1;
        for (i = 1; i < array.length; i++) {
            if (array[i] > array[max]) {
                second = max;
                max = i;
            }
            else if (array[i] > array[second]) {
                second = i;
            }
        }
        console.log(array[max], array[second], max, second);
        return [2 /*return*/];
    });
}); });
//3.9 找出列表中相邻两个数的和的最大值以及这两个数的下标
(function () { return __awaiter(_this, void 0, void 0, function () {
    var array, i, max, index, i;
    return __generator(this, function (_a) {
        array = [];
        for (i = 0; i < 100; i++) {
            array.push(Math.round(100 * Math.random()));
        }
        console.log(array);
        max = array[0] + array[1];
        index = 1;
        for (i = 2; i < array.length; i++) {
            if (array[i] + array[i - 1] > max) {
                max = array[i] + array[i - 1];
                index = i;
            }
        }
        console.log(max, index - 1, index);
        return [2 /*return*/];
    });
}); });
//4. 二维列表
//4.1 生成一个20行 30列的列表，写一个函数，把这个二维列表打印成矩阵
function randMatrix(M, N) {
    //let M = Number(await input("请输入一个自然数M：")) //行
    //let N = Number(await input("请输入一个自然数N：")) //列
    var list = []; //这里如果写 let list = Array<Array<number>>  会出错 why?
    for (var m = 0; m < M; m++) {
        list.push([]);
        for (var n = 0; n < N; n++) {
            list[m].push(Math.round(10 * Math.random()));
        }
    }
    return list;
}
//打印二维列表
function printMatrix(list) {
    for (var i = 0; i < list.length; i++) {
        var str = "";
        for (var j = 0; j < list[i].length; j++) {
            str += list[i][j] + " ";
        }
        console.log(str);
    }
}
;
//4.2 求最大值以及它的下标
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, index, m, n;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]) //行
                ;
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]) //列
                ;
                list = randMatrix(M, N);
                printMatrix(list);
                index = [0, 0];
                for (m = 0; m < list.length; m++) {
                    for (n = 0; n < list[m].length; n++) {
                        if (list[m][n] > list[index[0]][index[1]]) {
                            index[0] = m;
                            index[1] = n;
                        }
                    }
                }
                console.log(list[index[0]][index[1]], index[0], index[1]);
                return [2 /*return*/];
        }
    });
}); });
//4.3 用一个循环打印二维列表
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, x, y, str, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]) //行
                ;
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]) //列
                ;
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("------------");
                x = 0;
                y = 0;
                str = "";
                for (i = 0; i < M * N; i++) {
                    x = Math.floor(i / N);
                    y = i % N;
                    str += list[x][y] + " ";
                    if (y == N - 1) {
                        console.log(str);
                        str = "";
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//4.4 弓字型打印
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, x, y, str, index, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]) //行
                ;
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]) //列
                ;
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("-----------------------");
                x = 0;
                y = 0;
                str = "";
                index = 0;
                for (i = 0; i < M * N; i++) {
                    x = Math.floor(i / N);
                    if (x % 2 == 0) {
                        y = i % N;
                    }
                    else {
                        y = N - 1 - i % N;
                    }
                    str += list[x][y] + " ";
                    index++;
                    if (index == N) {
                        console.log(str);
                        index = 0;
                        str = "";
                    }
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//4.5 斜着打印 右上到左下  (其实 每一斜行x和y的和相等 可以简化)
//TODO
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, x, y, str, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]) //行
                ;
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]) //列
                ;
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("-----------------------");
                x = 0;
                y = 0;
                str = "";
                for (i = 0; i < M + N; i++) {
                    while ((x >= 0 && x < M) && (y >= 0 && y < N)) {
                        str += list[x][y] + " ";
                        x += 1;
                        y -= 1;
                    }
                    if (i < N - 1) {
                        x = 0;
                        y = i + 1;
                    }
                    else {
                        y = N - 1;
                        x = i + 2 - N;
                    }
                    console.log(str);
                    str = "";
                }
                return [2 /*return*/];
        }
    });
}); });
//4.6 找到二维列表中十字范围之和的最大值
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, max, i, j, sum, y, x;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]) //行
                ;
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]) //列
                ;
                list = randMatrix(M, N);
                printMatrix(list);
                max = 0;
                for (i = 0; i < M; i++) {
                    for (j = 0; j < N; j++) {
                        sum = 0;
                        for (y = 0; y < N; y++) {
                            sum += list[i][y];
                        }
                        for (x = 0; x < M; x++) {
                            sum += list[x][j];
                        }
                        sum -= list[i][j];
                        if (sum > max) {
                            max = sum;
                        }
                    }
                }
                console.log(max);
                return [2 /*return*/];
        }
    });
}); });
//5 一维列表的交换
//5.1 生成一个长度为20的一维列表
function randList(len) {
    var list = [];
    for (var i = 0; i < len; i++) {
        list.push(Math.round(Math.random() * 20));
    }
    return list;
}
//打印一维列表
function printList(list) {
    var str = "";
    for (var i = 0; i < list.length; i++) {
        str += list[i] + " ";
    }
    console.log(str);
}
//5.2 把列表中的值都向前移一格
(function () {
    var list = randList(20);
    printList(list);
    var first = list[0];
    for (var i = 0; i < list.length; i++) {
        list[i] = list[i + 1];
        if (i == list.length - 1) {
            list[i] = first;
        }
    }
    printList(list);
});
//5.3 把列表中的值都向后移动一格
(function () {
    var list = randList(20);
    printList(list);
    var last = list[list.length - 1];
    for (var i = list.length - 1; i >= 0; i--) {
        list[i] = list[i - 1];
        if (i == 0) {
            list[i] = last;
        }
    }
    printList(list);
});
//5.4 成对交换  1跟2换 3跟4换 5跟6换
(function () {
    var list = randList(20);
    printList(list);
    for (var i = 1; i < list.length; i += 2) {
        var temp = list[i];
        list[i] = list[i - 1];
        list[i - 1] = temp;
    }
    printList(list);
});
//5.5 列表转置
(function () {
    var list = randList(20);
    printList(list);
    for (var i = 0; i < list.length / 2; i++) {
        var temp = list[i];
        list[i] = list[list.length - 1 - i];
        list[list.length - 1 - i] = temp;
    }
    printList(list);
});
//5.6 将列表中的每个数变成自己和前一个数的和 (第一个数是第一个数加最后一个数  加的是原列表里的值)
(function () {
    var list = randList(20);
    printList(list);
    var last = list[list.length - 1];
    for (var i = list.length - 1; i >= 0; i--) {
        if (i == 0) {
            list[i] = list[i] + last;
            break;
        }
        list[i] = list[i] + list[i - 1];
    }
    printList(list);
});
//5.7 最大最小值交换
(function () {
    var list = randList(10);
    printList(list);
    var max = 0;
    var min = 0;
    for (var i = 1; i < list.length - 1; i++) {
        if (list[i] > list[max]) {
            max = i;
        }
        if (list[i] < list[min]) {
            min = i;
        }
    }
    var temp = list[min];
    list[min] = list[max];
    list[max] = temp;
    printList(list);
});
//6 二维列表的交换
//生成一个8 × 8的二维列表
//6.1 在原位将二维列表左右翻转
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, i, j, temp;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                for (i = 0; i < list.length; i++) {
                    for (j = 0; j < list[i].length / 2; j++) {
                        temp = list[i][j];
                        list[i][j] = list[i][list[i].length - 1 - j];
                        list[i][list[i].length - 1 - j] = temp;
                    }
                }
                console.log("------------------------------");
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//6.2 上下翻转
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, j, i, temp;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                for (j = 0; j < list[0].length; j++) {
                    for (i = 0; i < list.length / 2; i++) {
                        temp = list[i][j];
                        list[i][j] = list[list.length - 1 - i][j];
                        list[list.length - 1 - i][j] = temp;
                    }
                }
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//6.3 转置 沿对角线翻转
//6.3.1 沿左上到右下的对角线翻转
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, i, j, temp;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                for (i = 1; i < M; i++) {
                    for (j = 0; j < i; j++) {
                        temp = list[i][j];
                        list[i][j] = list[j][i];
                        list[j][i] = temp;
                    }
                }
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//6.3.2 沿右上到左下的对角线翻转
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, i, j, temp;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                for (i = 0; i < M - 1; i++) {
                    for (j = 0; j < N - 1 - i; j++) {
                        temp = list[i][j];
                        list[i][j] = list[N - 1 - j][N - 1 - i];
                        list[N - 1 - j][N - 1 - i] = temp;
                    }
                }
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//6.4 中心对称
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, i, j, temp;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                for (i = 0; i < list.length / 2; i++) {
                    for (j = 0; j < list.length; j++) {
                        temp = list[i][j];
                        list[i][j] = list[M - 1 - i][N - 1 - j];
                        list[M - 1 - i][N - 1 - j] = temp;
                    }
                }
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//6.5 把8 × 8的矩阵分成多个2 × 2的小矩阵 每个小矩阵内部的数字顺时针移动一位
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, i, j, a, b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                for (i = 0; i < list.length - 1; i += 2) {
                    for (j = 0; j < list[i].length - 1; j += 2) {
                        a = list[i][j];
                        b = list[i][j + 1];
                        list[i][j] = list[i + 1][j];
                        list[i][j + 1] = a;
                        list[i + 1][j] = list[i + 1][j + 1];
                        list[i + 1][j + 1] = b;
                    }
                }
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//6.6 交换矩阵的最大最小数
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, max, min, i, j, a, b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                max = [0, 0];
                min = [0, 0];
                for (i = 0; i < list.length; i++) {
                    for (j = 0; j < list[i].length; j++) {
                        if (list[i][j] > list[max[0]][max[1]]) {
                            max = [i, j];
                        }
                        if (list[i][j] < list[min[0]][min[1]]) {
                            min = [i, j];
                        }
                    }
                }
                a = list[max[0]][max[1]];
                b = list[min[0]][min[1]];
                list[max[0]][max[1]] = b;
                list[min[0]][min[1]] = a;
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//6.7 矩阵右转90度
//TODO 有没有办法不用另外一个数组 直接原地转90度
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, list2, i, j, i, j;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                list2 = [];
                for (i = 0; i < M; i++) {
                    list2.push([]);
                    for (j = 0; j < N; j++) {
                        list2[i].push(-1);
                    }
                }
                for (i = 0; i < list.length; i++) {
                    for (j = 0; j < list[i].length; j++) {
                        list2[i][j] = list[i][j];
                        if (list2[list[i].length - 1 - j][i] != -1) {
                            list[i][j] = list2[list[i].length - 1 - j][i];
                        }
                        else {
                            list[i][j] = list[list[i].length - 1 - j][i];
                        }
                    }
                }
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//原地右转90度
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, list, a, b, c, d, i, j, temp;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                list = randMatrix(M, N);
                printMatrix(list);
                console.log("----------------");
                a = [];
                b = [];
                c = [];
                d = [];
                for (i = 0; i < Math.floor(M / 2); i++) {
                    for (j = 0; j < Math.floor((N + 1) / 2); j++) { // a    d
                        a = [i, j]; // b    c
                        b = [N - 1 - j, i];
                        c = [N - 1 - b[1], b[0]];
                        d = [N - 1 - c[1], c[0]];
                        temp = list[a[0]][a[1]];
                        list[a[0]][a[1]] = list[b[0]][b[1]];
                        list[b[0]][b[1]] = list[c[0]][c[1]];
                        list[c[0]][c[1]] = list[d[0]][d[1]];
                        list[d[0]][d[1]] = temp;
                    }
                }
                printMatrix(list);
                return [2 /*return*/];
        }
    });
}); });
//7.简单排序
//7.1 选择排序：每一次选出最小的，把它跟它应该在的位置互换
//7.1.1 用选择排序的方法将列表排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list, i, min, j, temp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                for (i = 0; i < list.length; i++) {
                    min = i;
                    for (j = i; j < list.length; j++) {
                        if (list[j] < list[min]) {
                            min = j;
                        }
                    }
                    temp = list[i];
                    list[i] = list[min];
                    list[min] = temp;
                }
                printList(list);
                return [2 /*return*/];
        }
    });
}); });
//7.1.2 不用循环 用if判断 将3个数用选择排序的方法排序
//TODO 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                return [2 /*return*/];
        }
    });
}); });
//7.1.3 所有的奇数在偶数前面 奇数偶数分别排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list, i, min, j, temp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                for (i = 0; i < list.length; i++) {
                    min = i;
                    for (j = i; j < list.length; j++) {
                        if (myCompare(list[min], list[j])) {
                            min = j;
                        }
                    }
                    temp = list[i];
                    list[i] = list[min];
                    list[min] = temp;
                }
                printList(list);
                return [2 /*return*/];
        }
    });
}); });
// 排序规则 奇数比偶数小 奇数偶数分别排序
function myCompare(M, N) {
    if ((M + N) % 2 == 0) {
        return M > N ? true : false;
    }
    else {
        return M % 2 == 1 ? false : true;
    }
}
//7.2 插入排序：将无序部分的第一个数字跟前面已经有序部分比大小，从有序部分的最后一个数字开始比，比到这个数合适的位置后停下来，类似于理牌
//7.2.1 用插入排序的方法将列表排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list, i, index, j, temp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                for (i = 1; i < list.length; i++) { //i是无序部分的第一个数的下标
                    index = i;
                    for (j = i - 1; j >= 0; j--) {
                        if (list[index] < list[j]) {
                            temp = list[index];
                            list[index] = list[j];
                            list[j] = temp;
                            index = j;
                        }
                        else {
                            break;
                        }
                    }
                }
                printList(list);
                return [2 /*return*/];
        }
    });
}); });
//7.2.2 不用循环 用if判断 将3个数用选择排序的方法排序
//TODO 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                return [2 /*return*/];
        }
    });
}); });
//7.2.3 所有的奇数在偶数前面 奇数偶数分别排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list, i, index, j, temp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                for (i = 1; i < list.length; i++) {
                    index = i;
                    for (j = i - 1; j >= 0; j--) {
                        if (myCompare(list[j], list[index])) {
                            temp = list[index];
                            list[index] = list[j];
                            list[j] = temp;
                            index = j;
                        }
                        else {
                            break;
                        }
                    }
                }
                printList(list);
                return [2 /*return*/];
        }
    });
}); });
//7.3 冒泡排序：相邻两个挨个比 大的往后换
//7.3.1 用冒泡排序的方法将数列排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list, i, j, temp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                for (i = 0; i < list.length; i++) {
                    for (j = 0; j < list.length - i - 1; j++) {
                        if (list[j] > list[j + 1]) {
                            temp = list[j];
                            list[j] = list[j + 1];
                            list[j + 1] = temp;
                        }
                    }
                }
                printList(list);
                return [2 /*return*/];
        }
    });
}); });
//7.3.2 不用循环 用if判断 将3个数用冒泡排序的方法排序
//TODO 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                return [2 /*return*/];
        }
    });
}); });
//7.3.4 奇数在偶数的前面 奇数偶数分别排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, list, i, j, temp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log("----------------");
                for (i = 0; i < list.length; i++) {
                    for (j = 0; j < list.length - i - 1; j++) {
                        if (myCompare(list[j], list[j + 1])) {
                            temp = list[j];
                            list[j] = list[j + 1];
                            list[j + 1] = temp;
                        }
                    }
                }
                printList(list);
                return [2 /*return*/];
        }
    });
}); });
//8. 递归
//8.1 定义四个函数 分别是分数的加减乘除
function plus(X, Y) {
    return simplify([X[0] * Y[1] + Y[0] * X[1], X[1] * Y[1]]);
}
function minus(X, Y) {
    return simplify([X[0] * Y[1] - Y[0] * X[1], X[1] * Y[1]]);
}
function multiply(X, Y) {
    return simplify([X[0] * Y[0], X[1] * Y[1]]);
}
function divide(X, Y) {
    return simplify([X[0] * Y[1], X[1] * Y[0]]);
}
function simplify(N) {
    var gcd = 1;
    var x = N[0];
    var y = N[1];
    var temp = 0;
    while (y != 0) {
        temp = x;
        x = y;
        y = temp % x;
    }
    return [N[0] / x, N[1] / x];
}
//8.2 繁分数化简   x = 1
//1 + 1 / (1 + x)
//x = 1 / (1 + x)
//TODO 如果要求返回的是分数要怎么弄
(function () { return __awaiter(_this, void 0, void 0, function () {
    function result(N) {
        if (N == 1) {
            //return [3, 2]
            return 3 / 2;
        }
        else {
            //return divide(result(N - 1)[0] + result(N - 1)[1], result(N - 1)[0]) //这样递归出不来
            return (1 + 1 / result(N - 1));
        }
    }
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]) //N表示有几层x
                ;
                console.log(result(N));
                return [2 /*return*/];
        }
    });
}); });
//8.3 求A(n) B(n)
//     0    1    2    3    4    5
// A   5    2   -6   -16  -20  -8
// B   1   -3   -8   -10  -4   12
(function () {
    function A(n) {
        if (n == 0) {
            return 5;
        }
        return 2 * B(n - 1);
    }
    function B(n) {
        if (n == 0) {
            return 1;
        }
        return A(n) - A(n - 1);
    }
    console.log(A(5), B(5));
});
//8.4 打印数列 (展开打印 不要出现括号)
// [10, 20, [1, 2], 80, [1, 3, [8, 4]]]
(function () { return __awaiter(_this, void 0, void 0, function () {
    function print(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                print(array[i]);
            }
            else {
                str += array[i] + " ";
            }
        }
    }
    var array, str;
    return __generator(this, function (_a) {
        array = [10, 20, [1, 2], 80, [1, 3, [8, 4]]];
        str = "";
        print(array);
        console.log(str);
        return [2 /*return*/];
    });
}); });
//9.
//9.1 求数列的前n项和(用递归的思路)
(function () { return __awaiter(_this, void 0, void 0, function () {
    function S(list, n) {
        if (n == 1) {
            return list[0];
        }
        else {
            return S(list, n - 1) + list[n - 1];
        }
    }
    var N, _a, list;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log(S(list, 3));
                return [2 /*return*/];
        }
    });
}); });
//9.2 求数列的最大值 (递归的思路  第N项和第第N - 1项的关系)
(function () { return __awaiter(_this, void 0, void 0, function () {
    function max(list, n) {
        if (n == 0) {
            return list[0];
        }
        else {
            return Math.max(max(list, n - 1), list[n - 1]);
        }
    }
    var N, _a, list;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log(max(list, list.length));
                return [2 /*return*/];
        }
    });
}); });
//9.3 同时返回最大值和最小值
(function () { return __awaiter(_this, void 0, void 0, function () {
    function maxAndMin(list, n) {
        if (n == 0) {
            return [list[0], list[0]]; //前面的是最大值 后面的是最小值
        }
        else {
            return [Math.max(maxAndMin(list, n - 1)[0], list[n - 1]), Math.min(maxAndMin(list, n - 1)[1], list[n - 1])];
        }
    }
    var N, _a, list;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                list = randList(N);
                printList(list);
                console.log(maxAndMin(list, list.length));
                return [2 /*return*/];
        }
    });
}); });
//9.4 定义一个函数 打印这个数列的n项的值
(function () { return __awaiter(_this, void 0, void 0, function () {
    // 1  2  4  8  16  32  64  128 ......
    function array1(n) {
        if (n == 1) {
            return 1;
        }
        else {
            return 2 * array1(n - 1);
        }
    }
    //1  2  4  7  11  16  22  29 ......
    function array2(n) {
        if (n == 1) {
            return 1;
        }
        else {
            return array2(n - 1) + n - 1;
        }
    }
    // 1  2  4  5  7  8  10  11  13  14  16  17
    function array3(n) {
        if (n == 1) {
            return 1;
        }
        else {
            return array3(n - 1) + n % 2 + 1;
        }
    }
    // 1  1  2  2  4  4  5  8  7
    function array4(n) {
        if (n == 1 || n == 2) {
            return 1;
        }
        else {
            if (n % 2 == 1) {
                return array4(n - 2) + Math.floor((n + 1) / 2) % 2 + 1;
            }
            else {
                return array4(n - 2) * 2;
            }
        }
    }
    // π = 3 + 4 / 2*3*4  - 4 / 4*5*6 + 4 / 6*7*8 - 4 / 8*9*10 ......
    function array5(n) {
        if (n == 1) {
            return 3;
        }
        else {
            var x = 2 * (n - 1);
            return array5(n - 1) + 4 / (x * (x + 1) * (x + 2)) * Math.pow((-1), n);
        }
    }
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入自然数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                console.log(array5(N));
                return [2 /*return*/];
        }
    });
}); });
//9.5 用递归的方法求两个数的最大公约数  gcd(m, n)
(function () { return __awaiter(_this, void 0, void 0, function () {
    function gcd(M, N) {
        if (N == 0) {
            return M;
        }
        else {
            return gcd(N, M % N);
        }
    }
    var M, _a, N, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入正整数M：")];
            case 1:
                M = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入正整数N：")];
            case 2:
                N = _b.apply(void 0, [_c.sent()]);
                console.log(gcd(M, N));
                return [2 /*return*/];
        }
    });
}); });
//9.6 广义表：这个列表中的元素可能还是列表 可以套多层
// L = [32, 18, [1, 2], [3, [2, 5]], 7]
//9.6.1 把列表中所有元素打印出来
(function () { return __awaiter(_this, void 0, void 0, function () {
    function print(L) {
        for (var i = 0; i < L.length; i++) {
            if (L[i] instanceof Array) {
                print(L[i]);
            }
            else {
                str += L[i] + " ";
            }
        }
    }
    var L, str;
    return __generator(this, function (_a) {
        L = [32, 18, [1, 2], [3, [2, 5]], 7];
        str = "";
        print(L);
        console.log(str);
        return [2 /*return*/];
    });
}); });
//9.6.2 把列表中所有元素的和求出来(不用全局变量)
(function () { return __awaiter(_this, void 0, void 0, function () {
    function S(L, n) {
        if (n == 1) {
            if (L[0] instanceof Array) {
                return S(L[0], L[0].length);
            }
            else {
                return L[0];
            }
        }
        else {
            if (L[n - 1] instanceof Array) {
                return S(L, n - 1) + S(L[n - 1], L[n - 1].length);
            }
            else {
                return S(L, n - 1) + L[n - 1];
            }
        }
    }
    var L;
    return __generator(this, function (_a) {
        L = [32, 18, [1, 2], [3, [2, 5]], 7];
        console.log(S(L, L.length));
        return [2 /*return*/];
    });
}); });
// 9.6.3 求广义表中的最大值
(function () {
    var L = [32, 18, [1, 2], [3, [2, 5, 50]], 7];
    console.log(max(L, L.length));
    function max(L, n) {
        if (n == 1) {
            if (L[n - 1] instanceof Array) {
                return max(L[n - 1], L[n - 1].length);
            }
            else {
                return L[n - 1];
            }
        }
        else {
            if (L[n - 1] instanceof Array) {
                return Math.max(max(L, n - 1), max(L[n - 1], L[n - 1].length));
            }
            else {
                return Math.max(max(L, n - 1), L[n - 1]);
            }
        }
    }
});
//9.6.4 生成一个广义表：
//80%的概率往列表中加元素，这个元素50%的概率是一个列表
//(如果概率在20%那部分 那这个列表就不再加元素了)
//TODO 感觉有点奇怪
(function () {
    var L = [];
    randList(L);
    console.log(L);
    function randList(L) {
        if (rand() < 2) { //20%的概率不再加元素
            return L;
        }
        else { //80%的概率往列表中加元素
            var x = rand();
            if (x < 5) {
                L.push(x);
                randList(L);
            }
            else { //这个元素50%的概率是一个列表
                var y = [];
                randList(y);
                L.push(y);
                randList(L);
            }
        }
    }
    function rand() {
        return Number(Math.floor(10 * Math.random()));
    }
})();
