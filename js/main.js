// Message Accueil
alert("Bonjour ! Bienvenue sur Shi Fu Mi: Man vs Machine");
// Prénom
function firstname(){
    var urName = "";
    while ( !(urName.length<20 && urName.length>2) ) {
        urName = prompt("Veuillez entrer votre nom");
    }
    return urName;
}
var userName = firstname();
// Initialise la partie
var resultat = 1;
var myScore =0;
var machineScore =0;
while (machineScore<3 && resultat ===1|| myScore<3 && resultat ===1){  
// Choix joueur 
    function choix() {  
        var choixMe="";
        while (!(choixMe === "pierre" || choixMe === "feuille" ||choixMe === "ciseaux" )){
        choixMe = prompt(userName + " merci de choisir entre Pierre, Feuille, Ciseaux (taper votre choix): ");
        choixMe = choixMe.toLowerCase();
        }
        return choixMe;
    }
    var choixMe = choix();
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
//  Résultat partie
    if (choixMe===machine){    
        alert("Égalité !");  
    }
    else if (choixMe==="pierre" && machine==="feuille" || choixMe==="feuille" && machine==="ciseaux" || choixMe==="ciseaux" && machine==="pierre"){
        machineScore += 1;
        alert("La Machine gagne cette manche! " + userName + " : " + myScore + " / Machine : " + machineScore);  
    }
    else {
        myScore += 1;
        alert("Tu gagnes cette manche! " + userName + " : "  + myScore + " / Machine : " + machineScore);  
    }
//  Résultat match
    if (myScore === 3 || machineScore ===3){
        if( myScore === 3){
            alert("U WIN"); 
        }
        else if(machineScore ===3){
            alert("MACHINE WIN");
        }
        var rejouer = prompt("Voulez-vous rejouez? o/n")
        if(rejouer === "n"){
            resultat = 0;
            alert("A bientot"); 
        }
        else{
            var myScore =0;
            var machineScore =0;
            resultat= 1;
        }
    }
}