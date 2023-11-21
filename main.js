// プロパティーとメソッドの違い▼
/*
・プロパティー：オブジェクトに関連付けられた値をさす。オブジェクト内のデータや情報を表現する　例→「名前 name」や「年齢 age」など
・メソッド：オブジェクトに関連付けられた関数を指す。オブジェクトが何かを行うための操作や機能を提供する。　例→「話す」や「表示する」など
*/

// メソッド3つ▼
let obj = {
  showText: function() {
    console.log( "Hello World" );
  }
}
obj.showText();


const teacher = {
  name: "太郎",
  subject: "国語",
  profile: function() {
    console.log("太郎は国語の教師");
  }
};


let calculation = {
  add: function(x, y) {
    return x + y;
  }
};
const sum = calculation.add(5, 3);
console.log("Sum:", sum);



// 下記の関数を実行してその結果をコンソールに表示
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。";
  return result;
}

const output = fruit("りんご", 100);
console.log(output);


// 下記の関数を経由して2つの関数を実行するような処理
function addTax(price, func) {
  const price = "値段";
  func(price, taxPrice);
  const taxPrice = Math.round(price * 1.10);
  }
  // トマトの税込み価格をコンソールに表示させる処理
  console.log(price);
  // 玉ねぎの税込み価格をコンソールに表示させる処理
  console.log(func);