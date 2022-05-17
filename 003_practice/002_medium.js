/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
// ①数値（num）の分だけ、最後から文字列を取得して、最初に持ってくる。
// ②元の文字列（str）の破壊的処理
// ③取得した文字列①と②を足して、新しい文字列を返す
function rotate(str, num) {
  let newStr = ''
  for(let i = str.length - 1; str.length - num <= i; i--) {
    debugger
    newStr = newStr + str[i]
  }
  return newStr + str
}
rotate('library', 3)

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */

 // aiueoを取り除く
function removeVowels(str) {
  let vowels = 'aiueo'
  let newStr = ''
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < vowels.length; j ++) {
      if(str[i] === vowels[j]) {

      }
    }
  }

  return newStr
}
removeVowels('banana')

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  s1.indexOf(s2)
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  let palindrome = ''
  for(let i = str.length - 1; 0 <= i; i--) {
    palindrome = palindrome + str[i]
  }
  if(str === palindrome) {
    return true
  } else {
    return false
  }
}




/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {

}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {

}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
