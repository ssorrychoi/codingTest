function solution(clothes) {
    let answer = 1;
    let result = [];
    let result1 = [];

    for (let i = 0; i < clothes.length; i++) {
        console.log(clothes[i][1]);
        if (result.indexOf(clothes[i][1]) == -1) {
            result1.push(0);
            result.push(clothes[i][1]);

        }
    }
    console.log(result);
    console.log(result1);

    for (let i = 0; i < clothes.length; i++) {
        if (result.indexOf(clothes[i][1]) != -1) {
            ++result1[result.indexOf(clothes[i][1])];
        }
    }
    console.log(result1);
    for (let i = 0; i < result1.length; i++) {
        answer *= result1[i] + 1;
    }
    answer = answer - 1;

    return answer;
}