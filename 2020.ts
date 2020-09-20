import { input } from "./utils";

// 1.判断一个年份是不是闰年(只能用一个if并且不能用and和or)
// 构建一个分数系统 符合心意的就加分 不符合心意的就减分 按照分数的情况判断是不是闰年(比如能被4整除就加10分 能被100整除就扣20分 能被400整除就加40分)
async () => {
  let year = Number(await input("输入一个年份year: "));
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  }
};

// 2.输入一个月份 打印2020年这个月份的日历
async () => {
  let month = Number(await input("输入一个月份month: "));
  let days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let amount = 0;
  for (let n = 1; n < month; n++) {
    amount += days[n];
  }
  let d = (3 + amount) % 7;
  console.log(amount, d);
  let line = "";
  for (let i = 0; i < day.length; i++) {
    line += day[i] + " ";
  }
  console.log(line);
  line = "";
  let count = 0;
  while (d > 0) {
    line += "  ";
    count++;
    d--;
  }
  for (let i = 1; i <= days[month]; i++) {
    line += i + " ";
    count++;
    if (count == 7) {
      console.log(line);
      line = "";
      count = 0;
    }
  }
  console.log(line);
};

// 3.错位打印 输入一个数字n 打印n行
// 1  2  3  4
//5  6  7  8
//9 10 11 12
//13 14 15 16
async () => {
  let N = Number(await input("请输入一个数字N："));
  let printLine = "";
  let empty = "";
  for (let n = 1; n <= 4 * N; n++) {
    printLine += n + " ";
    if (n % 4 == 0) {
      console.log(printLine);
      empty += " ";
      printLine = empty;
    }
  }
};

//4.
// N = 3
// 1
// 2  3
// 4  5  6
// 7  8
// 9
// 用一个变量记录还有多少个就要回车了
async () => {
  let N = Number(await input("请输入一个整数N："));
  let printLine = "";
  let flag = 1 - N;
  let count = N - Math.abs(flag);
  for (let n = 1; n <= N * N; n++) {
    printLine += n + " ";
    count--;
    if (count == 0) {
      console.log(printLine);
      flag++;
      count = N - Math.abs(flag);
      printLine = "";
    }
  }
};

// 5.N=4 打印
// 1  5  9 13
// 2  6 10 14
// 3  7 11 15
// 4  8 12 16
async () => {
  let N = Number(await input("请输入一个整数N："));
  for (let i = 0; i < N; i++) {
    let printLine = "";
    for (let j = 0; j < N; j++) {
      printLine += j * N + i + 1 + " ";
    }
    console.log(printLine);
  }
};

// 6. N = 4 打印
//1     8
//2  5  9   12
//3  6  10  13
//4  7  11  14
// 先把没有错位的值算出来 再看在没有错位的基础上减去了多少
async () => {
  let N = Number(await input("请输入一个整数N："));
  for (let i = 0; i < N; i++) {
    let printLine = "";
    for (let j = 0; j < N; j++) {
      if (i == 0 && j % 2 == 1) {
        printLine += "  ";
      } else {
        let e = Math.floor((j + 1) / 2);
        printLine += j * N + i + 1 - e + " ";
      }
    }
    console.log(printLine);
  }
};

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
async () => {
  let N = Number(await input("请输入一个整数N:"));
  let arr = new Array();
  for (let i = 0; i < N; i++) {
    arr.push(new Array());
    for (let j = 0; j < N; j++) {
      arr[i].push(0);
    }
  }
  let i = 0;
  let j = (N - 1) / 2;
  arr[i][j] = 1;
  for (let n = 2; n <= N * N; n++) {
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
    } else {
      arr[i][j] = n;
    }
  }
  console.log(arr);
};

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
async () => {
  let N = Number(await input("请输入一个整数N:"));
  let printLine = "";
  for (let n = -N + 1; n < N; n++) {
    let a = Math.abs(Math.abs(n) - N + 1); // 前面空格的个数
    let b = 2 * (Math.abs(n) - 1) - 1; // 中间空格的个数 如果b < 0 每一行就在6个的基础上少打b个*
    for (let i = 1; i <= a; i++) {
      printLine += " ";
    }
    printLine += "***";
    if (b > 0) {
      for (let j = 1; j <= b; j++) {
        printLine += " ";
      }
      printLine += "***";
    } else {
      for (let j = 1; j <= 3 + b; j++) {
        printLine += "*";
      }
    }
    console.log(printLine);
    printLine = "";
  }
};

// 9.找到一个数组中和最大的子序列的和
// [-1,4,5,-10,15,16,-3,-20,18,19]
async () => {
  let a = [-1, 4, 5, -10, 15, 16, -3, -20, 18, 19, -2];
  let max: number;
  function m(i: number, a: number[]) {
    // 以a[i]为最后一个数的子序列的和的最大值
    if (i == 0) {
      max = a[i];
      return a[i];
    }
    let result = Math.max(a[i], m(i - 1, a) + a[i]);
    if (result > max) max = result;
    return result;
  }
  m(a.length - 1, a);
  console.log(max);
};

//10. 一次循环找出列表中最大的三个数
async () => {
  let arr = [2, 3, 3, 12, 15, 14, 17, 7, 9, 20];
  let max = [];
  max.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max[max.length - 1]) {
      max.push(arr[i]);
    }
  }
  console.log(max);
};

// 11. 用*打印一个半径为9的四分之一个圆(用勾股定理算每一行的长度)
async () => {
  let r = 20;
  for (let i = 0; i <= r; i++) {
    let d = Math.round(Math.sqrt(r * r - i * i));
    printX(d + 1);
  }
  function printX(n: number) {
    let l = "";
    for (let i = 0; i < n; i++) {
      l += "* ";
    }
    console.log(l);
  }
};

