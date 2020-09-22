function solution(board, moves) {
    let answer = 0;
    let result = [];

    // moves길이 만큼 for문 반복
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // 여기가 포인트! 꼭 i,j로만 배열을 완성시키려 하지 말것!
            if (board[j][moves[i] - 1] !== 0) { //0이 아닐때 result에 추가
                if (result[result.length - 1] === board[j][moves[i] - 1]) { //result를 비교해서 앞뒤가 같으면 빼고
                    result.pop();
                    answer += 2;
                    board[j][moves[i] - 1] = 0;
                    break;
                } else {  // result가 다르면 push해서 결과값에 추가한다.
                    result.push(board[j][moves[i] - 1]);
                    board[j][moves[i] - 1] = 0;
                    break;
                }
            }
        }
    }
    return answer;
}