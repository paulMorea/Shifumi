// Message Accueil
alert("Bonjour ! Bienvenue sur Shi Fu Mi: Man vs Machine");
// Prénom
var firstname = prompt("Merci de rentrer votre prénom :");
// Initialise la partie
var resultat = 1;
var myScore =0;
var machineScore =0;
// Choix joueur    
while (machineScore<3 && resultat ===1|| myScore<3 && resultat ===1){  
var choixMe = prompt(firstname + " merci de choisir entre Pierre, Feuille, Ciseaux (taper votre choix): ");
var choixMe = choixMe.toLowerCase();

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
        alert("La Machine gagne cette manche! Moi : " + myScore + " / Machine : " + machineScore);
        
    }
    else {
        myScore += 1;
        alert("Tu gagnes cette manche! Moi : " + myScore + " / Machine : " + machineScore);
        
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