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
    // 先頭行の解析
    let firstLineColumns   = lines[0].split(" ");
    let dataRowsNumber     = parseInt(firstLineColumns[0], 10);   // 入力データ個数

    // データ行の解析
    let dataLineColumns   = lines[1].split(" ");

    for(let i = 0; i < dataRowsNumber; i++) {
      console.log(dataLineColumns[i]);
    }
});