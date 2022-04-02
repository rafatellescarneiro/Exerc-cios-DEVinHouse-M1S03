function ageCalc(){
    var data_atual = new Date();
    var ano_atual = data_atual.getFullYear();
    const data_nascimento = document.querySelector('input').value;

    console.log(ano_atual);

    var data_pars = data_nascimento.split('-')
    
    var anoNasc = data_pars[0];
    var mesNasc = data_pars[1];
    var diaNasc = data_pars[2];
    
    console.log(diaNasc);    

    var anosIdade = ano_atual - anoNasc;
        

    if(data_atual.getMonth() != mesNasc){
            if(data_atual.getMonth() < mesNasc){
                    anosIdade--;
            }
    }else{
        if(data_atual.getMonth() < mesNasc){
                anosIdade--;
        }
    }

    if(data_atual.getDate() == diaNasc){
        anosIdade++;
    }
        document.getElementById('textResult').innerHTML = `<br>${anosIdade} anos!!`
    
    }

    