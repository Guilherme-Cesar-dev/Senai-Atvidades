document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(usuario => 
        usuario.nome === nome && 
        usuario.email === email && 
        usuario.senha === senha
    );

    if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.assign("cad-anormalidade.html");
    } else {
        alert('Nome, email ou senha incorretos!');
    }
});