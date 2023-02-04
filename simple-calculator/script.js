const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('.calculate-btn');
const output = document.querySelector('.output');

function addNumbersTogether() {
    const value1 = parseInt(input1.value); 
    const value2 = parseInt(input2.value);

    let result = value1 + value2;

    output.innerHTML = result;
}

btn.addEventListener('click', addNumbersTogether);