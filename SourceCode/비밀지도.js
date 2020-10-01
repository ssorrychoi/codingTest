function solution(n, arr1, arr2) {
    let answer = [];
    let result = [];
    let arr3 = [];
    let arr4 = [];

    let change = [];
    for (let i = 0; i < n; i++) {
        let y;
        /// 2진수로 변환해서 새로운 배열에 추가
        arr3.push(parseInt(arr1[i].toString(2)));
        arr4.push(parseInt(arr2[i].toString(2)));

        /// 2진수로 변환된 것끼리 더해서 String으로 형변환
        if ((arr3[i] + arr4[i]).toString().length != n) {
            y = '0' + (arr3[i] + arr4[i]).toString();
            /// 자릿수가 모자르면 앞에 0추가
            if (y.length < n) {
                for (let m = y.length; m < n; m++) {
                    y = '0' + y;
                }
            }
        }
        result.push(y == null ? (arr3[i] + arr4[i]).toString() : y);

    }
    /// 1이상의 숫자는 #으로 대체, 0은 ' '으로 대체
    for (let i = 0; i < n; i++) {
        change.push(result[i].replace(/[1-9]/g, '#'));
        answer.push(change[i].replace(/[0]/g, ' '));
    }
    return answer;
}