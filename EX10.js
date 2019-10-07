let h = Number(prompt('Enter your height (cm)'))/100;
let w = Number(prompt('Enter your weight (kg)'));
let BMI = w/(h*h);
if(BMI < 16) {
    alert('You are Severely underweight');
} else if(16 < BMI < 18.5) {
    alert('You are underweight');
} else if(18.5 < BMI <25) {
    alert('You are normal');
} else if(25 < BMI < 30) {
    alert('You are overweight');
} else if(BMI > 30) {
    alert('You are obese');
} else{
    alert('BMI is invalid');
}