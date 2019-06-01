function sum(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sum(n-1);
}

console.time('sum test - 1');
console.log(sum(10)); // 13.30ms
console.timeEnd('sum test - 1');