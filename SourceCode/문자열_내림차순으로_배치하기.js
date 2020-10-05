function solution(s) {
    let answer = '';
    let result = [];
    for (let i = 0; i < s.length; i++) {
        result.push(s.substr(i, 1));
    }
    let hello = result.sort().reverse();
    for (let i = 0; i < s.length; i++) {
        answer += hello[i];
    }
    return answer;
}