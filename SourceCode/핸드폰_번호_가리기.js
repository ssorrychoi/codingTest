function solution(phone_number) {
    let answer = '';
    let back = '';
    for (let i = 4; i >= 0; i--) {
        back += phone_number.charAt(phone_number.length - i);
    }
    for (let i = 0; i < phone_number.length - 4; i++) {
        answer += '*';
    }
    answer = answer + back
    return answer;
}