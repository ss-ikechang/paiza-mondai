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
  step03();
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

// step02();
function step02() {
  // 文字列と N 個の整数の出力 (paizaランク C 相当)
  // https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step2

  // 入力行の解析
  const array  = lines[0].split(" ");
  // 1カラム目取得、データ個数
  const number = parseInt(array[0], 10);
  // (A, B)部  
  // const datasSet = array.toSpliced(0, 1);
  // 要素の１番目から最後まで抽出
  const datasSet = array.slice(1);
  // ( , ) をつける
  const dataInBrackets = '(' + datasSet.join(", ") + ')';

  // (A, B)のnumber回の繰り返し
  const arr = [...Array(number)].map(() => dataInBrackets);
  // ','で区切って結合
  const outputString = arr.join(", ")

  console.log(outputString);
}

// step03();
function step03() {
  // 九九表を罫線入りで出力 (paizaランク C 相当)
  // https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step3
  let numStrArray = [];
  let outputString = "";
  let outputStringArray = [];

  for (let x = 0;x < 9; x++) {
    const progressionFunc = function(element, index) {
        return ((index + 1) * (x + 1)).toString(10);
    }
    // x の段の等比数列、文字列配列で生成
    numStrArray = [...Array(9)].map(progressionFunc);
    // 各数値文字列２桁で空白パディングし、|区切り文字で区切って連結する
    outputString = numStrArray.map((numStr) => numStr.padStart(2, ' ')).join(" | ");
    outputStringArray.push(outputString);

    if (x < 8) {
      outputStringArray.push("==========================================");
    }
  }

  outputStringArray.forEach(element => {
    console.log(element);
  });
}
