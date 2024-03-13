var itens = ''

tipo = document.querySelector('#tipo');
nome = document.querySelector('#nome');
wpp = document.querySelector('#whatsapp');
btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    console.log(tipo.value, nome.value, wpp.value);
    adicionaItem(tipo.value, nome.value, wpp.value);
    nome.value = ''; wpp.value = ''
    nome.focus();

});

document.addEventListener('DOMContentLoaded', function(){
    var cadastros = ''

    fileJSON = document.getElementById('fileJSON');
    getJSON().then(data=>{
        cadastros = data;
        fileJSON.value = JSON.stringify(cadastros);
        itens = cadastros;
    });

});

async function getJSON(){
    var dados = '';
    const response = await fetch('./bd/lugares.json');
    const data = await response.json();
    dados = data;
    return dados;
}

function adicionaItem(tipo, name, wpp){
    tipo = tipo.toLowerCase();
    
    if (tipo in itens){
        item = itens[tipo].findLast((elemento) => elemento['id'] > 0)['id'];
        item++;
        itens[tipo].push({id:item, nome:name, whatsapp:wpp});
    }
    else{
        itens[tipo] = [{id:1, nome:name, whatsapp:wpp}];
    }

    fileJSON.value = JSON.stringify(itens);
}