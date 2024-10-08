const frm = document.querySelector("form") //passa o form para uma variavel
const resp = document.querySelector("h3") //passa o h3 para uma variavel onde irá imprimir o resultado

frm.addEventListener("submit", (e) => {
    const Numero = Number(frm.inNumero.value) //recebe o valor digitado
    const valor = Number(Numero % 2) //usado metodo "mod" para retornar o resto de uma divisão. Se for 0 e par e se for 1 impar.
    const ternario = frm.inChk.checked //receber o valor da checkbox
    //alert(ternario)
    if (ternario==false) { // se o checkbox estiver desmarcado faz o if normal
 	   if (valor==0) { // if que verifica se é par ou impar. Se o resto for zero e par e se for um e impar.
  		  resp.innerText = `valor é par`
    		}
    	else {
  	  	  resp.innerText = `valor é impar`
   	}
	 }
	 else { // se o checkbox estiver marcado faz o if ternário
	 valor==0 ? resp.innerText = `valor é par` : resp.innerText = `valor é impar`	 
	}	
    e.preventDefault()
})