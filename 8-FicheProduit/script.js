console.log("connecté!")

const vignettes = document.querySelectorAll('.small');
//console.log(vignettes);

const fullImg = document.getElementById('full');
//console.log(fullImg);

vignettes.forEach((item)=>{
  //console.log(item, 'ce message apparaît pour chaque item du tableau')
  item.addEventListener('click', function(){
    //console.log(item, 'vignette cliqué');
    let imgSource = item.getAttribute('src');
    console.log(imgSource);
    fullImg.setAttribute('src', imgSource);
  });
});


const btn = document.querySelector('.btn-add');

let panier = 0;

const panierContainer = document.querySelector('.panier-container');

btn.addEventListener('click', function(){
  console.log('bouton cliqué');
  panier = panier +1;
  console.log(panier);
  if(panier<2){
    panierContainer.innerText = "Vous avez" + " " + panier + " " + " produit dans votre panier";
  }else{
    panierContainer.innerText = "Vous avez" + " " + panier + " " + " produits dans votre panier";
  }
});


