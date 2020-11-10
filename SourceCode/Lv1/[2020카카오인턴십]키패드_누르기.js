function solution(numbers, hand) {
    let answer = '';
    let L = [4, 1];
    let R = [4, 3];
    /// 1. numbers 만큼 for문을 돌린다.
    for (let i = 0; i < numbers.length; i++) {
        /// 2. 1,4,7이 나오면 L
        if (numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
            answer += 'L';
            numbers[i] == 1 ? L = [1, 1] : (numbers[i] == 4 ? L = [2, 1] : L = [3, 1]);

        }
        /// 3. 3,6,9면 R
        else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
            answer += 'R';
            numbers[i] == 3 ? R = [1, 3] : (numbers[i] == 6 ? R = [2, 3] : R = [3, 3]);

        }
            /// 4. 2,5,8,0은 L과 R을 기록한다.
            /// 5. 2,5,8,0은 L과 R중에 가까이 있는것을 추가.
        /// 6. 왼손잡이/오른손 잡이인지도 구분.
        else {
            if (numbers[i] == 2) {
                /// R이 가까운 경우
                if ((Math.abs(R[0] - 1) + Math.abs(R[1] - 2)) < (Math.abs(L[0] - 1) + Math.abs(L[1] - 2))) {
                    answer += 'R';
                    R = [1, 2];
                } else if ((Math.abs(R[0] - 1) + Math.abs(R[1] - 2)) > (Math.abs(L[0] - 1) + Math.abs(L[1] - 2))) {
                    answer += 'L';
                    L = [1, 2];
                } else {
                    if (hand == 'left') {
                        answer += 'L';
                        L = [1, 2];
                    } else {
                        answer += 'R';
                        R = [1, 2];
                    }
                }
            } else if (numbers[i] == 5) {
                if ((Math.abs(R[0] - 2) + Math.abs(R[1] - 2)) < (Math.abs(L[0] - 2) + Math.abs(L[1] - 2))) {
                    answer += 'R';
                    R = [2, 2];
                } else if ((Math.abs(R[0] - 2) + Math.abs(R[1] - 2)) > (Math.abs(L[0] - 2) + Math.abs(L[1] - 2))) {
                    answer += 'L';
                    L = [2, 2];
                } else {
                    if (hand == 'left') {
                        answer += 'L';
                        L = [2, 2];
                    } else {
                        answer += 'R';
                        R = [2, 2];
                    }
                }
            } else if (numbers[i] == 8) {
                if ((Math.abs(R[0] - 3) + Math.abs(R[1] - 2)) < (Math.abs(L[0] - 3) + Math.abs(L[1] - 2))) {
                    answer += 'R';
                    R = [3, 2];
                } else if ((Math.abs(R[0] - 3) + Math.abs(R[1] - 2)) > (Math.abs(L[0] - 3) + Math.abs(L[1] - 2))) {
                    answer += 'L';
                    L = [3, 2];
                } else {
                    if (hand == 'left') {
                        answer += 'L';
                        L = [3, 2];
                    } else {
                        answer += 'R';
                        R = [3, 2];
                    }
                }
            } else {
                if ((Math.abs(R[0] - 4) + Math.abs(R[1] - 2)) < (Math.abs(L[0] - 4) + Math.abs(L[1] - 2))) {
                    answer += 'R';
                    R = [4, 2];
                } else if ((Math.abs(R[0] - 4) + Math.abs(R[1] - 2)) > (Math.abs(L[0] - 4) + Math.abs(L[1] - 2))) {
                    answer += 'L';
                    L = [4, 2];
                } else {
                    if (hand == 'left') {
                        answer += 'L';
                        L = [4, 2];
                    } else {
                        answer += 'R';
                        R = [4, 2];
                    }
                }
            }

        }
    }
    return answer;
}