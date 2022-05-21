/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  let myObj = {
    name: 'Bob',
    age: 32,
    gender: 'male'
  }
  return myObj
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  person.name = 'Mary'
  person.age = 37
  person.gender = 'female'
  return person
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */
function assignNumber(persons) {
  let obj = {}
  for(let i = 0; i < persons.length; i++) {
    const key = persons[i]
    obj[key] = Math.floor(Math.random() * 11)
  }
  return obj
}
// const persons = ['Bob','Mary','Ann','Mike']
// assignNumber(persons)
/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  let obj = {}
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) {
        return true
      }
    }
  }
}
//アウトプットの形が見えない・・・

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
