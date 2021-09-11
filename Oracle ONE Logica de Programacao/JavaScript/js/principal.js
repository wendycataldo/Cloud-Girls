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
var botaoAdicionar = document.querySelector("#adicionar-paciente");
// escutador de eventos, quando clicado em algum evento ele farz a função anonima
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();//event segura uma ação padrao do

    var form = document.querySelector("#form-adiciona");
    //traz o valor de cada campo. para ser guardado.
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    //criar um elemeto para ser colocado na tabela 
    var pacienteTr = document.createElement("tr");//na estrutura da tabela

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //colocar um elemto dentro do outro, criado pegando os valores que foram digitados no forme e guardando.
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});