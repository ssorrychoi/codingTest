function solution(d, budget) {
    let answer = 0;

    /// d 배열을 오름차순으로 재배치
    let dArr = d.sort((a, b) => a - b);
    let result = budget;

    for (let i = 0; i < d.length; i++) {
        if (result > 0 && result >= dArr[i]) {
            result -= dArr[i];
            answer++;
        } else {
            break;
        }
    }

    return answer;
}