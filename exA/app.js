'use strict'

function Sub() {

    const nume1 = document.getElementById('num1').value
    const num1 = parseFloat(nume1)
    const nume2 = document.getElementById('num2').value
    const num2 = parseFloat(nume2)
    const result = document.getElementById('result')
    const subform = document.getElementById('sub-form')

    if (subform.reportValidity()) {

        let resultado = ''

        if (num1 > num2) {
            resultado = num1 - num2

        }
        else if (num2 > num1) {
            resultado = num2 - num1

        }
        result.textContent = `O resultado dessa diferença é ${resultado}`
    }
}

document.getElementById('botao').addEventListener('click', Sub)


