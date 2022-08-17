'use strict'

function verf(){
    
    const valor1 = document.getElementById('num1').value
    const valor2 = document.getElementById('num2').value
    const valor3 = document.getElementById('num3').value
    const valor4 = document.getElementById('num4').value
    const valor5 = document.getElementById('num5').value

    const result = document.getElementById('result')
    const subform = document.getElementById('subform')

    const A = parseFloat(valor1)
    const B = parseFloat(valor2)
    const C = parseFloat(valor3)
    const D = parseFloat(valor4)
    const E = parseFloat(valor5)

    
    if(subform.reportValidity()){
      
        let maximo = Math.max(A,B,C,D,E)

        let minimo = Math.min(A,B,C,D,E)

        result.textContent = `O menor número é ${minimo} e o maior número é ${maximo}`

    }
}

document.getElementById('botao').addEventListener('click', verf)