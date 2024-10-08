const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.inLda.value)
    const ladoB = Number(frm.inLdb.value)
    const ladoC = Number(frm.inLdc.value)

    if ( (ladoA + ladoB) < ladoC || (ladoA + ladoC) < ladoB || (ladoB + ladoC) < ladoA) {

        resp2.innerText = `os lado não podem formar um triangulo`
return false
    } else {
        resp2.innerText = `os lado podem formar um triangulo`
    }
    if (ladoA == ladoB && ladoB == ladoC) {

        resp.innerText = `O triângulo é: equilátero`;

    } else if (ladoA != ladoB && ladoB != ladoC) {

        resp.innerText = `O triângulo é: escaleno`;

    } else {
        resp.innerText = `O triângulo é: isóceles`;
    }


    resp2.innerText = `os lado podem formar um triangulo`
    e.preventDefault()
})
