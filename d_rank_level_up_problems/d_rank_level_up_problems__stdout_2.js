// 入力される値
// 入力はありません。

// 期待する出力
// 答えの文字列を 1 行で出力してください。
// paiza learning

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
  console.log('paiza learning');
});