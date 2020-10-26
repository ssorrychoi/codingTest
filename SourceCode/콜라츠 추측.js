function solution(num) {
    let answer = 0;
    let result = num;
    let cnt = 0;
    /// 1-1. 입력된 수가 짝수면 나누기2
    while (result != 1) {
        if (result % 2 == 0) {
            result = result / 2;
            cnt++;
        }
        /// 1-2. 홀수라면 곱하기3 +1
        else {
            result = result * 3 + 1;
            cnt++;
        }
    }
    if (cnt > 500) {
        answer = -1;
    } else {
        answer = cnt;
    }
    return answer;
}