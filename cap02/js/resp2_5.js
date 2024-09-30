const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const medic = frm.inMed.value
    const preco = Number(frm.inPreco.value)
    const entrada = Math.floor(preco * 2)
    resp1.innerText = `Promoção de ${medic}`
    resp2.innerText = `Leve 2 por R$ ${entrada.toFixed(2)}`
    e.preventDefault()
})