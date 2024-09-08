let acao = document.getElementById('acao')
let tbody = document.querySelector('tbody')

acao.addEventListener('click', () => {

    fetch('http://localhost:3000/entregas')
        .then(response => response.json())
        .then(valores => {
            let dados = JSON.stringify(valores)
            console.log(dados)
            tbody.innerHTML = ''
            valores.forEach(atual => {
                tbody.innerHTML += `<tr><td>${atual.codEntrega}</td><td>${atual.local}</td><td>${atual.data}</td>`

            });
        })
})