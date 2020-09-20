// 11B 上课题目
import { input } from "./utils";

//1. 质数

//1.1 求N以内的素数（例如求N，除的范围是根号N。证明：为何是根号N）
async () => {
  let N = Number(await input("输入一个自然数N: "));
};

//1.2使用函数求N以内的质数
async () => {
  let N = Number(await input("输入一个自然数N: "));

  let str = "";
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) {
      str += i + " ";
    }
  }
  console.log(str);
  function isPrime(n: number) {
    let flag = true;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
};

//1.3筛选法（1，2，3，4，5，6，7...第一次循环，2，4，6，8删除，第二次循环，3，6，9，12删除）
async () => {
  let N = Number(await input("输入一个自然数N: "));
  let array = [];
  for (let i = 0; i <= N; i++) {
    array.push(i);
    if (i == 1) {
      array[1] = 0;
    }
  }

  for (let i = 2; i < N / 2; i++) {
    let index = i + 1;
    while (index <= N) {
      if (array[index] != 0 && array[index] % i == 0) {
        array[index] = 0;
      }
      index++;
    }
  }

  let str = "";
  for (let i of array) {
    if (i != 0) {
      str += i + " ";
    }
  }
  console.log(str);
};

//1.4质因数分解(将一个数字分解成质因数  其实不需要求证因数是否为指数 例如能整除4就肯定能先被2整除)
async () => {
  let N = Number(await input("输入一个自然数N: "));
  let str = "";
  let index = 2;
  while (N != 1) {
    if (N % index == 0) {
      str += index + " ";
      N /= index;
      index = 2;
    } else {
      index++;
    }
  }
  console.log(str);
};

//1.5求孪生素数(两个素数相差不大于2)
//TODO
async () => {
  let N = Number(await input("输入一个自然数N: "));
};

//2.最大公约数和最小公倍数

//2.1 穷举法
async () => {
  let M = Number(await input("输入一个自然数M: "));
  let N = Number(await input("输入一个自然数N: "));
  let gcd = 2; //最大公约数
  let lcm = Math.min(M, N); //最小公倍数

  for (let i = 2; i <= Math.min(M, N); i++) {
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
};

//2.2 辗转相除
async () => {
  let M = Number(await input("输入一个自然数M: "));
  let N = Number(await input("输入一个自然数N: "));
  let initM = M;
  let initN = N;
  let temp = 0;
  while (N != 0) {
    temp = M % N;
    M = N;
    N = temp;
  }
  console.log("最大公约数：", M);
  let lcm = (initM * initN) / M;
  console.log("最小公倍数", lcm);
};

//2.3辗转相减
async () => {
  let M = Number(await input("输入一个自然数M: "));
  let N = Number(await input("输入一个自然数N: "));
  let initM = M;
  let initN = N;
  let temp = 0;
  while (N != 0) {
    temp = Math.max(M, N) - Math.min(M, N);
    M = Math.max(N, temp);
    N = Math.min(N, temp);
  }
  console.log("最大公约数：", M);
  let lcm = (initM * initN) / M;
  console.log("最小公倍数", lcm);
};

//2.4打印n以内所有互质的数对
async () => {
  let N = Number(await input("输入一个自然数N: "));
  for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= N; j++) {
      if (i > j) {
        continue;
      }
      if (gcd(i, j) == 1) {
        str += "[" + i + ", " + j + "]  ";
      }
    }
    console.log(str);
  }

  function gcd(M: number, N: number) {
    let temp = 0;
    while (N != 0) {
      temp = Math.max(M, N) - Math.min(M, N);
      M = Math.max(N, temp);
      N = Math.min(N, temp);
    }
    return M;
  }
};

//2.5 N/M分数化简
async () => {
  let N = Number(await input("输入一个自然数N: "));
  let M = Number(await input("输入一个自然数M: "));

  while (gcd(N, M) != 1) {
    let temp = gcd(N, M);
    N = N / temp;
    M = M / temp;
  }
  console.log(N, M);
  function gcd(M: number, N: number) {
    let temp = 0;
    while (N != 0) {
      temp = Math.max(M, N) - Math.min(M, N);
      M = Math.max(N, temp);
      N = Math.min(N, temp);
    }
    return M;
  }
};

//2.6 分数的加法
async () => {
  let N = Number(await input("输入一个自然数N: "));
  let M = Number(await input("输入一个自然数M: "));
  let O = Number(await input("输入一个自然数O: "));
  let P = Number(await input("输入一个自然数P: "));

  console.log("加法", N * P + O * M, M * P);
  console.log("减法", N * P - O * M, M * P);
  console.log("乘法", N * O, M * P);
  console.log("除法", N * P, M * O);
};

//2.7 输入一个数字组成的字符串表示循环小数，求等价的分数
//如 输入3 输出1/3
async () => {
  let N = Number(await input("输入一个自然数N: "));
  let i = 10;
  while (N / i > 1) {
    i *= 10;
  }
  console.log(N, "/", i - 1);
};

//2.8 输入一个数N，找到所有1/M + 1/P =1/N的数对
async () => {
  let N = Number(await input("输入一个自然数N: "));
  let P = 0;
  for (let M = N + 1; M <= N * 2; M++) {
    // M、P ∈ [N + 1, N(N + 1)]
    P = (M * N) / (M - N);
    if (P % 1 == 0) {
      console.log(M, P);
    }
  }
};

//3. 列表的顺序查找

//3.1 生成一个长为100的列表 大小为1~99
async () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);
};

//3.2 找出列表中最小的数并打印它的下标
async () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);

  let min = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[min]) {
      min = i;
    }
  }
  console.log("最小值：", array[min], "下标:", min);
};

