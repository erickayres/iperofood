lista_categoria = document.getElementById('lista-categoria');
var cadastros = '';

document.addEventListener('DOMContentLoaded', function(){

  getJSON().then(data=>{
    cadastros = data;
    
    for(categoria in cadastros){

      switch(categoria.toLowerCase()){
        case 'lanches' : icon = 'hamburguer01.png';break;
        case 'pizzas'  : icon = 'pizza01.png';break;
        case 'marmitex': icon = 'comida01.png';break;
        case 'lasanhas': icon = 'lasanha01.png';break;
        case 'pastel'  : icon = 'pastel01.png';break;
        default: icon = 'outros.png';
      }

      adicionaCategoria(categoria,icon);

      ordenaItens(cadastros[categoria]);

      cadastros[categoria].forEach((loja, i)=>{
        adicionaItem(categoria,loja,i);
      });
    }

    adicionaScript();

  });
  
});

function adicionaCategoria(categoria,img){
    titulo = categoria[0].toUpperCase() + categoria.slice(1);

    item = `
    <div class="card">
    <div class="user">
      <div class="imgBx">
        <img src="./img/${img}" alt="">
      </div>
      <div class="content">
        <h2>
          ${titulo}<br>
          <span>⭐</span>
        </h2>
      </div>
      <span class="toggle"></span>
    </div>
    <ul class="contact" id="lista-${categoria}">

    </ul>
  </div>
    `
    lista_categoria.innerHTML += item;
}

function adicionaItem(categoria, loja, index){
  lista = document.querySelector("#lista-"+categoria)

  item = `
      <li style="--clr:#25D366;--i:${index}">
        <a href="https://wa.me/55${loja['whatsapp']}">
          <div class="iconBx"><i class="fa-brands fa-whatsapp"></i></div>
          <P>${loja['nome']}</P>
        </a>
      </li>
  `

  lista.innerHTML += item;
}

async function getJSON(){
  var dados = '';
  const response = await fetch('../bd/lugares.json');
  const data = await response.json();
  dados = data;
  return dados;
}

function adicionaScript(){
  script = document.createElement('script');
  script.src = 'js/script.js';
  document.head.appendChild(script);
}

function ordenaItens(dados){
  dados.sort((a,b) => {
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();

    if (nomeA < nomeB) return -1;
    if (nomeA > nomeB) return 1;
    return 0;
  });
}