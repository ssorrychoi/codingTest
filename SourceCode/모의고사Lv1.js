function solution(answers) {
    let result = [];
    let list = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let max = 0;
    let count = [0, 0, 0];

    /// 1,2,3번 수포자의 정답 갯수를 정하기.
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == list[0][i % 5]) count[0] += 1;
        if (answers[i] == list[1][i % 8]) count[1] += 1;
        if (answers[i] == list[2][i % 10]) count[2] += 1;
    }

    /// 정답자의 최댓값 구하기
    for (let j = 0; j < 3; j++) {
        if (max < count[j]) {
            max = count[j];
        }
    }

    /// 최대값과 각 사람의 갯수를 비교해서 결과값에 넣는다.
    for (let i = 0; i < 3; i++) {
        if (max === count[i]) {
            result.push(i + 1);
        }
    }

    return result;
}