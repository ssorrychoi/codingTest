function solution(strings, n) {
    let answer = [];
    let result = [];

    /// strings를 먼저 sorting
    strings.sort();
    /// 배열에서 n번째 문자를 따로 떼서 배열에 삽입.
    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i].charAt(n));
    }
    /// 한글짜씩 있는 배열을 sorting
    result.sort();
    /// 한글자씩 있는 배열과 대조해서 삽입
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (result[i] == strings[j].charAt(n)) {
                if (answer.indexOf(strings[j]) == -1) {
                    answer.push(strings[j]);
                }
            }
        }

    }
    return answer;
}