export default function(x) {
    for (let i = x - 1; i > 1; i--) {
        x *= i;
    }
    return x;
}