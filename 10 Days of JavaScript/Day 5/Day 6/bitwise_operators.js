function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 0; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            if ((a & b) < k && (a & b) > max){
                max = (a & b);
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
