document.getElementById('anormalidade').addEventListener('submit', function (e) {
    e.preventDefault();

    const descricao = document.getElementById('descricao').value;
    const endereco = document.getElementById('endereco').value;
    const imagem = document.getElementById('imagem').files[0];

    // Converte a imagem para Base64
    const reader = new FileReader();
    reader.onload = function () {
        const imagemBase64 = reader.result;

        // Salva os dados no LocalStorage
        const anormalidades = JSON.parse(localStorage.getItem('anormalidades')) || [];
        anormalidades.push({ descricao, endereco, imagem: imagemBase64 });
        localStorage.setItem('anormalidades', JSON.stringify(anormalidades));

        alert('Anormalidade cadastrada com sucesso!');
        window.location.href = 'exibir-anormalidades.html'; // Redireciona para a página de exibição
    };

    if (imagem) {
        reader.readAsDataURL(imagem); // Lê a imagem como Base64
    }
});