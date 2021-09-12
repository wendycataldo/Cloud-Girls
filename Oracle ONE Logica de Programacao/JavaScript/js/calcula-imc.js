var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]
    //pega as infor do paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = validaPeso(peso);
    var alturaEValido = validaAltura(altura);

    //faz a validação dos dados
    if(!pesoEValido){
        pesoEValido = false;
        tdImc.textContent = "Peso invalido!!";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEValido){
        alturaEValido = true;
        tdImc.textContent = "Altura invalido!!";
        paciente.classList.add("paciente-invalido");
    }
    //chama a função calcula o imc
    if (alturaEValido && pesoEValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; 
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}