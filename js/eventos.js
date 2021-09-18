const BTN_CADASTRO = document.getElementById('btn-cadastro');
const BTN_LISTA = document.getElementById('btn-listar');
const SECTION_CADASTRO = document.getElementById('section-cadastro');
const SECTION_LISTA = document.getElementById('section-listar');

BTN_LISTA.addEventListener('click', function () {
  SECTION_CADASTRO.style.display = 'none';
  SECTION_LISTA.style.display = 'block' ;
});

BTN_LISTA.addEventListener('click', function (){
  SECTION_CADASTRO.style.display = 'none';
  SECTION_LISTA.style.display = 'block' ;
});
