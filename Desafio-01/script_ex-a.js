// Recupera os dados do LocalStorage
const anormalidades = JSON.parse(localStorage.getItem('anormalidades')) || [];
const lista = document.getElementById('lista-anormalidades');

if (anormalidades.length === 0) {
    lista.innerHTML = '<p>Nenhuma anormalidade cadastrada.</p>';
} else {
    anormalidades.forEach((item, index) => {
        const anormalidadeDiv = document.createElement('div');
        anormalidadeDiv.classList.add('anormalidade-item');
        anormalidadeDiv.innerHTML = `
            <h3>Anormalidade ${index + 1}</h3>
            <p><strong>Descrição:</strong> ${item.descricao}</p>
            <p><strong>Endereço:</strong> ${item.endereco}</p>
            <p><strong>Imagem:</strong></p>
            <img src="${item.imagem}" alt="Imagem da Anormalidade" style="max-width: 300px; max-height: 200px;">
            <hr>
        `;
        lista.appendChild(anormalidadeDiv);
    });
}