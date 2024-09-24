let firstName = prompt("come ti chiami")

while (firstname === null || firstname.trim() === ""){
    firstName = prompt("devi inserire un nome. Come ti chiami?");
}

alert("benvenuto " + firstName)

let i = 0;//punteggio iniziale

alert("attenzione! inserisci nome e cognome del calciatore mentre esegui il quiz")

let risposta1= prompt("chi è il calciatore più forte al mondo?")
while(risposta1 === null || risposta1.trim() === ""){
    risposta1 = prompt("non puoi lasciare vuoto! chi è il calciatore più forte al mondo?")
}
if(risposta1.toLowerCase() === "Cristiano Ronaldo"){
    i++;
    alert("giusto, hai guadagnato un punto")
}
else{
    alert("sbagliato, la risposta corretta era Ronaldo")
}

let risposta2= prompt("chi è il capitano della juve?")
while(risposta2 === null || risposta1.trim() === ""){
    risposta2 = prompt("non puoi lasciare vuoto! chi è il capitano della juve?")
}
if(risposta2.toLowerCase() === "Federico Gatti"){
    i++;
    alert("giusto, hai guadagnato un punto")
}
else{
    alert("la risposta corretta era Federico Gatti")
}

let risposta3= prompt("chi è il capitano dell'inter?")
while(risposta3 === null || risposta1.trim() === ""){
    risposta3 = prompt("non puoi lasciare vuoto! chi è il capitano dell'inter?")
}
if(risposta3.toLowerCase() === "Lautaro Martinez"){
    i++;
    alert("giusto, hai guadagnato un punto")
}
else{
    alert("la risposta corretta era Lautaro Martinez")
}

let risposta4= prompt("chi è il capitano della roma?")
while(risposta4 === null || risposta1.trim() === ""){
    risposta4 = prompt("non puoi lasciare vuoto! chi è il capitano della roma?")
}
if(risposta4.toLowerCase() === "Lorenzo Pellegrini"){
    i++;
    alert("giusto, hai guadagnato un punto")
}
else{
    alert("la risposta corretta era Lorenzo Pellegrini")
}

let risposta5= prompt("chi è il capitano del milan?")
while(risposta5 === null || risposta1.trim() === ""){
    risposta5 = prompt("non puoi lasciare vuoto! chi è il capitano del milan?")
}
if(risposta5.toLowerCase() === "Theo Hernandez"){
    i++;
    alert("giusto, hai guadagnato un punto")
}
else{
    alert("la risposta corretta era Theo Hernandez")
}

let risposta6= prompt("chi è il capitano della lazio?")
while(risposta6 === null || risposta1.trim() === ""){
    risposta6 = prompt("non puoi lasciare vuoto! chi è il capitano della lazio?")
}
if(risposta6.toLowerCase() === "Matteo Zaccagni"){
    let i = i + 1;
    alert("giusto, hai guadagnato un punto")
}
else{
    alert("la risposta corretta era Matteo Zaccagni")
}

let risposta7= prompt("chi è il capitano del napoli?")
while(risposta7 === null || risposta1.trim() === ""){
    risposta7 = prompt("non puoi lasciare vuoto! chi è il capitano del napoli?")
}
if(risposta7.toLowerCase() === "Giovanni Dilorenzo"){
    i++;
    alert("giusto, hai guadagnato un punto")
}
else{
    alert("la risposta corretta era Giovanni Dilorenzo")
}

alert("complimenti hai ottenuto questo punteggio: " + i)    



