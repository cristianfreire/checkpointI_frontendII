// Get the modal
const modal = document.getElementById("modalPokemon");
// Get the button that opens the modal
const btnAbrirModal = document.getElementById("capturarPokemon");
const btnAddCard = document.getElementById("capturar");
const nomePokemon = document.getElementById("nome");
const descricaoPokemon = document.getElementById("descricao");
const tipoPokemon = document.getElementById("listaTipos");
const imagemPokemon = document.getElementById("imagem");
const formulario = document.getElementById("formulario");
const imagemLoad = document.getElementById("imagem_load");
const btnImage = document.getElementById("btnImageCaptura")

const cardNome = document.getElementById("card_nome");
const cardContent = document.getElementById("card_content");
const cardImage = document.getElementById("card_img");
const cardDescricao = document.getElementById("card_descricao");
const cardImagemTipo = document.getElementById("card_img_tipo");
const cardTipo = document.getElementById("card_tipo");
const proximo = document.getElementById("next");
const anterior = document.getElementById("previous");


// mostrar o modal
btnAbrirModal.addEventListener('click', function (evento){
  modal.style.display = "block"
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
 fecharModal();
  
}


function fecharModal(){
  modal.style.display = "none";
  btnAddCard.disabled = true;
  imagemLoad.src = "https://thumbs.gfycat.com/EachWellinformedAidi-size_restricted.gif";
  btnAddCard.classList.remove('capturar2');
  btnAddCard.classList.add('capturar');
  formulario.reset();
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";

//   }
// }

// ---------- validação do form --------
function validate(){
  let nome = nomePokemon.value;
  let descricao = descricaoPokemon.value;
  if(nome != "" && nome.length >= 4 && descricao != "" && descricao.length >= 4 && tipoPokemon.value != "" && imagemPokemon.value != ""){
    btnAddCard.disabled = false;
    btnAddCard.classList.remove('capturar');
    btnAddCard.classList.add('capturar2');
    imagemLoad.src = imagemPokemon.value;

  }else{
    if(imagemPokemon.value != ""){
      imagemLoad.src = imagemPokemon.value;

    }
   
    btnAddCard.disabled = true;
  }
}

// -------------- adiciona cards ------------------ 


let pokemons = [];

formulario.addEventListener('submit', e =>{
    e.preventDefault();

    let pokemon = {
      "nome": nomePokemon.value,
      "tipo": tipoPokemon.value,
      "descricao" : descricaoPokemon.value,
      "imagem": imagemPokemon.value
    }
    
    pokemons.push(pokemon);

    adicionarCard();
    
});


function adicionarCard(){
  cardContent.hidden = false;
  fecharModal();
  exibirItens(0);
}

function CardImagemTipo(posicao){
  if(pokemons[posicao].tipo == "normal"){
    cardImagemTipo.src = "./img/tipo/normal.png"
  }else if(pokemons[posicao].tipo == "inseto"){
    cardImagemTipo.src = "./img/tipo/inseto.png";
  }else if(pokemons[posicao].tipo == "sombrio"){
    cardImagemTipo.src = "./img/tipo/dark.png";
  }else if(pokemons[posicao].tipo == "dragao"){
    cardImagemTipo.src = "./img/tipo/dragon.png";
  }else if(pokemons[posicao].tipo == "eletrico"){
    cardImagemTipo.src = "./img/tipo/electric.png";
  }else if(pokemons[posicao].tipo == "fada"){
    cardImagemTipo.src = "./img/tipo/fairy.png";
  }else if(pokemons[posicao].tipo == "lutador"){
    cardImagemTipo.src = "./img/tipo/fighting.png";
  }else if(pokemons[posicao].tipo == "fogo"){
    cardImagemTipo.src = "./img/tipo/fire.png";
  }else if(pokemons[posicao].tipo == "voador"){
    cardImagemTipo.src = "./img/tipo/flying.png";
  }else if(pokemons[posicao].tipo == "fantasma"){
    cardImagemTipo.src = "./img/tipo/ghost.png";
  }else if(pokemons[posicao].tipo == "planta"){
    cardImagemTipo.src = "./img/tipo/grass.png";
  }else if(pokemons[posicao].tipo == "terrestre"){
  cardImagemTipo.src = "./img/tipo/ground.png";
  }else if(pokemons[posicao].tipo == "venenoso"){
    cardImagemTipo.src = "./img/tipo/poison.png";
  }else if(pokemons[posicao].tipo == "gelo"){
    cardImagemTipo.src = "./img/tipo/ice.png";
  }else if(pokemons[posicao].tipo == "psiquico"){
    cardImagemTipo.src = "./img/tipo/Psychic.png";
  }else if(pokemons[posicao].tipo == "pedra"){
    cardImagemTipo.src = "./img/tipo/rock.png";
  }else if(pokemons[posicao].tipo == "aco"){
    cardImagemTipo.src = "./img/tipo/steel.png";
  }else if(pokemons[posicao].tipo == "agua"){
    cardImagemTipo.src = "./img/tipo/water.png";
  }
}

let contador = 0;

// ------------- proximo e next
proximo.onclick = function(){
  if(pokemons.length > 1 && contador==0){  
    contador++;
    exibirItens(contador);
  }else if(contador > 0){
    contador++;
    if(contador == pokemons.length){
      contador=0;
      exibirItens(contador);
    }else{
      exibirItens(contador);
    }
  }
}



anterior.onclick = function(){
  if(pokemons.length > 1 && contador==0){  
    contador++;
    exibirItens(contador);
  }else if(contador > 0){
    contador++;
    if(contador == pokemons.length){
      contador=0;
      exibirItens(contador);
    }else{
      exibirItens(contador);
    }
  }
}

function exibirItens(posicao){
  cardNome.innerHTML = pokemons[posicao].nome;
  cardImage.src = pokemons[posicao].imagem;
  cardDescricao.innerHTML = pokemons[posicao].descricao;
  CardImagemTipo(posicao);
  let cardtipo = pokemons[posicao].tipo;
  cardTipo.innerHTML = cardtipo[0].toUpperCase() + cardtipo.substring(1);

}


// --------------- tratamento de imagem

imagemLoad.onerror = function(){
  imagemLoad.src = "https://media.istockphoto.com/id/1416208685/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?b=1&s=170667a&w=0&k=20&c=Wa2XQXJhwu9JFfSMz55HQzuudj32yIZ6jC33icNCacg="
  btnAddCard.disabled = true;
  btnAddCard.classList.remove('capturar2');
  btnAddCard.classList.add('capturar');
}




