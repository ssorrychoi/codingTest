function solution(N, stages) {
    let answer = [];
    /// 남은 사람의 수
    let cnt = stages.length;
    let cntArr = [];
    /// 스테이지에 머물러 있는 사람수
    let remain = 0;
    let remainArr = [];
    /// Map을 이용해서, 1번문제의 평균, 2번의 평균, 값 구하기...
    let index = [];
    let result = [];

    /// 총 스테이지 갯수
    for (let i = 1; i <= N; i++) {
        /// 사람의 수만큼
        cntArr.push(cnt);
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] == i) {
                remain++;
                cnt--;
            }
        }
        remainArr.push(remain);
        remain = 0;
    }
    // console.log('remainArr : '+remainArr);
    // console.log('cntArr : '+cntArr);
    for (let i = 0; i < cntArr.length; i++) {
        if (cntArr[i] == 0) {
            answer.push(0);
            index.push(0);
        } else {
            answer.push(remainArr[i] / cntArr[i]);
            index.push(answer[i]);
        }

    }
    answer.sort((a, b) => b - a);
    // console.log('index :'+index);
    // console.log('answer : '+answer);
    for (let i = 0; i < answer.length; i++) {
        result.push(index.indexOf(answer[i]) + 1);
        index[index.indexOf(answer[i])] = -1;
        // console.log(index);
    }
    // console.log('result : '+result);
    return result;
}