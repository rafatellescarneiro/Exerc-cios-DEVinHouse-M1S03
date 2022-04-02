
var name1 = prompt('Digite seu nome: ')
var age = prompt('Digite sua idade: ')
var question = confirm(`Gostaria de praticar um esporte?`)

if(question === true){
    question = 'quer praticar esportes!'
}else{
    question = 'não quer praticar esportes!'
}

alert(`${name1}, de ${age} anos, ${question}`)
