//Selecione o botao e o elemento de mensagem
const botao = document.getElementById("meubotao");
const mensagem = document.getElementById("mensagem");

//Adicione um evento de clique no botao
botao.addEventListener("click", function(){
    mensagem.textContent = "Hello Word!"; 
});