//3.3 有一个列表，输入一个n，如果列表中有这个数，打印这个数第一次出现的下标，不存在则打印-1
async () => {
  let N = Number(await input("输入一个自然数N："));
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] == N) {
      console.log(i);
      return;
    }
  }
  console.log(-1);
};

//3.4 列表中，问前多少个数的和是不超过300的（再多加一个就超过300了）
async () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);

  let sum = 0;
  let index = 0;
  while (sum <= 300) {
    sum += array[index];
    index++;
  }
  console.log(index--, sum);
};

//3.5 用一个循环，同时找到列表中的最大和最小值
async () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);

  let min = 0;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[min]) {
      min = i;
    }
    if (array[i] > array[max]) {
      max = i;
    }
  }
  console.log(array[min], array[max]);
};

//3.6 从先往后查列表，输出最小值的下标（如果有多个输出最后一个）
async () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);

  let min = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= array[min]) {
      min = i;
    }
  }
  console.log(min, array[min]);
};

//3.7 计算一下列表中奇数多还是偶数多
async () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);

  let odd = 0; //奇数
  let even = 0; //偶数
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  let str = odd > even ? "奇数多" : "偶数多";
  console.log(str);
};

//3.8 找出列表中第二大的数 (只用一次循环)
async () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(Math.round(100 * Math.random()));
  }

  array = [9, 19, 18, 7];
  console.log(array);

  let max = 0;
  let second = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[max]) {
      second = max;
      max = i;
    } else if (array[i] > array[second]) {
      second = i;
    }
  }
  console.log(array[max], array[second], max, second);
};

//3.9 找出列表中相邻两个数的和的最大值以及这两个数的下标
async () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.round(100 * Math.random()));
  }
  console.log(array);

  let max = array[0] + array[1];
  let index = 1;
  for (let i = 2; i < array.length; i++) {
    if (array[i] + array[i - 1] > max) {
      max = array[i] + array[i - 1];
      index = i;
    }
  }
  console.log(max, index - 1, index);
};

//4. 二维列表

//4.1 生成一个20行 30列的列表，写一个函数，把这个二维列表打印成矩阵
function randMatrix(M: number, N: number) {
  //let M = Number(await input("请输入一个自然数M：")) //行
  //let N = Number(await input("请输入一个自然数N：")) //列

  let list = []; //这里如果写 let list = Array<Array<number>>  会出错 why?
  for (let m = 0; m < M; m++) {
    list.push([]);
    for (let n = 0; n < N; n++) {
      list[m].push(Math.round(10 * Math.random()));
    }
  }
  return list;
}

//打印二维列表
function printMatrix(list: Array<Array<number>>) {
  for (let i = 0; i < list.length; i++) {
    let str = "";
    for (let j = 0; j < list[i].length; j++) {
      str += list[i][j] + " ";
    }
    console.log(str);
  }
}

//4.2 求最大值以及它的下标
async () => {
  let M = Number(await input("请输入一个自然数M：")); //行
  let N = Number(await input("请输入一个自然数N：")); //列
  let list = randMatrix(M, N);
  printMatrix(list);

  let index = [0, 0];
  for (let m = 0; m < list.length; m++) {
    for (let n = 0; n < list[m].length; n++) {
      if (list[m][n] > list[index[0]][index[1]]) {
        index[0] = m;
        index[1] = n;
      }
    }
  }
  console.log(list[index[0]][index[1]], index[0], index[1]);
};

//4.3 用一个循环打印二维列表
async () => {
  let M = Number(await input("请输入一个自然数M：")); //行
  let N = Number(await input("请输入一个自然数N：")); //列
  let list = randMatrix(M, N);
  printMatrix(list);

  console.log("------------");
  let x = 0;
  let y = 0;
  let str = "";
  for (let i = 0; i < M * N; i++) {
    x = Math.floor(i / N);
    y = i % N;
    str += list[x][y] + " ";
    if (y == N - 1) {
      console.log(str);
      str = "";
    }
  }
};

