const produtos = [];

function addItem(){

    const $txtItem = document.getElementById("txtItem").value;
    const form = document.getElementById("form");
    

    if($txtItem.length <= 0){
        alert('Por favor, preencha o campo');
        document.getElementById("txtItem").focus();
        return false;
    }

    var seExiste = produtos.find(element => element[0] === $txtItem);

    if (seExiste) {
      alert("O produto já existe na lista");
      return;
    }

    produtos.push([$txtItem]);

    form.reset();

    showItem();
    ;
}

function showItem(){

    const $itemList = document.createElement("ul");

    produtos.forEach(function(item){

        const listaItem = document.createElement("li");

        const texto = document.createTextNode(item[0]);


        listaItem.append(texto);

        $itemList.append(listaItem);
    });

    const saida = document.getElementById("saida");

    saida.innerHTML = ""
    

    saida.append($itemList);

}

function saveList(){
    
}

function removeItem(){
    produtos.pop([$txtItem]);
}


