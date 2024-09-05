let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click', () => {
    let local = document.getElementById('local').value
    let data = document.getElementById('data').value


    fetch('http://localhost:3000/entrega', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ local, data })
    })
    .then(response => response.json())
    .then(valores => {
        let dados = JSON.stringify(valores)
        console.log(dados)
        res.innerHTML = `Entrega cadastrada: <br> codEntrega: ${valores.codEntrega}<br> Local da Entrega: ${valores.local} <br> data: ${valores.data}`
    })
})