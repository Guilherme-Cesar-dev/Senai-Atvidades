    document.getElementById('cadastro').addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const telefone = document.getElementById('numTelefone').value;
        const email = document.getElementById('Email').value;
        const senha = document.getElementById('senhaCadrastro').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExistente = usuarios.find(usuario => usuario.email === email);

        if (usuarioExistente) {
            alert('Email já cadastrado!');
            return;
        }

        usuarios.push({ nome, endereco, telefone, email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuário cadastrado com sucesso!');
        document.getElementById('cadastro').reset();
    });

    
//Validar Telefone

document.getElementById('numTelefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '($1) $2'); // Adiciona o primeiro parêntese e espaço
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço
    e.target.value = value;
});
