function solution(dartResult) {
    let answer = 0;
    let itemDigit = dartResult.split(/\D/);
    let itemOption = dartResult.split(/\d/);
    let cleanDigit = [];
    let cleanOption = [];
    let result = [];
    /// 1. dartResult 를 3개의 아이템으로 분리작업.
    /// 2. 계산
    for (let i = 0; i < itemDigit.length; i++) {
        itemDigit[i] != '' ? cleanDigit.push(itemDigit[i]) : null;
    }
    for (let i = 0; i < itemOption.length; i++) {
        itemOption[i] != '' ? cleanOption.push(itemOption[i]) : null;
    }

    for (let i = 0; i < 3; i++) {
        /// cleanOption이 1자리가 아닌경우.
        if (cleanOption[i].length != 1) {
            if (cleanOption[i].split('')[1] == '#') {
                if (cleanOption[i].split('')[0] == 'S') {
                    result.push(cleanDigit[i] * (-1));
                } else if (cleanOption[i].split('')[0] == 'D') {
                    result.push(cleanDigit[i] * cleanDigit[i] * (-1));
                } else {
                    result.push(cleanDigit[i] * cleanDigit[i] * cleanDigit[i] * (-1));
                }
            } else {
                if (cleanOption[i].split('')[0] == 'S') {
                    result.push(cleanDigit[i] * 2);
                    i == 0 ? null : result[i - 1] = result[i - 1] * 2;
                } else if (cleanOption[i].split('')[0] == 'D') {
                    result.push(cleanDigit[i] * cleanDigit[i] * 2);
                    i == 0 ? null : result[i - 1] = result[i - 1] * 2;
                } else {
                    result.push(cleanDigit[i] * cleanDigit[i] * cleanDigit[i] * 2);
                    i == 0 ? null : result[i - 1] = result[i - 1] * 2;
                }
            }
        }
        /// 옵션 없는 경우
        else {
            if (cleanOption[i] == 'S') {
                result.push(parseInt(cleanDigit[i]));
            } else if (cleanOption[i] == 'D') {
                result.push(cleanDigit[i] * cleanDigit[i]);
            } else {
                result.push(cleanDigit[i] * cleanDigit[i] * cleanDigit[i]);
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        answer += result[i];
    }
    return answer;
}