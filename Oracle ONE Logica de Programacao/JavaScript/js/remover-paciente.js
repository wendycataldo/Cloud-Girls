var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(evenbt){
    event.target.parentNode.classList.add("fadeOut"); 
    //esperar o tempo definido para realizar a funcção que esta dentro.
    setTimeout(function(){
        // vai remover a linha que nos clicarmos, o escutador esta na tabela e usamos o pai do elemto que fo clicado para retirar o elento.
        event.target.parentNode.remove();
    },500);
});
