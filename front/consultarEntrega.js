let acao = document.getElementById('acao')
let res = document.getElementById('res')

acao.addEventListener('click', () => {
    let local = document.getElementById('local').value
    fetch(`http://localhost:3000/entrega?local=${local}`)
    .then(response => response.json())
    .then(valores => {
        let dados = JSON.stringify(valores)
        console.log(dados)
         
        
        // fazer a tabela pra consultar

    })
})