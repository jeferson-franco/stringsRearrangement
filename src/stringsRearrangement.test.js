const solution = require('./stringsRearrangement.js');

test('test 1', () => {
    expect(solution(['aba', 'bbb', 'bab'])).toBe(false);
});

test('test 2', () => {
    expect(solution(['ab', 'bb', 'aa'])).toBe(true);
});

test('test 3', () => {
    expect(solution(['q', 'q'])).toBe(false);
});

test('test 4', () => {
    expect(solution(['zzzzab', 'zzzzbb', 'zzzzaa'])).toBe(true);
});

test('test 5', () => {
    expect(solution(['ab', 'ad', 'ef', 'eg'])).toBe(false);
});

test('test 6', () => {
    expect(solution(['abc', 'bef', 'bcc', 'bec', 'bbc', 'bdc'])).toBe(true);
});

test('test 7', () => {
    expect(solution(['abc', 'abx', 'axx', 'abc'])).toBe(false);
});

test('test 8', () => {
    expect(solution(['abc', 'abx', 'axx', 'abx', 'abc'])).toBe(true);
});

test('test 9', () => {
    expect(solution(['f', 'g', 'a', 'h'])).toBe(true);
});

test('test 10', () => {
    expect(solution(['ff', 'gf', 'af', 'ar', 'hf'])).toBe(true);
});

test('test 11', () => {
    expect(solution(['a', 'b', 'c'])).toBe(true);
});
