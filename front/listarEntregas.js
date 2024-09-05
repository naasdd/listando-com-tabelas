let acao = document.getElementById('acao')
let res = document.getElementById('res')

acao.addEventListener('click', () => {

    fetch('http://localhost:3000/entregas')
    .then(response => response.json())
    .then(valores => {
        let dados = JSON.stringify(valores)
        console.log(dados)
        res.innerHTML = ''
        valores.forEach(atual => {

            res.innerHTML += `codPedido: ${atual.codPedido}<br> Número do pedido: ${atual.numeroPedido} <br> data: ${atual.data} <br> nome: ${atual.nome} <br> preco: ${atual.preco} <br> Id do produto: ${atual.produtoId} <br> Id do fabricante ${atual.fabricanteId} <br><br>`
        });
    })
})