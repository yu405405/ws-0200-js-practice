/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array.at(i))
  }
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  let weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  return weekday;
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  if(array.indexOf(num) === -1) {
    return false
  } else {
    return true
  }
  // if(array.includes(num) === true) {
  //   return true
  // }else {
  //   return false
  // }
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  // レビュー前
  // let flag = false;
  // array.forEach(function(val) {
  //   let index = array.indexOf(val);
  //   let lastIndex = array.lastIndexOf(val)

  //   if(index !== lastIndex) {
  //     flag = true
  //   } 
  // })
  // return flag

  // レビュー後
  // 着目する要素を決めるためのループ
  for(let i = 0; i < array.length; i++) { 

    // 着目する要素と右隣から最後までを比較するためのループ
    for(let j = i + 1; j < array.length; j++) {

      // i番目とj番目の要素を比較して同じ場合は、重複があるとみなす。
      if(array[i] === array[j]) {
        return true
      }
    }
  }
  return false
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