//4.4 弓字型打印
async () => {
  let M = Number(await input("请输入一个自然数M：")); //行
  let N = Number(await input("请输入一个自然数N：")); //列
  let list = randMatrix(M, N);
  printMatrix(list);

  console.log("-----------------------");

  let x = 0;
  let y = 0;
  let str = "";
  let index = 0;
  for (let i = 0; i < M * N; i++) {
    x = Math.floor(i / N);
    if (x % 2 == 0) {
      y = i % N;
    } else {
      y = N - 1 - (i % N);
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
};

//4.5 斜着打印 右上到左下  (其实 每一斜行x和y的和相等 可以简化)
//TODO
async () => {
  let M = Number(await input("请输入一个自然数M：")); //行
  let N = Number(await input("请输入一个自然数N：")); //列
  let list = randMatrix(M, N);
  printMatrix(list);

  console.log("-----------------------");

  let x = 0;
  let y = 0;
  let str = "";
  for (let i = 0; i < M + N; i++) {
    while (x >= 0 && x < M && y >= 0 && y < N) {
      str += list[x][y] + " ";
      x += 1;
      y -= 1;
    }
    if (i < N - 1) {
      x = 0;
      y = i + 1;
    } else {
      y = N - 1;
      x = i + 2 - N;
    }
    console.log(str);
    str = "";
  }
};

//4.6 找到二维列表中十字范围之和的最大值
async () => {
  let M = Number(await input("请输入一个自然数M：")); //行
  let N = Number(await input("请输入一个自然数N：")); //列
  let list = randMatrix(M, N);
  printMatrix(list);

  let max = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      let sum = 0;
      for (let y = 0; y < N; y++) {
        sum += list[i][y];
      }
      for (let x = 0; x < M; x++) {
        sum += list[x][j];
      }
      sum -= list[i][j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  console.log(max);
};

//5 一维列表的交换

//5.1 生成一个长度为20的一维列表
function randList(len: number): number[] {
  let list = [];
  for (let i = 0; i < len; i++) {
    list.push(Math.round(Math.random() * 20));
  }
  return list;
}
//打印一维列表
function printList(list: number[]) {
  let str = "";
  for (let i = 0; i < list.length; i++) {
    str += list[i] + " ";
  }
  console.log(str);
}

//5.2 把列表中的值都向前移一格
() => {
  let list = randList(20);
  printList(list);
  let first = list[0];
  for (let i = 0; i < list.length; i++) {
    list[i] = list[i + 1];
    if (i == list.length - 1) {
      list[i] = first;
    }
  }
  printList(list);
};

//5.3 把列表中的值都向后移动一格
() => {
  let list = randList(20);
  printList(list);

  let last = list[list.length - 1];
  for (let i = list.length - 1; i >= 0; i--) {
    list[i] = list[i - 1];
    if (i == 0) {
      list[i] = last;
    }
  }
  printList(list);
};

//5.4 成对交换  1跟2换 3跟4换 5跟6换
() => {
  let list = randList(20);
  printList(list);

  for (let i = 1; i < list.length; i += 2) {
    let temp = list[i];
    list[i] = list[i - 1];
    list[i - 1] = temp;
  }
  printList(list);
};

//5.5 列表转置
() => {
  let list = randList(20);
  printList(list);

  for (let i = 0; i < list.length / 2; i++) {
    let temp = list[i];
    list[i] = list[list.length - 1 - i];
    list[list.length - 1 - i] = temp;
  }
  printList(list);
};

//5.6 将列表中的每个数变成自己和前一个数的和 (第一个数是第一个数加最后一个数  加的是原列表里的值)
() => {
  let list = randList(20);
  printList(list);

  let last = list[list.length - 1];
  for (let i = list.length - 1; i >= 0; i--) {
    if (i == 0) {
      list[i] = list[i] + last;
      break;
    }
    list[i] = list[i] + list[i - 1];
  }
  printList(list);
};

//5.7 最大最小值交换
() => {
  let list = randList(10);
  printList(list);

  let max = 0;
  let min = 0;
  for (let i = 1; i < list.length - 1; i++) {
    if (list[i] > list[max]) {
      max = i;
    }
    if (list[i] < list[min]) {
      min = i;
    }
  }
  let temp = list[min];
  list[min] = list[max];
  list[max] = temp;
  printList(list);
};

//6 二维列表的交换

//生成一个8 × 8的二维列表
//6.1 在原位将二维列表左右翻转
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length / 2; j++) {
      let temp = list[i][j];
      list[i][j] = list[i][list[i].length - 1 - j];
      list[i][list[i].length - 1 - j] = temp;
    }
  }
  console.log("------------------------------");
  printMatrix(list);
};

//6.2 上下翻转
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  for (let j = 0; j < list[0].length; j++) {
    for (let i = 0; i < list.length / 2; i++) {
      let temp = list[i][j];
      list[i][j] = list[list.length - 1 - i][j];
      list[list.length - 1 - i][j] = temp;
    }
  }
  printMatrix(list);
};

//6.3 转置 沿对角线翻转
//6.3.1 沿左上到右下的对角线翻转
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  for (let i = 1; i < M; i++) {
    for (let j = 0; j < i; j++) {
      let temp = list[i][j];
      list[i][j] = list[j][i];
      list[j][i] = temp;
    }
  }
  printMatrix(list);
};

//6.3.2 沿右上到左下的对角线翻转
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  for (let i = 0; i < M - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      let temp = list[i][j];
      list[i][j] = list[N - 1 - j][N - 1 - i];
      list[N - 1 - j][N - 1 - i] = temp;
    }
  }
  printMatrix(list);
};

//6.4 中心对称
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  for (let i = 0; i < list.length / 2; i++) {
    for (let j = 0; j < list.length; j++) {
      let temp = list[i][j];
      list[i][j] = list[M - 1 - i][N - 1 - j];
      list[M - 1 - i][N - 1 - j] = temp;
    }
  }
  printMatrix(list);
};

//6.5 把8 × 8的矩阵分成多个2 × 2的小矩阵 每个小矩阵内部的数字顺时针移动一位
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  for (let i = 0; i < list.length - 1; i += 2) {
    for (let j = 0; j < list[i].length - 1; j += 2) {
      let a = list[i][j];
      let b = list[i][j + 1];
      list[i][j] = list[i + 1][j];
      list[i][j + 1] = a;
      list[i + 1][j] = list[i + 1][j + 1];
      list[i + 1][j + 1] = b;
    }
  }
  printMatrix(list);
};

//6.6 交换矩阵的最大最小数
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  let max = [0, 0];
  let min = [0, 0];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] > list[max[0]][max[1]]) {
        max = [i, j];
      }
      if (list[i][j] < list[min[0]][min[1]]) {
        min = [i, j];
      }
    }
  }
  let a = list[max[0]][max[1]];
  let b = list[min[0]][min[1]];
  list[max[0]][max[1]] = b;
  list[min[0]][min[1]] = a;
  printMatrix(list);
};

//6.7 矩阵右转90度
//TODO 有没有办法不用另外一个数组 直接原地转90度
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  let list2 = [];
  for (let i = 0; i < M; i++) {
    list2.push([]);
    for (let j = 0; j < N; j++) {
      list2[i].push(-1);
    }
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      list2[i][j] = list[i][j];
      if (list2[list[i].length - 1 - j][i] != -1) {
        list[i][j] = list2[list[i].length - 1 - j][i];
      } else {
        list[i][j] = list[list[i].length - 1 - j][i];
      }
    }
  }
  printMatrix(list);
};

