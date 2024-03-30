//Je sélectionne

const button = document.querySelector('.btn');
console.log(button);

//je selectionne la div dans laquelle apparaîtront les notifications
const ctn = document.querySelector('.container-notifications');
console.log(ctn);


//Je cible l'action ciblé
button.addEventListener('click', ()=>{
  console.log("bouton cliqué");
  //Je crée un élément
  const notification = document.createElement('div');
  //je donne un style à la div
  notification.classList.add('toast');
  //J'insère le contenu du texte
  notification.innerText = "Votre fichier est bien enregistré !";
  console.log(notification);
  //j'accroche notification à l'élément ctn
  ctn.appendChild(notification);
  //A la fin du chorono, jeretire la notifiaction du DOM
  setTimeout(function(){
    notification.remove();
  },2000);
})