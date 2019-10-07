let n = Number(prompt('n = '));
let x = Number(prompt('x = '));
if (x < (n/2)) {
    alert(`${x} lower than half of ${n}`)
} else if(x == (n/2)) {
    alert(`${x} equal half of ${n}`);
} else if(x > (n/2)) {
    alert(`${x} higher than half of ${n}`);
} else if(x == n) {
    alert(`${x} equal ${n}`)
} else {
    alert('Unknown Situation');
}