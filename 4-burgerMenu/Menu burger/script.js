console.log("connecté!")

//Je sélectionne

const icone = document.querySelector('.navbar-mobile i');
console.log(icone);

const divModal = document.querySelector('.modal');
console.log(divModal);

icone.addEventListener('click', function(){
  console.log("icône cliqué");
  divModal.classList.toggle('change-modal');
  icone.classList.toggle('fa-times');
  icone.classList.toggle('fa-bars');

});