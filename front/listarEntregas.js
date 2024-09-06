let acagetElementById('acao')
let tbody

acao.addEventListener('click', () => {

    fetch('http://localhost:3000/entregas')
    .then(response => response.json())
    .then(valores => {
        let dados = JSON.stringify(valores)
        console.log(dados)
        res.innerHTML = ''
        valores.forEach(atual => {

            res.innerHTML += `codEntrega: ${atual.codEntrega}<br> Local: ${atual.local} <br> data: ${atual.data}`
        });
    })
})