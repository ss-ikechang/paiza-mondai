// 入力される値
// 入力はありません。

// 期待する出力
// 答えの数値を 3 行で出力してください。また、出力の末尾には改行を入れてください。
// 8
// 1
// 3

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    console.log(8);
    console.log(1);
    console.log(3);
});