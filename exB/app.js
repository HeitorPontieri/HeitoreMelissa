'use strict'

function verificar (){
        const nS = document.getElementById('n').value
        const n = parseFloat(nS)
        const result = document .getElementById('result')

         if(subform.reportValidity()){
            let resultado = ''

            if(n<0){
             resultado = n*(-1)
            }
            else if(n>0){
                resultado = n
            }
            result.textContent = `Este é um número positivo  ${resultado}`

        }
}

document.getElementById('botao').addEventListener('click', verificar)