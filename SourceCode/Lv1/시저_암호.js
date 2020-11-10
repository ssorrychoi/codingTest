function solution(s, n) {
    let answer = '';
    let original = [];
    let result = [];
    let r = [];
    /// 1. ASCII 코드로 변환.
    /// 2. 변환한 값 + n
    for (let i = 0; i < s.length; i++) {
        /// 공백인 경우 -1로 치환
        if (s.charAt(i).charCodeAt() == 32) {
            original.push(-1);
            result.push(-1);
        } else {
            original.push(s.charAt(i).charCodeAt());
            result.push((s.charAt(i).charCodeAt() + n));
        }
    }
    // console.log(original);
    // console.log(result);


    /// 3. ASCII 코드값을 다시 문자로 변환
    for (let i = 0; i < result.length; i++) {
        ///원래 소문자인경우
        /// a = 97, z = 122
        if (original[i] >= 97) {
            /// z이상인 경우
            if (result[i] > 122) {
                result[i] = result[i] - 122 + 96;
                r.push(String.fromCharCode(result[i]));
            }
            /// 그외 정상 범위에 있을 경우
            else {
                r.push(String.fromCharCode(result[i]));
            }
        }

            ///원래 대문자인경우
        /// A = 65 , Z = 90
        else if (original[i] >= 65 && original[i] <= 90) {
            /// Z이상인 경우
            if (result[i] > 90) {
                result[i] = result[i] - 90 + 64;
                r.push(String.fromCharCode(result[i]));
            } else {
                r.push(String.fromCharCode(result[i]));
            }
        }
        /// 공백인 경우
        else if (result[i] == -1) {
            r.push(" ");
        }
    }
    // console.log(r);
    for (let i = 0; i < r.length; i++) {
        answer += r[i];
    }
    return answer;
}
