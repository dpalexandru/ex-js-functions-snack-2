// Crea una funzione che somma due numeri.
//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// Creo una funzione dichiarativa che restituisce la somma di due numeri 
function somma(a, b) {
  let sum = a + b
  console.log(sum)
}

somma(2, 9);

// assegno una funzione anonima a una variabile 
const sommaInUnaVariabile = function (a, b) {
  let sum = a + b
  console.log(sum)
}

sommaInUnaVariabile(3, 4);

//scrivo somma con arrow function 
const sommaArrow = (a, b) => {
  let sum = a + b
  console.log(sum)
}

sommaArrow(7, 7);

//Crea una arrow function che calcola il quadrato di un numero.
//Definisci una funziones chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (a) => a * a;
console.log(quadrato(4))

//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma2 = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log("---- snak 3 ------")
console.log(eseguiOperazione(4, 5, somma2))
console.log(eseguiOperazione(3, 3, moltiplica))