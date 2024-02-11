// ----------------------------OPERATEURS ARITHMETIQUES------------------------

// Les opérateurs arithmétiques en JavaScript sont utilisés pour effectuer
// des opérations mathématiques sur des valeurs.
let a = 10;
let b = 5;

let somme = a + b;
let difference = a - b;
let produit = a * b;
let quotient = a / b;
let reste = a % b;

// ----------------------------------OPERATEURS D ASSIGNATION-----------------------------------

// Les opérateurs d'assignation en JavaScript sont utilisés
// pour attribuer une valeur à une variable.

// Exemple :
//Assignation simple (=) : Cet opérateur attribue la valeur de droite à la variable de gauche.

// Assignation avec addition (+=) : Cet opérateur ajoute la valeur de droite
// à la valeur actuelle de la variable et affecte le résultat à la variable.
let c = 10;

c += 5;
console.log("Après l'addition de 5 : ", c);
//Affiche 15
c -= 3;
console.log('Après la soustraction de 3 :', c);
//Affiche 12
c *= 2;
console.log('Après la multiplication par 2 :', c);
//Affiche 24
c /= 4;
console.log('Après la division par 4 :', c);
// Affiche 6
c %= 3;
console.log('Après le modulo par 3 :', c);
//Affiche 0

// ---------------------------------------OPERATEURS DE COMPARAISON------------------------

// let d = 5;
// let e = 10;

// console.log(d == e);
// // Égal à (false)
// console.log(d != e);
// // Différent de (true)
// console.log(d === e);
// // Strictement égal à (false)
// console.log(d !== e);
// // Strictement différent de (true)
// console.log(d > e);
// // Supérieur à (false)
// console.log(d < e);
// // Inférieur à (true)
// console.log(d >= e);
// // Supérieur ou égal à ((false))
// console.log(d <= e);
// // Inférieur ou égal à (true)

// ------------------------------------------------OPERATEURS LOGIQUES---------------

// Les opérateurs logiques en JavaScript sont utilisés
// pour effectuer des opérations logiques sur des valeurs booléennes (vrai ou faux).

let f = true;
let g = false;

console.log(f && g);
// ET logique (false)
console.log(f || g);
// OU logique (true)
console.log(!f);
// NON logique (false)
console.log(!g);
// NON logique (true)

let h = 5;

h++; // Incrémentation
console.log(h);
// Affichera 6

h--; // Décrémentation
console.log(h);
// Affichera 5

// --------------------------------------------OPERATEURS DE CONCATENATION---------------------------

// L'opérateur de concaténation en JavaScript est le signe plus (+).
// Il est utilisé pour concaténer (c'est-à-dire fusionner) des chaînes de caractères
// ou pour ajouter des nombres.

let prenom = 'John';
let nom = 'Doe';

let nomComplet = prenom + ' ' + nom;
console.log(nomComplet);
// Affichera "John Doe"

// -----------------------------OPERATEURS TERNAIRE--------------------

// L'opérateur ternaire en JavaScript, également appelé opérateur conditionnel,
// est une alternative concise à l'instruction if...else.
// Il est souvent utilisé pour affecter une valeur à une variable en fonction d'une condition.
let age = 20;

let message = age >= 18 ? 'Majeur' : 'Mineur';
console.log(message);
// Si age est supérieur ou égal à 18, affiche "Majeur", sinon affiche "Mineur"
