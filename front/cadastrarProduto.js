let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click', () => {
    let nome = document.getElementById('nome').value
    let quantidade = document.getElementById('quantidade').value
    let preco = document.getElementById('preco').value


    fetch('http://localhost:3000/produto', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ nome, quantidade, preco })
    })
    .then(response => response.json())
    .then(valores => {
        let dados = JSON.stringify(valores)
        console.log(dados)
        res.innerHTML = `Produto cadastrado: <br>codProduto: ${valores.codProduto}<br> nome: ${valores.nome}<br> quantidade: ${valores.quantidade}<br> preco: ${valores.preco}`
    })
})