function solution(n) {
    let answer = [];
    let r = n.toString();
    for (let i = r.length - 1; i >= 0; --i) {
        answer.push(parseInt(r.charAt(i)));
    }
    return answer;
}