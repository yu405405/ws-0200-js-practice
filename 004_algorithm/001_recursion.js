
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

//なぜこのような式になるか

function sumSequence (n, sum = 0) {
  debugger
  if(n <= 1) {
    return 1
  }
  return n + sumSequence(n-1)
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

//フィボナッチ数 = 1番目と2番目は1, それ以降はn-2とn-1番目を足した数がnになる。
//再帰関数を使用する

function fibonacci (num, index = 0, array = []) {
  if(num == 1) {
    array.push(1)
  } else if(num == 2) {
    array.push(1,1)    
  } else {
    array.push(num + fibonacci(num-1))
  }
}
{ 
  // https://ja.javascript.info/recursion#ref-1495
  // if(num === 1) {
  //   array.push(1)
  // } else if (num === 2) {
  //   array.push(1,1)
  // }
  // return fibonacci(num-2) + fibonacci(num-1)



  // const first = 1
  // const second = 1
  // debugger
  // // num = 1の場合[1]を返す。
  // if(num = 1) {
  //   array.push(first)
  // }
  // // num = 2の場合[1,1]を返す
  // else if(num = 2) {
  //   array.push(first, second)
  // }
  // // num = 3以上の場合
  // else if(num >= 3) {
  //   let number = array[num-2] + array[num-1]
    
  //   for(let i = 0; i < num+1; i++) {
  //     array.push(first, second, number)
  //   }
  // }

  // return array
}

/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize (node, sum = 0) {

}


module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
