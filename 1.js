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
    var time, _a, h;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, utils_1.input("输入时间: ")];
            case 1:
                time = _a.apply(void 0, [_b.sent()]);
                h = time / (60 * 60);
                h = h - h % 1;
                console.log(h);
                return [2 /*return*/];
        }
    });
}); })();