// 12. 求广义表中的最大值
async () => {
  let L = [
    1,
    2,
    [3, 4, [5, 6, [7, [8, 9, [10, 21], 12], 4, 50, [3, 4, 5], 7], 14], 17],
    18,
    19
  ];
  let maxValue = 0;

  // 递归的方法
  function max(L) {
    for (let i of L) {
      if (i instanceof Array) {
        max(i);
      } else {
        if (i > maxValue) {
          maxValue = i;
        }
      }
    }
    return maxValue;
  }
  console.log(max(L));

  // 不用递归做
  // 1)双重循环
  maxValue = 0;
  for (let i of L) {
    if (i instanceof Array) {
      for (let j of i) {
        L.push(j);
      }
    } else {
      if (i > maxValue) maxValue = i;
    }
  }
  console.log(maxValue);

  // 2)一重循环 pop 不断简化 ---> 弹出来的如果是个数就直接比较，如果弹出来的是列表就把列表中的第一个数比较掉，并把去掉第一个数的列表加回原广义列表，直到广义列表为空(while len(L) > 0)
};

// 13. 找到广义列表中最大的两个值
async () => {
  let L = [
    1,
    2,
    [3, 4, [5, 6, [7, [8, 9, [10, 21], 12], 4, 50, [3, 4, 5], 7], 14], 17],
    18,
    19
  ];
  let maxTwoValue = [0, 0];
  function maxTwo(L) {
    for (let l of L) {
      if (l instanceof Array) {
        maxTwo(l);
      } else {
        if (l > maxTwoValue[1]) {
          if (l >= maxTwoValue[0]) {
            maxTwoValue[1] = maxTwoValue[0];
            maxTwoValue[0] = l;
          } else {
            maxTwoValue[1] = l;
          }
        }
      }
    }
    return maxTwoValue;
  }
  console.log(maxTwo(L));
};

// 14.输入n 输出斐波那契数列的第n项 不用递归
async () => {
  let N = Number(await input("请输入一个正整数N："));

  // 1.递归 从后往前算
  function fab(n: number) {
    if (n == 1 || n == 2) {
      return 1;
    }
    return fab(n - 1) + fab(n - 2);
  }
  console.log(fab(N));

  // 2.递推 从前往后算
  if (N == 1 || N == 2) {
    console.log(1);
    return;
  }
  let a = 1;
  let b = 1;
  let result = 0;
  for (let i = 3; i <= N; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  console.log(result);
};

// 15. 逆序打印一个整数  输入12345 输出54321
async () => {
  let N = Number(await input("请输入一个整数N:"));
  let result = 0;
  let x = 0;
  while (N / 10 > 1) {
    x = N % 10;
    result = result * 10 + x;
    N = (N - x) / 10;
  }
  result = result * 10 + N;
  console.log(result);
};

// 16. 输入一个用M进制表示的数X 输出用N进制表示的数
async () => {
  let X = Number(await input("请输入一个整数X:"));
  let M = Number(await input("请输入一个整数M:"));
  let N = Number(await input("请输入一个整数N:"));

  let temp = 0;
  let z = 0;
  while (X / 10 > 1) {
    let a = X % 10;
    temp += a * M ** z;
    X = (X - a) / 10;
    z += 1;
  }
  temp += X * M ** z;
  console.log(temp); // 用十进制表示的X

  let result = 0;
  z = 1;
  while (temp > 1) {
    let a = temp % N;
    result += a * z;
    temp = (temp - a) / N;
    z *= 10;
  }
  result += temp * z;
  console.log(result); // 用N进制表示的X
};

// 17. 汉诺塔
async () => {
  let N = await input("请输入正整数N:");
};

// 18. 冒泡排序
async () => {
  let l = [3, 9, 1, 2, 4, 9, 0, 1, 8, 10, 2, 7];
  for (let i = 0; i < l.length - 1; i++) {
    for (let j = 0; j < l.length - 1; j++) {
      if (l[j] > l[j + 1]) {
        let temp = l[j + 1];
        l[j + 1] = l[j];
        l[j] = temp;
      }
    }
  }
  console.log(l);
};

// 19. 插入排序
async () => {
  let l = [3, 9, 1, 2, 4, 9, 0, 1, 8, 10, 2, 7];
  for (let i = 0; i < l.length; i++) {
    let j = i + 1;
    let z = i;
    while (l[j] < l[z] && z >= 0) {
      let temp = l[z];
      l[z] = l[j];
      l[j] = temp;
      j = j - 1;
      z = z - 1;
    }
  }
  console.log(l);
};

// 20. 选择排序
async () => {
  let l = [3, 9, 1, 2, 4, 9, 0, 1, 8, 10, 2, 7];
  for (let i = 0; i < l.length; i++) {
    let minIndex = i;
    for (let j = i; j < l.length; j++) {
      if (l[j] < l[minIndex]) {
        minIndex = j;
      }
    }
    let temp = l[i];
    l[i] = l[minIndex];
    l[minIndex] = temp;
  }
  console.log(l);
};

// 21.二分查找
// TODO:
(async () => {
  let l = [1, 2, 4, 7, 9, 11, 16, 19, 23];
  console.log(l);
  function binarySearch(n: number, left: number, right: number) {
    console.log(left, right);
    let middle = Math.round(left / 2 + right / 2);
    if (l[middle] == n) return middle;
    if (left > right) return -1;
    if (Math.abs(left - right) == 1) {
      if (l[left] == n) return left;
      if (l[right] == n) return right;
      return -1;
    }
    if (l[middle] > n) return binarySearch(n, left, middle);
    if (l[middle] < n) return binarySearch(n, middle, right);
  }
  console.log(binarySearch(3, 0, l.length - 1));
})();
