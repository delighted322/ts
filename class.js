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
}); })();
