/*

 */

function solution(a, b, n) {
  const cnt = returnColaCnt(a, b, n)
  return cnt
}

function returnColaCnt(giveNum, receiveNum, count) {
  let haveColaCnt = count
  let totalReturnCnt = 0
  do {
    const returnCnt = Math.floor(haveColaCnt / giveNum) * receiveNum
    const restCnt = haveColaCnt % giveNum
    totalReturnCnt += returnCnt
    haveColaCnt = returnCnt + restCnt
  } while (haveColaCnt >= giveNum)
  return totalReturnCnt
}

console.log(solution(2, 1, 20))
console.log(solution(3, 1, 20))
