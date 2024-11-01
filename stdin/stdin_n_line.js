// 入力例1
// 3
// aaaaa
// bbbbbb
// cccc

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

// 入力のストリームが終了すると呼ばれる
reader.on('close', () => {
    // 先頭行の解析
    let firstLineColumns   = lines[0].split(" ");
    let dataRowsNumber     = parseInt(firstLineColumns[0], 10);   // 入力データ行数

    // データ行の１行目から読み込み
    for(let i = 1; i <= dataRowsNumber; i ++) {
      // 入力バッファからデータ行を抽出
      let line = lines[i];
      console.log(line);
    }
});
