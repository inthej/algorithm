/*
문제 설명
문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

제한사항
- 1 ≤ s의 길이 ≤ 10,000
- s는 영어 소문자로만 이루어져 있습니다.

입출력 예
s	result
"banana"	3
"abracadabra"	6
"aaabbaccccabba"	3

입출력 예 설명
입출력 예 #1
s="banana"인 경우 ba - na - na와 같이 분해됩니다.

입출력 예 #2
s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

입출력 예 #3
s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.
 */

function solution(str) {
  let result = 0
  let headChar = undefined
  let matchCount = 0
  let unmatchedCount = 0
  for (let index = 0; index < str.length; index++) {
    const curChar = str[index]
    const isLastIndex = index === str.length - 1
    if (ValueUtils.empty(headChar)) {
      headChar = curChar
      matchCount = 1

      if (isLastIndex) {
        result++
      }

      continue
    }

    const isMatch = headChar === curChar
    isMatch ? matchCount++ : unmatchedCount++

    if (matchCount === unmatchedCount) {
      headChar = ''
      matchCount = 0
      unmatchedCount = 0
      result++
      continue
    }

    if (isLastIndex) {
      result++
    }
  }

  return result
}

const ValueUtils = {}
ValueUtils.empty = (str, includeBlank = true) => {
  const empty = str === undefined || str === null || (includeBlank && str === '')
  return empty
}

ValueUtils.nonEmpty = (str, includeBlank = true) => {
  return ValueUtils.empty(str, includeBlank)
}

ValueUtils.nvl = (str, defaultValue = '') => {
  if (ValueUtils.empty(str)) {
    return defaultValue
  }
  return str
}

ValueUtils.nvl2 = (str, str1, str2) => {
  if (ValueUtils.empty(str)) {
    return str2
  }
  return str1
}