//原地右转90度
async () => {
  let M = Number(await input("请输入一个自然数M："));
  let N = Number(await input("请输入一个自然数N："));
  let list = randMatrix(M, N);
  printMatrix(list);
  console.log("----------------");

  let a = [];
  let b = [];
  let c = [];
  let d = [];
  for (let i = 0; i < Math.floor(M / 2); i++) {
    for (let j = 0; j < Math.floor((N + 1) / 2); j++) {
      // a    d
      a = [i, j]; // b    c
      b = [N - 1 - j, i];
      c = [N - 1 - b[1], b[0]];
      d = [N - 1 - c[1], c[0]];
      let temp = list[a[0]][a[1]];

      list[a[0]][a[1]] = list[b[0]][b[1]];
      list[b[0]][b[1]] = list[c[0]][c[1]];
      list[c[0]][c[1]] = list[d[0]][d[1]];
      list[d[0]][d[1]] = temp;
    }
  }
  printMatrix(list);
};

//7.简单排序

//7.1 选择排序：每一次选出最小的，把它跟它应该在的位置互换

//7.1.1 用选择排序的方法将列表排序
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");

  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    let temp = list[i];
    list[i] = list[min];
    list[min] = temp;
  }
  printList(list);
};

//7.1.2 不用循环 用if判断 将3个数用选择排序的方法排序
//TODO
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");
};

//7.1.3 所有的奇数在偶数前面 奇数偶数分别排序
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");

  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = i; j < list.length; j++) {
      if (myCompare(list[min], list[j])) {
        min = j;
      }
    }
    let temp = list[i];
    list[i] = list[min];
    list[min] = temp;
  }
  printList(list);
};

// 排序规则 奇数比偶数小 奇数偶数分别排序
function myCompare(M: number, N: number) {
  //false: M < N   true: M > N
  if ((M + N) % 2 == 0) {
    return M > N ? true : false;
  } else {
    return M % 2 == 1 ? false : true;
  }
}

//7.2 插入排序：将无序部分的第一个数字跟前面已经有序部分比大小，从有序部分的最后一个数字开始比，比到这个数合适的位置后停下来，类似于理牌

//7.2.1 用插入排序的方法将列表排序
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");

  for (let i = 1; i < list.length; i++) {
    //i是无序部分的第一个数的下标
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (list[index] < list[j]) {
        let temp = list[index];
        list[index] = list[j];
        list[j] = temp;
        index = j;
      } else {
        break;
      }
    }
  }
  printList(list);
};

//7.2.2 不用循环 用if判断 将3个数用选择排序的方法排序
//TODO
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");
};

//7.2.3 所有的奇数在偶数前面 奇数偶数分别排序
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");

  for (let i = 1; i < list.length; i++) {
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (myCompare(list[j], list[index])) {
        let temp = list[index];
        list[index] = list[j];
        list[j] = temp;
        index = j;
      } else {
        break;
      }
    }
  }
  printList(list);
};

//7.3 冒泡排序：相邻两个挨个比 大的往后换

//7.3.1 用冒泡排序的方法将数列排序
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  printList(list);
};

//7.3.2 不用循环 用if判断 将3个数用冒泡排序的方法排序
//TODO
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");
};

//7.3.4 奇数在偶数的前面 奇数偶数分别排序
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log("----------------");

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (myCompare(list[j], list[j + 1])) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  printList(list);
};

//8. 递归

//8.1 定义四个函数 分别是分数的加减乘除
function plus(X: number[], Y: number[]) {
  //加  x : [x0, x1]   y : [y0, y1]
  return simplify([X[0] * Y[1] + Y[0] * X[1], X[1] * Y[1]]);
}

function minus(X: number[], Y: number[]) {
  //减
  return simplify([X[0] * Y[1] - Y[0] * X[1], X[1] * Y[1]]);
}

function multiply(X: number[], Y: number[]) {
  //乘
  return simplify([X[0] * Y[0], X[1] * Y[1]]);
}

function divide(X: number[], Y: number[]) {
  //除
  return simplify([X[0] * Y[1], X[1] * Y[0]]);
}

function simplify(N: number[]) {
  //分数化简
  let gcd = 1;
  let x = N[0];
  let y = N[1];

  let temp = 0;
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
async () => {
  let N = Number(await input("请输入一个自然数N：")); //N表示有几层x

  function result(N: number) {
    if (N == 1) {
      //return [3, 2]
      return 3 / 2;
    } else {
      //return divide(result(N - 1)[0] + result(N - 1)[1], result(N - 1)[0]) //这样递归出不来
      return 1 + 1 / result(N - 1);
    }
  }
  console.log(result(N));
};

//8.3 求A(n) B(n)
//     0    1    2    3    4    5
// A   5    2   -6   -16  -20  -8
// B   1   -3   -8   -10  -4   12
() => {
  function A(n: number) {
    if (n == 0) {
      return 5;
    }
    return 2 * B(n - 1);
  }

  function B(n: number) {
    if (n == 0) {
      return 1;
    }
    return A(n) - A(n - 1);
  }
  console.log(A(5), B(5));
};

//8.4 打印数列 (展开打印 不要出现括号)
// [10, 20, [1, 2], 80, [1, 3, [8, 4]]]
async () => {
  let array = [10, 20, [1, 2], 80, [1, 3, [8, 4]]];
  let str = "";
  print(array);
  console.log(str);

  function print(array: any[]) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        print(array[i]);
      } else {
        str += array[i] + " ";
      }
    }
  }
};

//9.

//9.1 求数列的前n项和(用递归的思路)
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log(S(list, 3));

  function S(list: number[], n: number) {
    if (n == 1) {
      return list[0];
    } else {
      return S(list, n - 1) + list[n - 1];
    }
  }
};

