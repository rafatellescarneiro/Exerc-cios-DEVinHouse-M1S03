function calculate(){
    var initial = parseInt(document.getElementById('ini_value').value);
    var ratio = parseInt(document.getElementById('ratio').value);
    var pa=''


    for(let i = 0; i < 10; i++){
        pa += `Termo ${i} = ${initial} <br/>`;
        initial += ratio;
        document.getElementById('paragraph').innerHTML = pa;
    }
}