function solution(inputArray) {
    const n = inputArray.length;
    const m = inputArray[0].length;
    const g = Array(n).fill(0).map(() => Array(n).fill(0));
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
    }
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
