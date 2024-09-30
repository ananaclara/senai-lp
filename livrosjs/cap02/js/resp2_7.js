const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const medic = frm.inMed.value
    const preco = Number(frm.inPreco.value)
    const precoDesc = Number(frm.inPreco.value) * 0.50
    const entrada = (preco * 2)+precoDesc
    resp1.innerText = `${medic} - Promoção: Leve 3 por R$ ${entrada.toFixed(2)}`
    resp2.innerText = ` O 3º produto custa apenas R$ ${precoDesc.toFixed(2)}`
    e.preventDefault()
})