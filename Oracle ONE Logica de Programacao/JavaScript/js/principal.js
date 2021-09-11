var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = true;
    var alturaEValido = true;

    if(peso <= 0 || peso >= 1000){
        pesoEValido = false;
        tdImc.textContent = "Peso invalido!!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        alturaEValido = true;
        tdImc.textContent = "Altura invalido!!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEValido && pesoEValido){
        var imc = peso/ (altura * altura);
        tdImc.textContent = imc.toFixed(2); 
    }
}


