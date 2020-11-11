function solution(a, b) {
    var answer = '';
    var day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    var result = 0;

    for (var i = 0; i < a - 1; i++) {
        result += day[i];
    }
    result += b - 1;
    answer = dayList[result % 7];

    return answer;
}