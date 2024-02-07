// 【出力幅を指定して出力】N 個の数値を M けた半角スペース埋めで出力 (paizaランク D 相当)
// https://paiza.jp/works/mondai/stdout_primer/stdout_primer__print_width_boss
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
    // 先頭行の解析
    let firstLineColumns   = lines[0].split(" ");
    let dataRowsNumber     = firstLineColumns[0];   // 入力データ行数
    let outputDigitsNumber = firstLineColumns[1];   // 出力桁数（空白で穴埋め）

  // データ行の１行目から読み込み
  for(let i = 1; i <= dataRowsNumber; i ++) {
    // 入力バッファからデータ行を抽出
    let line = lines[i];
    // 入力の自然数、文字列。
    let dataString = line.toString(10);
    // 入力の自然数の桁数
    let dataDigitsNumber = dataString.length;
    // 付与する空白の数
    let paddingSpaceNumber = outputDigitsNumber - dataDigitsNumber
    // 出力桁数に達するため付与する空白文字列
    let formatSpaces     =  paddingSpaceNumber > 0 ? ' '.repeat(paddingSpaceNumber) : ''; 

    // 先頭に空白を付与し、出力桁数にそろえた自然数を出力
    console.log(formatSpaces + dataString);
  }
});

