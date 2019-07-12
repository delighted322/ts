"use strict";
//python练习题
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
//1.1输入一个自然数N，打印N个星号，每行一个。 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.sent();
                for (i = 0; i < N; i++) {
                    console.log("*");
                }
                return [2 /*return*/];
        }
    });
}); });
//1.2输入一个自然数N，打印N * 4个星号，每行两个
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]) //转换类型的函数应该在await的的外面 等待接收输入了之后再转int
                ;
                //let N = await Number(input("输入一个自然数N: "))   × 不行 会出错
                for (i = 0; i < N; i++) {
                    console.log("**");
                }
                return [2 /*return*/];
        }
    });
}); });
//1.3输入一个自然数N, 在一行中打印N个星号。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, str, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.sent();
                str = "";
                for (i = 0; i < N; i++) {
                    str += "* ";
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//1.4输入一个自然数N，打印从0至N一1的所有整数（包括0和N -1）。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 0; i < N; i++) {
                    console.log(i);
                }
                return [2 /*return*/];
        }
    });
}); });
//1.5输入一个正整数N，打印从1至N的所有整数（包括1和N) 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 1; i < N + 1; i++) {
                    console.log(i);
                }
                return [2 /*return*/];
        }
    });
}); });
//1.6输入一个正整数N，倒序打印从N至1的所有整数（包括N和1）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = N; i > 0; i--) {
                    console.log(i);
                }
                return [2 /*return*/];
        }
    });
}); });
//1.7输入一个正整数N，打印从-N至N中的所有整数（包括-N和N) 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = -N; i < N + 1; i++) {
                    console.log(i);
                }
                return [2 /*return*/];
        }
    });
}); });
//1.8输入两个正整数M和N,已知M小于N,打印N一M个星号（*），每行一个
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, i;
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
                for (i = 0; i < N - M; i++) {
                    console.log("*");
                }
                return [2 /*return*/];
        }
    });
}); });
//1.9输入两个正整数M和N,已知M小于N,打印从M到N之间所有的整数（包括M和N)
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, i;
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
                for (i = M; i < N + 1; i++) {
                    console.log(i);
                }
                return [2 /*return*/];
        }
    });
}); });
//1.10输入两个正整数M和N, M和N之间的大小未知，打印从M到N之间所有的整数（包括M和N) 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, i, i_1;
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
                i = M < N ? M : N;
                for (i_1 = M < N ? M : N; i_1 < Math.max(M, N) + 1; i_1++) {
                    console.log(i_1);
                }
                return [2 /*return*/];
        }
    });
}); });
//1.11输入一个自然数N,打印从0至2 * N之间的所有偶数（包括0，不包括2 * N）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 0; i < 2 * N; i += 2) {
                    console.log(i);
                }
                return [2 /*return*/];
        }
    });
}); });
//1.12输入一个自然数N,打印小于N的所有除以3余1的自然数。（至少用两种方法）。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 1; i < N; i++) {
                    if ((i % 3) == 1) {
                        console.log(i);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//1.13输入一个自然数N,倒序打印小于N的所有正偶数
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = N; i > 0; i--) {
                    if ((i % 2) == 0) {
                        console.log(i);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//1.14输入一个自然数N,倒序打印所有小于N个位数为7的自然数
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = N; i > 0; i--) {
                    6;
                    if ((i % 10) == 7) {
                        console.log(i);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//1.15输入两个自然数M和N,打印所有小于N的是M倍数的自然数
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, i;
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
                for (i = M; i < N; i++) {
                    if ((i % M) == 0) {
                        console.log(i);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//1.16输入两个自然数M和N,打印所有小于M * N的是M倍数或是N倍数的自然数
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, i;
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
                for (i = Math.min(M, N); i < M * N; i++) {
                    if ((i % M == 0) || (i % N == 0)) {
                        console.log(i);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//1.17输入两个自然数M和N, M和N之间的大小未知，逆序打印M和N中间所有除以3余2的数（包括M和N) 
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, i;
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
                for (i = Math.max(M, N); i > Math.min(M, N) - 1; i--) {
                    if (i % 3 == 2) {
                        console.log(i);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//1.18输入一个自然数N，求1 + 2 + 3 + .... + N
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, sum, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                sum = 0;
                for (i = 1; i <= N; i++) {
                    sum += i;
                }
                console.log("sum:", sum);
                return [2 /*return*/];
        }
    });
}); });
//1.19输入一个自然数N，求1 + 1/2 + 1/3 +.... + 1/N，打印小数部分
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, sum, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                sum = 0;
                for (i = 1; i <= N; i++) {
                    sum += 1 / i;
                }
                console.log(sum % 1);
                return [2 /*return*/];
        }
    });
}); });
//1.20输入一个小于20的数N，求1 * 2 * 3 * ... * N（即求N的阶乘）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, fn;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                fn = function (N) {
                    if (N == 1) {
                        return 1;
                    }
                    return fn(N - 1) * N;
                };
                console.log(fn(N));
                return [2 /*return*/];
        }
    });
}); });
//1.21到文具店里买尽量多的签字笔。已知一只签字笔的价格是1元9角，而班主任给小玉的钱是A元B角，小玉想知道，她最多能买多少只签字笔呢
(function () { return __awaiter(_this, void 0, void 0, function () {
    var A, _a, B, _b, num;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数A: ")];
            case 1:
                A = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数B: ")];
            case 2:
                B = _b.apply(void 0, [_c.sent()]);
                num = (A * 10 + B) / (1 * 10 + 9);
                console.log(num - (num % 1));
                return [2 /*return*/];
        }
    });
}); });
//1.22输入两个小数M和N，计算它们的和，并四舍五入到整数，将计算结果打印出来
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, num, float;
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
                num = M + N;
                float = num % 1;
                if (float >= 0.5) {
                    num = num - float + 1;
                }
                else {
                    num = num - float;
                }
                console.log(num);
                return [2 /*return*/];
        }
    });
}); });
//2.1某车站行李托运收费标准是:10公斤或10公斤以下，收费2.5 元，超过10公斤的行李，按每超过1公斤增加1.5元进行收费。试编一程序，输入行李的重量，算出托运费。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, extra;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                if (N <= 10) {
                    console.log(2.5);
                }
                else {
                    extra = N - (N % 1) - 10;
                    console.log(2.5 + 1.5 * extra);
                }
                return [2 /*return*/];
        }
    });
}); });
//2.2.输入某学生成绩，如果86分以上（包括86分）则输出“VERY GOOD”，如果在60到85之间的则输出“GOOD”（包括60和85），小于60的则输出“BAD”
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                if (N < 60) {
                    console.log("BAD");
                }
                else if ((N >= 60) && (N <= 85)) {
                    console.log("GOOD");
                }
                else {
                    console.log("VERY GOOD");
                }
                return [2 /*return*/];
        }
    });
}); });
//2.3输入一个月份，输出该月是多少天（假设是平年不是闰年）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, b;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                console.log(b[N - 1]);
                return [2 /*return*/];
        }
    });
}); });
//2.4输入某月某日,判断这一天是这一年的第几天?（假设是平年）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var month, _a, day, _b, b, sum, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入月 month: ")];
            case 1:
                month = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入日 day: ")];
            case 2:
                day = _b.apply(void 0, [_c.sent()]);
                b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                sum = 0;
                for (i = 1; i < month; i++) {
                    sum += b[i - 1];
                }
                sum += day;
                console.log(sum);
                return [2 /*return*/];
        }
    });
}); });
//2.5输入一个年份，如果是闰年，则输出“TRUE”,否则输出“FALSE”
(function () { return __awaiter(_this, void 0, void 0, function () {
    var year, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入年份: ")];
            case 1:
                year = _a.apply(void 0, [_b.sent()]);
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                    console.log("TRUE");
                }
                else {
                    console.log("FALSe");
                }
                return [2 /*return*/];
        }
    });
}); });
//2.6输入一个年份和月份，输出该月是多少天
(function () { return __awaiter(_this, void 0, void 0, function () {
    var year, _a, month, _b, ping, run;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入年份: ")];
            case 1:
                year = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入月 month: ")];
            case 2:
                month = _b.apply(void 0, [_c.sent()]);
                ping = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                run = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                    console.log(run[month - 1]);
                }
                else {
                    console.log(ping[month - 1]);
                }
                return [2 /*return*/];
        }
    });
}); });
//2.7电子表上的时间显示方法形如xx:xx:xx，现在给出一个时间N，单位是秒，要求按照电子表格式输出。输出保证不会超过24小时
(function () { return __awaiter(_this, void 0, void 0, function () {
    var time, _a, h, m, s, str, list, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入时间: ")];
            case 1:
                time = _a.apply(void 0, [_b.sent()]);
                h = time / (60 * 60);
                h = h - h % 1;
                m = (time - 60 * 60 * h) / 60;
                m = m - m % 1;
                s = time % 60;
                str = "";
                list = [h, m, s];
                for (i in list) {
                    if (list[i] < 10) {
                        str += "0" + list[i];
                    }
                    else {
                        str += list[i];
                    }
                    if (Number(i) != 2) {
                        str += ":";
                    }
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//2.8东东给自己的做题时间做了精确的计时(计时按 24 小时制计算)，他从 A 时 B 分一直做到当天的 C 时 D 分，请你帮他计算一下，他这天一共做了多少时间呢?
(function () { return __awaiter(_this, void 0, void 0, function () {
    var A, _a, B, _b, C, _c, D, _d, min, m, h;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数A: ")];
            case 1:
                A = _a.apply(void 0, [_e.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数B: ")];
            case 2:
                B = _b.apply(void 0, [_e.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数C: ")];
            case 3:
                C = _c.apply(void 0, [_e.sent()]);
                _d = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数D: ")];
            case 4:
                D = _d.apply(void 0, [_e.sent()]);
                min = 60 - B + 60 * (C - A - 1) + D;
                m = min % 60;
                h = (min - m) / 60;
                console.log(h, "时", m, "分");
                return [2 /*return*/];
        }
    });
}); });
//2.9一个笼子里面关了鸡和兔子（鸡有2只脚，兔子有4只脚，没有例外）。已经知道了笼子里面脚的总数a，问笼子里面至少有多少只动物，至多有多少只动物
(function () { return __awaiter(_this, void 0, void 0, function () {
    var A, _a, most, lest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数A: ")];
            case 1:
                A = _a.apply(void 0, [_b.sent()]);
                most = A / 2;
                lest = (A - (A % 4)) / 4 + (A % 4) / 2;
                console.log("至少有", lest, "只", "至多有", most, "只");
                return [2 /*return*/];
        }
    });
}); });
//2.10你买了一箱n个苹果，很不幸的是买完时箱子里混进了一条虫子。虫子每x小时能吃掉一个苹果，假设虫子在吃完一个苹果之前不会吃另一个，那么经过y小时你还有多少个完整的苹果？
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, X, _b, Y, _c, num;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_d.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数X: ")];
            case 2:
                X = _b.apply(void 0, [_d.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数Y: ")];
            case 3:
                Y = _c.apply(void 0, [_d.sent()]);
                num = N - Math.ceil(Y / X);
                console.log(num);
                return [2 /*return*/];
        }
    });
}); });
//2.11相传韩信才智过人，从不直接清点自己军队的人数，只要让士兵先后以三人一排、五人一排、七人一排地变换队形，而他每次只掠一眼队伍的排尾就知道总人数了。
//输入3个非负整数a，b，c，表示每种队形排尾的人数（a<3，b<5，c<7），输出总人数的最小值，如果没有则输出no。例如：输入2 1 6 输出：41
(function () { return __awaiter(_this, void 0, void 0, function () {
    var A, _a, B, _b, C, _c, num;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数A: ")];
            case 1:
                A = _a.apply(void 0, [_d.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数B: ")];
            case 2:
                B = _b.apply(void 0, [_d.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数C: ")];
            case 3:
                C = _c.apply(void 0, [_d.sent()]);
                num = 1;
                while (true) {
                    if ((num % 7 == C) && (num % 5 == B) && (num % 3 == A)) {
                        console.log(num);
                        break;
                    }
                    num++;
                }
                return [2 /*return*/];
        }
    });
}); });
//2.12某程序员开始工作，年薪N（N不小于20）万，他希望在中关村公馆买一套60平米的房子，现在价格是200万，假设房子价格以每年百分之K（K不超过3）增长，
//并且该程序员未来年薪不变，且不吃不喝，不用交税，每年所得N万全都积攒起来，问第几年能够买下这套房子？（第一年年薪N万，房价200万）
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, K, _b, price, money, year;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数K: ")];
            case 2:
                K = _b.apply(void 0, [_c.sent()]);
                price = 200;
                money = N;
                year = 1;
                while (money < price) {
                    price = price * (1 + K / 100);
                    money += 20;
                    year += 1;
                }
                console.log(year);
                return [2 /*return*/];
        }
    });
}); });
//2.13用100元钱买100只鸡，公鸡，母鸡，小鸡都要有。公鸡5元1只，母鸡3元1只，小鸡1元3只。请问公鸡，母鸡，小鸡各应该买多少只？
//要求专款专用(至少公母小各一),正好用完?请求出所有方案。
(function () {
    var rooster = 1;
    var hen = 1;
    var chicken;
    for (var rooster_1 = 1; rooster_1 < 100; rooster_1++) {
        for (var hen_1 = 1; hen_1 < 100; hen_1++) {
            chicken = 100 - rooster_1 - hen_1;
            if ((5 * rooster_1 + hen_1 * 3 + chicken / 3) == 100 && chicken >= 1) {
                console.log(rooster_1, hen_1, chicken);
            }
        }
    }
});
//2.14数学上把2的K次方叫2的K次幂（K为整数），如4、8、32等。给定一个整数n(n>0)，请输出距离它最近的那个2的幂是多少。
//如果有两个距离相同，输出那个小的.
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, k, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                k = 0;
                result = 1;
                while (result < N) {
                    result *= 2;
                    k++;
                }
                if (result - N < N - result / 2) {
                    console.log(k);
                }
                else {
                    console.log(k - 1);
                }
                return [2 /*return*/];
        }
    });
}); });
//2.15已知：Sn = 1 + 1/2 + 1/3 + ... + 1/n。显然对于任意一个整数K，当n足够大的时候，Sn大于K。
//现给出一个整数K（1 <= k <= 15），要求计算出一个最小的n;使得Sn>K。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var K, _a, sum, n;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数K: ")];
            case 1:
                K = _a.apply(void 0, [_b.sent()]);
                sum = 0;
                n = 1;
                while (sum < K) {
                    sum += 1 / n;
                    n++;
                }
                console.log(n - 1);
                return [2 /*return*/];
        }
    });
}); });
//2.16一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？
(function () {
    var pass = 100;
    var height = 50;
    for (var i = 0; i < 9; i++) {
        pass += height * 2;
        height /= 2;
    }
    console.log(pass, height);
});
//2.17有一天，无聊的小明从1开始数数，同时在纸上写下每个数的个位数字。因为他非常热爱直角三角形，所以在纸上写下的数字按照直角三角形排列。
//现在告诉你他写了N行数字，要求你打出这些数字。提示:print(‘xx’,end=‘’)是不换行，print(‘’)是换行
// 举例：N=5
// 1
// 23
// 456
// 7890
// 12345
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, num, str, i, j;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                num = 1;
                str = "";
                for (i = 1; i <= N; i++) {
                    str = "";
                    for (j = 1; j <= i; j++) {
                        str = str + num + " ";
                        num += 1;
                        if (num == 10) {
                            num = 0;
                        }
                    }
                    console.log(str);
                }
                return [2 /*return*/];
        }
    });
}); });
//2.18有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13...求出这个数列的前n项之和并保留两位小数。
(function () { return __awaiter(_this, void 0, void 0, function () {
    function fibonacci(n) {
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    function sum(n) {
        var result = 0;
        for (var i = 1; i <= n; i++) {
            result += fibonacci(i + 1) / fibonacci(i);
        }
        console.log(result);
    }
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                sum(N);
                return [2 /*return*/];
        }
    });
}); });
//3.1输入三个自然数M、N和P,打印它们三个当中最小的那个
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, P, _c, min;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数M: ")];
            case 1:
                M = _a.apply(void 0, [_d.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 2:
                N = _b.apply(void 0, [_d.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数P: ")];
            case 3:
                P = _c.apply(void 0, [_d.sent()]);
                if (M < N) {
                    min = M < P ? M : P;
                }
                else {
                    min = N < P ? N : P;
                }
                console.log(min);
                return [2 /*return*/];
        }
    });
}); });
//3.2输入三个自然数M、N和P,按照从大到小的顺序打印这三个数。
//TODO 相等的情况还没考虑
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, P, _c, str, min, max, middle, array, _i, array_1, i;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数M: ")];
            case 1:
                M = _a.apply(void 0, [_d.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 2:
                N = _b.apply(void 0, [_d.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数P: ")];
            case 3:
                P = _c.apply(void 0, [_d.sent()]);
                str = "";
                if (M < N) {
                    min = M < P ? M : P;
                    max = N > P ? N : P;
                }
                else {
                    min = N < P ? N : P;
                    max = M > P ? M : P;
                }
                array = [M, N, P];
                for (_i = 0, array_1 = array; _i < array_1.length; _i++) {
                    i = array_1[_i];
                    if (i < max && i > min) {
                        middle = i;
                    }
                }
                str = str + max + " " + middle + " " + min;
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//3.3对于一个任意的三位自然数x，编程计算其各个数位上的数字之和
(function () { return __awaiter(_this, void 0, void 0, function () {
    var X, _a, a, b, c;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个任意的三位自然数X: ")];
            case 1:
                X = _a.apply(void 0, [_b.sent()]);
                a = X % 10;
                b = Math.floor(X % 100 / 10);
                c = Math.floor(X / 100);
                console.log(c + b + a);
                return [2 /*return*/];
        }
    });
}); });
//3.4输入一个三位自然数，然后把这个数倒序输出，注意输出中不要有前置0的存在
(function () { return __awaiter(_this, void 0, void 0, function () {
    var X, _a, a, b, c;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个任意的三位自然数X: ")];
            case 1:
                X = _a.apply(void 0, [_b.sent()]);
                a = X % 10;
                b = Math.floor(X % 100 / 10);
                c = Math.floor(X / 100);
                if (a == 0) {
                    console.log("" + b + c);
                }
                else {
                    console.log("" + a + b + c);
                }
                return [2 /*return*/];
        }
    });
}); });
//3.5任意输入一个三位整数，再把它的次序打乱重新组合一个新的三位整数，使其值最大
(function () { return __awaiter(_this, void 0, void 0, function () {
    var X, _a, a, b, c, str;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个任意的三位自然数X: ")];
            case 1:
                X = _a.apply(void 0, [_b.sent()]);
                a = X % 10;
                b = Math.floor(X % 100 / 10);
                c = Math.floor(X / 100);
                str = "";
                if (a > b) {
                    if (a > c) {
                        str += a;
                        if (b > c) {
                            str += "" + b + c;
                        }
                        else {
                            str += "" + c + b;
                        }
                    }
                    else {
                        str += c;
                        if (a > b) {
                            str += "" + a + b;
                        }
                        else {
                            str += "" + b + a;
                        }
                    }
                }
                else {
                    if (b > c) {
                        str += b;
                        if (a > c) {
                            str += "" + a + c;
                        }
                        else {
                            str += "" + c + a;
                        }
                    }
                    else {
                        str += c;
                        if (a > b) {
                            str += "" + a + b;
                        }
                        else {
                            str += "" + b + a;
                        }
                    }
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//3.6 1，2 .... 9组成三个三位数，每个三位数中的数字不可重复（例如112，131等），使这三个三位数构成1 ：2 ：3的比例，求出所有满足条件的三个三位数
// TODO 要简化
(function () {
    var a = 0;
    var b = 0;
    var c = 0;
    for (var i = 1; i < 4; i++) {
        for (var j = 1; j < 10; j++) {
            if (i == j) {
                continue;
            }
            for (var z = 1; z < 10; z++) {
                if (z == i || z == j) {
                    continue;
                }
                a = i * 100 + j * 10 + z;
                b = 2 * a;
                c = 3 * a;
                if (c > 999) {
                    continue;
                }
                judge(a, b, c);
            }
        }
    }
    function judge(a, b, c) {
        var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var temp = split(a);
        num[temp[0]] = 0;
        num[temp[1]] = 0;
        num[temp[2]] = 0;
        var temp3 = split(b);
        if (temp3[0] == temp3[1] || temp3[0] == temp3[3] || temp3[0] == temp3[2]) {
            return;
        }
        if (num[temp3[0]] == 0 || num[temp3[1]] == 0 || num[temp3[2]] == 0) {
            return;
        }
        num[temp3[0]] = 0;
        num[temp3[1]] = 0;
        num[temp3[2]] = 0;
        var temp2 = split(c);
        if (temp2[0] == temp2[1] || temp2[0] == temp2[3] || temp2[0] == temp2[2]) {
            return;
        }
        if (num[temp2[0]] == 0 || num[temp2[1]] == 0 || num[temp2[2]] == 0) {
            return;
        }
        console.log(a, b, c);
    }
    function split(n) {
        a = Math.floor(n / 100);
        b = Math.floor((n - a * 100) / 10);
        c = n % 10;
        return [a, b, c];
    }
});
//3.7 给出一个数字N，求N的阶乘，其右边有多少个连续的零。例如5！= 120，其右边有1个零
(function () { return __awaiter(_this, void 0, void 0, function () {
    function factorial(n) {
        if (n == 1) {
            return 1;
        }
        return factorial(n - 1) * n;
    }
    var N, _a, result, i, count;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                result = factorial(N);
                i = 10;
                count = 0;
                while (result % i == 0) {
                    count += 1;
                    i *= 10;
                }
                console.log(count);
                return [2 /*return*/];
        }
    });
}); });
//3.8 奶牛们在玩一个数字游戏，它们从一个四位整数开始，比如：6593。
//将这个整数中的各位数字全部取出，将他们相乘，得到一个新的整数，上面的例子就是6 * 5 * 9 * 3 = 810，然后继续做下去，8 * 1 * 0 = 0得到了一个个位数0。
//帮助奶牛完成这个游戏，读入一个四位数n并计算出得到一个个位数的过程。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, str, splited, _i, splited_1, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个四位数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                str = "";
                splited = [];
                while (N >= 10) {
                    str = String(N);
                    splited = str.split("");
                    N = 1;
                    for (_i = 0, splited_1 = splited; _i < splited_1.length; _i++) {
                        i = splited_1[_i];
                        N *= Number(i);
                    }
                }
                console.log(N);
                return [2 /*return*/];
        }
    });
}); });
//3.9 1-N(N最大为三位数）的所有整数中，数字x一共出现了多少次？例如1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11，1出现了4次
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, X, _b, count, str, splited, i, _i, splited_2, j;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数X: ")];
            case 2:
                X = _b.apply(void 0, [_c.sent()]);
                count = 0;
                str = "";
                splited = [];
                for (i = 1; i <= N; i++) {
                    splited = String(i).split("");
                    for (_i = 0, splited_2 = splited; _i < splited_2.length; _i++) {
                        j = splited_2[_i];
                        if (X == Number(j)) {
                            count++;
                        }
                    }
                }
                console.log(count);
                return [2 /*return*/];
        }
    });
}); });
//3.10 有1,2,3,4这4个数字，能组成哪些互不相同且无重复数字的三位数？请输出
(function () {
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            for (var z = 1; z <= 4; z++) {
                if (i != j && i != z && j != z) {
                    console.log(i * 100 + j * 10 + z);
                }
            }
        }
    }
});
//3.11 求一个整数n以内的所有素数。
(function () { return __awaiter(_this, void 0, void 0, function () {
    function isPrime(n) {
        var flag = true;
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                return flag;
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
//3.12 纯粹素数是这样定义的：一个素数，去掉最高位，剩下的数仍为素数，再去掉剩下的数的最高位，余下的数还是素数。
//这样下去一直到最后剩下的个位数也还是素数。求出所有小于 N（四位数）的四位的纯粹素数。
(function () { return __awaiter(_this, void 0, void 0, function () {
    function remove(n) {
        var splited = String(n).split("");
        var index = Math.pow(10, splited.length - 2);
        var result = 0;
        for (var i = 1; i < splited.length; i++) {
            result += Number(splited[i]) * index;
            index /= 10;
        }
        return result;
    }
    function isPrime(n) {
        var flag = true;
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                return flag;
            }
        }
        return flag;
    }
    var N, _a, i, help;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个四位数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                for (i = 1001; i <= N; i++) {
                    help = i;
                    while (isPrime(help)) {
                        if (help < 10) {
                            console.log(i);
                            break; //return不对 因为return会直接结束整个方法，不管这个return在多少层循环之内
                        }
                        help = remove(help);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
//3.13 在质数的大家庭中，大小之差不超过2的两个质数称它俩为一对孪生素数，如2和3、3和5、17和19等等。
//请你统计一下，在不大于自然数N的质数中，孪生素数的对数。
(function () { return __awaiter(_this, void 0, void 0, function () {
    function isPrime(n) {
        var flag = true;
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                return flag;
            }
        }
        return flag;
    }
    var N, _a, array, count, i, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                array = [];
                count = 0;
                for (i = 2; i <= N; i++) {
                    if (isPrime(i)) {
                        array.push(i);
                    }
                }
                console.log(array);
                for (i = 0; i < array.length - 1; i++) {
                    if ((array[i + 1] - array[i]) <= 2) {
                        console.log(array[i], array[i + 1]);
                        count += 1;
                    }
                }
                console.log("共", count, "对孪生素数");
                return [2 /*return*/];
        }
    });
}); });
//3.14 给一个数，能够分解成两个素数的和。现在要给你一个n，6 <= n < 1000000，让你求他会分解成多少对素数（全都输出）
(function () { return __awaiter(_this, void 0, void 0, function () {
    function isPrime(n) {
        var flag = true;
        if (n == 1) {
            return false;
        }
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                return flag;
            }
        }
        return flag;
    }
    var N, _a, count, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                count = 0;
                for (i = 2; i < N / 2; i++) {
                    if (isPrime(i) && isPrime(N - i)) {
                        count += 1;
                        console.log(i, N - i);
                    }
                }
                console.log("能分解成", count, "对素数");
                return [2 /*return*/];
        }
    });
}); });
//3.15 一个数如果恰好等于它的因子（包括1不包括本身）之和，这个数就称为“完数”。例如6=1＋2＋3.编程 找出1000以内的所有完数
(function () { return __awaiter(_this, void 0, void 0, function () {
    function findAll(N) {
        for (var i = 1; i < N; i++) {
            if (isPerfectNumber(i)) {
                console.log(i);
            }
        }
    }
    function isPerfectNumber(n) {
        var factor = listFactor(n);
        var sum = 0;
        for (var _i = 0, factor_1 = factor; _i < factor_1.length; _i++) {
            var i = factor_1[_i];
            sum += i;
        }
        if (sum == n) {
            return true;
        }
        else {
            return false;
        }
    }
    function listFactor(n) {
        var factor = [];
        for (var i = 1; i < n; i++) {
            if (n % i == 0) {
                factor.push(i);
            }
        }
        return factor;
    }
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                findAll(N);
                return [2 /*return*/];
        }
    });
}); });
//3.16桐桐把一个自然数N的正因子个数记为F（N），例如18的所有正因子为1,2,3,6,9,18，所以F（18）= 6。
//现在给出K，输入K，求出满足 F（N）= K 最小的数
(function () { return __awaiter(_this, void 0, void 0, function () {
    function countFactor(N) {
        var count = 0;
        for (var i = 1; i <= N; i++) {
            if (N % i == 0) {
                count += 1;
            }
        }
        return count;
    }
    var K, _a, N;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数K: ")];
            case 1:
                K = _a.apply(void 0, [_b.sent()]);
                N = 1;
                while (countFactor(N) != K) {
                    N += 1;
                }
                console.log(N);
                return [2 /*return*/];
        }
    });
}); });
//3.17 任意输入一正整数N，求出它的所有质因子。如：10 =（2 5）; 20 =（2 2 5）
(function () { return __awaiter(_this, void 0, void 0, function () {
    function findPrimeFactor(N) {
        var str = "";
        while (N != 1) {
            for (var i = 2; i <= N; i++) {
                if (N % i == 0) {
                    str += i + " ";
                    N /= i;
                    break;
                }
            }
        }
        return str;
    }
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                console.log(findPrimeFactor(N));
                return [2 /*return*/];
        }
    });
}); });
//3.18 猴子吃桃问题：猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个，第二天早上又将剩下的桃子吃掉一半，又多吃了一个。
//以后每天早上都吃了前一天剩下的一半零一个。到第n天早上想再吃时，见只剩下一个桃子了，求第一天共摘了多少。
(function () { return __awaiter(_this, void 0, void 0, function () {
    function count(n) {
        if (n == 1) {
            return 1;
        }
        return (count(n - 1) + 1) * 2;
    }
    var N, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                console.log(count(N));
                return [2 /*return*/];
        }
    });
}); });
//3.19 国王将金币作为工资，发放给忠诚的骑士。第1天，骑士收到一枚金币；之后两天(第2天和第3天)里，每天收到两枚金币；
//之后三天(第4、5、6天)里，每天收到三枚金币；之后四天(第7、8、9、10天)里，每天收到四枚金币……这种工资发放模式会一直这样延续下去,
//你需要编写一个程序，确定从第一天开始到N天时，骑士一共获得了多少金币？
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, salary, index, sum, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                salary = 1;
                index = 1;
                sum = 0;
                for (i = 1; i <= N; i++) {
                    if (index > salary) {
                        salary++;
                        index = 1;
                    }
                    sum += salary;
                    index++;
                }
                console.log(sum);
                return [2 /*return*/];
        }
    });
}); });
//3.20 老王去酒馆喝酒，他一共带了N（N>30)元，酒馆里每瓶酒3元，喝完后回收可获得1元，请问老王用这些钱最多可以喝多少瓶酒？
(function () { return __awaiter(_this, void 0, void 0, function () {
    function countAndRest(n) {
        var count = Math.floor(n / 3);
        var rest = n - count * 3;
        return [count, rest];
    }
    var N, _a, count, array;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                count = 0;
                while (N >= 3) {
                    array = countAndRest(N);
                    count += array[0];
                    N = array[1] + array[0];
                }
                console.log(count);
                return [2 /*return*/];
        }
    });
}); });
//3.21 李白提壶上街买酒、喝酒，每次遇到酒店，便将壶中的酒量增添一倍，而每次见到花，便喝酒一斤，这样他遇店、见花经过n次，正好把酒全喝完了。
//问：壶中原有多少斤酒？
(function () { return __awaiter(_this, void 0, void 0, function () {
    function rollback(n) {
        return (n + 1) / 2;
    }
    var N, _a, count, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                count = 0;
                for (i = 1; i <= N; i++) {
                    count = rollback(count);
                }
                console.log(count);
                return [2 /*return*/];
        }
    });
}); });
//4.1 给定一个包含n个正整数的序列，你需要判断这个序列中的最大值是否唯一，如果是，输出次大值，否则输出最大值的出现次数。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, array, i, num, max, count, second, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                array = [];
                for (i = 0; i < N; i++) {
                    num = Math.floor(Math.random() * 10) //Math.random()  [0,1)
                    ;
                    array.push(num);
                }
                console.log(array);
                max = -1;
                count = 1;
                second = -1;
                for (i = 1; i < array.length; i++) {
                    if (array[i] == max) {
                        count++;
                    }
                    if (array[i] > max) {
                        second = max;
                        max = array[i];
                        count = 1;
                    }
                }
                if (count == 1) {
                    console.log("次大数为：", second);
                }
                else {
                    console.log("最大值出现", count, "次");
                }
                return [2 /*return*/];
        }
    });
}); });
//4.2 给定一个包含 n 个正整数的序列，去掉里面重复的值，然后输出
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, array, i, num, i, j, temp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                array = [];
                for (i = 0; i < N; i++) {
                    num = Math.floor(Math.random() * 10) //Math.random()  [0,1)
                    ;
                    array.push(num);
                }
                console.log(array);
                for (i = 1; i < array.length; i++) {
                    for (j = 0; j < i; j++) {
                        if (array[j] == array[i]) {
                            temp = array[i];
                            array[i] = array[array.length - 1];
                            array[array.length - 1] = temp;
                            array.pop();
                        }
                    }
                }
                console.log(array);
                return [2 /*return*/];
        }
    });
}); });
//4.3 给定一个包含n个正整数的序列，将其进行排序
(function () { return __awaiter(_this, void 0, void 0, function () {
    var N, _a, array, i, num, i, min, j, t;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                array = [];
                for (i = 0; i < N; i++) {
                    num = Math.floor(Math.random() * 10) //Math.random()  [0,1)
                    ;
                    array.push(num);
                }
                console.log(array);
                for (i = 0; i < array.length; i++) {
                    min = i;
                    for (j = i; j < array.length; j++) {
                        if (array[j] < array[min]) {
                            min = j;
                        }
                    }
                    t = array[i];
                    array[i] = array[min];
                    array[min] = t;
                }
                console.log(array);
                return [2 /*return*/];
        }
    });
}); });
//4.4 输入两个年份月份与日期，计算这两个日期间隔多少天
// TODO
(function () { return __awaiter(_this, void 0, void 0, function () {
    var Y1, _a, M1, _b, D1, _c, Y2, _d, M2, _e, D2, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入年份: ")];
            case 1:
                Y1 = _a.apply(void 0, [_g.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入月份: ")];
            case 2:
                M1 = _b.apply(void 0, [_g.sent()]);
                _c = Number;
                return [4 /*yield*/, utils_1.input("输入日期: ")];
            case 3:
                D1 = _c.apply(void 0, [_g.sent()]);
                _d = Number;
                return [4 /*yield*/, utils_1.input("输入年份: ")];
            case 4:
                Y2 = _d.apply(void 0, [_g.sent()]);
                _e = Number;
                return [4 /*yield*/, utils_1.input("输入月份: ")];
            case 5:
                M2 = _e.apply(void 0, [_g.sent()]);
                _f = Number;
                return [4 /*yield*/, utils_1.input("输入日期: ")];
            case 6:
                D2 = _f.apply(void 0, [_g.sent()]);
                return [2 /*return*/];
        }
    });
}); });
//4.5 有M个人，其编号分别为1－M。这M个人按顺序排成一个圈。
//现在给定一个数N，从第一个人开始依次报数，数到N的人出列，然后又从下一个人开始又从1开始依次报数，数到N的人又出列．如此循环，直到最后一个人出列为止
//例如：M=8 ,N=2,输出2，4，6，8，3，7，4，5，1   
(function () { return __awaiter(_this, void 0, void 0, function () {
    var M, _a, N, _b, array, i, count, index, str, i;
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
                array = [];
                for (i = 0; i <= M; i++) {
                    array[i] = i;
                }
                console.log(array);
                count = 0;
                index = 1;
                str = "";
                while (count < M) {
                    for (i = 1; i <= M; i++) {
                        if (array[i] == 0) {
                            continue;
                        }
                        if (array[i] != 0 && index == N) {
                            str += array[i] + " ";
                            count++;
                            array[i] = 0;
                        }
                        index++;
                        if (index == N + 1) {
                            index = 1;
                        }
                    }
                }
                console.log(str);
                return [2 /*return*/];
        }
    });
}); });
//4.6 有a盏灯，编号为1N,第一个人把所有灯打开，第二个人按下所有编号为2的倍数的开关。
//第三个人按下所有编号为三的倍数的开关，依此类推，一共有k个人，问最后有哪些灯开着。
(function () { return __awaiter(_this, void 0, void 0, function () {
    var A, _a, K, _b, N, i, i, j;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数A: ")];
            case 1:
                A = _a.apply(void 0, [_c.sent()]);
                _b = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数K: ")];
            case 2:
                K = _b.apply(void 0, [_c.sent()]);
                N = [];
                for (i = 0; i <= A; i++) {
                    N.push(false);
                }
                console.log(N);
                for (i = 1; i <= K; i++) {
                    for (j = i; j <= A; j += i) {
                        N[j] = N[j] == true ? false : true;
                    }
                }
                console.log(N);
                return [2 /*return*/];
        }
    });
}); });
//4.7 输入N,根据N的大小创建一个回型方阵
// 例如：
// N=3
// 输出：
// 3 3 3 3 3 3 3
// 3 2 2 2 2 2 3
// 3 2 1 1 1 2 3
// 3 2 1 0 1 2 3
// 3 2 1 1 1 2 3
// 3 2 2 2 2 2 3
// 3 3 3 3 3 3 3
// TODO
(function () { return __awaiter(_this, void 0, void 0, function () {
    function distance(a, b) {
        return Math.sqrt(Math.pow((a[0] - b[0]), 2) + Math.pow((a[1] - b[1]), 2));
    }
    var N, _a, array, i, j, x, y, i, str, j;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入一个自然数N: ")];
            case 1:
                N = _a.apply(void 0, [_b.sent()]);
                array = [];
                for (i = 0; i < 2 * N + 1; i++) {
                    array.push([]);
                    for (j = 0; j < 2 * N + 1; j++) {
                        x = Math.abs(j - N);
                        y = Math.abs(i - N);
                        array[i].push(x > y ? x : y);
                    }
                }
                for (i = 0; i < array.length; i++) {
                    str = "";
                    for (j = 0; j < array[i].length; j++) {
                        str += array[i][j] + " ";
                    }
                    console.log(str);
                }
                return [2 /*return*/];
        }
    });
}); })();
//4.8 输入一个n，制作一个n层的杨辉三角形：
// 举例：输入n=6
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// 1 5 10 10 5 1
(function () { return __awaiter(_this, void 0, void 0, function () {
    function yangTriangle(n, m) {
        if (m == 1 || m == n) {
            return 1;
        }
        return yangTriangle(n - 1, m - 1) + yangTriangle(n - 1, m);
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
                    for (j = 1; j <= i; j++) {
                        str += yangTriangle(i, j) + " ";
                    }
                    console.log(str);
                }
                return [2 /*return*/];
        }
    });
}); });
//4.9 有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月 后每个月又生一对兔子，假如兔子都不死，问N个月后的兔子总数为多少？
//TODO  1 1 2 3 5 8 13
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
//4.10 蓄水池有甲、丙两条进水管和乙、丁两条排水管。要灌满一池水，单开甲管需要5小时，单开丙管需要6小时；要排光一池水，单开乙管需要7小时，单开丁管需要8小时。
//现在池内没有水，如果按甲乙丙丁的顺序循环单开各水管，每次每管开1小时，则多长时间后水开始溢出水池？
(function () {
    var sum = 24 * 35; //5 6 7 8的最小公倍数
    var a = sum / 5; //甲
    var b = sum / 7; //乙
    var c = sum / 6; //丙
    var d = sum / 8; //丁
    var array = [a, -b, c, -d];
    console.log(array);
    var now = 0;
    var hour = 0;
    var index = 0;
    while (now <= sum) {
        now += array[index];
        hour++;
        index++;
        if (index > 3) {
            index = 0;
        }
    }
    console.log(hour);
});
//4.11 输入m和n，以矩阵的形式输出一个n行m列的随机二维列表
(function () { return __awaiter(_this, void 0, void 0, function () {
    function randint(a, b) {
        return a + Math.round(Math.random() * b);
    }
    var N, _a, M, _b, array, i, j, i, str, j;
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
                array = [];
                for (i = 0; i < N; i++) {
                    array.push([]);
                    for (j = 0; j < M; j++) {
                        array[i].push(randint(0, 10));
                    }
                }
                console.log(array);
                for (i = 0; i < array.length; i++) {
                    str = "";
                    for (j = 0; j < array[i].length; j++) {
                        str += array[i][j] + " ";
                    }
                    console.log(str);
                }
                return [2 /*return*/];
        }
    });
}); });
//4.12 创建一个n行m列的随机二维列表，求出其中值最大的那个元素，以及其所在的行号和列号
(function () { return __awaiter(_this, void 0, void 0, function () {
    function randint(a, b) {
        return a + Math.round(Math.random() * b);
    }
    var N, _a, M, _b, array, i, j, max, i, j;
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
                array = [];
                for (i = 0; i < N; i++) {
                    array.push([]);
                    for (j = 0; j < M; j++) {
                        array[i].push(randint(0, 10));
                    }
                }
                console.log(array);
                max = [0, 0];
                for (i = 0; i < array.length; i++) {
                    for (j = 0; j < array[i].length; j++) {
                        if (array[i][j] > array[max[0]][max[1]]) {
                            max[0] = i;
                            max[1] = j;
                        }
                    }
                }
                console.log(array[max[0]][max[1]], max[0], max[1]);
                return [2 /*return*/];
        }
    });
}); });
//4.13 创建一个n行m列的随机二维列表，求其中的的马鞍数，输出它的位置。所谓马鞍数，是指在行上最小而在列上最大的数
(function () { return __awaiter(_this, void 0, void 0, function () {
    function randint(a, b) {
        return a + Math.round(Math.random() * b);
    }
    var N, _a, M, _b, array, i, j, i, min, j, flag, x;
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
                array = [];
                for (i = 0; i < N; i++) {
                    array.push([]);
                    for (j = 0; j < M; j++) {
                        array[i].push(randint(0, 100));
                    }
                }
                console.log(array);
                for (i = 0; i < array.length; i++) {
                    min = [i, 0];
                    for (j = 0; j < array[i].length; j++) {
                        if (array[i][j] < array[min[0]][min[1]]) {
                            min[1] = j;
                        }
                    }
                    flag = true;
                    for (x = 0; x < array.length; x++) {
                        if (array[x][min[1]] > array[min[0]][min[1]]) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        console.log(min[0], min[1]);
                    }
                }
                return [2 /*return*/];
        }
    });
}); });
