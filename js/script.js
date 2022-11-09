// Get the modal
let modal = document.getElementById("modalPokemon");
// Get the button that opens the modal
let btnAbrirModal = document.getElementById("capturarPokemon");
let btnAddCard = document.getElementById("capturar");
let nomePokemon = document.getElementById("nome");
let tipoPokemon = document.getElementById("listaTipos");
let imagemPokemon = document.getElementById("imagem");
const formulario = document.getElementById("formulario");


// mostrar o modal
btnAbrirModal.addEventListener('click', function (evento){
  modal.style.display = "block"
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  btnAddCard.disabled = true;
  formulario.reset();
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ---------- validação do form --------
function validate(){
  if(nomePokemon.value != "" && tipoPokemon.value != "" && imagemPokemon.value != ""){
    btnAddCard.disabled = false;
  }else{
    btnAddCard.disabled = true;
  }
}

// -------------- adiciona cards ------------------ 

formulario.addEventListener('submit', e =>{
    e.preventDefault();

})

