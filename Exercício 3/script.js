

function sum(){
    var num1 = document.getElementById('numb1').value
    var num2 = document.getElementById('numb2').value
    var number1 = Number(num1)
    var number2 = Number(num2)

    var resultado = number1 + number2;
    document.getElementById('res').value = resultado.toFixed(2);
}

function sub(){
    var num1 = document.getElementById('numb1').value
    var num2 = document.getElementById('numb2').value
    var number1 = Number(num1)
    var number2 = Number(num2)

    var resultado = number1 - number2
    document.getElementById('res').value = resultado.toFixed(2);
}

function mult(){
    var num1 = document.getElementById('numb1').value
    var num2 = document.getElementById('numb2').value
    var number1 = Number(num1)
    var number2 = Number(num2)

    var resultado = number1 * number2;
    document.getElementById('res').value = resultado.toFixed(2);
}

function divide(){
    var num1 = document.getElementById('numb1').value
    var num2 = document.getElementById('numb2').value
    var number1 = Number(num1)
    var number2 = Number(num2)

    var resultado = number1 / number2;
    document.getElementById('res').value = resultado.toFixed(2);
}
