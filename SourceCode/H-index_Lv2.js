/// 문제가 이상해서 이해못함.
function solution(citations) {
    let answer = 0;

    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > i) answer++;
        else break;
    }

    return answer;
}