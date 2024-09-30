const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) => {
    const medic = Math.round(parseFloat(frm.inMed.value / 15))
    const preco = Number(frm.inPreco.value)
    const entrada = preco * medic
    resp1.innerText = `valor a pagar R$ ${entrada.toFixed(2)}`
    e.preventDefault()
})