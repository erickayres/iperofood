lista_categoria = document.getElementById('lista-categoria');

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