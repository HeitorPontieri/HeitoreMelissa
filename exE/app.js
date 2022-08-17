'use strict'

function bhaskara() {

    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const c = document.getElementById('c').value
    const subform = document.getElementById('subform')
    const result = document.getElementById('result')


    const delta = b*b -4 * a * c
    if(subform.reportValidity()){
    
        if(delta < 0 ){
        result.textContent = `Não há solução real`
        }
        else if (delta > 0) {
            let x1 = (-b + delta**0.5) / 2 * a

            let x2 = (-b - delta**0.5) / 2 * a

            result.textContent = `Há duas solçuões reais que são ${x1} e ${x2}`
        }
        else if ( delta == 0 ){
            let x1 = (-b + delta**0.5) / 2 * a

            let x2 = (-b - delta**0.5) / 2 * a

            result.textContent = `Só há uma solução real que é ${x1}  ${x2}`
        }
    
}
}

document.getElementById('botao').addEventListener('click', bhaskara)