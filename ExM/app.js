'use strict'

function ValSex(){
    
    const nome = document.getElementById('nome').value
    const sexo = document.getElementById('sexo').value
    const subform = document.getElementById('subform')
    const result = document.getElementById('result')

   

    
    if(sexo.toUpperCase() == 'M'){
        result.textContent = `Ilmo Sr. ${nome}`
    }
    else if (sexo.toUpperCase() == 'F'){
        result.textContent = `Ilma Sra. ${nome}`
    }
    else{
        result.textContent = `Sexo Inválido`
    }

}


document.getElementById('botao').addEventListener('click', ValSex)