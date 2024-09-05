let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click', () => {
    let marca = document.getElementById('marca').value
    let cnpj = document.getElementById('cnpj').value


    fetch('http://localhost:3000/fabricante', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ marca, cnpj })
    })
    .then(response => response.json())
    .then(valores => {
        let dados = JSON.stringify(valores)
        console.log(dados)
        res.innerHTML = `Fabricante cadastrado: <br>codFabricante: ${valores.codFabricante}<br> marca: ${valores.marca}<br> cnpj: ${valores.cnpj}`
    })
})