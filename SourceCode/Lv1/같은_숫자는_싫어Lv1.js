function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        i == 0 ? answer.push(arr[0]) : (arr[i] != arr[i - 1] ? answer.push(arr[i]) : null);
    }
    return answer;
}