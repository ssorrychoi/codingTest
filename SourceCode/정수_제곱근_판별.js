function solution(n) {
    let answer = 0;
    let result = Math.sqrt(n);
    Number.isInteger(result) ? answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : answer = -1;

    return answer;
}