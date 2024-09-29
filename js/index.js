let firstName = prompt("Come ti chiami?");

while (firstName === null || firstName.trim() === "") {
    firstName = prompt("Devi inserire un nome. Come ti chiami?");
}

alert("Benvenuto " + firstName);

let i = 0; // punteggio iniziale

alert("Attenzione! Inserisci nome e cognome del calciatore mentre esegui il quiz");

let risposta1 = prompt("Chi è il calciatore più forte al mondo?");
while (risposta1 === null || risposta1.trim() === "") {
    risposta1 = prompt("Non puoi lasciare vuoto! Chi è il calciatore più forte al mondo?");
}
if (risposta1.toLowerCase() === "cristiano ronaldo") {
    i++;
    alert("Giusto, hai guadagnato un punto");
} else {
    alert("Sbagliato, la risposta corretta era Cristiano Ronaldo");
}

let risposta2 = prompt("Chi è il capitano della Juve?");
while (risposta2 === null || risposta2.trim() === "") {
    risposta2 = prompt("Non puoi lasciare vuoto! Chi è il capitano della Juve?");
}
if (risposta2.toLowerCase() === "federico gatti") {
    i++;
    alert("Giusto, hai guadagnato un punto");
} else {
    alert("La risposta corretta era Federico Gatti");
}

let risposta3 = prompt("Chi è il capitano dell'Inter?");
while (risposta3 === null || risposta3.trim() === "") {
    risposta3 = prompt("Non puoi lasciare vuoto! Chi è il capitano dell'Inter?");
}
if (risposta3.toLowerCase() === "lautaro martinez") {
    i++;
    alert("Giusto, hai guadagnato un punto");
} else {
    alert("La risposta corretta era Lautaro Martinez");
}

let risposta4 = prompt("Chi è il capitano della Roma?");
while (risposta4 === null || risposta4.trim() === "") {
    risposta4 = prompt("Non puoi lasciare vuoto! Chi è il capitano della Roma?");
}
if (risposta4.toLowerCase() === "lorenzo pellegrini") {
    i++;
    alert("Giusto, hai guadagnato un punto");
} else {
    alert("La risposta corretta era Lorenzo Pellegrini");
}

let risposta5 = prompt("Chi è il capitano del Milan?");
while (risposta5 === null || risposta5.trim() === "") {
    risposta5 = prompt("Non puoi lasciare vuoto! Chi è il capitano del Milan?");
}
if (risposta5.toLowerCase() === "theo hernandez") {
    i++;
    alert("Giusto, hai guadagnato un punto");
} else {
    alert("La risposta corretta era Theo Hernandez");
}

let risposta6 = prompt("Chi è il capitano della Lazio?");
while (risposta6 === null || risposta6.trim() === "") {
    risposta6 = prompt("Non puoi lasciare vuoto! Chi è il capitano della Lazio?");
}
if (risposta6.toLowerCase() === "matteo zaccagni") {
    i++;  // Usa l'incremento corretto
    alert("Giusto, hai guadagnato un punto");
} else {
    alert("La risposta corretta era Matteo Zaccagni");
}

let risposta7 = prompt("Chi è il capitano del Napoli?");
while (risposta7 === null || risposta7.trim() === "") {
    risposta7 = prompt("Non puoi lasciare vuoto! Chi è il capitano del Napoli?");
}
if (risposta7.toLowerCase() === "giovanni dilorenzo") {
    i++;
    alert("Giusto, hai guadagnato un punto")
} else {
    alert("La risposta corretta era Giovanni Di Lorenzo");
}

console.log("Complimenti hai ottenuto questo punteggio: " + i);
