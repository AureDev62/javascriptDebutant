// en javacsript pour déclarer une fonction on  utilise le mot clef "function" suivi du nom de la fonction
// puis des parenthèses qui peuvent contenir eventuellement des paramètres
// et enfin des accolades pour définir le corps de la focntion

function saluer() {
    console.log('Bonjour !');
}
// pour appeler la fonction et exécuter le code , on peut simplement utiliser son nom suivi de parenthèse
saluer();
// ici dans la console sera afficher "Bonjour !"

// Déclaration d'une fonction nommée "saluer" avec un paramètre "nom"
function saluer(nom) {
    console.log('Bonjour, ' + nom + ' !');
}

// Appel de la fonction "saluer" avec un argument "John"
saluer('John');
// ici dans la console sera afficher "Bonjour, John !"

function direBonjour(prenom, surname) {
    console.log('Bonjour' + surname + prenom);
}

direBonjour('John', 'Doe');

function additionner(a, b) {
    return a + b;
}
console.log(additionner(3, 5));
// Affiche 8

function carre(nombre) {
    const resultat = nombre * nombre;
    // Pas de return
}

const resultat = carre(5);
// Appel de la fonction pour calculer le carré de 5
console.log(resultat);
// Affiche undefined

function calculerSomme(nombres) {
    let somme = 0;
    for (let nombre of nombres) {
        somme += nombre;
    }
    return somme;
}

const nombres = [1, 2, 3, 4, 5];
const result = calculerSomme(nombres);
console.log(result); // Affiche 15

// function calculerSomme(nombres)
// {: Définit une fonction nommée calculerSomme qui prend un paramètre nombres,
// qui est supposé être un tableau de nombres.

// let somme = 0;: Initialise une variable somme à 0.
// Cette variable sera utilisée pour stocker la somme des nombres dans le tableau.

// for (let nombre of nombres) {: Démarre une boucle for..of
// qui parcourt tous les éléments du tableau nombres. À chaque itération de la boucle,
// la variable nombre contient la valeur de l'élément actuel du tableau.

// somme += nombre;: Ajoute la valeur de nombre à la variable somme.
// Cela calcule progressivement la somme totale des nombres dans le tableau.

// }: Ferme la boucle for..of.

// return somme;: Renvoie la valeur de la variable somme.
// C'est le résultat calculé de la fonction.

// }: Ferme la définition de la fonction calculerSomme.
