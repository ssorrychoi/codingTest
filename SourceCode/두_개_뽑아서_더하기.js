function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (answer.indexOf(numbers[i] + numbers[j]) == -1 && i != j) {
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}
