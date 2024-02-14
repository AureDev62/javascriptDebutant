// -----------------------------------INSTRUCTIONS CONDITIONELLES

let x = 10;

if (x > 10) {
    console.log('x est supérieur à 10');
} else if (x === 10) {
    console.log('x est égal à 10');
} else {
    console.log('x est inférieur à 10');
}

// if: Permet d'exécuter un bloc de code si une condition est vraie.
// else: Permet d'exécuter un bloc de code si la condition de l'if est fausse.
// else if: Permet de spécifier une nouvelle condition si la condition précédente est fausse.

// -------------------------------------LES BOUCLES-----------------------------------

// boucle for
for (let i = 0; i < 5; i++) {
    console.log('La valeur de i est : ' + i);
}

// Initialisation : let i = 0;
// Dans cette partie, une variable i est initialisée à 0.
// C'est la valeur initiale de l'indice de la boucle.

// Condition : i < 5;
// Cette condition détermine quand la boucle doit s'arrêter.
// Tant que i est inférieur à 5, la boucle continue de s'exécuter.
// Lorsque cette condition devient fausse, la boucle s'arrête.

// Incrémentation : i++
// Après chaque itération de la boucle, la valeur de i est incrémentée de 1.
// Cela permet de progresser vers la condition de fin de boucle.

// Corps de la boucle : console.log("La valeur de i est : " + i);
// C'est le bloc de code qui est exécuté à chaque itération de la boucle.
// Dans ce cas, il affiche la valeur actuelle de i à chaque itération.

// Boucle While
let j = 2;
while (j < 5) {
    console.log('La valeur de j est : ' + j);
    j++;
}

// Initialisation : let j = 0;
// Dans cette partie, une variable j est initialisée à 0.
// C'est la valeur initiale de l'indice de la boucle.

// Condition : j < 5;
// Cette condition détermine quand la boucle doit s'arrêter.
// Tant que j est inférieur à 5, la boucle continue de s'exécuter.
// Lorsque cette condition devient fausse, la boucle s'arrête.

// Corps de la boucle : console.log("La valeur de j est : " + j);
// C'est le bloc de code qui est exécuté à chaque itération de la boucle.
// Dans ce cas, il affiche la valeur actuelle de j à chaque itération.

// Incrémentation : j++;
// Après chaque itération de la boucle, la valeur de j est incrémentée de 1.
// Cela permet de progresser vers la condition de fin de boucle.

// Si on on ouble d'incrémenter (dans cette exemple:j++) j restera toujours à zéro et la condition j<5 sera toujours vraie
//Cela provoquera une boucle infinie

// Boucle do   while

let k = 0;
do {
    console.log('La valeur de k est : ' + k);
    k++;
} while (k < 5);

// Initialisation : let k = 0;
// Dans cette partie, une variable k est initialisée à 0.
// C'est la valeur initiale de l'indice de la boucle.

// Corps de la boucle : console.log("La valeur de k est : " + k);
// C'est le bloc de code qui est exécuté à chaque itération de la boucle.
// Dans ce cas, il affiche la valeur actuelle de k.

// Incrémentation : k++;
// Après chaque itération de la boucle, la valeur de k est incrémentée de 1.
// Cela permet de progresser vers la condition de fin de boucle.

// Condition : while (k < 5);
// Cette condition détermine si la boucle doit continuer à s'exécuter.
// Dans ce cas, la boucle continue de s'exécuter tant que k est inférieur à 5.
// Comme cette condition est évaluée après l'exécution du bloc de code,
// le bloc de code sera toujours exécuté au moins une fois,
// même si la condition est fausse dès le départ.

// la principale différence entre while et do...while est que do...while
// garantit que le bloc de code est exécuté au moins une fois,
// tandis que while peut ne pas exécuter le bloc de code du tout
// si la condition est fausse dès le départ.

// -------------------------------------------SWITCH---------------------

let day = 2;
switch (day) {
    case 0:
        console.log('Dimanche');
        break;
    case 1:
        console.log('Lundi');
        break;
    case 2:
        console.log('Mardi');
        break;
    default:
        console.log('Autre jour');
}

// affichera Mardi(on démarre de 0)

let fruit = 'pomme';

switch (fruit) {
    case 'pomme':
        console.log('La pomme est un fruit délicieux !');
        break;
    case 'banane':
        console.log('Les bananes sont riches en potassium.');
        break;
    case 'orange':
    case 'mandarine':
        console.log('Les oranges et les mandarines sont des agrumes.');
        break;
    default:
        console.log("Ce fruit n'est pas répertorié.");
}

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'blue',
};

for (let key in car) {
    console.log(key + ': ' + car[key]);
}

// La boucle for...in parcourt les propriétés énumérables d'un objet JavaScript.
// À chaque itération de la boucle, la variable key prend
// la valeur du nom de la propriété actuelle.

const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

for (let value of mySet) {
    console.log(value);
}
