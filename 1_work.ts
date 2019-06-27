import { input } from './utils';

//1.输入一个自然数N，打印N个星号，每行一个。 
(async () => {


let answer = await input('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

})();
