function calculate() {
    var altura = document.getElementById("altura").value /100;
    var peso = document.getElementById("peso").value;

    var imc = peso / altura ** 2;
    var text = ""
   
    if (imc < 18.5) {
       text="Você está abaixo do peso!";
    } 
    else if (imc < 24.9){
       text="Peso normal!";
    }
    else if (imc < 29.9){
        text="Você está com sobrepeso tipo I."
    } 
    else if (imc <  39.9){
        text="Você está com sobrepeso tipo II."
    }
    else if(imc > 39.9){
       text="Você está com soprepeso tipo III."
    }

    document.getElementById("result").innerText=text;
    document.getElementById("result").style.display = "block";
}
