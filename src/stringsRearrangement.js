function solution(inputArray) {
    const n = inputArray.length;
    const m = inputArray[0].length;
    const g = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j) {
                let diff = 0;
                for (let k = 0; k < m; k++) {
                    if (inputArray[i][k] != inputArray[j][k]) {
                        diff++;
                    }
                }
                if (diff == 1) {
                    g[i][j] = 1;
                }
            }
        }
    }
    const used = Array(n).fill(false);
    const path = [];
    const dfs = (v) => {
        used[v] = true;
        path.push(v);
        if (path.length == n) {
            return true;
        }
        for (let i = 0; i < n; i++) {
            if (g[v][i] && !used[i]) {
                if (dfs(i)) {
                    return true;
                }
            }
        }
        used[v] = false;
        path.pop();
        return false;
    };
    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            return true;
        }
    }
    return false;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test stringsRearrangement

// alternative solution
// function solution(a) {
//     for (let i = 0; i < a.length; i++) {
//         let remaining = findNext(a[i], a);
//         if (remaining.length === 0) return true;
//     }
//     return false;
// }
// function findNext(current, a) {
//     if (a.length === 0) return a;
//     for (let i = 0; i < a.length; i++) {
//         if (differsByOneChar(current, a[i])) {
//             let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i + 1)));
//             if (remaining.length === 0) return remaining;
//         }
//     }
//     return a;
// }
// function differsByOneChar(s1, s2) {
//     let mismatches = 0;
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) mismatches++;
//         if (mismatches > 1) break;
//     }
//     return mismatches === 1;
// }

// alternative solution
// const solution = (inputArray) => {
//     const foo = (a, b) => [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0) === 1;
//     const bar = (a, b) =>
//         !b.length ||
//         b.some(
//             (val, idx) =>
//                 foo(a[0], val) &&
//                 bar(
//                     [val, ...a],
//                     b.filter((_, i) => i !== idx)
//                 )
//         );
//     return inputArray.some((val, idx) =>
//         bar(
//             [val],
//             inputArray.filter((_, i) => i !== idx)
//         )
//     );
// };
