let x = Number(prompt('Moi nhap so x'));
if(0 <= x && x < 4.5) {
    alert('Lower half of 9');
}
else if(4.5 < x && x < 9) {
    alert('Higher half of 9');
}
else if(x == 4.5) {
    alert('Equal half of 9');
}
else if(x == 9) {
    alert('Equal 9');
}
else {
    alert('x is invalid');
}