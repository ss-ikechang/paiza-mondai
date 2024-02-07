// paizaプログラミングスキルチェックの値取得・出力サンプルコード | ITエンジニア向け転職・就活・学習サービス【paiza】
// https://paiza.jp/guide/samplecode.html

// 入力される値
// 2
// 2 5
// 3 4

// 期待する出力
// hello = 2 , world = 5
// hello = 3 , world = 4
process.stdin.resume();
process.stdin.setEncoding('utf8');

let lines = [];
let reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  let N = lines[0];
  for(let i = 0; i < N; i++) {
    let line = lines[i+1].split(" ");
    console.log("hello = " + line[0] + ", world = " + line[1]);
  }
});