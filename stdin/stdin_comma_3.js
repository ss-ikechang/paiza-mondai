// 入力例1
// aaaaa,bbbbbb,cccc

// 出力例1
// aaaaa
// bbbbbb
// cccc
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
    let array = lines[0].split(",");

    for(let i = 0; i < 3; i++) {
      console.log(array[i]);
    }
});