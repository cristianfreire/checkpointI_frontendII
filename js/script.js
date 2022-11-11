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

const cardNome = document.getElementById("card_nome");
const cardContent = document.getElementById("card_content");
const cardImage = document.getElementById("card_img");
const cardDescricao = document.getElementById("card_descricao");
const cardImagemTipo = document.getElementById("card_img_tipo");
const cardTipo = document.getElementById("card_tipo");


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
  cardNome.innerHTML = pokemons[0].nome;
  cardImage.src = pokemons[0].imagem;
  cardDescricao.innerHTML = pokemons[0].descricao;
  //imagemTipo
  let cardtipo = pokemons[0].tipo;
  cardTipo.innerHTML = cardtipo[0].toUpperCase() + cardtipo.substring(1);

  fecharModal();
  

}


// --------------- tratamento de imagem

imagemLoad.onerror = function(){
  imagemLoad.src = "https://media.istockphoto.com/id/1416208685/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?b=1&s=170667a&w=0&k=20&c=Wa2XQXJhwu9JFfSMz55HQzuudj32yIZ6jC33icNCacg="
  btnAddCard.disabled = true;
}