//9.2 求数列的最大值 (递归的思路  第N项和第第N - 1项的关系)
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log(max(list, list.length));

  function max(list: number[], n: number) {
    if (n == 0) {
      return list[0];
    } else {
      return Math.max(max(list, n - 1), list[n - 1]);
    }
  }
};

//9.3 同时返回最大值和最小值
async () => {
  let N = Number(await input("请输入自然数N："));
  let list = randList(N);
  printList(list);
  console.log(maxAndMin(list, list.length));

  function maxAndMin(list: number[], n: number) {
    if (n == 0) {
      return [list[0], list[0]]; //前面的是最大值 后面的是最小值
    } else {
      return [
        Math.max(maxAndMin(list, n - 1)[0], list[n - 1]),
        Math.min(maxAndMin(list, n - 1)[1], list[n - 1])
      ];
    }
  }
};

//9.4 定义一个函数 打印这个数列的n项的值
async () => {
  let N = Number(await input("请输入自然数N："));
  console.log(array5(N));

  // 1  2  4  8  16  32  64  128 ......
  function array1(n: number) {
    if (n == 1) {
      return 1;
    } else {
      return 2 * array1(n - 1);
    }
  }

  //1  2  4  7  11  16  22  29 ......
  function array2(n: number) {
    if (n == 1) {
      return 1;
    } else {
      return array2(n - 1) + n - 1;
    }
  }

  // 1  2  4  5  7  8  10  11  13  14  16  17
  function array3(n: number) {
    if (n == 1) {
      return 1;
    } else {
      return array3(n - 1) + (n % 2) + 1;
    }
  }

  // 1  1  2  2  4  4  5  8  7
  function array4(n: number) {
    if (n == 1 || n == 2) {
      return 1;
    } else {
      if (n % 2 == 1) {
        return array4(n - 2) + (Math.floor((n + 1) / 2) % 2) + 1;
      } else {
        return array4(n - 2) * 2;
      }
    }
  }

  // π = 3 + 4 / 2*3*4  - 4 / 4*5*6 + 4 / 6*7*8 - 4 / 8*9*10 ......
  function array5(n: number) {
    if (n == 1) {
      return 3;
    } else {
      let x = 2 * (n - 1);
      return array5(n - 1) + (4 / (x * (x + 1) * (x + 2))) * (-1) ** n;
    }
  }
};

//9.5 用递归的方法求两个数的最大公约数  gcd(m, n)
async () => {
  let M = Number(await input("请输入正整数M："));
  let N = Number(await input("请输入正整数N："));
  console.log(gcd(M, N));

  function gcd(M: number, N: number) {
    if (N == 0) {
      return M;
    } else {
      return gcd(N, M % N);
    }
  }
};

//9.6 广义表：这个列表中的元素可能还是列表 可以套多层
// L = [32, 18, [1, 2], [3, [2, 5]], 7]

//9.6.1 把列表中所有元素打印出来
async () => {
  let L = [32, 18, [1, 2], [3, [2, 5]], 7];
  let str = "";
  print(L);
  console.log(str);

  function print(L: any[]) {
    for (let i = 0; i < L.length; i++) {
      if (L[i] instanceof Array) {
        print(L[i]);
      } else {
        str += L[i] + " ";
      }
    }
  }
};

//9.6.2 把列表中所有元素的和求出来(不用全局变量)
async () => {
  let L = [32, 18, [1, 2], [3, [2, 5]], 7];
  console.log(S(L, L.length));

  function S(L: any[], n: number) {
    if (n == 1) {
      if (L[0] instanceof Array) {
        return S(L[0], L[0].length);
      } else {
        return L[0];
      }
    } else {
      if (L[n - 1] instanceof Array) {
        return S(L, n - 1) + S(L[n - 1], L[n - 1].length);
      } else {
        return S(L, n - 1) + L[n - 1];
      }
    }
  }
};

// 9.6.3 求广义表中的最大值
() => {
  let L = [32, 18, [1, 2], [3, [2, 5, 50]], 7];
  console.log(max(L, L.length));

  function max(L: any[], n) {
    if (n == 1) {
      if (L[n - 1] instanceof Array) {
        return max(L[n - 1], L[n - 1].length);
      } else {
        return L[n - 1];
      }
    } else {
      if (L[n - 1] instanceof Array) {
        return Math.max(max(L, n - 1), max(L[n - 1], L[n - 1].length));
      } else {
        return Math.max(max(L, n - 1), L[n - 1]);
      }
    }
  }
};

//9.6.4 生成一个广义表：
//80%的概率往列表中加元素，这个元素50%的概率是一个列表
//(如果概率在20%那部分 那这个列表就不再加元素了)
//TODO 还有一些问题 再看看 感觉有点奇怪
() => {
  let L = [];
  randList(L);
  // JSON.stringify(L)
  console.log(L);

  function randList(L: any[]) {
    if (rand() < 2) {
      //20%的概率不再加元素
      console.log("不加了");
      return L;
    } else {
      //80%的概率往列表中加元素
      let x = rand();
      if (x < 5) {
        L.push(x);
        console.log("加了一个元素");
        randList(L);
      } else {
        //这个元素50%的概率是一个列表
        let y: number[] = [];
        randList(y);
        L.push(y);
        console.log("加了一个列表");
        randList(L);
      }
    }
  }

  function rand() {
    return Number(Math.floor(10 * Math.random()));
  }
};

