var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    //colocaar uma url para alimentar nossa tabela
    var xhr = new XMLHttpRequest();
    //abrir a conexao
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //escuta para saber a resposta e trazando os dados para o nosso site
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("erro-ajax");
        //testando a conexao, se der erro mostrar qual foi 
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel"); //retira o erro
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // traduzindo de json para um ob js
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(pacinete);
            });
        }else{
            erroAjax.classList.remove("invisivel"); //coloca o erro
        }
    });
    xhr.send();//enviar a requisicao
});