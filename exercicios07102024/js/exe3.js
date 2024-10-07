const frm = document.querySelector("form") //passa o form para uma variavel
const resp = document.querySelector("h3") //passa o h3 para uma variavel onde irá imprimir o resultado
const resp2 = document.querySelector("h4") //passa o h3 para uma variavel onde irá imprimir o resultado

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value) //recebe em uma variavel o valor da velocidade do veiculo
    const valor2 = 0.00

	 if (valor >= 3.00){ 

	  //troco
	 if (valor > 3.00) {
	  	valor2 = (valor - 3.00)
	  }
	  else {
	  	valor2 = valor	
		}
	
	  		  resp.innerText = `tempo: 120 minutos`
	  		  resp2.innerText = `troco R$ ${valor.toFixed(2)}`
	 }
	 else if ((valor> 1.00) && (valor < 1.75)) { 
	 
	  //troco
	  if (valor > 1.00) {
	  	valor2= valor - 1.00
	  }
	  else{
	  	valor2= valor	
		}
	  		  resp.innerText = `tempo: 30 minutos`
	  		  resp2.innerText = `troco R$ ${valor2.toFixed(2)}`
 	}
 	else { 
 	  //troco
	  if (valor > 1.75) {
	  	valor2= valor - 1.75
	  }
	  else{
	  	valor2= valor	
		}
	
	  resp.innerText = `tempo: 60 minutos`
	  resp2.innerText = `troco R$ ${valor2.toFixed(2)}`
 	}
    e.preventDefault()
})