// 9.6.5 求广义表里面最长的子列表的长度
async () => {
  let L = [2, 3, [2, 3, 4, 5, 6], 1, 2, 3];
  console.log(maxLength(L, L.length));

  function maxLength(L: any[], n: number) {
    if (n == 1) {
      if (L[0] instanceof Array) {
        return maxLength(L[0], L[0].length);
      } else {
        return 1;
      }
    } else {
      if (L[n - 1] instanceof Array) {
        let max = Math.max(
          maxLength(L, n - 1),
          maxLength(L[n - 1], L[n - 1].length)
        );
        return Math.max(max, n);
      } else {
        return Math.max(maxLength(L, n - 1), n);
      }
    }
  }
};

// 10. 字符串
// let a = "hello"
// console.log(a[0])  // 把字符串看成列表

// let s = input()  //长的
// let c = input() //只有一个字符
// 10.1 打印c在s中出现的第一个位置
async () => {
  let s = String(await input("请输入字符串s："));
  let c = await input("请输入字符c：");

  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      console.log(i);
      return;
    }
  }
};

//10.2  打印这个字符在字符串中出现的次数
async () => {
  let s = String(await input("请输入字符串s："));
  let c = await input("请输入字符c：");

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      count++;
    }
  }
  console.log(count);
};

//10.3 短的字符串不只是一个字符 输出第一次出现的位置
async () => {
  let s = String(await input("请输入字符串s："));
  let c = String(await input("请输入字符c："));

  for (let i = 0; i < s.length; i++) {
    let index = i;
    let flag = true;
    for (let j = 0; j < c.length; j++) {
      if (c[j] != s[i]) {
        flag = false;
        break;
      }
      i++;
    }
    if (flag) {
      console.log(index);
      return;
    }
    i = index;
  }
};

//10.4 在长字符串中删掉短字符串中的字符 (字符串的加法) hello , l => heo
async () => {
  let s = String(await input("请输入字符串s："));
  let c = String(await input("请输入字符c："));

  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != c) {
      str += s[i];
    }
  }
  console.log(str);
};

//10.5 字符串替换  abcabdabe  把ab替换成xy
//10.5.1 这一种有点丑
async () => {
  let s = String(await input("请输入字符串s：")); //原字符串
  let x = String(await input("请输入字符x：")); //要被替换的字符串
  let y = String(await input("请输入字符y：")); //替换的字符串

  let str = "";
  for (let i = 0; i < s.length; i++) {
    let index = i;
    let flag = true;
    for (let j = 0; j < x.length; j++) {
      if (x[j] != s[i]) {
        flag = false;
        break;
      }
      i++;
    }
    if (flag) {
      str += y;
      i = index + x.length - 1;
      continue;
    }
    str += s[index];
    i = index;
  }
  console.log(str);
};

//10.5.2 每次判断开头两个字母是不是ab 是的就替换 并且继续去查后面部分开头是不是ab   (递归  s[2:])
async () => {
  let s = String(await input("请输入字符串s：")); //原字符串
  let x = String(await input("请输入字符x：")); //要被替换的字符串
  let y = String(await input("请输入字符y：")); //替换的字符串

  let str = "";
  function replace(s: string) {
    if (s.length < x.length) {
      str += s;
      return str;
    }
    if (x == s.slice(0, x.length)) {
      str += y;
      replace(s.slice(x.length, s.length)); //s.slice(start, end) 左闭右开
    } else {
      str += s[0];
      replace(s.slice(1, s.length));
    }
  }
  replace(s);
  console.log(str);
};

//10.6 判断一个字符串是不是对称的
async () => {
  let str = String(await input("请输入一个字符串:"));
  let flag = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      flag = false;
      break;
    }
  }
  console.log(flag);
};

//10.7 找到字符串中第一个不重复的字符   // ababcde  -> c
async () => {
  let str = String(await input("请输入字符串："));

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      console.log(str[i]);
      return;
    }
  }
};

//10.8 把一个大小写混合的句子变成全大写
async () => {
  let str = String(await input("请输入一个包含大小写字母的字符串："));
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) > "Z".charCodeAt(0)) {
      result += String.fromCharCode(
        str[i].charCodeAt(0) - ("a".charCodeAt(0) - "A".charCodeAt(0))
      );
      continue;
    }
    result += str[i];
  }
  console.log(result);
};

//10.9 def atoi   把"1234"变成1234
async () => {
  let str = String(await input("请输入一串数字："));
  let list = [];

  for (let i = 0; i < str.length; i++) {
    list.push(str[i].charCodeAt(0) - "0".charCodeAt(0));
  }

  let p = 1;
  let result = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    result += list[i] * p;
    p *= 10;
  }
  console.log(result);
};

//10.10 91876876  写一个数字(不超过10亿)  写出这个数的中文读法
//TODO
async () => {
  let num = String(await input("请输入一个不超过10亿的数字："));
  let splited = num.split("");
  let list = [
    "个",
    "十",
    "百",
    "千",
    "万",
    "十万",
    "百万",
    "千万",
    "亿",
    "十亿"
  ];
  splited = splited.reverse();
  console.log(splited);
};

//11
//11.1 打印矩阵 输入一个数字n 打印n行n列的矩阵
// n = 5
//打印
// 0 1 2 3 4
// 1 2 3 4 5
// 2 3 4 5 6
// 3 4 5 6 7
// 4 5 6 7 8
async () => {
  let n = Number(await input("请输入一个自然数n："));
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i; j < i + n; j++) {
      str += j + " ";
    }
    console.log(str);
  }
};

//11.2 把矩阵放到列表里
//[
//  [0, 1, 2, 3, 4],
//  [1, 3, 4, 4, 5],
//  [2, 3, 4, 5, 6],
//  [3, 4, 5, 6, 7],
//  [4, 5, 6, 7, 8]
//]
async () => {
  let n = Number(await input("请输入一个自然数n："));
  let list = [];
  for (let i = 0; i < n; i++) {
    list.push([]);
    for (let j = i; j < i + n; j++) {
      list[i].push(j);
    }
  }
  console.log(list);
};

