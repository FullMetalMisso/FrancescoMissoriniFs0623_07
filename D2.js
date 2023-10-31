/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = prompt("Esercizio1: inserisci primo numero")
let num2 = prompt("Esercizio1: inserisci secondo numero")

if (num1 > num2 )
alert("il primo numero é il piú grande")

else if (num1 == num2)
alert("sono uguali!!!")

else {
  alert("il secondo numero é il piú grande")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */


let numIntero = parseInt(prompt("Esercizio 2: inserisci un numero intero"))

if(numIntero !=5) {
  console.log("not equal")
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let fornito = parseInt(prompt("Esercizio 3: inserisci un numero"))

if (fornito % 5 === 0 ){
  alert("divisibile")
}
else {
  alert("non divisibile")
} 

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = parseInt(prompt("Esercizio 4: inserisci 1 numero"))
let num4 = parseInt(prompt("Esercizio 4: inserisci 2 numer1o"))

let addizione = num3 + num4
let sottrazione = num3 - num4

if (num3 === 8 || num4 === 8) {
  alert("Uno dei due é uguale a 8")
}

else if(sottrazione || addizione === 8) {
  alert("somma o sottrazione risulta 8!")
}
else {
alert("lancia pc fuori dalla finestra")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = parseInt(prompt("Inserire valore carrello"))
let spedizione = totalShoppingCart + 10

if (totalShoppingCart > 50)
  alert(`hai diritto alla spedizione gratuita! Sgancia ${totalShoppingCart}`)
 
  else {
  alert(`sgancia ${spedizione}`)
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1 = parseInt(prompt("Inserire valore carrello"))

let sconto = totalShoppingCart - (totalShoppingCart *20/100)
let spedizione1 = sconto + 10

if (totalShoppingCart > 50)
  alert(`hai diritto alla spedizione gratuita! Sgancia ${sconto}`)
 
  else {
  alert(`sgancia ${spedizione1}`)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let prima = 5
let seconda = 10
let terza= 15

const ordine = ["prima","seconda","terza"]
if (prima > seconda && prima > terza) {
  const ordina= ordine[0] 
}




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = prompt("inserisci un valore")
let verifica = typeof valore

alert(`${verifica}`)


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/*
let numero = parsInt(prompt("inserisci il numero:"))

if (numero % 2 === 0) {
    alert("numero é pari")
}
else {
    alert("il numero é dispari")
}

*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  



/* SCRIVI QUI LA TUA RISPOSTA */
/*
let val = 4
if (val < 10 && val >= 5) {

    console.log("Meno di 10");
  } 
  else if (val < 5) {
    console.log("Meno di 5");
  
} else {
    console.log("Uguale a 10 o maggiore o non hai inserito un tubo");
  }
*/
/* ESERCIZIO 11 
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".*/
/*

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],  
}
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],  
}
  me.city = "Toronto"
  console.log(me.city)
*/
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],  
}

delete me.lastName
console.log(me.lastName)

*/
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'], 
  
}

me.skills.pop()
console.log(me.skills)
*/


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const vuoto = []
vuoto.push("1","2","3","4","5","6","7","8","9","10")
console.log(vuoto)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = ["1","2","3","4","5","6","7","8","9","10"]
array.splice(0,10)
array.splice(8,0,"100")
console.log(array)