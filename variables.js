// -------------------------------------LES VARIABLES-----------------------

//  var : a une portée de fonction, ce qui signifie qu'une variable déclarée
//  avec var est accessible partout dans la fonction où elle est déclarée.

// let et const ont une portée de bloc, ce qui signifie qu'une variable déclarée
// avec let ou const est accessible uniquement dans le bloc où elle est déclarée.

// let : Permet de déclarer une variable dont la valeur peut être modifiée ultérieurement.

// const : Permet de déclarer une constante dont la valeur ne peut pas être modifiée après sa déclaration.

// ----------------------LES NOMBRES-------

//Nombre (number) Représente les entiers et les décimaux

let x = 10; //entier
let y = 3.14; //nombre à virgule flottante

//---------------------LES CHAINES DE CARACTERES--------

//Chaine de caractères (String) Représente une séquence de caractères

let texte = 'Bonjour';

//------------------------------Booléen------------------------

//Booléen (Boolean) : Représente une valeur logique, soit true (vrai) soit false (faux).

let estVrai = true;
let estFaux = false;

//-----------------------------------LES TABLEAUX---------------

//Tableau (Array) : Représente une collection ordonnée d'éléments.

let tableau = [1, 2, 3, 4, 5];

//-----------------------------------LES OBJETS----------------------------

// Objet (Object) : Représente une collection de paires clé-valeur.

let personne = {
    nom: 'John',
    age: 30,
    ville: 'Paris',
};

//------------------------------------------NULL-------------------------

// Null : Représente une valeur nulle.

let nulleValeur = null;

// --------------------------------INDEFINI--------------------------------

// Indéfini (Undefined) : Représente une variable qui n'a pas été initialisée
//ou à laquelle aucune valeur n'a été attribuée.
let nonDefini;

// -----------------------------------SYMBOLE----------------------------------

// Symbole (Symbol) : Un type de données introduit dans ECMAScript 2015 (ES6)
// pour représenter des identifiants uniques.

let symbole = Symbol('cle_unique');

// -------------------------------------------bigInt------------------------

let grandNombre = 123456789012345678901234567890n;
