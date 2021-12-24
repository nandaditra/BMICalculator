//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator (weight, height) {
    var w =weight;
    var h =Math.pow(height,2);
    var bmiResult = w/h;
    var interpretation;
    
    if(bmiResult < 18.5){
      interpretation="Your BMI is "+bmiResult+", so you are underweight.";
    } else if(18.5 >= bmiResult ||bmiResult <= 24.9) {
      interpretation="Your BMI is "+bmiResult+", so you have a normal weight.";    
    } else {
      interpretation="Your BMI is "+bmiResult+", so you are overweight.";
    }
    
    return interpretation;
}

bmiCalculator(65, 1.8);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
