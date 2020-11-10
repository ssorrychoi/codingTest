function solution(s) {
    let answer = '';
    let arr = s.split("");
    if (arr.length % 2 == 0) {
        answer = arr[parseInt(arr.length / 2) - 1] + arr[parseInt(arr.length / 2)];
    } else {
        answer = arr[parseInt(arr.length / 2)];
    }
    return answer;
}