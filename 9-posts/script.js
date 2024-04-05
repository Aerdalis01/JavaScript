console.log("connecté!")


const postsContainer = document.querySelector('.posts')
//console.log(postsContainer);

//Je créé un objet

const utilisateur = {
  nom : "Doe",
  prenom : "John",
  service : "marketing"
}

const post = {
  titre : "SEO, les bonnes pratiques",
  hashtag :"#SEO",
  extrait : "Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eiusmid tempor incididunt."
}



//J'accède à la valeur de la propriété titre

const t = post.titre;
console.log(t);

//Initialisation d'un tableau (array)

const posts = [
  {titre : "SEO, les bonnes pratiques",
  hashtag :"#SEO",
  extrait : "Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eiusmid tempor incididunt."
  },
  {titre : "Bien débuter en référencement payant",
  hashtag :"#référencement",
  extrait : "Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eiusmid tempor incididunt."
  },
  {titre : "Content Marketing, les bons arguements",
  hashtag :"#contentmarketing",
  extrait : "Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eiusmid tempor incididunt."
  }
];

//Je passe en revue chaque élément du tableau
posts.forEach( item => {
  //console.log(item);


//Création d'une div avec Template Strings

const article = `
                  <div class="post">
                    <div clas="post_titre"> ${item.titre}</div>
                    <div clas="post_extrait"> ${item.extrait}</div>
                    <div clas="post_hashtag"> ${item.hashtag}</div>
                  </div>
                `
//console.log(article);              
postsContainer.innerHTML += article;
});

// Ajout de article dans la DIV dédiée postsContainer