//11.3 定义一个函数 将二维列表打印成矩阵(每个数字占两格)
/**
 * 将输入的二维列表打印成矩阵
 * @param list 要打印成矩阵的列表
 */
function printListToMatrix(list: any[]) {
  for (let i = 0; i < list.length; i++) {
    let str = "";
    for (let j = 0; j < list[i].length; j++) {
      str += list[i][j] + " ";
    }
    console.log(str);
  }
}

async () => {
  let n = Number(await input("请输入一个自然数n："));
  let list = [];
  for (let i = 0; i < n; i++) {
    list.push([]);
    for (let j = i; j < i + n; j++) {
      list[i].push(j);
    }
  }
  printListToMatrix(list);
};

//11.4 定义一个函数 将矩阵中所有的奇数变成1 偶数变成0
function changeTo0or1(list: any[]) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      list[i][j] = list[i][j] % 2 == 1 ? 1 : 0;
    }
  }
}
async () => {
  let n = Number(await input("请输入一个自然数n："));
  let list = [];
  for (let i = 0; i < n; i++) {
    list.push([]);
    for (let j = i; j < i + n; j++) {
      list[i].push(j);
    }
  }
  printListToMatrix(list);
  console.log("----------------");
  changeTo0or1(list);
  printListToMatrix(list);
};

//11.5 定义一个函数 将矩阵左右翻转
//TODO 前面好像做过

//11.6 从[0, 0]开始将与1相邻的1变成2 如果被0隔开了就不变
// [
//     [1, 1, 1, 1, 1, 1, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0, 0, 1, 1],
//     [1, 1, 1, 1, 0, 0, 1, 0, 1],
//     [1, 0, 0, 1, 0, 1, 0, 0, 1],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0]
// ]

//将1四个方向周围能变成2的变成2 变成2地方的四个方向也能变成2的变成2 (递归)
async () => {
  let list = [
    [1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 1, 1, 1, 0, 0, 0, 0, 0]
  ];
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  /**
   * 把1周围能变成2的变成2 然后再递归地去找变成2的四个方向有哪些能变成2
   * @param x
   * @param y
   * @param list
   */
  function change(x: number, y: number, list: any[]) {
    list[x][y] = 2;
    for (let l of dirs) {
      let xx = x + l[0];
      let yy = y + l[1];

      if (xx < 0 || xx > list.length - 1 || yy < 0 || yy > list[0].length - 1) {
        continue;
      }
      if (list[xx][yy] == 1) {
        list[xx][yy] = 2;
        change(xx, yy, list);
      }
    }
  }

  printListToMatrix(list);
  change(2, 1, list);
  console.log("******************");
  printListToMatrix(list);
};

//11.7 围棋 白子为1 黑子为2 空子为0 把死掉的白子拿掉变为0 (计算白子的气 1的旁边是0才是)
//TODO
async () => {};

//11.8 走迷宫 从2出发走到3 1是通路 0是墙 用程序找到路
// TODO
// [
//     [2, 1, 1, 1, 1, 1, 1, 1, 0],
//     [1, 0, 1, 0, 1, 0, 0, 1, 1],
//     [1, 1, 0, 1, 1, 1, 1, 0, 1],
//     [1, 0, 0, 0, 0, 1, 0, 0, 0],
//     [1, 1, 1, 1, 0, 1, 1, 1, 3]
// ]
async () => {
  let list = [
    [2, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 1, 1, 3]
  ];

  let dirs = [[0, 1], [0, -1], [1, 0], []];
  /**
   * 判断这个点能不能到终点 true能到 false不能到
   * @param x
   * @param y
   * @param list
   */
  function tryRoad(x: number, y: number, list: any[]) {
    if (x < 0 || x >= list.length || y < 0 || y >= list[0].length) {
      return false;
    }
    if (list[x][y] == 3) {
      return true;
    }
    if (list[x][y] == 4) {
      return false;
    }
    if (list[x][y] == 6) {
      return true;
    }

    if (tryRoad(x + 1, y, list)) {
      list[x + 1][y] = 6;
      return true;
    }
    if (tryRoad(x - 1, y, list)) {
      list[x - 1][y] = 6;
      return true;
    }
    if (tryRoad(x, y - 1, list)) {
      list[x][y - 1] = 6;
      return true;
    }
    if (tryRoad(x, y + 1, list)) {
      list[x][y + 1] = 6;
      return true;
    }

    list[x][y] = 4;
    return false;
  }

  printListToMatrix(list);
  console.log(tryRoad(0, 0, list));
  printListToMatrix(list);
};

//12 递归

//12.1 使用递归的方法 输入N 按顺序打印从1到N
// 先打印从1到N-1
// 再打印N
async () => {
  function printN(N: number) {
    if (N == 1) {
      console.log(N);
    } else {
      printN(N - 1);
      console.log(N);
    }
  }
  printN(10);
};

//12.2 使用递归的方法 输入N 计算从1到N的和
// 计算从1到N - 1的和
// 再加上N返回
async () => {
  function sum(N: number) {
    if (N == 1) {
      return 1;
    } else {
      return sum(N - 1) + N;
    }
  }
  console.log(sum(3));
};

//12.3 使用递归的方法 找到列表L中的最大值
// 找到列表前N - 1项的最大值
// 和第N项比较 返回比较大的
async () => {
  let L = [4, 2, 6, 8, 11, 20, 3, 6, 14, 25];
  function max(L: any[], n: number) {
    if (n == 1) {
      return L[0];
    } else {
      return Math.max(max(L, n - 1), L[n - 1]);
    }
  }
  console.log(max(L, L.length));
};

