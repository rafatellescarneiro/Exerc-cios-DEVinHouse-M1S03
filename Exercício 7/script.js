function season(){
    var data = new Date();
    var mes_atual = data.getMonth();
    var dia_atual = data.getDate();
    var newImgSeason = document.getElementById('imgSeason')
    
    if(mes_atual <= 3 || dia_atual <= 21){
            document.getElementById('txtSeason').innerHTML = `Verão`
            newImgSeason.setAttribute('src','verao.jpg');
    }else if(mes_atual <= 6 || dia_atual <= 21){     
            document.getElementById('txtSeason').innerHTML = `Outono`
            newImgSeason.setAttribute('src','outono.jpg');
    }else if(mes_atual <= 9 || dia_atual <= 21){
            document.getElementById('txtSeason').innerHTML = `Inverno`
            newImgSeason.setAttribute('src','inverno.jpg');
    }else if(mes_atual <= 12 || dia_atual <= 21){
            document.getElementById('txtSeason',).innerHTML = `Primavera`
            newImgSeason.setAttribute('src','primavera.jpg');
    }else if(mes_atual <= 12 && mes_atual <= 31){
            document.getElementById('txtSeason',).innerHTML = `Verão`
            newImgSeason.setAttribute('src','verao.jpg');
    }
}

