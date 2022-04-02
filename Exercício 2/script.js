
function oddsorevens(){

    var num = document.getElementById('nmbr').value
    var number = Number(num);

    if(number % 2 == false){
        document.getElementById('paragraph').innerHTML = `O número informado é par`
    }else{
        document.getElementById('paragraph').innerHTML = `O número informado é impar`
    }
    document.getElementById('nmbr').value = '';

}