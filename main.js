



/* 
1) Elenca e descrivi i principali DATATYPE in Javascript =

- STRING = stringa di testo o caratteri, si inserisce con "asd" - 'asd' - `ALT+96`  

- NUMBER = stringa contenente un numero che può essere tra -(253 - 1) e +(253 - 1) esistono anche valori speciali come +infinity / -infinity (per gestire operazioni come 50/0 o -2/0)
           e NaN o `Not a Number` (per identificare se la risposta è un n')


- BOOLEAN = consente di dare una azione, se  i requisiti vengono soddisfatti allora si ottiene un qualcosa oppure no. un entità logica può essere vera o falsa
            si basa su AND OR NOT
            AND --> &&
            OR --> ||
            NOT --> !

- UNDEFINED = dato alla variabile (let) rappresenta un valore indefinito che non esiste ancora. sostanzialmente è lo stato di default nel quale vengono create le variabili  

- NULL = è un comando specifico dato ad una variabile per svuotarne il contenuto, un valore vuoto

- OBJECT = è come un gruppo di variabili o una lista delle specifiche della variabile in questione, esempio let marioRossi = { nome: "Mario", cognome: "Rossi", anni: 30 }

- BIGINT = ?
- SYMBOL = ?

*/


/* STRING */
let thisIsString = "Questa è una Stringa"
console.log ( thisIsString );

/* NUMBER */
let numeroValore = 23
console.log ( numeroValore );

/* BOOLEAN *//*ipotiziamo che voglio mangiare la pasta ma ho tre condizioni per decidere se posso o non posso */
let hoMangiatoPastaPiuDiTreGiorniFa = false
let hoVogliaDiPasta = false
let stoMorendoDiFame = true

const oggiMangioLaPasta = hoMangiatoPastaPiuDiTreGiorniFa || hoVogliaDiPasta || stoMorendoDiFame

console.log('POSSO MANGIARE???' , oggiMangioLaPasta);                /* la risposta sarà TRUE */

/* UNDEFINED */
let seiIndefinito
/* è possibile anche specificarlo in un secondo momento */
seiIndefinito = 100;
seiIndefinito = undefined
console.log ( seiIndefinito );

/* NULL */
let oraTiSvuoto = 100;
oraTiSvuoto = null   /* ora è vuota */
console.log ( oraTiSvuoto );

/* OBJECT */
let marioRossi = {
    nome: "Mario",
    cognome: "Rossi",
    anni: 30,
}
console.log ('Mario Rossi', marioRossi );


/* 
2) 
*/
let dodici = 12;
let venti = 20;

console.log ('fammi sta operazione' , dodici + venti)

let risultato = dodici + venti
console.log (risultato)


/*
3)
*/
let x = 12

/*
4
*/
let namemio = "Max"

/*
5
*/
let sottrazione = x - 4
console.log ("la sottrazione vale:" , sottrazione);
console.log (`la sottrazione tra ${x} e ${4} è ${sottrazione}`) 

/*
6
*/
let massimilianoMorici = {
    nome: "Massimiliano",
    cognome: "Morici",
    hobby: "Informatica",
}
console.log (massimilianoMorici)

/*
7
*/

let name1 = "john"
let name2 = "John"
console.log (name1 === name2)

let result = name2.toLowerCase(String);
console.log (result)
console.log (name1 == result)

console.log (name1 == name2.toLowerCase()) /* si può anche scrivere in un unica formula */

