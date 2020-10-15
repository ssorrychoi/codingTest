function solution(n) {
    let answer = 0;
    let s = n.toString();
    for (let i = 0; i < s.length; i++) {
        answer += parseInt(s.charAt(i));
    }
    return answer;
}