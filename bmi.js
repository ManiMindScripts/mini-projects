const btnE1 = document.querySelector("#btn")
const bmiInput = document.querySelector("#bmi-resu")
const weightCondition = document.querySelector("#weight-condition")

function BMI () {
    const heightVa  = document.querySelector("#height").value / 100
    const weightVa  = document.querySelector("#weight").value
    const bmiVa  = weightVa / (heightVa * heightVa)

    bmiInput.value = bmiVa

    if( bmiVa < 18.5) {
         weightCondition.innerText  = "Under Weight"
    }else if (bmiVa >= 18.5 && bmiVa <= 24.9) {
        weightCondition.innerText = "Normal Weight"
    }
    else if (bmiVa >= 25 && bmiVa <= 29.9) 
        {
            weightCondition.innerText = "Over  Weight"
        }
        else if(bmiVa >= 30){
            weightCondition.innerText = "Obesity"
        }
    }
    btnE1.addEventListener("click",BMI)