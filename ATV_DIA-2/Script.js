//Arthur Soares, Guilherme César, Guilherme Oliveira

const botao = document.getElementById("save-button");
const botao2 = document.getElementById("login-button");
const mensagem = document.getElementById("mensagem");

//Adicione um evento de clique no botao
botao.addEventListener("click", function(){
    event.preventDefault(); 
    mensagem.textContent = "Cadrastro salvo com sucesso!";
    const inputs = document.querySelectorAll('input, textarea'); // Seleciona todos os campos de input e textarea
    inputs.forEach(function(input) {
        input.value = ""; // Limpa o valor de cada campo
    });
    setTimeout(function() {
        mensagem.textContent = ""; // Limpa a mensagem após 5 segundos
    }, 5000); 
});

//Validar Telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '($1) $2'); // Adiciona o primeiro parêntese e espaço
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço
    e.target.value = value;
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.getElementById('email');

    //Expressao de validação de email (ainda tenho q entender)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+s/;

    if (emailRegex.test(email)){
        showMessage('Por favor inserir um e-mail valido', 'error');
        return;
    }

})

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Verifica se o e-mail e a senha estão corretos
    if (email === "aluno.senai@gmail.com" && senha === "12345678") {
        // Redireciona para a página index2.html
        window.location.href = "index2.html";
    } else {
        // Exibe uma mensagem de erro
        alert("E-mail ou senha incorretos!");
    }
});