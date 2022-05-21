/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library',  4 => 'rarylib'
 *    'library',  5 => 'braryli'
 *    'library', -1 => 'ibraryl'
 *
 */

function rotate(str, num) {
  let beforeStr = ''
  for(let i = str.length - 1; str.length -1 - num < i; i--) {
    debugger
    beforeStr = str[i] + beforeStr
  }

  let afterStr = ''
  for(let j = 0; j < str.length - num; j++) {
    afterStr = afterStr + str[j]
  }

  let newStr = beforeStr + afterStr
  return newStr
}
// ※numが「負の数」の場合の処理を考える


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
  let newStr = ''
  for(let i = 0; i < str.length; i++) {
    debugger
    if(str[i] !== 'a') {
      if(str[i] !== 'i') {
        if(str[i] !== 'u') {
          if(str[i] !== 'e') {
            if(str[i] !== 'o') {
              newStr = newStr + str[i]
            }
          }
        }
      }
    }
  }
  return newStr
}

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

//素数 = 「1と自身以外の約数を持たない数」「2以上の整数で割り切れない数」 = 「2以上の数で割っても割り切れない数」（2は例外）
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
  let sum = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== 4) {
      sum = sum + array[i]
    }
    if(array[i] === 4) {
      sum = sum - array[i+1]
    }
  }
  return sum
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
