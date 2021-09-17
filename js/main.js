// Message Accueil
alert("Bonjour ! Bienvenue sur Shi Fu Mi vs Machine");
// Prénom
var firstname = prompt("Merci de rentrer votre prénom :");
// Choix joueur
var choix = prompt(firstname + " merci de choisir entre Pierre, Feuille, Ciseaux (taper votre choix): ");
var choixMe = choix.toLowerCase();
console.log(choixMe);
// Choix machine
var machine = Math.floor(Math.random() * (4 - 1)) + 1;
if(machine === 1){
    machine="pierre";
    alert("La Machine a choisit Pierre");
}
else if(machine === 2) {
    machine="feuille";
    alert("La Machine a choisit Feuille");
}
else{
    machine="ciseaux"
    alert("La Machine a choisit Ciseaux");
}
//  Résultat match
if (choixMe===machine){
    prompt("Égalité !");
    choix;
}
else if (choixMe==="pierre" && machine==="feuille"){
    alert("Machine win");
}
else if (choixMe==="pierre" && machine==="ciseaux"){
    alert("You win");
}
else if (choixMe==="feuille" && machine==="ciseaux"){
    alert("Machine win");
}
else if (choixMe==="feuille" && machine==="pierre"){
    alert("You win");
}
else if (choixMe==="ciseaux" && machine==="pierre"){
    alert("Machine win");
}
else {
    alert("You win");
}