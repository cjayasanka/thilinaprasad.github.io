/**
 * Created by Thilina Prasad on 2/19/2017.
 */
var calcBtn = document.getElementById("calc"),
 resetBtn = document.getElementById("reset"),
 mass = document.getElementById("mass"),
 height = document.getElementById("height"),
 kgRadio = document.getElementById('kg'),
 poundRadio = document.getElementById('pou'),
 cmRadio = document.getElementById('cm'),
 inchRadio = document.getElementById('inch'),
 bmiResult = document.getElementById('bmi'),
 statusResult = document.getElementById('status')
    emo1 = document.getElementById('E1')
emo2 = document.getElementById('E2')
emo3 = document.getElementById('E3')
emo4 = document.getElementById('E4')
emo5 = document.getElementById('E5')
emo6 = document.getElementById('E6');


function bmi(mass,height) {
    var bmiVal = mass/(Math.pow((height/100.0),2));
    //console.log(bmiVal);
    bmiResult.innerHTML = ('value',(bmiVal).toString());
    if(bmiVal!=10000 && bmiVal<18.5){
        statusResult.style.color = "red";
        statusResult.innerHTML = "Get Protein";
        emo1.style.opacity = 0;
        emo2.style.opacity = 1;
        emo3.style.opacity = 0;
        emo4.style.opacity = 0;
        emo5.style.opacity = 0;
        emo6.style.opacity = 0;
    }else if(bmiVal!=10000 && bmiVal>=18.5 && bmiVal<=24.9){
        statusResult.style.color = "green";
        statusResult.innerHTML  = "Desirable";
        emo1.style.opacity = 0;
        emo2.style.opacity = 0;
        emo3.style.opacity = 1;
        emo4.style.opacity = 0;
        emo5.style.opacity = 0;
        emo6.style.opacity = 0;
    }
    else if(bmiVal!=10000 && bmiVal>=25 && bmiVal<=29.9){
        statusResult.style.color = "orange";
        statusResult.innerHTML = "Overweight";
        emo1.style.opacity = 0;
        emo2.style.opacity = 0;
        emo3.style.opacity = 0;
        emo4.style.opacity = 1;
        emo5.style.opacity = 0;
        emo6.style.opacity = 0;
    }
    else if(bmiVal!=10000 && bmiVal>30){
        statusResult.style.color = "red";
        statusResult.innerHTML  = "Obese";
        emo1.style.opacity = 0;
        emo2.style.opacity = 0;
        emo3.style.opacity = 0;
        emo4.style.opacity = 0;
        emo5.style.opacity = 5;
        emo6.style.opacity = 0;

    }else{
        statusResult.style.color = "gray";
        statusResult.innerHTML  = "Are You heuman ?";
        emo1.style.opacity = 0;
        emo2.style.opacity = 0;
        emo3.style.opacity = 0;
        emo4.style.opacity = 0;
        emo5.style.opacity = 0;
        emo6.style.opacity = 1;
    }
}


calcBtn.onclick = function(){
    if((mass.value.length<1) && height.value.length<1){
        alert("Enter Your Mass & Height !");
    }else if(mass.value.length<1){
        alert("Enter Your Mass !");
    }else if(height.value.length<1){
        alert("Enter Your Height !");
    }else if(parseFloat(mass.value)<0){
        alert("Mass must be positive !")
        mass.value = "";
    }else if(parseFloat(height.value)<0){
        alert("Height must be positive !")
        height.value = "";
    }
    else{
        var finalMass = parseFloat(mass.value),
            finalHeight = parseFloat(height.value);
        if(poundRadio.checked){
            finalMass = finalMass*0.453592;
            console.log("pound");
        }
        if(inchRadio.checked){
            console.log("inch");
            finalHeight = finalHeight*2.54;
        }
        bmi(finalMass,finalHeight);
    }
}



resetBtn.onclick = function() {
    mass.value = "";
    height.value = "";
    bmiResult.innerHTML = "";
    statusResult.innerHTML = "";
    emo1.style.opacity = 1;
    emo2.style.opacity = 0;
    emo3.style.opacity = 0;
    emo4.style.opacity = 0;
    emo5.style.opacity = 0;
    emo6.style.opacity = 0;
}