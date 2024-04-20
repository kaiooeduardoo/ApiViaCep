// viacep.js
function buscaCEP(cep) {
    if (cep.length !== 8) {
        console.error('CEP deve ter 8 dígitos.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }
            preencheFormulario(data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Erro ao buscar o CEP.');
        });
}

function preencheFormulario(data) {
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;
}
