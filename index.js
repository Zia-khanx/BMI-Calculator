function calculate() {
   const height = document.querySelector("#height").value;
   const weight = document.querySelector("#weight").value;
   // const result = document.querySelector(".result").textContent;
   if(!height || isNaN(height) || height < 0){
    document.querySelector(".bmiSays").textContent  = "Provide a valid value";
    return;
   }
   else if(!weight || isNaN(weight) || weight< 0){
    document.querySelector(".bmiSays").textContent  = "Provide a valid value";
    return;
   }
   const bmi = ( weight / ((height * height) / 10000));
   document.querySelector(".result").textContent= bmi.toFixed(2);
   if (bmi < 18.5){
    document.querySelector(".bmiSays").textContent  = `Under Weight`;
   }
   else if(bmi >= 18.5 && bmi < 24.9){
    document.querySelector(".bmiSays").textContent  = `Normal`;
   }
   else if(bmi >= 25 && bmi < 29.9){
    document.querySelector(".bmiSays").textContent  = `Over Weight`;
   }
   else if(bmi >= 30 && bmi < 34.9){
    document.querySelector(".bmiSays").textContent  = `Obesity ( Class I )`;
   }
   else if(bmi >= 35 && bmi < 39.9){
    document.querySelector(".bmiSays").textContent  = `Obesity ( Class II )`;
   }
   else{
    document.querySelector(".bmiSays").textContent  = `Extreme Obesity`;
   }
}


