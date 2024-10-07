const frm = document.querySelector("form") //passa o form para uma variavel
const resp = document.querySelector("h3") //passa o h3 para uma variavel onde irá imprimir o resultado

frm.addEventListener("submit", (e) => {
    const pardal = Number(frm.inPardal.value) //recebe em uma variavel o valor da velocidade do veiculo
    const permitida = Number(frm.inPermitida.value) //recebe em uma variavel o valor permitidp na via (60 km para teste)
    const calcPermitMasPorc = permitida + (permitida *20/100)
    /*recebe em uma variavel o valor permitido na via (variavel permitida),vindo do campo Velocidade Permitida em KM,
    multiplica por 20(20%) e divide por 100 para saber a porcentagem da velocidade permitida mais 20%.
     
    */
    // alert(calcPermitMasPorc)
	 if (pardal<=permitida) { // se a velocidade obitida no pardal for menor que a permitida , fica sem multa
	  		  resp.innerText = `sem multa`
	 }
	 else if ((pardal> permitida) && (pardal <= calcPermitMasPorc)) { 
	 /* se a velocidade obitida no pardal for maior que a permitida , mas for menor que 20% imprime multa leve
	 */
 	  		  resp.innerText = `multa leve`
 	}
 	else { // senão a velocidade obitida no pardal foi superior a 20% da velocidade permitada emitindo um falta grave
  	  		  resp.innerText = `multa grave`		
 	}
    e.preventDefault()
})