function solution(n, lost, reserve) {
    let answer = 0;
    let total = [];

    /// 전체 학생을 1로 세팅
    for (let i = 0; i < n; i++) {
        total.push(1);
    }

    /// 여벌의 옷이 있는 학생 +1씩
    for (let i = 0; i < reserve.length; i++) {
        total[reserve[i] - 1]++;
    }

    // 잃어버린 학생 -1씩
    for (let i = 0; i < lost.length; i++) {
        total[lost[i] - 1]--;
    }

    // 도난 당한 사람 주변에 2개인 사람꺼 빌려주기
    for (let i = 0; i < n; i++) {
        if (total[i] == 0) {
            if (i > 0 && total[i - 1] >= 2) {
                total[i - 1] -= 1
                total[i] = 1;
                answer++;
            } else if (i <= n && total[i + 1] >= 2) {
                total[i + 1] -= 1;
                total[i] = 1;
                answer++;
            }
        } else {
            answer++;
        }
    }

    return answer;
}