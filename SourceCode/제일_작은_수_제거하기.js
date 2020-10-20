function solution(arr) {
    let answer = [];
    let min;
    if (arr.length == 1) {
        answer.push(-1);
    } else {
        min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            min != arr[i] ? answer.push(arr[i]) : null;
        }
    }

    return answer;
}