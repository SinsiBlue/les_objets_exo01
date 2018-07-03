var guerrier = {
    nom: "Aragorn",
    age: 30,
    taille: 180,
    arme:"arc",
    vie: 500,
    attaque: 100,
    parler(){
        alert("Bonjour je suis " + this.nom + " et j'ai " + this.age + " ans.");
        var reponse_nom = prompt("Quel est ton nom?");
        var reponse_age = prompt("Quel âge as-tu?");
        // console.log(reponse_nom);
        // console.log(reponse_age);
        alert("Tu es donc" + " " + reponse_nom + " " + "et tu as" + " " + reponse_age + ".");
    }
};

var mage = {
    nom: "Saruman",
    age: 70,
    taille: 190,
    arme: "baguette",
    vie: 1000,
    attaque: 200,
};

var paysan = {
    nom: "Frodon",
    age: 25,
    taille: 110,
    arme: "anneau",
    vie: 700,
    attaque: 150,
};

var longueur_nom_guerrier = guerrier.nom.length;
var longueur_arme_guerrier = guerrier.arme.length;
var deuxieme_lettre_nom_guerrier = guerrier.nom.charAt(1);
var lettres_1_a_3_nom_guerrier = guerrier.nom.substr(0,3);
var nom_et_age_guerrier = guerrier.nom.concat(" " + guerrier.age);

var longueur_nom_mage = mage.nom.length;
var longueur_arme_mage = mage.arme.length;
var deuxieme_lettre_nom_mage = mage.nom.charAt(1);
var lettres_1_a_3_nom_mage = mage.nom.substr(0,3);
var nom_et_age_mage = mage.nom.concat(" " + mage.age);


var longueur_nom_paysan = paysan.nom.length;
var longueur_arme_paysan = paysan.arme.length;
var deuxieme_lettre_nom_paysan = paysan.nom.charAt(1);
var lettres_1_a_3_nom_payasan = paysan.nom.substr(0,3);
var nom_et_age_paysan = paysan.nom.concat(" " + paysan.age);
