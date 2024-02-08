// 【出力形式を指定して出力】ペアの数値の入った表を罫線入りで出力 2 (paizaランク C 相当)
// https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_boss
process.stdin.resume();
process.stdin.setEncoding('utf8');

// 入力（複数行）バッファ配列
let lines = [];
// reader変数を作り、readlineモジュールの「createInterface」メソッドに入力・出力ストリームを渡す
// 入力：標準入力
// 出力：標準出力
let reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// reader変数のonメソッド
// 入力改行ごとに"line"イベントが発火
reader.on('line', (line) => {
  lines.push(line);
});

// 入力のストリームが終了すると呼ばれる
reader.on('close', () => {
  step01();
});

// 関数プログラミングで実装
// step01();
function step01() {
  // 2 つの文字列を出力 (paizaランク D 相当)
  // https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step1

  const outputString1 = lines.join(" + ");
  const outputString2 = ' = ';
  const outputString3 = lines.join("");

  console.log(outputString1 + outputString2 + outputString3);
}