//12.4 使用递归的方法 对列表进行选择排序
// 找到列表前N - 1项的最大值 与列表最后一位交换 ?? 前N - 1项的话如果最大的数在最后会有点问题 应该是前N项的最大值
// 同样方法排序前N - 1项
async () => {
  let L = [34, 2, 45, 10, 3, 10, 6, 20, 60];
  console.log(L);
  selectSort(L, L.length);
  console.log(L);
  function findMaxIndex(L: any[], n: number) {
    if (n == 1) {
      return 0;
    } else {
      return L[findMaxIndex(L, n - 1)] > L[n - 1]
        ? findMaxIndex(L, n - 1)
        : n - 1;
    }
  }

  function selectSort(L: any[], n: number) {
    if (n > 2) {
      let z = findMaxIndex(L, n);
      let temp = L[n - 1];
      L[n - 1] = L[z];
      L[z] = temp;
      // console.log(L)
      selectSort(L, n - 1);
    } else {
      if (L[0] > L[1]) {
        let temp = L[0];
        L[0] = L[1];
        L[1] = temp;
      }
    }
  }
};

// 12.5 使用递归的方法 输入M和N 计算M和N的最大公约数
//  gcd(M, N) = gcd(M % N, N)
async () => {
  console.log(gcd(24, 126));
  function gcd(M: number, N: number) {
    if (M == 0) {
      return N;
    }
    if (M < N) {
      let z = M;
      M = N;
      N = z;
    }
    M = M % N;
    return gcd(M, N);
  }
};

// 12.6 使用递归的方法 计算斐波拉切数列的第N项
//  F(n) = F(n - 1) + F(n - 2)
async () => {
  console.log(fibonacci(7));
  function fibonacci(n: number) {
    if (n == 1 || n == 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
};

// 12.7 使用递归的方法 在有序的列表中查找一个值(二分查找)
// 看N / 2的位置是不是这个值
// 不是的话 在合适为范围内查找
async () => {
  let L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(find(L, 0, L.length - 1, 4));
  function find(L: any[], leftIndex: number, rightIndex: number, n: number) {
    let index = Math.floor((leftIndex + rightIndex) / 2);
    if (L[index] == n) {
      return index;
    } else if (L[index] < n) {
      return find(L, index, rightIndex, n);
    } else {
      return find(L, leftIndex, index, n);
    }
  }
};

// 12.8 使用递归的方法 扁平化一个广义表(列表套列表 改成一层)
// 遍历每一个元素
// 如果是列表 先扁平化子列表
// 将扁平化的子列表和普通元素扁平化
async () => {
  let L = [1, 2, [3, 4], [5, [6, 7]], 8, [9, [10, 11]]];
  let res = [];
  console.log(L);
  console.log(simplifyList(L, res));
  function simplifyList(L: any[], res: number[]) {
    for (let i = 0; i < L.length; i++) {
      if (L[i] instanceof Array) {
        simplifyList(L[i], res);
      } else {
        res.push(L[i]);
      }
    }
    return res;
  }
};

// 12.9 使用递归的方法 split一个字符串
// split('a, bc, d, efg', ',') = ['a', 'bc', 'd', 'efg']
// 找到一个分隔符 分成两个字符串
// 将前面的字符串放入结果 递归处理后面的字符串

//TODO 感觉这种写法不太像递归
async () => {
  let str = "a,bc,d,efg,h,ijk";
  let res = [];
  mySplit(str, res);
  console.log(res);
  function mySplit(str: string, res: string[]) {
    let x = "";
    let flag = false; //false : 没有出现分隔符
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ",") {
        flag = true;
        res.push(x);
        mySplit(str.substring(i + 1), res);
        break;
      }
      x += str[i];
    }
    if (!flag) {
      res.push(x);
      return;
    }
  }
};

// 12.10 使用递归的方法 找到一个矩阵中和最大的2 x 2子矩阵
// 计算包含左上角元素的2 x 2的和
// 递归找到不包含左上角元素的结果(两个矩阵)
// TODO
async () => {};

// 12.11 使用递归的方法 打印杨辉三角形的第N行
// 计算杨辉三角形的第N - 1行
// 两两相加 返回第N行

// TODO 不确定这种做法是不是按照上面的思路来的
async () => {
  printPascalTriangle(7);

  /**
   * 返回杨辉三角形中第n行第i个数的值
   * @param n 第n行
   * @param i 第i个
   */
  function pascalTriangle(n: number, i: number) {
    if (i == 1 || i == n) {
      return 1;
    } else {
      return pascalTriangle(n - 1, i - 1) + pascalTriangle(n - 1, i);
    }
  }

  /**
   * 打印杨辉三角形中的第n行
   * @param n
   */
  function printPascalTriangle(n: number) {
    let str = "";
    for (let i = 1; i <= n; i++) {
      str += pascalTriangle(n, i) + " ";
    }
    console.log(str);
  }
};

// 12.12 给出一个价格 用怪异国货币 2元 3元 和7元表示出来(一种方法即可)
// 试试N - 2 N - 3和N - 7能否表示
// 若能 加上2, 3, 7即可
async () => {
  let memory = new Map();
  function strange(n: number): number[] {
    if (n <= 1) return null;
    if (n == 2) return [2];
    if (n == 3) return [3];
    if (n == 7) return [7];
    if (memory.has(n)) {
      console.log("*");
      return memory.get(n);
    }

    if (strange(n - 7)) {
      let result = strange(n - 7);
      result.push(7);
      memory.set(n - 7, result);
      return result;
    }
    if (strange(n - 3)) {
      let result = strange(n - 3);
      result.push(3);
      memory.set(n - 3, result);
      return result;
    }
    if (strange(n - 2)) {
      let result = strange(n - 2);
      result.push(2);
      memory.set(n - 2, result);
      return result;
    }
  }

  console.log(strange(231));
};
