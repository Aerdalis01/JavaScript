//récupération des cookies et création d'un objet user qui stockera l'username et le mdp

let tableauCookies = document.cookie.split("; ");

let cookies = new Array();

tableauCookies.forEach((ligne) => {
  cookies.push(ligne.split('='));
});

let user = {
  identifiant: "",
  mdp: "",
};

// recherche dans le tableau de l'username et du mot de passe

cookies.forEach((ligne) => {
  if (ligne[0] =="username") {
    user.identifiant = ligne[1];
  } else if (ligne[0] =="mdp") {
    user.mdp = ligne[1];
  }
})

console.log(user);

//création du bonton
const userSpace = document.createElement('button');

userSpace.innerHTML = "espace utlisateur";

document.body.appendChild(userSpace);

//condition et redirection via le button espace utilisateur

userSpace.addEventListener('click', ()=>{
  if (user.identifiant == "TonyStark" && user.mdp == "starktower") {
    window.open('connected.html', 'connected', 'width= 400, height= 400');
  } else {
    window.open('incorect.html', 'incorect', 'width= 400, height= 400')
  }
})
