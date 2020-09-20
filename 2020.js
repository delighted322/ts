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
var utils_1 = require("./utils");
// 1.判断一个年份是不是闰年(只能用一个if并且不能用and和or)
// 构建一个分数系统 符合心意的就加分 不符合心意的就减分 按照分数的情况判断是不是闰年(比如能被4整除就加10分 能被100整除就扣20分 能被400整除就加40分)
(function () { return __awaiter(_this, void 0, void 0, function () {
    var year, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个年份year: ")];
            case 1:
                year = _a.apply(void 0, [_b.sent()]);
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                }
                return [2 /*return*/];
        }
    });
}); });
// 2.输入一个月份 打印2020年这个月份的日历
(function () { return __awaiter(_this, void 0, void 0, function () {
    var month, _a, days, day, amount, n, d, line, i, count, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个月份month: ")];
            case 1:
                month = _a.apply(void 0, [_b.sent()]);
                days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
                amount = 0;
                for (n = 1; n < month; n++) {
                    amount += days[n];
                }
                d = (3 + amount) % 7;
                console.log(amount, d);
                line = "";
                for (i = 0; i < day.length; i++) {
                    line += day[i] + " ";
                }
                console.log(line);
                line = "";
                count = 0;
                while (d > 0) {
                    line += "  ";
                    count++;
                    d--;
                }
                for (i = 1; i <= days[month]; i++) {
                    line += i + " ";
                    count++;
                    if (count == 7) {
                        console.log(line);
                        line = "";
                        count = 0;
                    }
                }
                console.log(line);
                return [2 /*return*/];
        }
    });
}); });
// 3.错位打印 输入一个数字n 打印n行
// 1  2  3  4
//5  6  7  8
//9 10 11 12
//13 14 15 16
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, printLine, empty, n;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个数字N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                printLine = "";
                empty = "";
                for (n = 1; n <= 4 * N; n++) {
                    printLine += n + " ";
                    if (n % 4 == 0) {
                        console.log(printLine);
                        empty += " ";
                        printLine = empty;
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//4.
// N = 3
// 1
// 2  3
// 4  5  6
// 7  8
// 9
// 用一个变量记录还有多少个就要回车了
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, printLine, flag, count, n;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                printLine = "";
                flag = 1 - N;
                count = N - Math.abs(flag);
                for (n = 1; n <= N * N; n++) {
                    printLine += n + " ";
                    count--;
                    if (count == 0) {
                        console.log(printLine);
                        flag++;
                        count = N - Math.abs(flag);
                        printLine = "";
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
// 5.N=4 打印
// 1  5  9 13
// 2  6 10 14
// 3  7 11 15
// 4  8 12 16
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i, printLine, j;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 0; i < N; i++) {
                    printLine = "";
                    for (j = 0; j < N; j++) {
                        printLine += j * N + i + 1 + " ";
                    }
                    console.log(printLine);
                }
                return [2 /*return*/];
        }
    });
}); });
// 6. N = 4 打印
//1     8
//2  5  9   12
//3  6  10  13
//4  7  11  14
// 先把没有错位的值算出来 再看在没有错位的基础上减去了多少
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i, printLine, j, e;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 0; i < N; i++) {
                    printLine = "";
                    for (j = 0; j < N; j++) {
                        if (i == 0 && j % 2 == 1) {
                            printLine += "  ";
                        }
                        else {
                            e = Math.floor((j + 1) / 2);
                            printLine += j * N + i + 1 - e + " ";
                        }
                    }
                    console.log(printLine);
                }
                return [2 /*return*/];
        }
    });
}); });
// 7.N = 5 换方(奇数阶)
//17  24  1   8   15
//23  5   7   14  16
//4   6   13  20  22
//10  12  19  21  3
//11  18  25  2   9
// 1放在第一行的最中间
//下一个数字往右上角填
//如果右上角出去了的话 填在右上角格子的对面
//如果右上角中已经有数的话就填在当前格子的下面
// 建一个二维数组 以此把二维数组填满后打印
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, arr, i_1, j_1, i, j, n;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数N:")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                arr = new Array();
                for (i_1 = 0; i_1 < N; i_1++) {
                    arr.push(new Array());
                    for (j_1 = 0; j_1 < N; j_1++) {
                        arr[i_1].push(0);
                    }
                }
                i = 0;
                j = (N - 1) / 2;
                arr[i][j] = 1;
                for (n = 2; n <= N * N; n++) {
                    i -= 1;
                    j += 1;
                    if (i == -1 && j == N) {
                        i += 2;
                        j -= 1;
                        arr[i][j] = n;
                        continue;
                    }
                    if (i < 0) {
                        i = N - 1;
                    }
                    if (j >= N) {
                        j = 0;
                    }
                    if (arr[i][j] != 0) {
                        i += 2;
                        j -= 1;
                        arr[i][j] = n;
                    }
                    else {
                        arr[i][j] = n;
                    }
                }
                console.log(arr);
                return [2 /*return*/];
        }
    });
}); });
// 8.  输入n 打印 一共打印2n - 1 行
//   ***     ***
//    ***   ***
//     *** ***
//      *****
//       ***
//      *****
//     *** ***
//    ***   ***
//   ***     ***
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, printLine, n, a, b, i, j, j;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数N:")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                printLine = "";
                for (n = -N + 1; n < N; n++) {
                    a = Math.abs(Math.abs(n) - N + 1);
                    b = 2 * (Math.abs(n) - 1) - 1;
                    for (i = 1; i <= a; i++) {
                        printLine += " ";
                    }
                    printLine += "***";
                    if (b > 0) {
                        for (j = 1; j <= b; j++) {
                            printLine += " ";
                        }
                        printLine += "***";
                    }
                    else {
                        for (j = 1; j <= 3 + b; j++) {
                            printLine += "*";
                        }
                    }
                    console.log(printLine);
                    printLine = "";
                }
                return [2 /*return*/];
        }
    });
}); });
// 9.找到一个数组中和最大的子序列的和
// [-1,4,5,-10,15,16,-3,-20,18,19]
(function () { return __awaiter(_this, void 0, void 0, function () {
    function m(i, a) {
        // 以a[i]为最后一个数的子序列的和的最大值
        if (i == 0) {
            max = a[i];
            return a[i];
        }
        var result = Math.max(a[i], m(i - 1, a) + a[i]);
        if (result > max)
            max = result;
        return result;
    }
    var a, max;
    return __generator(this, function (_a) {
        a = [-1, 4, 5, -10, 15, 16, -3, -20, 18, 19, -2];
        m(a.length - 1, a);
        console.log(max);
        return [2 /*return*/];
    });
}); });
//10. 一次循环找出列表中最大的三个数
(function () { return __awaiter(_this, void 0, void 0, function () {
    var arr, max, i;
    return __generator(this, function (_a) {
        arr = [2, 3, 3, 12, 15, 14, 17, 7, 9, 20];
        max = [];
        max.push(arr[0]);
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > max[max.length - 1]) {
                max.push(arr[i]);
            }
        }
        console.log(max);
        return [2 /*return*/];
    });
}); });
// 11. 用*打印一个半径为9的四分之一个圆(用勾股定理算每一行的长度)
(function () { return __awaiter(_this, void 0, void 0, function () {
    function printX(n) {
        var l = "";
        for (var i = 0; i < n; i++) {
            l += "* ";
        }
        console.log(l);
    }
    var r, i, d;
    return __generator(this, function (_a) {
        r = 20;
        for (i = 0; i <= r; i++) {
            d = Math.round(Math.sqrt(r * r - i * i));
            printX(d + 1);
        }
        return [2 /*return*/];
    });
}); });
// 12. 求广义表中的最大值
(function () { return __awaiter(_this, void 0, void 0, function () {
    // 递归的方法
    function max(L) {
        for (var _i = 0, L_2 = L; _i < L_2.length; _i++) {
            var i = L_2[_i];
            if (i instanceof Array) {
                max(i);
            }
            else {
                if (i > maxValue) {
                    maxValue = i;
                }
            }
        }
        return maxValue;
    }
    var L, maxValue, _i, L_1, i, _a, i_2, j;
    return __generator(this, function (_b) {
        L = [
            1,
            2,
            [3, 4, [5, 6, [7, [8, 9, [10, 21], 12], 4, 50, [3, 4, 5], 7], 14], 17],
            18,
            19
        ];
        maxValue = 0;
        console.log(max(L));
        // 不用递归做
        // 1)双重循环
        maxValue = 0;
        for (_i = 0, L_1 = L; _i < L_1.length; _i++) {
            i = L_1[_i];
            if (i instanceof Array) {
                for (_a = 0, i_2 = i; _a < i_2.length; _a++) {
                    j = i_2[_a];
                    L.push(j);
                }
            }
            else {
                if (i > maxValue)
                    maxValue = i;
            }
        }
        console.log(maxValue);
        return [2 /*return*/];
    });
}); });
// 13. 找到广义列表中最大的两个值
(function () { return __awaiter(_this, void 0, void 0, function () {
    function maxTwo(L) {
        for (var _i = 0, L_3 = L; _i < L_3.length; _i++) {
            var l = L_3[_i];
            if (l instanceof Array) {
                maxTwo(l);
            }
            else {
                if (l > maxTwoValue[1]) {
                    if (l >= maxTwoValue[0]) {
                        maxTwoValue[1] = maxTwoValue[0];
                        maxTwoValue[0] = l;
                    }
                    else {
                        maxTwoValue[1] = l;
                    }
                }
            }
        }
        return maxTwoValue;
    }
    var L, maxTwoValue;
    return __generator(this, function (_a) {
        L = [
            1,
            2,
            [3, 4, [5, 6, [7, [8, 9, [10, 21], 12], 4, 50, [3, 4, 5], 7], 14], 17],
            18,
            19
        ];
        maxTwoValue = [0, 0];
        console.log(maxTwo(L));
        return [2 /*return*/];
    });
}); });
// 14.输入n 输出斐波那契数列的第n项 不用递归
(function () { return __awaiter(_this, void 0, void 0, function () {
    // 1.递归 从后往前算
    function fab(n) {
        if (n == 1 || n == 2) {
            return 1;
        }
        return fab(n - 1) + fab(n - 2);
    }
    var N, _a, a, b, result, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个正整数N：")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                console.log(fab(N));
                // 2.递推 从前往后算
                if (N == 1 || N == 2) {
                    console.log(1);
                    return [2 /*return*/];
                }
                a = 1;
                b = 1;
                result = 0;
                for (i = 3; i <= N; i++) {
                    result = a + b;
                    a = b;
                    b = result;
                }
                console.log(result);
                return [2 /*return*/];
        }
    });
}); });
// 15. 逆序打印一个整数  输入12345 输出54321
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, result, x;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数N:")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                result = 0;
                x = 0;
                while (N / 10 > 1) {
                    x = N % 10;
                    result = result * 10 + x;
                    N = (N - x) / 10;
                }
                result = result * 10 + N;
                console.log(result);
                return [2 /*return*/];
        }
    });
}); });
// 16. 输入一个用M进制表示的数X 输出用N进制表示的数
(function () { return __awaiter(_this, void 0, void 0, function () {
    var X, _a, M, _b, N, _c, temp, z, a, result, a;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数X:")];
            case 1:
                X = _a.apply(void 0, [_d.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数M:")];
            case 2:
                M = _b.apply(void 0, [_d.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("请输入一个整数N:")];
            case 3:
                N = _c.apply(void 0, [_d.sent()]);
                temp = 0;
                z = 0;
                while (X / 10 > 1) {
                    a = X % 10;
                    temp += a * Math.pow(M, z);
                    X = (X - a) / 10;
                    z += 1;
                }
                temp += X * Math.pow(M, z);
                console.log(temp); // 用十进制表示的X
                result = 0;
                z = 1;
                while (temp > 1) {
                    a = temp % N;
                    result += a * z;
                    temp = (temp - a) / N;
                    z *= 10;
                }
                result += temp * z;
                console.log(result); // 用N进制表示的X
                return [2 /*return*/];
        }
    });
}); });
// 17. 汉诺塔
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, utils_1.input("请输入正整数N:")];
            case 1:
                N = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// 18. 冒泡排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var l, i, j, temp;
    return __generator(this, function (_a) {
        l = [3, 9, 1, 2, 4, 9, 0, 1, 8, 10, 2, 7];
        for (i = 0; i < l.length - 1; i++) {
            for (j = 0; j < l.length - 1; j++) {
                if (l[j] > l[j + 1]) {
                    temp = l[j + 1];
                    l[j + 1] = l[j];
                    l[j] = temp;
                }
            }
        }
        console.log(l);
        return [2 /*return*/];
    });
}); });
// 19. 插入排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var l, i, j, z, temp;
    return __generator(this, function (_a) {
        l = [3, 9, 1, 2, 4, 9, 0, 1, 8, 10, 2, 7];
        for (i = 0; i < l.length; i++) {
            j = i + 1;
            z = i;
            while (l[j] < l[z] && z >= 0) {
                temp = l[z];
                l[z] = l[j];
                l[j] = temp;
                j = j - 1;
                z = z - 1;
            }
        }
        console.log(l);
        return [2 /*return*/];
    });
}); });
// 20. 选择排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var l, i, minIndex, j, temp;
    return __generator(this, function (_a) {
        l = [3, 9, 1, 2, 4, 9, 0, 1, 8, 10, 2, 7];
        for (i = 0; i < l.length; i++) {
            minIndex = i;
            for (j = i; j < l.length; j++) {
                if (l[j] < l[minIndex]) {
                    minIndex = j;
                }
            }
            temp = l[i];
            l[i] = l[minIndex];
            l[minIndex] = temp;
        }
        console.log(l);
        return [2 /*return*/];
    });
}); });
// 21.二分查找
(function () { return __awaiter(_this, void 0, void 0, function () {
    function binarySearch(n, left, right) {
        console.log(left, right);
        var middle = Math.round(left / 2 + right / 2);
        if (l[middle] == n)
            return middle;
        if (left > right)
            return -1;
        if (Math.abs(left - right) == 1) {
            if (l[left] == n)
                return left;
            if (l[right] == n)
                return right;
            return -1;
        }
        if (l[middle] > n)
            return binarySearch(n, left, middle);
        if (l[middle] < n)
            return binarySearch(n, middle, right);
    }
    var l;
    return __generator(this, function (_a) {
        l = [1, 2, 4, 7, 9, 11, 16, 19, 23];
        console.log(l);
        console.log(binarySearch(3, 0, l.length - 1));
        return [2 /*return*/];
    });
}); })();
