
//Définition de la date d'expiration
const dateExp = new Date();
dateExp.setHours(dateExp.getHours() + 1);

//Constante username et mdp sur la valeur retour de prompts
const username = prompt("username");

const mdp = prompt("Mot de passe");


//créations des cookies
document.cookie = `username=${username}; expires=${dateExp.toUTCString()}`;
document.cookie = `mdp=${mdp}; expires=${dateExp.toUTCString()}`;
console.log(document.cookies);



console.log(document.cookie);

//création du bouton connexion
const connexion = document.createElement('button');

connexion.innerHTML = "connexion";

document.body.appendChild(connexion);

//redirection quand le bouton est cliqué.
connexion.addEventListener('click', ()=> {
  const connexion = window.location.assign("traitement.html");
})

//aler de l'historique des visites
window.alert(window.history.length);