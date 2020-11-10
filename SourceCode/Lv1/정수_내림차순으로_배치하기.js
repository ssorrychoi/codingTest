function solution(n) {
    let answer = '';
    let toStr = n.toString();
    let arr = [];
    for (let i = 0; i < toStr.length; i++) {
        arr.push(toStr.charAt(i));
        arr.sort((a, b) => (b - a));
    }
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    answer = parseInt(answer);
    return answer;
}