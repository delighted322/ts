import * as readline from 'readline';

export const input = async (prompt: string = "") => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question(prompt, answer => {
      resolve(answer);
      rl.close();
    });
  });
};