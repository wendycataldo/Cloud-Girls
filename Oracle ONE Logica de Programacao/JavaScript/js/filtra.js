var campoFiltro = document.querySelector("#filtar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    //para mostrar todos os pacientes quando não estiver fazendo uma busca.
    if(this.value.length>0){
        for(var i=0; i< pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //procurar por parte do texto, com expressao regular
            //usamos o "i" para desligar o casesensitive
            var expressao = new RegExp(this.value, "i")

            //mostrar os pacientes que tem parte do nome a ser procurado, por causa da expressao regular
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i=0; i< pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});