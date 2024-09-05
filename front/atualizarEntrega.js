let acao = document.getElementById('acao')
let res = document.getElementById('res')

acao.addEventListener('click', () => {
    let codEntrega = document.getElementById('codEntrega').value
    let local = document.getElementById('local').value
    let data = document.getElementById('data').value


    fetch('http://localhost:3000/entrega', {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codEntrega, local, data })
    })
        .then(response => response.json())
        .then(valores => {
            let dados = JSON.stringify(valores)
            console.log(dados)
            res.innerHTML = `Entrega atualizada.`
        })
})