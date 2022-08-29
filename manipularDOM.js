
const btn = document.querySelector('#btn');
const result = document.querySelector('#resultado');

btn.addEventListener('click', calcularSuma)

function calcularSuma(){
    const input1 = parseInt(document.querySelector('#input1').value);
    const input2 = parseInt(document.querySelector('#input2').value);
    let suma = input1 + input2;
    result.innerText = 'La suma es: ' + suma;
}
