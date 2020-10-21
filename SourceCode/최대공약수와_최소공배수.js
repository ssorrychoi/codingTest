function solution(n, m) {
    let answer = [];
    let nGongYak = [];
    let mGongYak = [];
    let yakSoo;
    let baeSoo;

    for (let i = 1; i <= n; i++) {
        n % i == 0 ? nGongYak.push(i) : null;
    }
    for (let i = 1; i <= m; i++) {
        m % i == 0 ? mGongYak.push(i) : null;
    }

    /// 최대공약수 : 두개의 약수중에 가장 작은수
    for (let i = 0; i < nGongYak.length; i++) {
        for (let j = 0; j < mGongYak.length; j++) {
            if (nGongYak[i] == mGongYak[j]) {
                yakSoo = mGongYak[j];
            }
        }
    }
    answer.push(yakSoo);

    /// 최소공배수
    baeSoo = yakSoo * (n / yakSoo) * (m / yakSoo);
    answer.push(baeSoo);
    return answer;
}