let bouton1 = document.getElementById("bout2")

let bouton2 = document.getElementById("bout3")

let menu = document.getElementsByClassName("navbar")

bouton1.addEventListener("click", function(){
  menu[0].classList.remove("navbar-light", "bg-light")
  menu[0].classList.add("navbar-dark", "bg-dark")
});


bouton2.addEventListener("click", function(){

  menu[0].classList.remove("navbar-dark", "bg-dark")

  menu[0].classList.add("navbar-light", "bg-light")

});

let tableau = ["universelle multilingue et fonctionnant sur le principe du wiki", "Developpeur web galimaGaroup", "Univesite Alioune Diop de Bambey", "Universite Cheikh Anta Diop de Dakar", "Universite Gaston Berger de Saint Louis","Universite de thies"];

let random = Math.floor(Math.random()*(tableau.length-0)+0);
document.getElementById("select").innerText = tableau[random];