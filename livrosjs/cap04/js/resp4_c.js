const frm = document.querySelector("form") //passa o form para uma variavel
const resp = document.querySelector("h3") //passa o h3 para uma variavel onde irá imprimir o resultado
const resp2 = document.querySelector("h4") //passa o h3 para uma variavel onde irá imprimir o resultado

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value) //recebe em uma variavel o valor da velocidade do veiculo
    if(valor < 1){
       resp.innerText = `valor insuficiente`
    }else if(valor < 1.75){
       resp.innerText = `tempo: 30mim`
        const troco = valor  - 1
        resp2.innerText = (`Troco de ${troco.toFixed(2)}`)
    } else if(valor < 3){
       resp.innerText = `tempo: 60min`
       const troco2 = valor - 1.75
       resp2.innerText = (`Troco de ${troco2.toFixed(2)}`)
    }else{
       resp.innerText = `tempo: 120min`
       const troco3 = valor - 3
       resp2.innerText = (`Troco de ${troco3.toFixed(2)}`)
    }
    e.preventDefault()
})