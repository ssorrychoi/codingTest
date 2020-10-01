function solution(s) {
    let answer = true;
    let lowerS = s.toLowerCase();

    let pCnt = 0;
    let yCnt = 0;
    /// p처음 위치
    let pLoc = lowerS.indexOf('p');
    /// p위치부터 끝까지 돌리기
    if (pLoc == -1) {
        pCnt = 0;
    } else {
        for (let i = pLoc; i < lowerS.length; i++) {
            let n = lowerS.indexOf('p', i);
            if (n == -1) {
                break;
            } else if (i == n) {
                pCnt++;
            }
        }
    }


    /// y처음 위치
    let yLoc = lowerS.indexOf('y');
    /// y처음위치부터 끝까지 돌리기
    if (yLoc == -1) {
        yCnt = 0;
    } else {
        for (let i = yLoc; i < lowerS.length; i++) {
            let n = lowerS.indexOf('y', i);
            if (n == -1) {
                break;
            } else if (i == n) {
                yCnt++;
            }
        }
    }

    if (pCnt == yCnt) {
        answer = true;
    } else {
        answer = false;
    }


    return answer;
}