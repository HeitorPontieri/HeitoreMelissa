'use strict'

function calcMedia(){
    const nota1 = document.getElementById('num1').value
    const nota2 = document.getElementById('num2').value
    const nota3 = document.getElementById('num3').value
    const nota4 = document.getElementById('num4').value

    const valor1 = parseFloat(nota1)
    const valor2 = parseFloat(nota2)
    const valor3 = parseFloat(nota3)
    const valor4 = parseFloat(nota4)

    const subform = document.getElementById('subform')
    const result = document.getElementById('result')

    if(subform.reportValidity()){
        let resultado = ''

        resultado = (valor1 + valor2 + valor3 + valor4) / 4

        if(resultado <5){
            resultado = 'reprovado'
        }
        else if(resultado > 5){
            resultado = 'aprovado'
        }

        result.textContent = `A média foi : ${resultado}`
    }
}

document.getElementById('botao').addEventListener('click', calcMedia)


