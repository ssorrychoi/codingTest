function solution(x) {
    let answer = true;
    let stringX = x.toString();
    let arr = [];
    let hashad = 0;
    for (let i = 0; i < stringX.length; i++) {
        arr.push(stringX.charAt(i));
        hashad += parseInt(arr[i]);
    }
    x % hashad == 0 ? answer = true : answer = false;
    return answer;
}