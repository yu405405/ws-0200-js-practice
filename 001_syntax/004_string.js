/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  // レビュー前
  // if(str.length % 2 === 0) {
  //   return true
  // } else {
  //   return false
  // }

  // レビュー後
  return str.length % 2 === 0
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  return str.substring(0, 1)
}

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  return str.slice(-1)
}

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  return str.slice(a - 1, b)
}

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {

  // レビュー前
  // const str = a.indexOf(b)
  // if(str === -1) {
  //   return false
  // } else {
  //   return true
  // }

  // レビュー後
  return a.indexOf(b) !== -1
  // aにbが含まれていなければ -1 を返すので 計算式が一致しているため true

  // もしくは
  // return a.indexOf(b) === 0
  // aにbが含まれていれば 0 を返すので これも計算式が一致し true
}

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  // レビュー前
  // for(let i = 0; i < str.length; i++) {
  //   console.log(str[i].charAt())
  // }

  // レビュー後
  for(let i = 0; i < str.length; i++) {
    console.log(str[i])
  }
}


module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
