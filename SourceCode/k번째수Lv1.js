function solution(array, commands) {
    let answer = [];
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        for (let j = commands[i][0]; j <= commands[i][1]; j++) {
            result.push(array[j - 1]);
            result.sort(function (a, b) {
                return a - b
            });
        }
        answer.push(result[commands[i][2] - 1]);
        result = [];
    }
    return answer;
}