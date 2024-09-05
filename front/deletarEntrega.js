let acao = document.getElementById('acao')
let res = document.getElementById('res')

acao.addEventListener('click', () => {
    let codEntrega = document.getElementById('codEntrega').value
    fetch(`http://localhost:3000/entrega/${codEntrega}`,{
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(valores => {
        console.log(valores)
        res.innerHTML = valores.Message

    })
})