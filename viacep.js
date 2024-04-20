// viacep.js
document.getElementById('cepForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio tradicional do formulário
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }
            displayAddress(data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            document.getElementById('endereco').innerHTML = '<p>Erro: CEP não encontrado!</p>';
        });
});

function displayAddress(data) {
    const addressHTML = `
        <p><strong>Endereço:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>Estado:</strong> ${data.uf}</p>
    `;
    document.getElementById('endereco').innerHTML = addressHTML;
}
