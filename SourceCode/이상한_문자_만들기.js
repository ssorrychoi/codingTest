function solution(s) {
    let answer = '';
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == " ") {
            answer += s.charAt(i).toLowerCase();
            j = 0;
        } else {
            if (j % 2 == 0) {
                answer += s.charAt(i).toUpperCase();
                j++;
            } else {
                answer += s.charAt(i).toLowerCase();
                j++;
            }
        }
    }
    return answer;
}