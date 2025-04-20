
const form = document.getElementById('chekin');
const mensagem = document.getElementById('mensagem');


//Validar Email

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.getElementById('email');

    //Expressao de validação de email (ainda tenho q entender)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+s/;

    if (emailRegex.test(email)){
        showMessage('Por favor inserir um e-mail valido', 'error');
        return;
    }

    //Deu tudo certo
    showMessage('Chekin realizado com sucesso!');
    form.reset();
})

//Validar CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2'); // Adiciona o traço
    e.target.value = value;
});

//Validar Telefone

document.getElementById('numTelefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '($1) $2'); // Adiciona o primeiro parêntese e espaço
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço
    e.target.value = value;
});

//Validar rg

document.getElementById('rg').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
    e.target.value = value;
});


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