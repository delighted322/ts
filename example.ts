import { input } from './utils';

//用ts接收键盘输入 input函数比较复杂 封装在utils.ts中
(async () => {
    let answer = await input('What do you think of Node.js? ');
    console.log(`Thank you for your valuable feedback: ${answer}`);
})();
