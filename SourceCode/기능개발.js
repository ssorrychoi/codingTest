function solution(progresses, speeds) {
    let answer = [];
    let remainProgress = [];
    let cnt = 0;
    let max = remainProgress[0];
    for (let i = 0; i < progresses.length; i++) {
        remainProgress.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    for (let i = 0; i < remainProgress.length; i++) {
        max >= remainProgress[i] ? max = max : max = remainProgress[i];
        if (max < remainProgress[i + 1]) {
            cnt++;
            answer.push(cnt);
            cnt = 0;
        } else {
            if (i == remainProgress.length - 1) {
                cnt++;
                answer.push(cnt);
            }
            cnt++;
        }
    }
    return answer;
}
