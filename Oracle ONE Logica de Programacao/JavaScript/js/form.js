var botaoAdicionar = document.querySelector("#adicionar-paciente");
// escutador de eventos, quando clicado em algum evento ele farz a função anonima
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();//event segura uma ação padrao do

    var form = document.querySelector("#form-adiciona");
    //traz o valor de cada campo. para ser guardado.
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();

    var mesagensErro = document.querySelector("#mesagens-erro");
    mesagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erro.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome:form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");//na estrutura da tabela
    pacienteTr.classList.add("paciente");
    //coloca os valores na função montaTd, e depois coloca eles na tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(immontaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
}

function validaPaciente(paciente){
    var erros = [];
    //valida se a altura e o peso são invalidos.
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida.");
    }
    
    if(!validaPeso(paciente.peso)){
        return "Peso e inválido.";
    }
    //valida se o canpo não esta em branco
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.");
    }    

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco.");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco.");
    }

    return erros;
}