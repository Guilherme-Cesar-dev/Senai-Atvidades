const form = document.getElementById('cadastroPeca');
const mensagem = document.getElementById('mensagem');

document.getElementById('classificacaoRisco').addEventListener('input', function (e) {
    let value = parseInt(e.target.value, 10); // Converte o valor para um número inteiro
    
    if (value < 1 ) {
       e.target.value = 1;
    } else if (value > 4) {
        e.target.value = 4;
    }
})

//exibir mensagem
function showMessage(text, type){
    mensagem.textContent = text;
    mensagem.class = type;

    //reset apos 5 seg
    setTimeout(() =>{
        mensagem.textContent ='';
        mensagem.className = '';
    },5000);
}